package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"tbc/x/tbc/types"
)

func (k msgServer) InitSale(goCtx context.Context, msg *types.MsgInitSale) (*types.MsgInitSaleResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgInitSaleResponse{}, nil
}
