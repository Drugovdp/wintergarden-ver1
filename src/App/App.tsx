import React, { useState } from 'react'
import styled from 'styled-components'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Header } from '../Components/Header/Header'
import { SectionOne } from '../Components/Section1/SectionOne'
import { SectionTwo } from '../Components/Section2/SectionTwo'
import { SectionThree } from '../Components/Section3/SectionThree'
import { SectionFour } from '../Components/Section4/SectionFour'
import { SectionFive } from '../Components/Section5/SectionFive'
import { SectionSix } from '../Components/Section6/SectionSix'
import { WinterGarden } from '../Components/Section6/WinterGarden/WinterGarden'
import { SectionSeven } from '../Components/Section7/SectionSeven'
import { SectionNine } from '../Components/Section9/SectionNine'
import { CardFoundation } from '../Components/Section9/CardFoundation/CardFoundation'
import { SectionEight } from '../Components/Section8/SectionEight'
import { SectionTen } from '../Components/Section10/SectionTen'
import { SectionEleven } from '../Components/Section11/SectionEleven'
import { SectionTwelve } from '../Components/Section12/SectionTwelve'
import { SectionThirteen } from '../Components/Section13/SectionThirteen'
import { Footer } from '../Components/Footer/Footer'

export const App: React.FC = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [sizeWindow, setsizeWindow] = useState(width);

    window.addEventListener('resize', (event: UIEvent) => {
        const w = event.target as Window
        setWidth(w.innerWidth)
        if (w.innerWidth >= 1112) {
            setsizeWindow(1112)
        }
        if (w.innerWidth >= 1000 && w.innerWidth < 1112) {
            setsizeWindow(1000)
        }
        if (w.innerWidth > 960 && w.innerWidth < 1000) {
            setsizeWindow(960)
        }
    })

    const [cardIDSixBlock, setCardIDCardIDSixBlock] = useState('')
    const [cardIDNineBlock, setCardIDCardIDNineBlock] = useState('')

    const setIDSixBlock = (id: string) => {
        setCardIDCardIDNineBlock('')
        localStorage.setItem('idSixBlock', JSON.stringify(id))
        localStorage.removeItem('idNineBlock')
        setCardIDCardIDSixBlock(id)
    }

    const setIDNineBlock = (id: string) => {
        setCardIDCardIDSixBlock('')
        localStorage.setItem('idNineBlock', JSON.stringify(id))
        localStorage.removeItem('idSixBlock')
        setCardIDCardIDNineBlock(id)
    }

    return (
        <HashRouter>
            <WrapperApp>
                <Header sizeWindow={sizeWindow} />
                <Routes>
                    <Route
                        path='/'
                        element={
                            <>
                                <SectionOne sizeWindow={sizeWindow} />
                                <SectionTwo />
                                <SectionThree />
                                <SectionFour />
                                <SectionFive />
                                <SectionSix setCardID={(id) => setIDSixBlock(id)} />
                                <SectionSeven />
                                <SectionEight />
                                <SectionNine setCardID={(id) => setIDNineBlock(id)} />
                                <SectionTen />
                                <SectionEleven />
                                <SectionTwelve />
                                <SectionThirteen />
                            </>
                        }
                    />
                    {cardIDSixBlock && <Route path=':id' element={<WinterGarden cardID={cardIDSixBlock} />} />}
                    {cardIDNineBlock && <Route path=':id' element={<CardFoundation cardID={cardIDNineBlock} />} />}
                </Routes>
                <Footer />
            </WrapperApp>
        </HashRouter>
    )
}

const WrapperApp = styled.div`
max-width: 1122px;
margin: 0 auto;
font-family: 'TT Norms Regular', sans-serif;
`