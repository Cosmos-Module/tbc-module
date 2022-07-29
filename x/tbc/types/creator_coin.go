package types

import (
	math "math"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (cc *CreatorCoin) CalculatePriceWithGivenSupply(supply sdk.Coin) sdk.Int {
    initialSupply, _ := sdk.ParseCoinNormalized(cc.InitialSupply)
    presalePrice, _ := sdk.ParseCoinNormalized(cc.PresalePrice)

    if supply.IsLT(initialSupply) {
        return presalePrice.Amount
    } else {
        slope := cc.SlopeWithMaxInt32()
        deltaS := supply.Amount.Sub(initialSupply.Amount)
        deltaSMultipliedBySlope := deltaS.Mul(slope).Quo(MaxInt32)
        return presalePrice.Amount.Add(deltaSMultipliedBySlope)
    }

}

func (cc CreatorCoin) CalculateAmountToPay(currentSupply sdk.Coin, amt sdk.Coin) (result sdk.Coin, err error) {
    initialSupply, _ := sdk.ParseCoinNormalized(cc.InitialSupply)
    maxSupply, _ := sdk.ParseCoinNormalized(cc.MaxSupply)
    presalePrice, _ := sdk.ParseCoinNormalized(cc.PresalePrice)

    amount := amt.Amount
    current := currentSupply.Amount

    s_init := initialSupply.Amount
    p_init := presalePrice.Amount

    s_max := maxSupply.Amount

    if s_max.LT(amount.Add(current)) {
        result := sdk.Int{}
        coin := sdk.NewCoin(cc.Index, result)
        return coin, sdkerrors.ErrInvalidCoins
    }

    //초기 가격 적용, 발행해도 초기 공급량 넘지않음
    if amount.Add(current).LTE(s_init) { // 초기 공급량 >= 발행량 + 현재 공급량
        coin := sdk.NewCoin(cc.Index, p_init.Mul(amount)) //초기 설정 가격 * 발행량
        return coin, nil
    }

    //이미 초기 발행량 넘은경우
    if s_init.LT(current) {  //초기 공급량 < 현재 공급량
        p_current := cc.CalculatePriceWithGivenSupply(currentSupply)
        p_target := cc.CalculatePriceWithGivenSupply(currentSupply.Add(amt))

        p_avg := p_current.Add(p_target).Quo(sdk.NewInt(2))

        coin := sdk.NewCoin(cc.Index, p_avg.Mul(amount))

        return coin, nil
    }

    //발행시 초기 공급량을 넘어가는 경우 
    if s_init.LTE(current.Add(amount)) { // 초기 공급량 <= 현재 공급량 + 발행량
        firstArea := s_init.Sub(current).Mul(p_init)

        p_target := cc.CalculatePriceWithGivenSupply(currentSupply.Add(amt))
        p_avg := p_init.Add(p_target).Quo(sdk.NewInt(2))

        secondArea := (current.Add(amount).Sub(s_init)).Mul(p_avg)

        coin := sdk.NewCoin(cc.Index, firstArea.Add(secondArea))
        return coin, nil
    }

    coin := sdk.NewCoin(cc.Index, sdk.Int{})

    return coin, sdkerrors.ErrConflict
}

func (cc CreatorCoin) SlopeWithMaxInt32() sdk.Int {
    //  Already validated above
    maxPrice, _ := sdk.ParseCoinNormalized(cc.MaxPrice)
    initialPrice, _ := sdk.ParseCoinNormalized(cc.PresalePrice)

    maxSupply, _ := sdk.ParseCoinNormalized(cc.MaxSupply)
    initialSupply, _ := sdk.ParseCoinNormalized(cc.InitialSupply)

    deltaP := maxPrice.SubAmount(initialPrice.Amount).Amount
    deltaS := maxSupply.SubAmount(initialSupply.Amount).Amount

    return deltaP.Mul(MaxInt32).Quo(deltaS)

}

var MaxInt32 = sdk.NewInt(math.MaxInt32)


