import React from "react";
import { Button } from "../../Button/Button";
import styled from "styled-components";
import { Input } from "../../Input/Input";

type TypeBlockBtn = {
    cardNumber: number
    disabledBtn: boolean
    value: string
    onClickButtonHandler: () => void
    onClickButtonDownHandler: () => void
    onChangeValueInput: (value: string) => void
}

export const BlockBtn: React.FC<TypeBlockBtn> = (props) => {

    const { cardNumber, disabledBtn, value, onClickButtonHandler, onClickButtonDownHandler, onChangeValueInput } = props

    return (
        cardNumber === 1 ?
            <BlockBtnWrapper cardnumber={cardNumber}>
                <TitleVariant>
                    <TitleVariantLogo>
                        <RadianGradient></RadianGradient>
                    </TitleVariantLogo>
                    <BlockBtnWrapperTtext>
                        <BlockBtnWrapperTtextP>Выберите вариант ответа</BlockBtnWrapperTtextP>
                        <BlockBtnWrapperTtextP><span>нажмите кнопку “Далее”</span></BlockBtnWrapperTtextP>
                    </BlockBtnWrapperTtext>
                </TitleVariant>
                <Button
                    callBack={onClickButtonHandler}
                    width='120px'
                    height='41px'
                    fontSize='12px'
                    fontWeight={800}
                    lineHeight='15px'
                    textTransform=''
                    disabledBtn={disabledBtn}
                >
                    Далее
                </Button>
            </BlockBtnWrapper>
            :
            cardNumber === 6 ?
                <BlockBtnWrapper cardnumber={cardNumber}>
                    <Button
                        callBack={onClickButtonDownHandler}
                        width='120px'
                        height='41px'
                        fontSize='12px'
                        fontWeight={800}
                        lineHeight='15px'
                        textTransform=''
                    >
                        Вернуться
                    </Button>
                    <Input
                        width="200px"
                        height="41px"
                        type="text"
                        placeholder="Ваш телефон"
                        pattern='/^(\+?7|8)?9\d{9}$/'
                        onChangeValueInput={(value) => onChangeValueInput(value)}
                        value={value}
                    />
                    <Button
                        callBack={() => { }}
                        width='120px'
                        height='41px'
                        fontSize='12px'
                        fontWeight={800}
                        lineHeight='15px'
                        textTransform=''
                    >
                        Отправить
                    </Button>
                </BlockBtnWrapper>
                :
                <BlockBtnWrapper cardnumber={cardNumber}>
                    <Button
                        callBack={onClickButtonDownHandler}
                        width='120px'
                        height='41px'
                        fontSize='12px'
                        fontWeight={800}
                        lineHeight='15px'
                        textTransform=''
                    >
                        Вернуться
                    </Button>
                    <TitleVariant>
                        <TitleVariantLogo>
                            <RadianGradient></RadianGradient>
                        </TitleVariantLogo>
                        <BlockBtnWrapperTtext>
                            <BlockBtnWrapperTtextP>Выберите вариант ответа</BlockBtnWrapperTtextP>
                            <BlockBtnWrapperTtextP><span>нажмите кнопку “Далее”</span></BlockBtnWrapperTtextP>
                        </BlockBtnWrapperTtext>
                    </TitleVariant>
                    <Button
                        callBack={onClickButtonHandler}
                        width='120px'
                        height='41px'
                        fontSize='12px'
                        fontWeight={800}
                        lineHeight='15px'
                        textTransform=''
                        disabledBtn={disabledBtn}
                    >
                        Далее
                    </Button>
                </BlockBtnWrapper>
    )
}

type TypeBlockBtnWrapper = {
    cardnumber: number
}

const BlockBtnWrapper = styled.div<TypeBlockBtnWrapper>`
    display: flex;
    width: ${(props) => (props.cardnumber !== 1 ? `${540}px` : `${369}px`)};
    height: 41px;
    justify-content: space-around;
    align-items: center;
    margin: ${(props) => (props.cardnumber === 3 ? `${23}px` : `${40}px`)} auto;
`
const TitleVariant = styled.div`
    width: 217px;
    height: 34px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const TitleVariantLogo = styled.div`
    flex-basis: 31px;
`
const RadianGradient = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: radial-gradient(1em, #00af47 9%, #00af4742 25%);
`
const BlockBtnWrapperTtext = styled.div``
const BlockBtnWrapperTtextP = styled.p`
    font-weight: 700;
    font-size: 13px;
    line-height: 18px;

    span {
        font-weight: 500;
        color: #969696;
        font-family: Manrope;
    }
`