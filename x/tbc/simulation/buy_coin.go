package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"tbc/x/tbc/keeper"
	"tbc/x/tbc/types"
)

func SimulateMsgBuyCoin(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgBuyCoin{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the BuyCoin simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "BuyCoin simulation not implemented"), nil, nil
	}
}
