import React from 'react'
import styled, { css } from 'styled-components'
import { GlobalStyle } from '../../Styles/GlobalStyles'
import imgForLi from '../../Images/imgForLi.svg'
import fonSectionEight from '../../Images/fonSectionEight.png'
import { Fon } from '../Fon/Fon'

type TypePropsSectionEight = {}

export const SectionEight: React.FC<TypePropsSectionEight> = (props) => {

    const { } = props

    return (
        <WrapperSectionEight>
            <SectionEightH1>Минимум времени от заявки до готового проекта</SectionEightH1>
            <SectionEightP>Легкий заказ, индивидуальный проект, высокое качество</SectionEightP>
            <SectionEightBlockContent>
                <EightBlockContent>
                    <ContentUL>
                        <EightBlockContentH1>Берем на себя все заботы от старта до финала проекта</EightBlockContentH1>
                        <ContentLi imgforli={imgForLi} margintop='32px'>Оперативный, бесплатный выезд для оценки локации постройки и замеров</ContentLi>
                        <ContentLi imgforli={imgForLi} margintop='32px'>Договор</ContentLi>
                        <ContentLi imgforli={imgForLi} margintop='32px'>Производство</ContentLi>
                        <ContentLi imgforli={imgForLi} margintop='32px'>Установка зимнего сада</ContentLi>
                    </ContentUL>
                </EightBlockContent>
                <EightBlockFon>
                    <img src={fonSectionEight} alt="fonSectionEight" />
                </EightBlockFon>
                <EightBlockContent>
                    <ContentUL>
                        <EightBlockContentH1>Берем на себя все заботы от старта до финала проекта</EightBlockContentH1>
                        <ContentLi imgforli={imgForLi} margintop='16px'>Выслушает ваши пожелания и идеи</ContentLi>
                        <ContentLi imgforli={imgForLi} margintop='16px'>Предложит гибкий диапазон цен</ContentLi>
                        <ContentLi imgforli={imgForLi} margintop='16px'>Отразит оптимальное решение в проекте</ContentLi>
                    </ContentUL>
                    <ContentUL margintop='16px'>
                        <EightBlockContentH1>По итогу замера вы получаете технический проект, который:</EightBlockContentH1>
                        <ContentLi imgforli={imgForLi} margintop='16px'>Разработан специально для вас и отличается от типовых конструкций</ContentLi>
                        <ContentLi imgforli={imgForLi} margintop='16px'>Идеально подходит по размерам и цвету, сохраняя архитектурные требования</ContentLi>
                        <ContentLi imgforli={imgForLi} margintop='16px'>Полностью согласован с вами и удовлетворяет ваши потребности</ContentLi>
                    </ContentUL>
                </EightBlockContent>
            </SectionEightBlockContent>
            <Fon widthFon={'245px'} heightFon={'542px'} bottomFon='0' rightFon='' topFon='' leftFon='0' transformFon='rotate(180deg)' />
        </WrapperSectionEight>
    )
}

const imgStyle = css`
  max-width: 100%;
  max-height: 100%;   
  object-fit: contain; 
`

type TypeLi = {
    imgforli: string
    margintop: string
}

type TypeUl = {
    margintop?: string
}

const WrapperSectionEight = styled.section`
    width: ${GlobalStyle.width};
    padding: ${GlobalStyle.padding};
    font-family: ${GlobalStyle.fontFamily};
    font-style: ${GlobalStyle.fontStyle};
    color: ${GlobalStyle.colorText};
    margin: 100px auto 0 auto;
    position: relative;
`
const SectionEightH1 = styled.h1`
    text-align: center;
    font-size: 35px;
    font-weight: 700;
    line-height: 117.518%;
`
const SectionEightP = styled.p`
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    line-height: 117.518%;
    margin-top: 9px;
`
const SectionEightBlockContent = styled.div`
    margin-top: 120px;
    display: flex;
    gap: 27px;
`
const EightBlockContent = styled.div`
    flex-basis: 30%;
`
const ContentUL = styled.ul<TypeUl>`
    margin-top: ${props => props.margintop ? props.margintop : ''};
`
const EightBlockContentH1 = styled.h2`
    font-size: 25px;
    font-weight: 700;
    line-height: 117.518%;
`
const ContentLi = styled.li<TypeLi>`
    font-size: 20px;
    line-height: 117.518%;
    background: url(${props => props.imgforli}) no-repeat left 50%;
    background-size: 10px 10px;
    padding-left: 15px;
    margin-top: ${props => props.margintop};
`
const EightBlockFon = styled.div`
    flex-basis: 30%;

    img {
        ${imgStyle};
    }
`