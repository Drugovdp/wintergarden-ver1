import React, { useState } from "react"
import { CalculationFormSlider } from "./CalculationFormSlider/CalculationFormSlider"
import check from '../../../Images/gal.svg'
// import 'react-phone-input-2/lib/style.css'
import styled from "styled-components"
import { BlockBtn } from "./BlockBtns"
import { useStoreSliderBlockCost } from "../../../data/store/sliderBlockCostStore"

type TypeCalculationForm = {}

export const CalculationForm: React.FC<TypeCalculationForm> = (props) => {

    const { } = props

    const [valueCards, setValueCards] = useStoreSliderBlockCost(state => [state.valueCards, state.setValueCards])

    const [cardNumber, setCardNumber] = useState(1)
    const [titleCardPage, setTitleCardPage] = useState(valueCards[0].header)
    const [cardID, setCardID] = useState(valueCards[cardNumber - 1].id)
    const [disabledBtn, setDisabledBtn] = useState(true)
    const [inputText, setinputText] = useState('')

    const chekingElementCardTrue = (cardNumberFn: number) => {
        valueCards[cardNumberFn].cardInfo.map(el => {
            if (el.isCheck) {
                setDisabledBtn(false)
            }
        })
    }

    const onClickButtonHandler = () => {
        setDisabledBtn(true)
        const newCardNumber = cardNumber - 1
        if (cardNumber <= valueCards.length - 1) {
            setCardNumber(cardNumber + 1)
            setTitleCardPage(valueCards[cardNumber].header)
            setCardID(valueCards[cardNumber].id)
            chekingElementCardTrue(newCardNumber + 1)
        }
    }

    const onClickButtonDownHandler = () => {
        setDisabledBtn(false)
        const newCardNumber = cardNumber - 1
        setCardNumber(cardNumber - 1)
        setTitleCardPage(valueCards[newCardNumber - 1].header)
        setCardID(valueCards[newCardNumber - 1].id)
    }

    const changeCheckInput = (id: string, isCheck: boolean) => {
        setValueCards(cardID, id, isCheck)
        setDisabledBtn(isCheck ? false : true)
    }

    const onChangeValueInputHandler = (value: string) => {
        setinputText(value)
    }

    return (
        <CalculationFormWrapper check={check} cardnumber={cardNumber}>
            <CalcFormHaeder>Вы отвечаете на {cardNumber} вопрос из {valueCards.length}</CalcFormHaeder>
            <CalcFormScale check={check} cardnumber={cardNumber}>
                {valueCards.map((_, i) => i + 1 <= cardNumber ?
                    <ElScale key={i} style={{ backgroundColor: '#3FAC3B' }}></ElScale>
                    :
                    <ElScale key={i}></ElScale>)
                }
            </CalcFormScale>
            <CalcFormTitle>
                {cardNumber !== valueCards.length ?
                    titleCardPage
                    :
                    <LastTitle><LastTitleLogo check={check}></LastTitleLogo>{titleCardPage}</LastTitle>
                }
            </CalcFormTitle>
            <CardsBox cardnumber={cardNumber}>
                <CalculationFormSlider
                    cardNumber={cardNumber}
                    changeCheckInput={changeCheckInput}
                    lengthCards={valueCards.length}
                />
            </CardsBox>
            <BlockBtn cardNumber={cardNumber}
                disabledBtn={disabledBtn}
                value={inputText}
                onClickButtonHandler={onClickButtonHandler}
                onClickButtonDownHandler={onClickButtonDownHandler}
                onChangeValueInput={(value) => onChangeValueInputHandler(value)}
            />
        </CalculationFormWrapper>
    )
}

type TypeCalculationFormWrapper = {
    cardnumber?: number;
    check?: string;
}

const CalculationFormWrapper = styled.div<TypeCalculationFormWrapper>`
    width: 100%;
`
const CalcFormHaeder = styled.div`
    margin-top: 23px;
    text-align: center;
`
const CalcFormScale = styled.div<TypeCalculationFormWrapper>`
    width: 544px;
    height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: ${props => props.cardnumber === 3 ? `${23}px` : `${40}px`} auto;
`
const ElScale = styled.div`
    width: 74px;
    height: 12px;
    background-color: #969696;
    border-radius: 100px;
`
const CalcFormTitle = styled.div`
    text-align: center;
`
const LastTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
`
const LastTitleLogo = styled.div<TypeCalculationFormWrapper>`
    width: 21px;
    height: 21px;
    border-radius: 50%;
    background-image: url('${props => props.check}');
    background-color: #3fac3b;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 15px;
`
const CardsBox = styled.div<TypeCalculationFormWrapper>`
    margin: ${(props) => (props.cardnumber === 3 ? `${23}px` : `${40}px`)} auto;
`