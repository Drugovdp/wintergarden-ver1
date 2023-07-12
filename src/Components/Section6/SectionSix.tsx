import React from 'react'
import styled from 'styled-components'
import { GlobalStyle } from '../../Styles/GlobalStyles'
import { CardsBlock } from '../CardsBlock/CardsBloks'
import { cardStore } from '../../data/store/cardStore'

type TypePropsSectionSix = {
    setCardID: (cardID: string) => void
}

export const SectionSix: React.FC<TypePropsSectionSix> = (props) => {

    const {setCardID} = props

    const cardsWG = cardStore(state => state.cardsWG)

    const styleButton = {
        width: '288px',
        height: '64px',
        fontSize: '20px',
        fontWeight: 800,
        lineHeight: '24px',
        textTransform: ''
    }

    const styleP = {
        fontWeight: 700,
        fontSize: '25px',
        lineHeight: '117.52%'
    }

    const styleCard = {
        gap: '36px'
    }

    const styleLi = {
        flexBasis: '48%'
    }

    const styleUl = {
        rowGap: '50px',
        columnGap: '30px',
        justifyContent: 'center',
        marginTop: '160px'
    }

    return (
        <WrapperSectionSix>
            <SectionSixHeader>Алюминиевые зимние сады по назначению, эксклюзивные заказы по вашим требованиям</SectionSixHeader>
            <CardsBlock 
                styleButton={styleButton} 
                styleP={styleP} 
                styleCard={styleCard}
                styleLi={styleLi}
                styleUl={styleUl}
                cardsWG={cardsWG}
                setCardID={setCardID}
            />
        </WrapperSectionSix>
    )
}

const WrapperSectionSix = styled.section`
    width: ${GlobalStyle.width};
    padding: ${GlobalStyle.padding};
    font-family: ${GlobalStyle.fontFamily};
    font-style: ${GlobalStyle.fontStyle};
    color: ${GlobalStyle.colorText};
    margin: 100px auto 0 auto;
`
const SectionSixHeader = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 41px;
    text-align: center;
`

