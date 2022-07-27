package keeper

import (
	"context"

	"strings"
	"tbc/x/tbc/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) CoinBatch(goCtx context.Context, req *types.QueryCoinBatchRequest) (*types.QueryCoinBatchResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	parse := strings.Fields(req.QueryList)
	var coinList[] types.CreatorCoin
	len := len(parse)
	for i:=0; i<len; i++ {	
		val, found := k.GetCreatorCoin(
			ctx,
			parse[i],
		)
		if !found {
			return nil, status.Error(codes.NotFound, "not found")
		}

		

		coinList = append(coinList, val)
	}

	return &types.QueryCoinBatchResponse{CreatorCoin: coinList}, nil
}
