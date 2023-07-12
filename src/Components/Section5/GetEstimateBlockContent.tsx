import React from 'react'
import styled from 'styled-components'
import { MessengerBlock } from '../MessengerBlock/MessengerBlock'

type TypePropsGetEstimateBlock = {}

export const GetEstimateBlockContent: React.FC<TypePropsGetEstimateBlock> = (props) => {

    const { } = props

    return (
        <GetEstimate>
            <GetEstimateTop>
                <GetEstimateContent>
                    <ContentH3>Получите подробную смету</ContentH3>
                    <ContentBlockP>
                        <ContentLine></ContentLine>
                        <ContentP>Рассчитаем и подготовим смету, уже сегодня!</ContentP>
                    </ContentBlockP>
                </GetEstimateContent>
                <GetEstimateContact>
                    <GetEstimateContactTitle>Позвоните или напишите</GetEstimateContactTitle>
                    <GetEstimateContactTel>+7 (499) 130-25-50</GetEstimateContactTel>
                    <MessengerBlock widthBlock='28px' gapMessenger='16px' />
                </GetEstimateContact>
            </GetEstimateTop>
        </GetEstimate>
    )
}

const GetEstimate = styled.div`
    margin: 69px 54px;
`
const GetEstimateTop = styled.div`
    display: flex;
    align-items: center;
`
const GetEstimateContent = styled.div`
    flex-basis: 70%;
    display: flex;
    flex-direction: column;
    gap: 16px;
`
const ContentH3 = styled.h3`
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
`
const ContentBlockP = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`
const ContentLine = styled.div`
    width: 78px;
    height: 0;
    border: 2px solid #3FAC3B;
`
const ContentP = styled.p`
    font-style: normal;
    font-size: 25px;
    font-weight: 400;
    line-height: 30px;
`
const GetEstimateContact = styled.div`
    flex-basis: 29%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-end;
`
const GetEstimateContactTitle = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
`
const GetEstimateContactTel = styled.p`
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
`
