import React from 'react'
import styled, { css } from 'styled-components'
import { GlobalStyle } from '../../Styles/GlobalStyles'
import menegerWhiteFon from '../../Images/menegerWhiteFon.svg'
import { Icon } from '../Icon/Icon'
import { Fon } from '../Fon/Fon'
import { GetEstimateBlockContent } from './GetEstimateBlockContent'
import { GetEstimateBlockInputBtn } from './GetEstimateBlockInputBtn'

type TypePropsSectionFive = {}

export const SectionFive: React.FC<TypePropsSectionFive> = (props) => {

    const { } = props

    return (
        <SectionFiveWrapper>
            <SectionFiveHeader>Гарантируем надежность и точность выполнения обязательства. Реагируем на пожелания заказчика.</SectionFiveHeader>
            <SectionFiveContent>
                <SectionFiveContentText>
                    <BlockText>
                        <Icon />
                        <BoxText>
                            <BoxTextP><span>Комфортные условия оплаты</span></BoxTextP>
                            <BoxTextP>Чтобы снизить финансовую нагрузку для вас,предлагаем разные варианты: 70/30. Несколько способов оплаты: наличными, безналом или на расчетный счет.</BoxTextP>
                        </BoxText>
                    </BlockText>
                    <BlockText>
                        <Icon />
                        <BoxText>
                            <BoxTextP><span>Комфортные условия оплаты</span></BoxTextP>
                            <BoxTextP>Чтобы снизить финансовую нагрузку для вас,предлагаем разные варианты: 70/30. Несколько способов оплаты: наличными, безналом или на расчетный счет.</BoxTextP>
                        </BoxText>
                    </BlockText>
                    <BlockText>
                        <Icon />
                        <BoxText>
                            <BoxTextP><span>Комфортные условия оплаты</span></BoxTextP>
                            <BoxTextP>Чтобы снизить финансовую нагрузку для вас,предлагаем разные варианты: 70/30. Несколько способов оплаты: наличными, безналом или на расчетный счет.</BoxTextP>
                        </BoxText>
                    </BlockText>
                    <BlockText>
                        <Icon />
                        <BoxText>
                            <BoxTextP><span>Комфортные условия оплаты</span></BoxTextP>
                            <BoxTextP>Чтобы снизить финансовую нагрузку для вас,предлагаем разные варианты: 70/30. Несколько способов оплаты: наличными, безналом или на расчетный счет.</BoxTextP>
                        </BoxText>
                    </BlockText>
                </SectionFiveContentText>
                <SectionFiveContentFoto>
                    <img src={menegerWhiteFon} alt="" />
                </SectionFiveContentFoto>
                <Fon widthFon='245px' heightFon='542px' bottomFon='88px' rightFon='0' />
            </SectionFiveContent>
            <SectionFiveSmeta>
                <GetEstimateBlockContent />
                <GetEstimateBlockInputBtn />
            </SectionFiveSmeta>
        </SectionFiveWrapper>
    )
}

const imgStyle = css`
  max-width: 100%;
  max-height: 100%;   
  object-fit: contain; 
`

const flexStyle = css`
    display: flex;
    gap: 16px;
    align-items: center;
`

const SectionFiveWrapper = styled.section`
    width: ${GlobalStyle.width};
    padding: ${GlobalStyle.padding};
    font-family: ${GlobalStyle.fontFamily};
    font-style: ${GlobalStyle.fontStyle};
    color: ${GlobalStyle.colorText};
    height: 1192px;
    margin: 100px auto 0 auto;
`
const SectionFiveHeader = styled.h1`
    font-weight: 700;
    font-size: 35px;
    font-style: normal;
    line-height: 104.52%;
    text-align: center;
`
const SectionFiveContent = styled.div`
    position: relative;
    display: flex;
    gap: 2%;
    align-items: center;
    z-index: 1;
`
const SectionFiveContentText = styled.div`
    flex-basis: 474px;
`
const BlockText = styled.div`
    ${flexStyle}
    margin-bottom: 48px;

    &:last-of-type {
        margin-bottom: 0;
    }
`
const BoxText = styled.div``
const BoxTextP = styled.p`
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;

    span {
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        margin-bottom: 4px;
    }
`
const SectionFiveContentFoto = styled.div`
    flex-basis: 473px;
    height: 759px;
    img {
        ${imgStyle}
    }
`
const SectionFiveSmeta = styled.div`
    height: 341px;
    border-radius: 20px;
    background-image: url('/src/view/Images/smetaFon.svg');
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden; 
`
