import React from 'react'
import styled, { css } from 'styled-components'
import foto from '../../Images/Rectangle 29.jpg'
import { GlobalStyle } from '../../Styles/GlobalStyles'
import { Fon } from '../Fon/Fon'
import { dataSectionThree } from '../../data/dataSectionThree'

type TypeSectionThree = {}

export const SectionThree: React.FC<TypeSectionThree> = (props) => {

    const { } = props

    const Item = dataSectionThree.map(el => {
        return (
            <ItemContentWrapper key={el.id}>
                <ImgContent>
                    <img src={el.src} alt={el.alt} />
                </ImgContent>
                <TextContent>
                    <p>{el.title}</p>
                </TextContent>
            </ItemContentWrapper>
        )
    })

    return (
        <SectionThreeWrapper>
            <FlexWrapper>
                <img src={foto} alt="" />
            </FlexWrapper>
            <FlexTextWrapper>
                <FlexTextP>Более 80% компаний представляющих аналогичные услуги изготавливают конструкции из некачественных материалов, а так же сталкиваются со сложностями при монтаже.</FlexTextP>
                <FlexTextP>давая мнимые скидки до 70%</FlexTextP>
                <ContentWrapper>
                    {Item}
                </ContentWrapper>
            </FlexTextWrapper>
            <Fon widthFon='337px' heightFon='738px' bottomFon='0' rightFon='0'/>
        </SectionThreeWrapper>
    )
}

const imgStyle = css`
  max-width: 100%;
  max-height: 100%;   
  object-fit: contain;
`

const SectionThreeWrapper = styled.section`
    position: relative;
    display: flex;
    gap: 2%;
    width: ${GlobalStyle.width};
    padding: ${GlobalStyle.padding};
    font-family: ${GlobalStyle.fontFamily};
    font-style: ${GlobalStyle.fontStyle};
    color: ${GlobalStyle.colorText};
    height: 1125px;
    margin: 64px auto 0 auto;
    z-index: 1;
`
const FlexWrapper = styled.div`
    flex-basis: 40%;

    img {
     ${imgStyle}
    }
`
const FlexTextWrapper = styled.div`
    flex-basis: 59%;
    display: flex;
    flex-direction: column;
    gap: 4%;
`
const FlexTextP = styled.p`
    font-weight: 500;
    font-size: 34px;
    line-height: 41px;
`
const ContentWrapper = styled.div`
    width: 643px;
    height: 310px;
    display: flex;
    flex-wrap: wrap;
`
const ItemContentWrapper = styled.div`
    flex-basis: 49%;
    height: 70px;
    display: flex;
    align-items: center;
    gap: 2%;
`
const ImgContent = styled.div`
    flex-basis: 20%;
    border-radius: 50%;

    img {
     ${imgStyle}
    }
`
const TextContent = styled.div`
    flex-basis: 79%;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #282828;
`