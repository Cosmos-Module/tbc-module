package keeper

import (
	"context"

	"tbc/x/tbc/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Price(goCtx context.Context, req *types.QueryPriceRequest) (*types.QueryPriceResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	creatorCoin, isFound := k.GetCreatorCoin(ctx, req.Symbol)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInsufficientFunds, "Not existing coin")
	}

	// Buyer should pay corresponding amount of coin

	currentSupply := k.bankKeeper.GetSupply(ctx, creatorCoin.Index)

	price := creatorCoin.CalculatePriceWithGivenSupply(currentSupply)


	return &types.QueryPriceResponse{Price: price.Uint64()}, nil
}
