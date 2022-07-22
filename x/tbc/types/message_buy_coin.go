package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgBuyCoin = "buy_coin"

var _ sdk.Msg = &MsgBuyCoin{}

func NewMsgBuyCoin(creator string, amount string) *MsgBuyCoin {
	return &MsgBuyCoin{
		Creator: creator,
		Amount:  amount,
	}
}

func (msg *MsgBuyCoin) Route() string {
	return RouterKey
}

func (msg *MsgBuyCoin) Type() string {
	return TypeMsgBuyCoin
}

func (msg *MsgBuyCoin) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgBuyCoin) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgBuyCoin) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
