import React from 'react'
import styled, { css } from 'styled-components'
import { GlobalStyle } from '../../Styles/GlobalStyles'
import house from '../../Images/house.jpg'
import { Button } from '../Button/Button'
import { dataSectionFour } from '../../data/dataSectionFour'

type TypePropsSectionFour = {}

export const SectionFour: React.FC<TypePropsSectionFour> = (props) => {

    const { } = props

    const lenghtArr = dataSectionFour.length - 1

    const createListItem = dataSectionFour.map((el, i) => {
        return (
            <ListBox key={el.id}>
                <ItemFlex>
                    <Image>
                        <img src={el.src} alt={el.alt} />
                    </Image>
                    <Title>
                        <p>{el.title}</p>
                    </Title>
                </ItemFlex>
                {i < lenghtArr ? <hr /> : ''}
            </ListBox>
        )
    })

    return (
        <SectionFourWrapper>
            <SectionFourH1>Желание клиента всегда для нас в приоритете, мы создали лучший сервис, сделав акцент на безупречном качестве обслуживания и продукции</SectionFourH1>
            <SectionFourP>10 преимуществ сделать заказ у нас</SectionFourP>
            <SectionForContent>
                <ContentList>
                    {createListItem}
                </ContentList>
                <ContentTitle>
                    <ContentTitleItem>
                        <ContentTitleH3>Изготовление</ContentTitleH3>
                        <ContentTitleP>Мы заботимся о здоровье заказчиков, создаем условия для того, чтобы члены семьи получали максимум полезного солнца в условиях пасмурного климата.</ContentTitleP>
                        <ContentTitleP>Изготавливаем светопрозрачные конструкции из экологичных материалов. Применяем специально разработанные конструктивные системы, а остекление производим травмобезопасными стеклопакетами</ContentTitleP>
                    </ContentTitleItem>
                    <ContentTitleItem>
                        <ContentTitleH3>Расчет проекта от инженера</ContentTitleH3>
                        <ContentTitleP>Оставьте заявку на расчет подробной сметы от инженера.</ContentTitleP>
                    </ContentTitleItem>
                    <Button width='178px' height='41px' fontSize='12px' fontWeight={800} lineHeight='15px' textTransform='' callBack={() => { }}>Оставить заявку</Button>
                </ContentTitle>
                <ContentImage>
                    <img src={house} alt="house" />
                </ContentImage>
            </SectionForContent>
        </SectionFourWrapper>
    )
}

const imgStyle = css`
  max-width: 100%;
  max-height: 100%;   
  object-fit: contain; 
`

const SectionFourWrapper = styled.section`
    width: ${GlobalStyle.width};
    padding: ${GlobalStyle.padding};
    font-family: ${GlobalStyle.fontFamily};
    font-style: ${GlobalStyle.fontStyle};
    color: ${GlobalStyle.colorText};
    margin: 100px auto 0 auto;
`
const SectionFourH1 = styled.h1`
    font-weight: 700;
    font-size: 35px;
    line-height: 41px;
    text-align: center;
`
const SectionFourP = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 41px;
    margin-top: 36px;
    text-align: center;
`
const SectionForContent = styled.div`
    display: flex;
    margin-top: 182px;
    gap: 1%;
`
const ContentList = styled.div`
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(205, 205, 205, 0.6);
    border-radius: 15px;
`
const ListBox = styled.div`
    hr {
        width: 95%;
        margin: 0 auto;
        border: 1px dashed #C1C1C1;
    }
`
const ItemFlex = styled.div`
    display: flex;
    align-items: center;
    gap: 2%;
    margin: 16px 10px;
    padding: 2%;
    background: rgba(0, 175, 71, 0.3);
    border-radius: 10px;
`
const Image = styled.div`
    flex-basis: 48px;
    height: 48px;
    border-radius: 50%;

    img {
     height: 100%;
     object-fit: contain;
    }
`
const Title = styled.div`
    
`
const ContentTitle = styled.div`
    flex-basis: 35%;
    display: flex;
    flex-direction: column;
    gap: 24px;
`
const ContentTitleItem = styled.div`
`
const ContentTitleH3 = styled.h3`
    font-weight: 700;
    font-size: 25px;
    line-height: 41px;
`
const ContentTitleP = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 119.02%;
    margin-top: 24px;
`
const ContentImage = styled.div`
    img {
        ${imgStyle}
    }
`
