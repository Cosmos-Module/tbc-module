package keeper

import (
	"tbc/x/tbc/types"
)

var _ types.QueryServer = Keeper{}
