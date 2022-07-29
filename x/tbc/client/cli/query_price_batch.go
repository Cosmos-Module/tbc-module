package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"tbc/x/tbc/types"
)

var _ = strconv.Itoa(0)

func CmdPriceBatch() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "price-batch [query-list]",
		Short: "Query price-batch",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqQueryList := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryPriceBatchRequest{

				QueryList: reqQueryList,
			}

			res, err := queryClient.PriceBatch(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
