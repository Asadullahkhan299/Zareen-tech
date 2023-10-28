import React from 'react'
import Navbarr from '../components/common/Navbarr'
import AboutBannar from '../components/AboutPage/AboutBannar'
import Footer from '../components/common/Footer'
import WeAreEqualixer from '../components/AboutPage/WeAreEqualixer'
import WhatweDo from '../components/AboutPage/WhatweDo'
import WeWork from '../components/AboutPage/WeWork'
const About = () => {
    return (
        <>

            <AboutBannar />
            <WeAreEqualixer />
            <WhatweDo />
            <WeWork />
            <Footer />
        </>
    )
}

export default About
