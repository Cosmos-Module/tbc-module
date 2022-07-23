package keeper

import (
	"context"
	"math"

	"tbc/x/tbc/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) BuyCoin(goCtx context.Context, msg *types.MsgBuyCoin) (*types.MsgBuyCoinResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	coinToBuy, err := sdk.ParseCoinNormalized(msg.Amount)
	if err != nil {
		panic(err)
	}

	// Throw error if coin does not exist
	creatorCoin, isFound := k.GetCreatorCoin(ctx, coinToBuy.Denom)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInsufficientFunds, "Not existing coin")
	}

	// Buyer should pay corresponding amount of coin
	buyer, _ := sdk.AccAddressFromBech32(msg.Creator)
	creator, _ := sdk.AccAddressFromBech32(creatorCoin.Creator)

	amount, err := sdk.ParseCoinsNormalized(msg.Amount)
	if err != nil {
		return nil, sdkerrors.Wrap(types.ErrSample, "Cannot parse coins in loan amount")
	}

	k.bankKeeper.SendCoins(ctx, buyer, creator, amount)

	// Mint creator coin and send to buyer
	parsedCoinToBuy := sdk.NewCoins(coinToBuy)
	k.bankKeeper.MintCoins(ctx, types.ModuleName, parsedCoinToBuy)
	k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, buyer, parsedCoinToBuy)

	return &types.MsgBuyCoinResponse{}, nil
}

func calculatePriceWithGivenSupply(cc types.CreatorCoin, supply sdk.Coin) sdk.Int {
	initialSupply, _ := sdk.ParseCoinNormalized(cc.InitialSupply)
	presalePrice, _ := sdk.ParseCoinNormalized(cc.PresalePrice)

	if supply.IsLT(initialSupply) {
		return presalePrice.Amount
	} else {
		slope := slopeWithMaxInt32(cc)
		deltaS := supply.Amount.Sub(initialSupply.Amount)
		deltaSMultipliedBySlope := deltaS.Mul(slope).Quo(MaxInt32)
		return presalePrice.Amount.Add(deltaSMultipliedBySlope)
	}
}

func calculateAmountToPay(cc types.CreatorCoin, currentSupply sdk.Coin, amt sdk.Coin) (result sdk.Int, err error) {
	initialSupply, _ := sdk.ParseCoinNormalized(cc.InitialSupply)
	maxSupply, _ := sdk.ParseCoinNormalized(cc.MaxSupply)
	presalePrice, _ := sdk.ParseCoinNormalized(cc.PresalePrice)

	amount := amt.Amount
	current := currentSupply.Amount

	s_init := initialSupply.Amount
	p_init := presalePrice.Amount

	s_max := maxSupply.Amount

	if s_max.LT(amount.Add(current)) {
		result := sdk.Int{}
		return result, sdkerrors.ErrInvalidCoins
	}

	if amount.Add(current).LT(s_init) {
		return p_init.Mul(amount), nil
	}

	if s_init.LT(current) {
		p_current := calculatePriceWithGivenSupply(cc, currentSupply)
		p_target := calculatePriceWithGivenSupply(cc, currentSupply.Add(amt))

		p_avg := p_current.Add(p_target).Quo(sdk.NewInt(2))

		return p_avg.Mul(amount), nil
	}

	if current.LT(s_init) && s_init.LTE(current.Add(amount)) {
		firstArea := s_init.Sub(current).Mul(p_init)

		p_target := calculatePriceWithGivenSupply(cc, currentSupply.Add(amt))
		p_avg := p_init.Add(p_target).Quo(sdk.NewInt(2))

		secondArea := (current.Add(amount).Sub(s_init)).Mul(p_avg)

		return firstArea.Add(secondArea), nil
	}

	return sdk.Int{}, sdkerrors.ErrConflict
}

func slopeWithMaxInt32(cc types.CreatorCoin) sdk.Int {
	//	Already validated above
	maxPrice, _ := sdk.ParseCoinNormalized(cc.MaxPrice)
	initialPrice, _ := sdk.ParseCoinNormalized(cc.PresalePrice)

	maxSupply, _ := sdk.ParseCoinNormalized(cc.MaxSupply)
	initialSupply, _ := sdk.ParseCoinNormalized(cc.InitialSupply)

	deltaP := maxPrice.SubAmount(initialPrice.Amount).Amount
	deltaS := maxSupply.SubAmount(initialSupply.Amount).Amount

	return deltaP.Mul(MaxInt32).Quo(deltaS)

}

var MaxInt32 = sdk.NewInt(math.MaxInt32)
