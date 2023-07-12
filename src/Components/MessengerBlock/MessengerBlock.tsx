import React from 'react'
import instagram from '../../Images/instagram.jpg'
import whatsapp from '../../Images/whatsapp.jpg'
import telegram from '../../Images/telegram.jpg'
import vk from '../../Images/vk.jpg'
import styled from 'styled-components'

type TypePropsMessengerBlock = {
    widthBlock: string
    gapMessenger?: string
    justifiContent?: string
    marginBlock?: string
}

export const MessengerBlock: React.FC<TypePropsMessengerBlock> = (props) => {

    const { widthBlock, gapMessenger, justifiContent, marginBlock } = props

    return (
        <MessengerBlockFlex gapmessenger={gapMessenger} justificontent={justifiContent} marginblock={marginBlock}>
            <MessengerA widthblock={widthBlock} href="#"><img src={instagram} alt="logoInstagram" /></MessengerA>
            <MessengerA widthblock={widthBlock} href="#"><img src={whatsapp} alt="logoWhatsapp" /></MessengerA>
            <MessengerA widthblock={widthBlock} href="#"><img src={telegram} alt="logoTelegram" /></MessengerA>
            <MessengerA widthblock={widthBlock} href="#"><img src={vk} alt="logoVk" /></MessengerA>
        </MessengerBlockFlex>
    )
}

type TypeMessengerBlockFlex = {
    widthblock?: string
    gapmessenger?: string
    justificontent?: string
    marginblock?: string
}

const MessengerBlockFlex = styled.div<TypeMessengerBlockFlex>`
    display: flex;
    justify-content: ${props=>props.justificontent ? props.justificontent : ''};
    margin-top: ${props=>props.marginblock ? props.marginblock : '2px'};
    gap: ${props => props.gapmessenger};
`
const MessengerA = styled.a<TypeMessengerBlockFlex>`
    width: ${props => props.widthblock};
`
