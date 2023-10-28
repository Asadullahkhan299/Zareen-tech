import React, { useState } from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import firstSliderImage from "./../assets/images/team.jpg";
import secondSliderImage from "./../assets/images/team-bg.jpg";
import thirdSliderImage from "./../assets/images/banner2.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Section_1 from "../components/homePage/Section_1";
import Section_2 from "../components/homePage/Section_2";
import Section_3 from "../components/homePage/Section_3";
import Section_4 from "../components/homePage/Section_4";
import Section_5 from "../components/homePage/Section_5";
import Section_6 from "../components/homePage/Section_6";
import Section_7 from "../components/homePage/Section_7";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
function HomePage() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div>
        <Fullpage>
          <FullpageNavigation />
          <FullPageSections>
            <FullpageSection>
              <Carousel
                responsive={responsive}
                customTransition=".5"
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
              >
                <div>
                  <Section_1
                    title="It takes 7 seconds to make an impression"
                    heading="we do it in 5"
                    para="To bring or move to an improved or superior rank or level."
                    para1=" Assumes that a thing has been at one point,"
                    para2="but something is changing and causing it to move to a new point, or new level"
                    backgroundPicture={firstSliderImage}
                  />
                </div>
                <div>
                  <Section_1
                    title="WE ARE A source of"
                    heading="innovation and excellence"
                    para="an integrated program for innovation, leadership development, strategy execution and value creation."
                    para1=" It combines disciplined innovation methods with elements of venture capitalism, crowdsourcing and collaborative leadership."
                    backgroundPicture={secondSliderImage}
                  />
                </div>
                <div>
                  <Section_1
                    title="WE ARE THE MOST"
                    heading="POWERFUL COMPANY"
                    para="Assumes that a thing has been at one point, but something is changing and causing it to move to a new point, or new level."
                    backgroundPicture={thirdSliderImage}
                  />
                </div>
              </Carousel>
              ;
            </FullpageSection>
            <FullpageSection>
              <Section_2 />
            </FullpageSection>
            <FullpageSection>
              <Section_3 />
            </FullpageSection>
            <FullpageSection>
              <Section_4 />
            </FullpageSection>
            <FullpageSection>
              <Section_5 />
            </FullpageSection>
            <FullpageSection>
              <Section_6 />
            </FullpageSection>
            <FullpageSection>
              <Section_7 />
            </FullpageSection>
          </FullPageSections>
        </Fullpage>
      </div>
    </>
  );
}

export default HomePage;
