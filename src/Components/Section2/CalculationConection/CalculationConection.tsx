import React from 'react'
import manager from '../../../Images/manager.svg'
import tablet from '../../../Images/tablet.svg'
import handset from '../../../Images/handset.svg'
import styled, { css } from 'styled-components'

type TypePropsCalculationCoastConection = {}

export const CalculationCoastConection: React.FC<TypePropsCalculationCoastConection> = (props) => {

    const {} = props

    return (
        <FormConnectInfo handset={handset}>
            <InfoHeader>ПРОДОЛЖАЙТЕ ОТВЕЧАТЬ ЧТОБЫ МЫ ПРИСТУПИЛИ К РАСЧЕТУ СТОИМОСТИ</InfoHeader>
            <InfoPhoto>
                <img src={manager} alt="photo manager" />
            </InfoPhoto>
            <InfoTitle>Главный менеджер “АлСтрой - Групп” лично ведет каждый проект</InfoTitle>
            <InfoMain>
                <InfoTablet>
                    <img src={tablet} alt="tablet" />
                </InfoTablet>
                <InfoText>В конце теста получите: расчет стоимости, которую зафиксируем на 14 дней</InfoText>
            </InfoMain>
            <ConnectTel>
                <ConnectTelTitle>Если возникли трудности с ответом — позвоните</ConnectTelTitle>
                <ConnectTelTitleContact>
                    <ContactLogo handset={handset}></ContactLogo>
                    <ContactLogoTel>+7 (499) 130-25-50</ContactLogoTel>
                </ConnectTelTitleContact>
            </ConnectTel>
        </FormConnectInfo>
    )
}

const width270 = css`
  width: 80%;
`
const fontfontWeight700 = css`
  font-weight: 700;
`
const fontfontWeight500 = css`
  font-weight: 500;
`
const color = css`
  color: #ffffff;
`
const imgStyle = css`
  max-width: 100%;
  max-height: 100%;   
  object-fit: contain;
`

type TypeFormConnectInfo = {
    handset: string
}

const FormConnectInfo = styled.div<TypeFormConnectInfo>`
    width: 350px;
    height: 628px;
    background: #282728;
    border-radius: 20px;
    ${color};
`
const InfoHeader = styled.div`
    ${fontfontWeight700};
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    padding: 0 45px;
    margin: 27px auto 0 auto;
`
const InfoPhoto = styled.div`
    ${width270};
    margin: 16px auto;

    img {
     ${imgStyle}
    }
`
const InfoTitle = styled.div`
    ${fontfontWeight700};
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    margin: 0 auto 16px auto;
    padding: 0 36px;
`
const InfoMain = styled.div`
    display: flex;
    align-items: center;
    gap: 3%;
    ${width270};
    margin: 0 auto 16px auto;
`
const InfoTablet = styled.div`
    flex-basis: 40%;

    img {
     ${imgStyle}
    }
`
const InfoText = styled.div`
    flex-basis: auto;
    ${fontfontWeight500};
    font-size: 10px;
    line-height: 12px;
    text-align: center;
`
const ConnectTel = styled.div`
    ${width270};
    background-color: #3fac3b;
    border: none;
    border-radius: 50px;
    margin: 0 auto 27px auto;
    padding: 2%;
    overflow: hidden;
`
const ConnectTelTitle = styled.div`
    ${width270};
    ${fontfontWeight500};
    font-size: 10px;
    line-height: 12px;
    margin: 10px auto 5px auto;
    text-align: center;
`
const ConnectTelTitleContact = styled.div`
    display: flex;
    width: 173px;
    gap: 8px;
    align-items: center;
    margin: 0 auto;
`
const ContactLogo = styled.div<TypeFormConnectInfo>`
    width: 23px;
    height: 23px;
    background-image: url('${props => props.handset}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 11px;
    background-color: #308d2c;
    border-radius: 50%;
    border: 4px solid #65e761;
`
const ContactLogoTel = styled.div`
    ${fontfontWeight700};
    font-size: 15px;
    line-height: 18px;
`