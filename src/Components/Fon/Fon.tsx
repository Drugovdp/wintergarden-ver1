import React from 'react'
import fon from '../../Images/fon.svg'
import styled, { css } from 'styled-components'

type TypePropsFon = {
    widthFon: string
    heightFon: string
    bottomFon?: string
    rightFon?: string
    topFon?: string
    leftFon?: string
    transformFon?: string
    transformOriginFon?: string
}

export const Fon: React.FC<TypePropsFon> = (props) => {

    const { widthFon, heightFon, bottomFon, rightFon, topFon, leftFon, transformFon, transformOriginFon } = props

    return (
        <ContentFon 
            widthfon={widthFon} 
            heightfon={heightFon} 
            bottomfon={bottomFon} 
            rightfon={rightFon}
            topfon={topFon}
            leftfon={leftFon}
            transformfon={transformFon}
            transformoriginfon={transformOriginFon}
            >
                <img src={fon} alt="fon" />
        </ContentFon>
    )
}

const imgStyle = css`
  width: 100%;
  object-fit: contain;
`

type TypeContentFon = {
    widthfon: string
    heightfon: string
    bottomfon?: string
    rightfon?: string
    topfon?: string
    leftfon?: string
    transformfon?: string
    transformoriginfon?: string
}

const ContentFon = styled.div<TypeContentFon>`
    position: absolute;
    width: ${props => props.widthfon};
    height: ${props => props.heightfon};
    right: ${props => props.rightfon ? props.rightfon : ''};
    bottom: ${props => props.bottomfon ? props.bottomfon : ''};
    top: ${props => props.topfon ? props.topfon : ''};
    left: ${props => props.leftfon ? props.leftfon : ''};
    z-index: -1;

    img {
        transform: ${props => props.transformfon ? props.transformfon : ''};
        ${imgStyle}
    }
`
