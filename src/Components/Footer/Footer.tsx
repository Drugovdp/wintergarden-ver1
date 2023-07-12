import React from 'react'
import styled, { css } from 'styled-components'
import { GlobalStyle } from '../../Styles/GlobalStyles'
import headerLogo from '../../Images/headerLogo.svg'

type TypePropsFooter = {}

export const Footer: React.FC<TypePropsFooter> = (props) => {

    const { } = props

    return (
        <FooterWrapper>
            <FooterWrapperLogo src={headerLogo} alt="manager" />
            <FooterWrapperP>Создаем зимние сады с 2015 года</FooterWrapperP>
            <FooterWrapperP>© Все права защищены 2023</FooterWrapperP>
            <FooterWrapperP>
                <FooterWrapperPA href=''>Политика конфиденциальности</FooterWrapperPA>
            </FooterWrapperP>
        </FooterWrapper>
    )
}

const styleTegAP = css`
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 119.52%;
    color: #FFFFFF;
`

const FooterWrapper = styled.footer`
    width: ${GlobalStyle.width};
    padding: ${GlobalStyle.padding};
    font-family: ${GlobalStyle.fontFamily};
    font-style: ${GlobalStyle.fontStyle};
    height: 69px;
    margin: 100px auto 0 auto;
    background-color: #555555;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const FooterWrapperLogo = styled.img``
const FooterWrapperP = styled.p`
    ${styleTegAP}
`
const FooterWrapperPA = styled.a`
    ${styleTegAP}
`

