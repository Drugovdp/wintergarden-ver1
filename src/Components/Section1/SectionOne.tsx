import imgTitle from '../../Images/1620641553_35-p-zimnii-sad-iz-polikarbonata-foto-37 1.jpg'
import { Button } from '../Button/Button'
import { css, styled } from 'styled-components'
import { GlobalStyle } from '../../Styles/GlobalStyles'
import { ContentDescription } from './ContentDescription'

type TypePropsSectionOne = {
    sizeWindow: number
}

export const SectionOne: React.FC<TypePropsSectionOne> = (props) => {

    const { sizeWindow } = props
    
    return (
        <SectionOneWrapper sizewindows={sizeWindow}>
            <SectionDescription>
                <SectionDescriptionH3 sizewindows={sizeWindow}>Проектирование, изготовление и монтаж</SectionDescriptionH3>
                <SectionDescriptionH1 sizewindows={sizeWindow}>Зимних садов из алюминиевого профиля</SectionDescriptionH1>
                <SectionDescriptionP>Хотите наслаждаться внешним видом круглый год, не выходя из дома? Зимний сад прекрасный вариант не отказывать себе в таком удовольствии.</SectionDescriptionP>
                <ContentDescription sizeWindow={sizeWindow} />
                <Button
                    callBack={() => { }}
                    width='257px'
                    height='58px'
                    fontSize='13px'
                    fontWeight={800}
                    lineHeight='16px'
                    textTransform='uppercase'
                >
                    Рассчитать стоимость
                </Button>
            </SectionDescription>
            <SectionLogo>
                <img src={imgTitle} alt="logo" />
            </SectionLogo>
        </SectionOneWrapper>
    )
}

const imgStyle = css`
  max-width: 100%;
  max-height: 100%;   
  object-fit: contain; 
`

type TypeSectionWrapper = {
    sizewindows: number
}

const SectionOneWrapper = styled.section<TypeSectionWrapper>`
    width: ${GlobalStyle.width};
    padding: ${GlobalStyle.padding};
    font-family: ${GlobalStyle.fontFamily};
    font-style: ${GlobalStyle.fontStyle};
    color: ${GlobalStyle.colorText};
    height: 599px;
    margin: 64px auto ;
    display: flex;
`
const SectionDescription = styled.div`
    flex-basis: 54%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 69px;
`
const SectionDescriptionH3 = styled.h3<TypeSectionWrapper>`
    font-size: ${props => props.sizewindows === 1112 ? `${20}px`
        : props.sizewindows === 1000 ? `${16}px` : `${14}px`};
`
const SectionDescriptionH1 = styled.h1<TypeSectionWrapper>`
    font-weight: 700;
    font-size: ${props => props.sizewindows === 1112 ? `${48}px`
        : props.sizewindows === 1000 ? `${42}px` : `${40}px`};
    line-height: 50px;
`
const SectionDescriptionP = styled.p`
    font-size: 13px;
    line-height: 15px;
`

const SectionLogo = styled.div`
    flex-basis: 46%;
    position: relative;
    margin: 68px 0px 124px 0;

    &:hover {
        transform: rotateY(180deg);
    }

    img {
        ${imgStyle}
    }
`

