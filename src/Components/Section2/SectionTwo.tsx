import React from 'react'
import { Button } from '../Button/Button'
import { CalculationForm } from './CalculationConstForm/CalculationForm'
import { CalculationCoastConection } from './CalculationConection/CalculationConection'
import styled from 'styled-components'
import { GlobalStyle } from '../../Styles/GlobalStyles'

type TypePropsSectionTwo = {}

export const SectionTwo: React.FC<TypePropsSectionTwo> = (props) => {

    const { } = props

    return (
        <SectionWrapper>
            <SectionHeader>
                <SectionHeaderH1>Узнайте стоимость зимнего сада из алюминиевого профиля, ответив на вопросы за 2 минуты</SectionHeaderH1>
                <Button
                    callBack={() => { }}
                    width='226px'
                    height='42px'
                    fontSize='12px'
                    fontWeight={500}
                    lineHeight='15px'
                    textTransform='lowercase'
                >
                    + зафиксируем цену на 14 дней
                </Button>
            </SectionHeader>
            <SectionCoast>
                <SectionCoastForm>
                    <CalculationForm />
                </SectionCoastForm>
                <CalculationCoastConection />
            </SectionCoast>
        </SectionWrapper>
    )
}

const SectionWrapper = styled.section`
    width: ${GlobalStyle.width};
    padding: ${GlobalStyle.padding};
    font-family: ${GlobalStyle.fontFamily};
    font-style: ${GlobalStyle.fontStyle};
    color: ${GlobalStyle.colorText};
    height: 899px;
    margin: 64px auto 0 auto;
`
const SectionHeader = styled.div`
    text-align: center;
`
const SectionHeaderH1 = styled.h2`
    font-weight: 700;
    font-size: 35px;
    line-height: 41px;
    margin-bottom: 31px;
`
const SectionCoast = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    margin-top: 116px;
`
const SectionCoastForm = styled.div`
    width: 730px;
    height: 628px;
    background-color: rgba(205, 205, 205, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
`