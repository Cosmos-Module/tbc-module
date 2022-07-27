package keeper

import (
	"context"
	"fmt"

	"tbc/x/tbc/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
)

func (k msgServer) InitSale(goCtx context.Context, msg *types.MsgInitSale) (*types.MsgInitSaleResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	baseCreatorCoin, _ := sdk.ParseCoinNormalized(msg.InitialSupply)
	displayCreatorCoinDenom := fmt.Sprintf("CC-%d", baseCreatorCoin.Denom)
	k.bankKeeper.SetDenomMetaData(ctx, banktypes.Metadata{
		Description: fmt.Sprintf("Creator Coin %d", baseCreatorCoin.Denom),
		DenomUnits: []*banktypes.DenomUnit{
			{
				Denom:    baseCreatorCoin.Denom,
				Exponent: 0,
				Aliases:  nil,
			},
			{
				Denom:    displayCreatorCoinDenom,
				Exponent: 6, // Default exponents is 6
				Aliases:  nil,
			},
		},
		Base:    baseCreatorCoin.Denom,
		Display: displayCreatorCoinDenom,
	})

	{
		initialSupply, err := sdk.ParseCoinNormalized(msg.InitialSupply)
		if err != nil {
			panic(err)
		}

		maxSupply, err := sdk.ParseCoinNormalized(msg.MaxSupply)
		if err != nil {
			panic(err)
		}

		// Initial supply shoud exceed exponents(10**6)
		if initialSupply.Amount.LT(sdk.NewInt(100000)) {
			return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Initial supply is less than 10**6")
		}

		// Check if initial supply
		if initialSupply.IsGTE(maxSupply) {
			return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Initial supply exceeds max supply")
		}
	}

	{
		presalePrice, err := sdk.ParseCoinNormalized(msg.PresalePrice)
		if err != nil {
			panic(err)
		}

		maxPrice, err := sdk.ParseCoinNormalized(msg.MaxPrice)
		if err != nil {
			panic(err)
		}

		// Check each amounts
		if presalePrice.IsGTE(maxPrice) {
			return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Initial price exceeds Max price")
		}

	}

	// Parse coin from the message
	creatorCoin, _ := sdk.ParseCoinNormalized(msg.MaxSupply)

	// Throw error if coin already exists
	_, isFound := k.GetCreatorCoin(ctx, creatorCoin.Denom)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInsufficientFunds, "creator coin already in used")
	}

	// Set CreatorCoin
	newCreatorCoin := types.CreatorCoin{
		Index:         creatorCoin.Denom,
		Creator:       msg.Creator,
		InitialSupply: msg.InitialSupply,
		MaxSupply:     msg.MaxSupply,
		PresalePrice:  msg.PresalePrice,
		MaxPrice:      msg.MaxPrice,
	}
	k.SetCreatorCoin(ctx, newCreatorCoin)

	return &types.MsgInitSaleResponse{}, nil
}
