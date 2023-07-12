import React from 'react'
import { styled } from 'styled-components'
import { GlobalStyle } from '../../Styles/GlobalStyles'
import { foundationStore } from '../../data/store/blockInfoFoundationStore'
import { CardsBlock } from '../CardsBlock/CardsBloks'

type TypePropsSectionNine = {
    setCardID: (cardID: string) => void
}

export const SectionNine: React.FC<TypePropsSectionNine> = (props) => {

    const { setCardID } = props

    const cardsWG = foundationStore(state => state.cardsWG)

    const styleButton = {
        width: '188px',
        height: '44px',
        fontSize: '20px',
        fontWeight: 500,
        lineHeight: '24px',
        textTransform: ''
    }

    const styleP = {
        fontWeight: 500,
        fontSize: '25px',
        lineHeight: '117.52%'
    }

    const styleCard = {
        gap: '32px'
    }

    const styleLi = {
        flexBasis: '30%'
    }

    const styleUl = {
        rowGap: '',
        columnGap: '2%',
        justifyContent: 'space-between',
        marginTop: '142px'
    }

    return (
        <WrapperSectionNine>
            <SectionNinetH1>Установка на готовый фундамент либо помощь в его подборе</SectionNinetH1>
            <CardsBlock
                styleButton={styleButton}
                styleP={styleP}
                styleCard={styleCard}
                styleLi={styleLi}
                styleUl={styleUl}
                cardsWG={cardsWG}
                setCardID={setCardID}
            />
        </WrapperSectionNine>
    )
}

const WrapperSectionNine = styled.section`
    width: ${GlobalStyle.width};
    padding: ${GlobalStyle.padding};
    font-family: ${GlobalStyle.fontFamily};
    font-style: ${GlobalStyle.fontStyle};
    color: ${GlobalStyle.colorText};
    margin: 100px auto 0 auto;
`
const SectionNinetH1 = styled.h1`
    font-weight: 700;
    font-size: 35px;
    line-height: 41px;
    text-align: center;
`
