package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "tbc/testutil/keeper"
	"tbc/testutil/nullify"
	"tbc/x/tbc/keeper"
	"tbc/x/tbc/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNCreatorCoin(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.CreatorCoin {
	items := make([]types.CreatorCoin, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetCreatorCoin(ctx, items[i])
	}
	return items
}

func TestCreatorCoinGet(t *testing.T) {
	keeper, ctx := keepertest.TbcKeeper(t)
	items := createNCreatorCoin(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetCreatorCoin(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestCreatorCoinRemove(t *testing.T) {
	keeper, ctx := keepertest.TbcKeeper(t)
	items := createNCreatorCoin(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCreatorCoin(ctx,
			item.Index,
		)
		_, found := keeper.GetCreatorCoin(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestCreatorCoinGetAll(t *testing.T) {
	keeper, ctx := keepertest.TbcKeeper(t)
	items := createNCreatorCoin(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllCreatorCoin(ctx)),
	)
}
