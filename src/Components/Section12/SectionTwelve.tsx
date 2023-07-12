import React from 'react'
import styled from 'styled-components'
import { GlobalStyle } from '../../Styles/GlobalStyles'
import fonSection12 from '../../Images/fonSection12.png'
import contentBlockImg from '../../Images/bookImg.svg'
import fonContentBlockImf from '../../Images/fonContentBlockImf.png'
import { MessengerBlock } from '../MessengerBlock/MessengerBlock'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'

type TypePropsSectionTwelve = {}

export const SectionTwelve: React.FC<TypePropsSectionTwelve> = (props) => {

    const { } = props

    return (
        <WrapperSectionTwelve>
            <FonSection>
                <ContentBox>
                    <ContentBlockInfo>
                        <ContentBlockInfoH3>Оставьте заявку, оперативно рассчитаем стоимость с подробным описанием и ценами</ContentBlockInfoH3>
                        <ContentBlockInfoTitle>
                            <BlockInfoTitleLine></BlockInfoTitleLine>
                            <BlockInfoTitleText>вдохновитесь идеями</BlockInfoTitleText>
                        </ContentBlockInfoTitle>
                        <ContentMessenger>
                            <TitleMessenger>Куда выслать расчет стоимости?</TitleMessenger>
                            <MessengerBlock widthBlock={'30px'} gapMessenger={'16px'} />
                        </ContentMessenger>
                        <ContentBlockBtn>
                            <Input 
                                width={'395px'} 
                                height={'64px'} 
                                type={'text'} 
                                boxShadowInput={'0px 4px 4px 0px rgba(0, 0, 0, 0.25)'} 
                                placeholder={'Ваш телефон'}
                                onChangeValueInput={()=>{}}
                            />
                            <Button 
                                width={'395px'}
                                height={'64px'} 
                                fontSize={'20px'}
                                fontWeight={800} 
                                lineHeight={'normal'} 
                                textTransform={''} 
                                callBack={()=>{}}
                            >Связаться со мной</Button>
                        </ContentBlockBtn>
                    </ContentBlockInfo>
                    <ContentBlockImg></ContentBlockImg>
                </ContentBox>
            </FonSection>
        </WrapperSectionTwelve>
    )
}

const WrapperSectionTwelve = styled.section`
    width: ${GlobalStyle.width};
    padding: ${GlobalStyle.padding};
    font-family: ${GlobalStyle.fontFamily};
    font-style: ${GlobalStyle.fontStyle};
    color: ${GlobalStyle.colorText};
    margin: 100px auto 0 auto;
`
const FonSection = styled.div`
    display: inline-block;
    width: 100%;
    height: 100%;
    background-image: url(${fonSection12});
    background-repeat: no-repeat;
    background-position: center;
`
const ContentBox = styled.div`
    width: 90%;
    margin: 90px auto;
    display: flex;
    gap: 2%;
    justify-content: center;
`
const ContentBlockInfo = styled.div`
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    gap: 42px;
`
const ContentBlockInfoH3 = styled.h3`
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 127.518%;
`
const ContentBlockInfoTitle = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`
const BlockInfoTitleLine = styled.div`
    width: 87px;
    height: 2px;
    background: #3FAC3B;
`
const BlockInfoTitleText = styled.div`
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
`
const ContentMessenger = styled.div`
    display: flex;
    gap: 4%;
    align-items: center;
`
const ContentBlockBtn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`
const TitleMessenger = styled.div`
    flex-basis: 180px;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 127.518%;  
`
const ContentBlockImg = styled.div`
    position: relative;
    flex-basis: 40%;
    background-image: url(${contentBlockImg}), url(${fonContentBlockImf});
    background-repeat: no-repeat;
    background-size: auto, contain;
    background-position: top left, center center;
`