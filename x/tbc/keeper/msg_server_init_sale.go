package keeper

import (
	"context"

	"tbc/x/tbc/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) InitSale(goCtx context.Context, msg *types.MsgInitSale) (*types.MsgInitSaleResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	{
		initialSupply, err := sdk.ParseCoinNormalized(msg.InitialSupply)
		if err != nil {
			panic(err)
		}

		maxSupply, err := sdk.ParseCoinNormalized(msg.MaxSupply)
		if err != nil {
			panic(err)
		}

		// Check each amounts
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

	// Mint creator coin
	creatorCoins := sdk.NewCoins(creatorCoin)
	k.bankKeeper.MintCoins(ctx, types.ModuleName, creatorCoins)

	// Set CreatorCoin
	newTokenSale := types.CreatorCoin{
		Index:         creatorCoin.Denom,
		Creator:       msg.Creator,
		InitialSupply: msg.InitialSupply,
		MaxSupply:     msg.MaxSupply,
		PresalePrice:  msg.PresalePrice,
		MaxPrice:      msg.MaxPrice,
	}
	k.SetCreatorCoin(ctx, newTokenSale)

	return &types.MsgInitSaleResponse{}, nil
}
