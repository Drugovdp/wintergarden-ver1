import React from 'react'
import styled, { css } from 'styled-components'
import { GlobalStyle } from '../../Styles/GlobalStyles'
import imgsection1_1 from './ImagesSection10/imgsection1_1.png'
import imgsection1_2 from './ImagesSection10/imgsection1_2.png'
import imgsection1_3 from './ImagesSection10/imgsection1_3.png'
import imgsection2_1 from './ImagesSection10/imgsection2_1.png'
import imgsection2_2 from './ImagesSection10/imgsection2_2.png'
import imgsection3_1 from './ImagesSection10/imgsection3_1.png'
import imgsection3_2 from './ImagesSection10/imgsection3_2.png'
import imgsection3_3 from './ImagesSection10/imgsection3_3.png'

type TypePropsSectionTen = {}

export const SectionTen: React.FC<TypePropsSectionTen> = (props) => {

    const { } = props

    return (
        <WrapperSectionTen>
            <SectionTentH1>Предлагаем типовые конструкции на выбор. Если у вас есть пример того, что вы хотите, адаптируем и изготовим, если нет, разработаем для вас индивидуальный проект</SectionTentH1>
            <ContentBox>
                <ContentRow1 row={3}>
                    <ContentBox1>
                        <img src={imgsection1_1} alt="imgsection1_1" />
                        <p>Двухскатный</p>
                    </ContentBox1>
                    <ContentBox2>
                        <img src={imgsection1_2} alt="imgsection1_2" />
                        <p>Полигон (отдельно стоящая конструкция)</p>
                    </ContentBox2>
                    <ContentBox3>
                        <img src={imgsection1_3} alt="imgsection1_3" />
                        <p>Односкатный</p>
                    </ContentBox3>
                </ContentRow1>
                <ContentRow2 row={2}>
                    <ContentBox1>
                        <img src={imgsection2_1} alt="imgsection2_1" />
                        <p>Пристроенный к внешнему углу</p>
                    </ContentBox1>
                    <ContentBox2>
                        <img src={imgsection2_2} alt="imgsection2_2" />
                        <p>Пристроенный к внутреннему углу</p>
                    </ContentBox2>
                </ContentRow2>
                <ContentRow3 row={3}>
                    <ContentBox1>
                        <img src={imgsection3_1} alt="imgsection3_1" />
                        <p>Односкатный с эркером</p>
                    </ContentBox1>
                    <ContentBox2>
                        <img src={imgsection3_2} alt="imgsection3_2" />
                        <p>Эркерный на внешний угол</p>
                    </ContentBox2>
                    <ContentBox3>
                        <img src={imgsection3_3} alt="imgsection3_3" />
                        <p>Полуполигон</p>
                    </ContentBox3>
                </ContentRow3>
            </ContentBox>
        </WrapperSectionTen>
    )
}

const imgStyle = css`
  max-width: 100%;
  max-height: 100%;   
  object-fit: contain; 
`

type TypeStyleContentRow = {
    row: number
}

const styleContentRow = css<TypeStyleContentRow>`
    display: grid;
    gap: 32px;
    grid-template-columns: repeat(${props=>props.row}, minmax(min-content, 346px)); 
    justify-content: center;
    margin-top: 32px;
`
const styleContentBox = css`
    position: relative;
    height: 277px;
    text-align: center;
    transition: background-color 0.5s ease, opacity 0.5s ease, box-shadow 0.5s ease;

    &:hover img {
        opacity: 0.5;
    }

    &:hover p {
        display: block;
    }

    img {
        ${imgStyle};
    }

    p {
        display: none;
        width: 70%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 28px;
        font-family: Inter;
        font-weight: 500;
        line-height: 100%;
        color: #FFF;
        pointer-events: none;
    }

   &:hover {
        background-color: rgba(13, 13, 13, 0.55);
        box-shadow: 0px 0px 10px 6px rgb(67 67 67 / 44%);
   }
`

const WrapperSectionTen = styled.section`
    width: ${GlobalStyle.width};
    padding: ${GlobalStyle.padding};
    font-family: ${GlobalStyle.fontFamily};
    font-style: ${GlobalStyle.fontStyle};
    color: ${GlobalStyle.colorText};
    margin: 100px auto 0 auto;
`
const SectionTentH1 = styled.h1`
    font-weight: 700;
    font-size: 35px;
    line-height: 41px;
    text-align: center;
`
const ContentBox = styled.div`
    margin-top: 100px;
`
const ContentRow1 = styled.div<TypeStyleContentRow>`
    ${styleContentRow}
`
const ContentRow2 = styled.div<TypeStyleContentRow>`
    ${styleContentRow}
`
const ContentRow3 = styled.div<TypeStyleContentRow>`
    ${styleContentRow}
`
const ContentBox1 = styled.div`
    ${styleContentBox}
`
const ContentBox2 = styled.div`
    ${styleContentBox}
`
const ContentBox3 = styled.div`
    ${styleContentBox}
`