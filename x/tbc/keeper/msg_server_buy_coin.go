package keeper

import (
	"context"

	"tbc/x/tbc/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) BuyCoin(goCtx context.Context, msg *types.MsgBuyCoin) (*types.MsgBuyCoinResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	coinToBuy, err := sdk.ParseCoinNormalized(msg.Amount)
	if err != nil {
		return nil, sdkerrors.Wrap(types.ErrSample, "Cannot parse coins in amount")
	}

	// Throw error if coin does not exist
	creatorCoin, isFound := k.GetCreatorCoin(ctx, coinToBuy.Denom)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInsufficientFunds, "Not existing coin")
	}

	// Buyer should pay corresponding amount of coin
	buyer, _ := sdk.AccAddressFromBech32(msg.Creator)
	creator, _ := sdk.AccAddressFromBech32(creatorCoin.Creator)

	currentSupply := k.bankKeeper.GetSupply(ctx, creatorCoin.Index)

	amountToPay, err := creatorCoin.CalculateAmountToPay(currentSupply, coinToBuy)
	parsedAmountToPay := sdk.NewCoins(amountToPay)

	k.bankKeeper.SendCoins(ctx, buyer, creator, parsedAmountToPay)

	// Mint creator coin and send to buyer
	parsedCoinToBuy := sdk.NewCoins(coinToBuy)
	k.bankKeeper.MintCoins(ctx, types.ModuleName, parsedCoinToBuy)
	k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, buyer, parsedCoinToBuy)

	return &types.MsgBuyCoinResponse{}, nil
}
