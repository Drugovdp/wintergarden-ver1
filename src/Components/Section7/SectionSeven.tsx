import React from 'react'
import styled, { css } from 'styled-components'
import { GlobalStyle } from '../../Styles/GlobalStyles'
import individualImg from '../../Images/individualImg.png'
import { Button } from '../Button/Button'
import { Fon } from '../Fon/Fon'

type TypePropsSectionSeven = {}

export const SectionSeven: React.FC<TypePropsSectionSeven> = (props) => {

    const { } = props

    return (
        <WrapperSectionSeven>
            <SectionSevenHeader>Индивидуальность – это просто!</SectionSevenHeader>
            <SectionSevenContent>
                <SectionSevenContentImg>
                    <img src={individualImg} alt="individualImg" />
                </SectionSevenContentImg>
                <SectionSevenContentBox>
                    <SectionSevenContentText>
                        <p>Наши технологии позволяют окрашивать алюминиевые конструкции в любой цвет, а широкая палитра цветов может придать выразительность архитектурному решению дома. Мы можем нанести эффект любой структуры дерева на поверхности любой сложности. Нанесенный декор может быть использован как внутри, так и вне помещения. Перенесем любое изображение на стекле в виде витража, отвечающее самым изысканным вкусам. Неповторимость работ превратит ваш зимний сад в настоящее произведение искусства.</p>
                    </SectionSevenContentText>
                    <Button width='257px' height='58px' fontSize='13px' fontWeight={800} lineHeight='' textTransform='uppercase' callBack={()=>{}}>Рассчитать стоимость</Button>
                </SectionSevenContentBox>
            </SectionSevenContent>
            <Fon widthFon='245px' heightFon='587px' bottomFon='0px' rightFon='0px' />
            <Fon widthFon='245px' heightFon='441px' bottomFon='' rightFon='' topFon='0' leftFon='0' transformFon='rotate(180deg)'/>
        </WrapperSectionSeven>
    )
}

const imgStyle = css`
  max-width: 100%;
  max-height: 100%;   
  object-fit: contain; 
`

const WrapperSectionSeven = styled.section`
    width: ${GlobalStyle.width};
    padding: ${GlobalStyle.padding};
    font-family: ${GlobalStyle.fontFamily};
    font-style: ${GlobalStyle.fontStyle};
    color: ${GlobalStyle.colorText};
    margin: 100px auto 0 auto;
    position: relative;
`
const SectionSevenHeader = styled.h1`
    font-weight: 700;
    font-size: 35px;
    line-height: 41px;
    text-align: center;
    margin-top: 106px;
`
const SectionSevenContent = styled.div`
    display: flex;
    gap: 64px;
    width: 90%;
    margin:157px auto 216px auto;
`
const SectionSevenContentImg = styled.div`
    flex-basis: 433px;

    img {
        ${imgStyle}
    }
`
const SectionSevenContentBox = styled.div`
    flex-basis: 478px;
    display: flex;
    gap: 32px;
    flex-direction: column;
`
const SectionSevenContentText = styled.div`
    text-align: justify;

    p {
        font-size: 18px;
        font-weight: 500;
        line-height: 21px;
    }
`