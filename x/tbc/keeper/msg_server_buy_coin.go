package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"tbc/x/tbc/types"
)

func (k msgServer) BuyCoin(goCtx context.Context, msg *types.MsgBuyCoin) (*types.MsgBuyCoinResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgBuyCoinResponse{}, nil
}
