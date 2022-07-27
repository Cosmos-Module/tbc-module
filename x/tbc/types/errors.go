package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/tbc module sentinel errors
var (
	ErrSample = sdkerrors.Register(ModuleName, 1100, "sample error")
	ErrInsufficientAmount = sdkerrors.Register(ModuleName, 100, "insufficient amount")
)
