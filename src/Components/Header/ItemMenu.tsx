import React from 'react'
import mapLogo from '../../Images/Group 4.jpg'
import styled, { keyframes } from 'styled-components'
import { MessengerBlock } from '../MessengerBlock/MessengerBlock'

export type TypeItemMenu = {
    flexBasis?: string
    width?: string
    opacity?: boolean
    positionItem?: string
}

export const ItemMenu: React.FC<TypeItemMenu> = (props) => {

    const { flexBasis, width, opacity, positionItem } = props

    return (
        <ElementsWrapper positionitem={positionItem} flexbasistitle={flexBasis} width={width} opacity={opacity ? opacity.toString() : ''}>
            <ElementMap>
                <MapImg src={mapLogo} alt="mapLogo" />
                <div>
                    <MapP>Найдите нас на карте</MapP>
                    <MapA href='#'>Показать на карте адрес офиса</MapA>
                </div>
            </ElementMap>
            <ElementMessenger>
                <MassengerP>Задайте вопрос на прямую в:</MassengerP>
                <MessengerBlock widthBlock='28px' gapMessenger='6px'/>
            </ElementMessenger>
            <ElementContactTel>
                <PulsatingPoint>
                    <Pulsating></Pulsating>
                    <PulsatingPointTitle>Звоните, сейчас работаем</PulsatingPointTitle>
                </PulsatingPoint>
                <Phone>+7 (499) 130-25-50</Phone>
            </ElementContactTel>
        </ElementsWrapper>
    )
}

type TypeElementsWrapper = {
    flexbasistitle?: string
    width?: string
    opacity?: string
    positionitem?: string
}

const ElementsWrapper = styled.div<TypeElementsWrapper>`
    position: ${props=>props.positionitem ? props.positionitem : ''};
    bottom: -71px;
    left: 0;
    right: 0; 
    flex-basis: ${props => props.flexbasistitle ? props.flexbasistitle : ''};
    width: ${props => props.width ? props.width : ''};
    margin: ${props => props.width ? '0 auto' : ''};
    box-shadow: ${props => props.width ? '2px 2px 4px rgba(141, 141, 141, 0.5)' : ''};
    padding: ${props => props.width ? '10px' : ''};
    opacity: ${props => props.opacity ? 0 : 1};
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: opacity 1s ease;
`
const ElementMap = styled.div`
    display: flex;
    gap: 8px;
    width: 200px;
    height: 30px;
`
const MapImg = styled.img`
    widows: 28px;
    height: 28px;
    background: #ffffff;
    border-radius: 50%;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`
const MapP = styled.p`
    font-size: 13px;
    line-height: 15px;
`
const MapA = styled.a`
    color: #3fac3b;
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    text-decoration-line: underline;
`

const ElementMessenger = styled.div`
    width: 138px;
    height: 44px;
`
const MassengerP = styled.p`
    font-size: 10px;
    line-height: 12px;
    color:#969696;
`

const ElementContactTel = styled.div`
    height: 32px;
    color: #282828;
`
const PulsatingPoint = styled.div`
    display: flex;
    gap: 4px;
    justify-content: space-between;
    align-items: center;
`
const pulse = keyframes`
    from {
        background-color: rgba(0, 175, 71, 1);
    }
    50% {
        background-color: rgba(0, 175, 71, 0.6);
    }
    to {
        background-color: rgba(0, 175, 71, 0.3);
    }
`
const Pulsating = styled.div`
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #00af47;
    animation: ${pulse} 1s linear infinite;
`
const PulsatingPointTitle = styled.p`
    font-size: 10px;
`
const Phone = styled.div`
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
`

