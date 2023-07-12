import React from 'react'
import styled, { css } from 'styled-components'
import { GlobalStyle } from '../../../Styles/GlobalStyles'
import { Button } from '../../Button/Button'
import { titleCardsStore } from '../../../data/store/cardStore'
import { useNavigate } from 'react-router-dom'

type TypePropsWinterGarden = {
    cardID: string
}

export const WinterGarden: React.FC<TypePropsWinterGarden> = (props) => {

    const {cardID} = props

    const [elemWG, changeFoto] = titleCardsStore(state => [state.elemWG, state.changeFoto])
    
    const ChangingPositionImage = (i: number) => {
        changeFoto(cardID, i)
    }

    const navigation = useNavigate()

    const onClickGoBack = () => {
        navigation(-1)
    }
    
    return (
        <WinterGardenWrapper>
            <GalleryWinterGarden>
                <Galleryh1>{elemWG[cardID].title}</Galleryh1>
                <GalleryImgBig>
                    <img src={elemWG[cardID].content[0].src} alt={elemWG[cardID].content[0].alt} />
                </GalleryImgBig>
                <GalleryImgSmallFlex>
                    {
                        elemWG[cardID].content.map((el, i) => {
                            if (i !== 0) {
                                return (
                                    <GalleryImgSmall key={el.id} onClick={() => ChangingPositionImage(i)}>
                                        <img src={el.src} alt={el.alt} />
                                    </GalleryImgSmall>
                                )
                            }
                        })
                    }
                </GalleryImgSmallFlex>
            </GalleryWinterGarden>
            <ContentWinterGarden>
                <ContentWrapper>
                    <ContentTitleP>{elemWG[cardID].description}</ContentTitleP>
                    <ContentBlockButton>
                        <Button 
                            width='257px' 
                            height='58px' 
                            fontSize='13px' 
                            fontWeight={800} 
                            lineHeight='16px' 
                            textTransform='uppercase' 
                            boxShadow='inset 0px -4px 1px #00AF47' 
                            callBack={() => { }}
                        >
                            Рассчитать стоимость
                        </Button>
                        <Button 
                            width='257px' 
                            height='58px' 
                            fontSize='13px' 
                            fontWeight={800} 
                            lineHeight='16px' 
                            textTransform='uppercase' 
                            backgroundBtn='#FFFFFF' 
                            callBack={onClickGoBack}
                        >
                            Вернуться назад
                        </Button>
                    </ContentBlockButton>
                </ContentWrapper>
            </ContentWinterGarden>
        </WinterGardenWrapper >
    )
}

const imgStyle = css`
  max-width: 100%;
  max-height: 100%;   
  object-fit: contain; 
`

const WinterGardenWrapper = styled.div`
    width: ${GlobalStyle.width};
    padding: ${GlobalStyle.padding};
    font-family: ${GlobalStyle.fontFamily};
    font-style: ${GlobalStyle.fontStyle};
    color: ${GlobalStyle.colorText};
    margin: 100px auto 0 auto;
    display: flex;
    gap: 32px;
    align-items: center;
`
const GalleryWinterGarden = styled.div`
    flex-basis: 43%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
`
const Galleryh1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 41px;
`
const GalleryImgBig = styled.div`
    width: 90%;

    img {
        border-radius: 15px;
        ${imgStyle}
    }
`
const GalleryImgSmallFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const GalleryImgSmall = styled.div`
    flex-basis: 48%;
    cursor: pointer;

    img {
        border-radius: 15px;
        ${imgStyle}
    }
`
const ContentWinterGarden = styled.div`
    flex-basis: 56%;
    border-left: 1px solid #282828;
    margin: 37px 0 37px;
`
const ContentWrapper = styled.div`
    padding: 45px 0 45px 45px;
    display: flex;
    flex-direction: column;
    gap: 32px;
`
const ContentTitleP = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: justify;
`
const ContentBlockButton = styled.div`
    display: flex;
    justify-content: space-between;
`

