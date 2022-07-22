package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"tbc/x/tbc/types"
)

var _ = strconv.Itoa(0)

func CmdInitSale() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "init-sale [initial-supply] [max-supply] [presale-price] [max-price]",
		Short: "Broadcast message init-sale",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argInitialSupply := args[0]
			argMaxSupply := args[1]
			argPresalePrice := args[2]
			argMaxPrice := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgInitSale(
				clientCtx.GetFromAddress().String(),
				argInitialSupply,
				argMaxSupply,
				argPresalePrice,
				argMaxPrice,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
