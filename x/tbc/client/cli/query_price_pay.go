package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"tbc/x/tbc/types"
)

var _ = strconv.Itoa(0)

func CmdPricePay() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "price-pay [coin]",
		Short: "Query price-pay",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqCoin := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryPricePayRequest{

				Coin: reqCoin,
			}

			res, err := queryClient.PricePay(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
