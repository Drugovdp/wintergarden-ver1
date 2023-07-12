import React, { ChangeEvent } from "react";
import styled from "styled-components";

type TypeInput = {
    width: string
    height: string
    type: string
    placeholder?: string
    pattern?: string
    value?: string
    boxShadowInput?: string
    onChangeValueInput: (value: string) => void
}

export const Input: React.FC<TypeInput> = (props) => {

    const { width, height, type, placeholder, pattern, value, boxShadowInput, onChangeValueInput } = props

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeValueInput(e.currentTarget.value)
    }

    return (
        <InputWrapper
            width={width}
            height={height}
            type={type}
            placeholder={placeholder}
            pattern={pattern}
            value={value}
            boxshadowinput={boxShadowInput}
            onChange={onChangeHandler}
        />
    )
}

type TypeInputWrapper = {
    width: string
    height: string
    boxshadowinput?: string
}

const InputWrapper = styled.input<TypeInputWrapper>`
    appearance: none;
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 50px;
    border: none;
    background: #ffffff;
    color: #282828;
    font-weight: 300;
    font-size: 13px;
    line-height: 15px;
    box-shadow: ${props => props.boxshadowinput};

    &[placeholder] {
      text-align: center;
      color: #282828;
      font-weight: 300;
      font-size: 13px;
      line-height: 15px;
    }
`