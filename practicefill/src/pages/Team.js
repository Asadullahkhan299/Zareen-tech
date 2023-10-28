import React from 'react'
import Navbarr from '../components/common/Navbarr'
import TeamBannar from '../components/teampage/TeamBannar'
import TeamCard from '../components/teampage/TeamCard'
import Footer from './../components/common/Footer'
import DigitalTransformation from '../components/teampage/DigitalTransformation'
import EqualixerCore from '../components/teampage/EqualixerCore'
const Team = () => {
    return (
        <>

            <TeamBannar />
            <TeamCard />
            <DigitalTransformation />
            <EqualixerCore />
            <Footer />
        </>
    )
}

export default Team
