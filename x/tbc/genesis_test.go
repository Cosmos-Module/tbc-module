package tbc_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "tbc/testutil/keeper"
	"tbc/testutil/nullify"
	"tbc/x/tbc"
	"tbc/x/tbc/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		CreatorCoinList: []types.CreatorCoin{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.TbcKeeper(t)
	tbc.InitGenesis(ctx, *k, genesisState)
	got := tbc.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.CreatorCoinList, got.CreatorCoinList)
	// this line is used by starport scaffolding # genesis/test/assert
}
