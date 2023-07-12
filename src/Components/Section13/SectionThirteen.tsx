import React from 'react'
import { keyframes, styled } from 'styled-components'
import { GlobalStyle } from '../../Styles/GlobalStyles'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import { MessengerBlock } from '../MessengerBlock/MessengerBlock'
import mapBlockBlock from '../../Images/mapBlock13.png'

type TypePropsSectionThirteen = {}

export const SectionThirteen: React.FC<TypePropsSectionThirteen> = (props) => {

    const { } = props

    return (
        <WrapperThirteen>
            <WrapperFlex>
                <BtnMargin>
                    <ContentBlockBtn>
                        <ContentBlockBtnH3><span>Оставьте номер,</span><br></br> позвоним в течение 15 минут в рабочее время</ContentBlockBtnH3>
                        <Input
                            width={'332px'}
                            height={'54px'}
                            type={'text'}
                            boxShadowInput={'0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}
                            placeholder={'Ваш номер телефона'}
                            onChangeValueInput={() => { }}
                        />
                        <Button
                            width={'332px'}
                            height={'54px'}
                            fontSize={'18px'}
                            fontWeight={600}
                            lineHeight={'normal'}
                            textTransform={''}
                            callBack={() => { }}
                        >
                            Получить консультацию
                        </Button>
                    </ContentBlockBtn>
                </BtnMargin>
                <ContentBlockContact>
                    <ContentBlockContactH3>Звоните</ContentBlockContactH3>
                    <ElementContactTel>
                        <PulsatingPoint>
                            <Pulsating></Pulsating>
                            <PulsatingPointTitle>Звоните, сейчас работаем</PulsatingPointTitle>
                        </PulsatingPoint>
                        <Phone>+7 (499) 130-25-50</Phone>
                        <Email>sales@alstroy-group.ru</Email>
                        <MessengerBlock widthBlock={'30px'} gapMessenger={'8px'} justifiContent={''} marginBlock={'24px'} />
                        <Address>125080, г. Москва, Волокаламское шоссе, д.1, стр. 1</Address>
                    </ElementContactTel>
                </ContentBlockContact>
                <MapBlock>
                    <img src={mapBlockBlock} alt="mapBlockBlock" />
                </MapBlock>
            </WrapperFlex>
        </WrapperThirteen>
    )
}

const WrapperThirteen = styled.div`
    width: ${GlobalStyle.width};
    padding: ${GlobalStyle.padding};
    font-family: ${GlobalStyle.fontFamily};
    font-style: ${GlobalStyle.fontStyle};
    color: ${GlobalStyle.colorText};
    margin: 100px auto 0 auto;
`
const WrapperFlex = styled.div`
    display: flex;
    gap: 26px;
`
const BtnMargin = styled.div`
    flex-basis: 35%;
    overflow: hidden;
`
const ContentBlockBtn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    margin: 78px 30px;
`
const ContentBlockBtnH3 = styled.h3`
    text-align: center;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: 119.518%;

    span {
        font-weight: 700;
    }
`
const ContentBlockContact = styled.div`
    flex-basis: 28%;
`
const ContentBlockContactH3 = styled.h3`
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const ElementContactTel = styled.div`
    height: 32px;
    color: #282828;
    margin-top: 24px;
`
const PulsatingPoint = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
`
const pulse = keyframes`
    from {
        background-color: rgba(0, 175, 71, 1);
    }
    50% {
        background-color: rgba(0, 175, 71, 0.6);
    }
    to {
        background-color: rgba(0, 175, 71, 0.3);
    }
`
const Pulsating = styled.div`
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #00af47;
    animation: ${pulse} 1s linear infinite;
`
const PulsatingPointTitle = styled.p`
    font-size: 15px;
`
const Phone = styled.div`
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 24px;
`
const Email = styled.div`
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 24px;
`
const Address = styled.div`
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 24px;
`
const MapBlock = styled.div`
    img {
        width: 100%;   
        object-fit: cover;
    }
`