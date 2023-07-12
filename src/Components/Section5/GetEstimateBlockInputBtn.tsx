import React from 'react'
import styled from 'styled-components'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'

type TypePropsGetEstimateBlockInputBtn = {}

export const GetEstimateBlockInputBtn: React.FC<TypePropsGetEstimateBlockInputBtn> = (props) => {

    const { } = props

    return (
        <GetEstimateInputBtn>
            <Input
                width='298px'
                height='60px'
                type='text'
                placeholder='Ваше имя'
                boxShadowInput='0px 4px 4px rgba(0, 0, 0, 0.07)'
                onChangeValueInput={() => { }}
            />
            <Input
                width='298px'
                height='60px'
                type='text'
                placeholder='Ваш телефон'
                boxShadowInput='0px 4px 4px rgba(0, 0, 0, 0.07)'
                onChangeValueInput={() => { }}
            />
            <Button width='298px' height='60px' fontSize='18px' fontWeight={600} lineHeight='22px' textTransform='' callBack={() => { }}>Записаться на замер</Button>
        </GetEstimateInputBtn>
    )
}

const GetEstimateInputBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

