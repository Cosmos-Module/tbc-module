package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgInitSale = "init_sale"

var _ sdk.Msg = &MsgInitSale{}

func NewMsgInitSale(creator string, initialSupply string, maxSupply string, presalePrice string, maxPrice string) *MsgInitSale {
	return &MsgInitSale{
		Creator:       creator,
		InitialSupply: initialSupply,
		MaxSupply:     maxSupply,
		PresalePrice:  presalePrice,
		MaxPrice:      maxPrice,
	}
}

func (msg *MsgInitSale) Route() string {
	return RouterKey
}

func (msg *MsgInitSale) Type() string {
	return TypeMsgInitSale
}

func (msg *MsgInitSale) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgInitSale) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgInitSale) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
