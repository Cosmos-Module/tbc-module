package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"tbc/x/tbc/types"
)

func (k Keeper) CreatorCoinAll(c context.Context, req *types.QueryAllCreatorCoinRequest) (*types.QueryAllCreatorCoinResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var creatorCoins []types.CreatorCoin
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	creatorCoinStore := prefix.NewStore(store, types.KeyPrefix(types.CreatorCoinKeyPrefix))

	pageRes, err := query.Paginate(creatorCoinStore, req.Pagination, func(key []byte, value []byte) error {
		var creatorCoin types.CreatorCoin
		if err := k.cdc.Unmarshal(value, &creatorCoin); err != nil {
			return err
		}

		creatorCoins = append(creatorCoins, creatorCoin)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCreatorCoinResponse{CreatorCoin: creatorCoins, Pagination: pageRes}, nil
}

func (k Keeper) CreatorCoin(c context.Context, req *types.QueryGetCreatorCoinRequest) (*types.QueryGetCreatorCoinResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetCreatorCoin(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetCreatorCoinResponse{CreatorCoin: val}, nil
}
