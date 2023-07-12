import React from 'react'
import styled, { css } from 'styled-components'
import { Icon } from '../Icon/Icon'

type TypePropsContentDescription = {
    sizeWindow: number
}

export const ContentDescription: React.FC<TypePropsContentDescription> = (props) => {

    const { sizeWindow } = props

    return (
        <DescriptionWrapper sizewindows={sizeWindow}>
            <DescriptionWrapperText1>
                <Icon />
                <BoxText><BoxTextP><span>Полный цикл работ</span></BoxTextP><BoxTextP>Берем на себя все заботы от старта до финала проекта</BoxTextP></BoxText>
            </DescriptionWrapperText1>
            <DescriptionWrapperText2>
                <Icon />
                <BoxText><BoxTextP><span>Скидки и бонусы</span></BoxTextP><BoxTextP>Дарим приятные бонусы и скидки при заказе</BoxTextP></BoxText>
            </DescriptionWrapperText2>
            <DescriptionWrapperText3>
                <Icon />
                <BoxText><BoxTextP><span>Высокий уровень компетенции сотрудников</span></BoxTextP><BoxTextP>Гарантируем высокое качество и легкую эксплуатацию</BoxTextP></BoxText>
            </DescriptionWrapperText3>
            <DescriptionWrapperText4>
                <Icon />
                <BoxText><BoxTextP><span>Обслуживание</span></BoxTextP><BoxTextP>Опытные специалисты проводят комплекс работ по гарантийному обслуживанию</BoxTextP></BoxText>
            </DescriptionWrapperText4>
        </DescriptionWrapper>
    )
}

const flexStyle = css`
    display: flex;
    gap: 16px;
    align-items: center;
`

type TypeDescriptionWrapper = {
    sizewindows: number
}

const DescriptionWrapper = styled.div<TypeDescriptionWrapper>`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas: 
    'A B'
    'C D';
    gap: ${props => props.sizewindows === 1112 ? `${32}px`
        : props.sizewindows === 1000 ? `${26}px` : `${18}px`};
`
const DescriptionWrapperText1 = styled.div`
    ${flexStyle}
    grid-area: A;
`
const DescriptionWrapperText2 = styled.div`
    ${flexStyle}
    grid-area: C;
`
const DescriptionWrapperText3 = styled.div`
    ${flexStyle}
    grid-area: B;
`
const DescriptionWrapperText4 = styled.div`
    ${flexStyle}
    grid-area: D;
`
const BoxText = styled.div``
const BoxTextP = styled.p`
    display: block;
    font-size: 13px;
    line-height: 15px;

    span {
        font-weight: 700; 
    }
`
