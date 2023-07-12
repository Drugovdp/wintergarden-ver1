import React from 'react'
import styled, { css } from 'styled-components'
import { GlobalStyle } from '../../Styles/GlobalStyles'
import imgSectionEleven1 from './Images/imgSectionEleven1.png'
import imgSectionEleven2 from './Images/imgSectionEleven2.png'
import imgSectionEleven3 from './Images/imgSectionEleven3.png'
import imgSectionEleven4 from './Images/imgSectionEleven4.png'
import imgSectionEleven5 from './Images/imgSectionEleven5.png'

type TypePropsSectionEleven = {}

export const SectionEleven: React.FC<TypePropsSectionEleven> = (props) => {

    const {} = props

    return (
        <WrapperSectionEleven>
            <SectionEleventH1>Дополнительные услуги для зимнего сада. Вам не придется искать другие компании, мы предоставим дополнительные опции от прямых производителей для вашего комфорта!</SectionEleventH1>
            <WrapperContent>
                <ContentRow>
                    <ContentBoxTop>
                        <img src={imgSectionEleven1} alt="imgSectionEleven1" />
                        <ContentBoxText topboxtext={'47%'} leftboxtext={'18px'}>
                            <ContentBoxTextH2>Отопление зимнего сада</ContentBoxTextH2>
                            <ContentBoxTextP>Ни один круглогодичный зимний сад не обойдется без системы отопления. Предлагаем установку различных систем отопления под ключ.</ContentBoxTextP>
                        </ContentBoxText>
                    </ContentBoxTop>
                    <ContentBoxTop>
                        <img src={imgSectionEleven2} alt="imgSectionEleven2" />
                        <ContentBoxText topboxtext={'47%'} leftboxtext={'18px'}>
                            <ContentBoxTextH2>Солнцезащита зимнего сада</ContentBoxTextH2>
                            <ContentBoxTextP>В качестве солнцезащиты зимних садов предлагаем механические и автоматические системы затемнения.</ContentBoxTextP>
                        </ContentBoxText>
                    </ContentBoxTop>
                </ContentRow>
                <ContentRow>
                    <ContentBoxBottom>
                        <img src={imgSectionEleven3} alt="imgSectionEleven3" />
                        <ContentBoxText topboxtext={'22%'} leftboxtext={'11px'}>
                            <ContentBoxTextH2>Автоматика зимнего сада</ContentBoxTextH2>
                            <ContentBoxTextP>Для удобства открывания алюминиевых окон, возможно предусмотреть автоматическое открывание.</ContentBoxTextP>
                        </ContentBoxText>
                    </ContentBoxBottom>
                    <ContentBoxBottom>
                        <img src={imgSectionEleven4} alt="imgSectionEleven4" />
                        <ContentBoxText topboxtext={'22%'} leftboxtext={'11px'}>
                            <ContentBoxTextH2>Двери в зимний сад</ContentBoxTextH2>
                            <ContentBoxTextP>Двери в составе зимнего сада улучают его функциональность и удобства. На выбор раздвижные и распашные конструкции дверей.</ContentBoxTextP>
                        </ContentBoxText>
                    </ContentBoxBottom>
                    <ContentBoxBottom>
                        <img src={imgSectionEleven5} alt="imgSectionEleven5" />
                        <ContentBoxText topboxtext={'22%'} leftboxtext={'11px'}>
                            <ContentBoxTextH2>Окна в зимний сад</ContentBoxTextH2>
                            <ContentBoxTextP>Конструкцию зимнего сада можно оборудовать окнами различного типа открывания, таких как: раздвижные, распашные, и другие.</ContentBoxTextP>
                        </ContentBoxText>
                    </ContentBoxBottom>
                </ContentRow>
            </WrapperContent>
        </WrapperSectionEleven>
    )
}

type TypeContentBoxText = {
    topboxtext: string
    leftboxtext: string
}

const styleContentBoxTop = css`
    position: relative;
    overflow: hidden;
    border-radius: 10px;

    img {
        width: 100%;   
        object-fit: cover;
    }

    &::before {
        position: absolute;
        content:'';
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: linear-gradient(90deg, rgba(8, 84, 102, 0.47) 18.23%, rgba(34, 34, 34, 0.00) 100%);
    }
`

const WrapperSectionEleven = styled.section`
    width: ${GlobalStyle.width};
    padding: ${GlobalStyle.padding};
    font-family: ${GlobalStyle.fontFamily};
    font-style: ${GlobalStyle.fontStyle};
    color: ${GlobalStyle.colorText};
    margin: 100px auto 0 auto;
`
const SectionEleventH1 = styled.h1`
    font-weight: 700;
    font-size: 35px;
    line-height: 41px;
    text-align: center;
`
const WrapperContent = styled.div`
    margin-top: 100px;
`
const ContentRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 32px;
    justify-content: space-between;
`
const ContentBoxTop = styled.div`
    flex: 1 48%;
    ${styleContentBoxTop}

    @media (max-width: 960px) {
        flex: 1 100%;
    }
`
const ContentBoxBottom = styled.div`
    flex: 1 30%;
    ${styleContentBoxTop}

    @media (max-width: 960px) {
        flex: 1 100%;
    }
`
const ContentBoxText = styled.div<TypeContentBoxText>`
    position: absolute;
    width: 90%;
    top: ${props=>props.topboxtext};
    left: ${props=>props.leftboxtext};
    transform: translateY(0);
    z-index: 2;
`
const ContentBoxTextH2 = styled.h2`
    color: #FFF;
    font-size: 2.3vw;
    font-weight: 700;
    line-height: 117.518%;

    @media (max-width: 960px) {
        font-size: 30px;
    }

    @media (min-width: 1110px) {
        font-size: 30px;
    }
`
const ContentBoxTextP = styled.p`
    color: #FFF;
    font-size: 1.5vw;
    line-height: 117.518%;
    margin-top: 2%;

    @media (max-width: 960px) {
        font-size: 20px;
    }

    @media (min-width: 1110px) {
        font-size: 20px;
    }
`