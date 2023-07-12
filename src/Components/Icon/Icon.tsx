import React from 'react'
import star from '../../Images/Star 1.svg'
import check from '../../Images/gal.svg'
import styled from 'styled-components'

type TypePropsIcon = {}

export const Icon: React.FC<TypePropsIcon> = (props) => {

    const {} = props

    return (
        <Star>
            <StarStar src={star} alt="star" />
            <StarCheck src={check} alt="check" />
        </Star>
    )
}

const Star = styled.div`
    position: relative;
    width: 28px;
    height: 28px;
`
const StarStar = styled.img``
const StarCheck = styled.img`
    position: absolute;
    width: 11px;
    height: 11px;
    left: 3px;
    top: 3px;
    transform: translate(50%, 50%);
`
