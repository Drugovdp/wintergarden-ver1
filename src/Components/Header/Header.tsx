import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { GlobalStyle } from '../../Styles/GlobalStyles'
import { ItemMenu } from './ItemMenu'
import headerLogo from '../../Images/headerLogo.svg'

type TypePropsHeader = {
    sizeWindow: number
}

export const Header: React.FC<TypePropsHeader> = (props) => {

    const { sizeWindow } = props

    const [controlMenu, setControlMenu] = useState(true)

    useEffect(() => {
        setControlMenu(true)
    }, [sizeWindow])

    const onClickForControlMenu = () => {
        controlMenu ? setControlMenu(false) : setControlMenu(true)
    }

    return (
        sizeWindow >= 1000 ?
            <HeaderWrapper>
                <HeaderLogo src={headerLogo} alt='logo' />
                <HeaderTitle flexbasistitle={'20%'} lineheighttitle={'15px'}>Зимние сады из алюминиевого профиля под ключ по всем дружественным странам</HeaderTitle>
                <ItemMenu flexBasis={'58%'} />
            </HeaderWrapper>
            :
            <HeaderWrapper>
                <HeaderLogo src={headerLogo} alt='logo' />
                <HeaderTitle flexbasistitle={'70%'} lineheighttitle={'45px'}>Зимние сады из алюминиевого профиля под ключ по всем дружественным странам</HeaderTitle>
                {controlMenu ?
                    <ButtonSmallMenu onClick={onClickForControlMenu}>
                        <span></span><span></span><span></span>
                    </ButtonSmallMenu>
                    :
                    <ButtonSmallMenu onClick={onClickForControlMenu}>
                        <span style={{ transform: 'rotate(45deg)', position: 'absolute' }}></span><span style={{ transform: 'rotate(-45deg)', position: 'absolute' }}></span>
                    </ButtonSmallMenu>
                }
                <ItemMenu positionItem='absolute' width={'90%'} opacity={controlMenu} />
            </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
    position: relative;
    width: ${GlobalStyle.width};
    padding: ${GlobalStyle.padding};
    margin: ${GlobalStyle.margin};
    font-family: ${GlobalStyle.fontFamily};
    font-style: ${GlobalStyle.fontStyle};
    height: 71px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    color: #282828;
`
const HeaderLogo = styled.img``
type TypeHeaderTitle = {
    flexbasistitle: string
    lineheighttitle: string
}
const HeaderTitle = styled.div<TypeHeaderTitle>`
    flex-basis: ${props => props.flexbasistitle};
    height: 45px;
    font-weight: 500;
    font-size: 13px;
    line-height: ${props => props.lineheighttitle};
`
const ButtonSmallMenu = styled.div`
    flex-basis: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: 2px solid #282828;
    align-items: center;
    cursor: pointer;

    span {
        display: block;
        width: 22px;
        margin: 2px;
        border: 2px solid #282828;
        background-color: #282828;
        transition: transform 1s ease
    }
`
