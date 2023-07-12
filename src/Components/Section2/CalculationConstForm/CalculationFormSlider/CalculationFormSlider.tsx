import check from '../../../../Images/gal.svg'
import { ChangeEvent } from "react"
import styled from "styled-components"
import { useStoreSliderBlockCost } from '../../../../data/store/sliderBlockCostStore'

type TypeCalculationFormSlider = {
    cardNumber: number
    lengthCards: number
    changeCheckInput: (id: string, isCheck: boolean) => void
}

export const CalculationFormSlider: React.FC<TypeCalculationFormSlider> = (props) => {

    const { cardNumber, lengthCards, changeCheckInput } = props

    const valueCards = useStoreSliderBlockCost(state => state.valueCards)

    const onChangInputCheckHandler = (id: string, isCheck: boolean) => {
        changeCheckInput(id, isCheck)
    }

    const card = cardNumber !== lengthCards ?
        valueCards[cardNumber - 1].cardInfo.map(el => {
            return (
                <CardItem key={el.id}>
                    <CardItemImg>
                        <ItemImg src={el.src} alt={el.alt} />
                        <Input
                            check={check}
                            type="checkbox"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => onChangInputCheckHandler(el.id, e.currentTarget.checked)}
                            checked={el.isCheck}
                        />
                    </CardItemImg>
                    <CardItemTitle>{el.title}</CardItemTitle>
                </CardItem>
            )
        })
        :
        valueCards[lengthCards - 1].cardInfo.map(el => {
            return (
                <CardItem key={el.id}>
                    <LastCardItem>{el.title}</LastCardItem>
                </CardItem>
            )
        })

    return (
        <CardSliderWrapper check={check} cardnumber={cardNumber}>
            {card}
        </CardSliderWrapper>
    )
}

type TypeCardSliderWrapper = {
    check?: string;
    cardnumber?: number;
}

const CardSliderWrapper = styled.div<TypeCardSliderWrapper>`
    width: ${(props) => (props.cardnumber === 5 ? `${664}px` : `${448}px`)};
    display: flex;
    flex-wrap: ${(props) => (props.cardnumber === 5 ? "no-wrap" : "wrap")};
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`
const CardItem = styled.div`
    flex-basis: 45%;
    height: 191px;
    text-align: center;
`
const LastCardItem = styled.div`
    width: 411px;
    margin: 40px auto;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
`
const CardItemImg = styled.div`
    position: relative;
    width: 200px;
    height: 135px;
    margin-bottom: 26px;
`
const ItemImg = styled.img``
const Input = styled.input<TypeCardSliderWrapper>`
    position: absolute;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    border: 2px #3fac3b solid;
    background-color: #ffffff;
    appearance: none;
    top: 97%;
    left: 36%;
    transform: translate(50%, -50%);

    &[type="checkbox"]:checked {
        background-image: url("${(props) => props.check}");
        background-color: #3fac3b;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 15px;
    }
`
const CardItemTitle = styled.p`
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
`