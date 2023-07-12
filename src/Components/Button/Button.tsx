import styled from "styled-components"

type TypeButton = {
    children: React.ReactNode
    width: string
    height: string
    fontSize: string
    fontWeight: number
    lineHeight: string
    textTransform: string
    disabledBtn?: boolean
    boxShadow?: string
    backgroundBtn?: string
    callBack: () => void
}

export const Button: React.FC<TypeButton> = (props) => {

    const { children, width, height, fontSize, fontWeight, lineHeight, textTransform, disabledBtn, boxShadow, backgroundBtn, callBack } = props

    const onClickButtonHandler = () => {
        callBack()
    }

    return (
        <WrapperButton
            width={width}
            height={height}
            fontsizebtn={fontSize}
            fontweightbtn={fontWeight}
            lineheightbtn={lineHeight}
            texttransform={textTransform}
            onClick={onClickButtonHandler}
            boxshadowbtn={boxShadow}
            backgroundbtn={backgroundBtn}
            disabled={disabledBtn ? disabledBtn : false}
        >
            {children}
        </WrapperButton>
    )
}

type TypeWrapperButton = {
    width: string
    height: string
    fontsizebtn: string
    fontweightbtn: number
    lineheightbtn: string
    texttransform: string
    boxshadowbtn?: string
    backgroundbtn?: string
    disabled: boolean
}

const WrapperButton = styled.button<TypeWrapperButton>`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 50px;
    background: ${props=>props.backgroundbtn ? props.backgroundbtn : '#3FAC3B'};
    border: ${props=>props.backgroundbtn ? '1px solid #3FAC3B' : 'none'};
    color: ${props=>props.backgroundbtn ? '#3FAC3B' : '#FFFFFF'};
    font-size: ${props => props.fontsizebtn};
    font-weight: ${props => props.fontweightbtn};
    line-height: ${props => props.lineheightbtn};
    text-transform: ${props => props.texttransform};
    cursor: pointer;
    box-shadow: ${props=>props.boxshadowbtn};
    opacity: ${props => props.disabled ? 0.5 : 1};
`