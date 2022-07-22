package tbc

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"tbc/testutil/sample"
	tbcsimulation "tbc/x/tbc/simulation"
	"tbc/x/tbc/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = tbcsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgInitSale = "op_weight_msg_init_sale"
	// TODO: Determine the simulation weight value
	defaultWeightMsgInitSale int = 100

	opWeightMsgBuyCoin = "op_weight_msg_buy_coin"
	// TODO: Determine the simulation weight value
	defaultWeightMsgBuyCoin int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	tbcGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&tbcGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgInitSale int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgInitSale, &weightMsgInitSale, nil,
		func(_ *rand.Rand) {
			weightMsgInitSale = defaultWeightMsgInitSale
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgInitSale,
		tbcsimulation.SimulateMsgInitSale(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgBuyCoin int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgBuyCoin, &weightMsgBuyCoin, nil,
		func(_ *rand.Rand) {
			weightMsgBuyCoin = defaultWeightMsgBuyCoin
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgBuyCoin,
		tbcsimulation.SimulateMsgBuyCoin(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
