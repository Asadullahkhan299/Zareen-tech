import React from 'react'
import Navbarr from '../components/common/Navbarr'
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage'
import Footer from '../components/common/Footer'
import ServicesSmallScreenCard from '../components/servicesPage/ServicesSmallScreenCard'
import ServicesBannar from '../components/servicesPage/ServicesBannar'
import ServicesCard from '../components/servicesPage/ServicesCard'
import webDevelopment from './../../src/assets/images/web-development.jpeg'
import blockChain from './../../src/assets/images/block-chain.jpeg'
import DigitalMarkiting from './../../src/assets/images/digital-markitin.jpeg'
import Uiuxdesign from './../../src/assets/images/ui-ux.jpeg'
import AndroidImage from './../../src/assets/images/mubil-app.jpeg'
import SEO from './../../src/assets/images/search-engin.jpg'

const Services = () => {
    const footerSectionStyling = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'end',
    }
    return (
        <>

            {/* This is design for larg screen */}
            <div className='d-md-block d-none'>
                <Fullpage>
                    <FullPageSections>
                        <FullpageSection>
                            <ServicesBannar />
                        </FullpageSection>
                        <FullpageSection>
                            <ServicesCard
                                Leftimage={webDevelopment}
                                LeftCardTitle="Web Development"
                                RightCardNameInLeftCard="Blockchain"
                                RightCardDescriptionInLeftCard="Blockchain is a system of recording information in such a way that it is difficult or impossible to change, hack or deceive the system."

                                RightImage={blockChain}
                                RightCardTitle="BlockChain"
                                LeftCardNameInRightCard="Web Development"
                                LeftCardDescriptionInRightCard="Our experience with small screens comes in handy in a world where the majority of web traffic is on mobile.Our web team builds responsive sites that elegantly work across desktop and mobile."

                            />
                        </FullpageSection>
                        <FullpageSection>
                            <ServicesCard
                                Leftimage={DigitalMarkiting}
                                LeftCardTitle="Digital Marketting"
                                RightCardNameInLeftCard="UI/UX Design"
                                RightCardDescriptionInLeftCard="User interface design or user interface engineering is the design of user interfaces for machines and software, such as computers. "

                                RightImage={Uiuxdesign}
                                RightCardTitle="UI/UX Design"
                                LeftCardNameInRightCard="Digital Marketting"
                                LeftCardDescriptionInRightCard="Our experience with small screens comes in handy in a world where the majority of web traffic is on mobile.Our web team builds responsive sites that elegantly work across desktop and mobile."

                            />
                        </FullpageSection>
                        <FullpageSection>
                            <ServicesCard
                                Leftimage={AndroidImage}
                                LeftCardTitle="Mobile App"
                                RightCardNameInLeftCard="SEO"
                                RightCardDescriptionInLeftCard="Blockchain is a system of recording information in such a way that it is difficult or impossible to change, hack or deceive the system."

                                RightImage={SEO}
                                RightCardTitle="SEO"
                                LeftCardNameInRightCard="Mobile App"
                                LeftCardDescriptionInRightCard="Our experience with small screens comes in handy in a world where the majority of web traffic is on mobile.Our web team builds responsive sites that elegantly work across desktop and mobile."

                            />
                        </FullpageSection>
                        <FullpageSection style={footerSectionStyling}>
                            <Footer />
                        </FullpageSection>
                    </FullPageSections>
                </Fullpage>
            </div>
            {/* This is design for small screens */}
            <div className='d-md-none d-block'>
                <ServicesBannar />
                <ServicesSmallScreenCard image={webDevelopment} />
                <Footer />
            </div>
        </>
    )
}

export default Services
