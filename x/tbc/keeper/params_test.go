package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "tbc/testutil/keeper"
	"tbc/x/tbc/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.TbcKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
