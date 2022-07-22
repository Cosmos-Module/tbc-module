package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"tbc/x/tbc/types"
)

// SetCreatorCoin set a specific creatorCoin in the store from its index
func (k Keeper) SetCreatorCoin(ctx sdk.Context, creatorCoin types.CreatorCoin) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreatorCoinKeyPrefix))
	b := k.cdc.MustMarshal(&creatorCoin)
	store.Set(types.CreatorCoinKey(
		creatorCoin.Index,
	), b)
}

// GetCreatorCoin returns a creatorCoin from its index
func (k Keeper) GetCreatorCoin(
	ctx sdk.Context,
	index string,

) (val types.CreatorCoin, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreatorCoinKeyPrefix))

	b := store.Get(types.CreatorCoinKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCreatorCoin removes a creatorCoin from the store
func (k Keeper) RemoveCreatorCoin(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreatorCoinKeyPrefix))
	store.Delete(types.CreatorCoinKey(
		index,
	))
}

// GetAllCreatorCoin returns all creatorCoin
func (k Keeper) GetAllCreatorCoin(ctx sdk.Context) (list []types.CreatorCoin) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreatorCoinKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.CreatorCoin
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
