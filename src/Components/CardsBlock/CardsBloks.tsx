import React from 'react'
import styled, { css } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { TypeCardsWGElem } from '../../data/dataForPageWG'
import { Button } from '../Button/Button'

type StyleButton = {
    width: string
    height: string
    fontSize: string
    fontWeight: number
    lineHeight: string
    textTransform: string
}

type TypeStyleP = {
    fontWeight: number
    fontSize: string
    lineHeight: string
}

type TypeStyleCard = {
    gap: string
}

type TypeStyleLi = {
    flexBasis: string
}

type TypestyleUl = {
    rowGap: string
    columnGap: string
    justifyContent: string
    marginTop: string
}

type TypePropsCardsBlock = {
    styleButton: StyleButton
    styleP: TypeStyleP
    styleCard: TypeStyleCard
    styleLi: TypeStyleLi
    styleUl: TypestyleUl
    cardsWG: TypeCardsWGElem[]
    setCardID: (cardID: string) => void
}

export const CardsBlock: React.FC<TypePropsCardsBlock> = (props) => {

    const {styleButton, styleP, styleCard, styleLi, styleUl, cardsWG, setCardID} = props

    const navigation = useNavigate()
    
    const onClickButtonHandler = (cardID: string, namePage: string) => {
        setCardID(cardID)
        navigation(namePage)
    }

    return (
        <WrapperContentUl styleul={styleUl}>
            {cardsWG.map(el =>
                <ContentLi key={el.id} styleli={styleLi}>
                    <Card stylecard={styleCard}>
                        <img src={el.src} alt={el.alt}/>
                        <CardP stylep={styleP}>{el.title}</CardP>
                        <Button
                            width={styleButton.width}
                            height={styleButton.height}
                            fontSize={styleButton.fontSize}
                            fontWeight={styleButton.fontWeight}
                            lineHeight={styleButton.lineHeight}
                            textTransform={styleButton.textTransform}
                            callBack={()=>onClickButtonHandler(el.id, el.alt)}
                        >
                            Подробнее
                        </Button>
                    </Card>
                </ContentLi>
            )}
        </WrapperContentUl>
    )
}

const imgStyle = css`
  max-width: 100%;
  max-height: 100%;   
  object-fit: contain; 
`
type TypeCardP = {
    stylep: TypeStyleP
}

type TypeCard = {
    stylecard: TypeStyleCard
}

type TypeLi = {
    styleli: TypeStyleLi
}

type TypeUl = {
    styleul: TypestyleUl
} 

const WrapperContentUl = styled.ul<TypeUl>`
    display: flex;
    flex-wrap: wrap;
    column-gap: ${props=>props.styleul.columnGap ? props.styleul.columnGap : ''};
    row-gap: ${props=>props.styleul.rowGap ? props.styleul.rowGap : ''};
    justify-content: ${props=>props.styleul.justifyContent};
    margin-top: ${props=>props.styleul.marginTop};
`
const ContentLi = styled.li<TypeLi>`
    flex-basis: ${props=>props.styleli.flexBasis};
    background: #FFFFFF;
    border-radius: 10px;
    transition: box-shadow 0.5s ease;

    &:hover {
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    }
`
const Card = styled.div<TypeCard>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${props=>props.stylecard.gap};
    padding: 20px;

    img {
        ${imgStyle}
    }
`
const CardP = styled.p<TypeCardP>`
    font-style: normal;
    font-weight: ${props=>props.stylep.fontWeight};
    font-size: ${props=>props.stylep.fontSize};
    line-height: ${props=>props.stylep.lineHeight};
    text-align: center;
    color: #282828;
`