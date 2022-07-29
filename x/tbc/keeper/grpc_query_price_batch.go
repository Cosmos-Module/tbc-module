package keeper

import (
	"context"
	"strings"

	"tbc/x/tbc/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) PriceBatch(goCtx context.Context, req *types.QueryPriceBatchRequest) (*types.QueryPriceBatchResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	parse := strings.Fields(req.QueryList)
	var coinPriceList []uint64
	len := len(parse)
	for i := 0; i < len; i++ {
		coinToBuy, err := sdk.ParseCoinNormalized(parse[i])
		if err != nil {
			return nil, sdkerrors.Wrap(types.ErrSample, "Cannot parse coins in amount")
		}

		creatorCoin, isFound := k.GetCreatorCoin(ctx, coinToBuy.Denom)
		if !isFound {
			return nil, sdkerrors.Wrap(sdkerrors.ErrInsufficientFunds, "Not existing coin")
		}

		currentSupply := k.bankKeeper.GetSupply(ctx, creatorCoin.Index)

		amountToPay, _ := creatorCoin.CalculateAmountToPay(currentSupply, coinToBuy)
		
		coinPriceList = append(coinPriceList, amountToPay.Amount.Uint64())
	}

	return &types.QueryPriceBatchResponse{Price: coinPriceList}, nil
}
