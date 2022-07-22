package tbc

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"tbc/x/tbc/keeper"
	"tbc/x/tbc/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the creatorCoin
	for _, elem := range genState.CreatorCoinList {
		k.SetCreatorCoin(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.CreatorCoinList = k.GetAllCreatorCoin(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
