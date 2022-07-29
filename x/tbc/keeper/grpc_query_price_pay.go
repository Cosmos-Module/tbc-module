package keeper

import (
	"context"

	"tbc/x/tbc/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) PricePay(goCtx context.Context, req *types.QueryPricePayRequest) (*types.QueryPricePayResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	coinToBuy, err := sdk.ParseCoinNormalized(req.Coin)
	if err != nil {
		return nil, sdkerrors.Wrap(types.ErrSample, "Cannot parse coins in amount")
	}

	creatorCoin, isFound := k.GetCreatorCoin(ctx, coinToBuy.Denom)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInsufficientFunds, "Not existing coin")
	}

	currentSupply := k.bankKeeper.GetSupply(ctx, creatorCoin.Index)

	amountToPay, _ := creatorCoin.CalculateAmountToPay(currentSupply, coinToBuy)

	return &types.QueryPricePayResponse{Price: amountToPay.Amount.Uint64()}, nil
}
