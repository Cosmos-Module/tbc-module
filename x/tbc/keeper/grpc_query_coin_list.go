package keeper

import (
	"context"

	"tbc/x/tbc/types"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) CoinList(goCtx context.Context, req *types.QueryCoinListRequest) (*types.QueryCoinListResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var coinAll []types.CoinAll
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	creatorCoinStore := prefix.NewStore(store, types.KeyPrefix(types.CreatorCoinKeyPrefix))

	_, err := query.Paginate(creatorCoinStore, req.Pagination, func(key []byte, value []byte) error {
		var creatorCoin types.CreatorCoin
		if err := k.cdc.Unmarshal(value, &creatorCoin); err != nil {
			return err
		}
		coin := types.CoinAll{
			Creator: creatorCoin.Creator,
			Symbol:  creatorCoin.Index,
		}

		coinAll = append(coinAll, coin)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryCoinListResponse{CoinAll: coinAll}, nil
}
