import React from "react";
import aboutpageanimation from "./../../assets/animation/121d68a3-4c01-4da3-ad29-149ddc7a9010.gif";

const AboutBannar = () => {
  return (
    <>
      <div className="about_bannar p-2 p-md-5 pt-5">
        <div className="row pt-5">
          <div className="col-lg-7 ">
            <div className="work-left">
              <h5 className="sub_heading">THE EXPERTS INY</h5>
              <h3 className="banner_heading">
                Our Vision & Our Mission are target
              </h3>
              <p>
                To provide an end to end IT business solution in a precise
                manner for the required industries with emerging technologies
                and to become a top-notch IT service provider, all over the
                globe.
              </p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="work-right mt-4">
              {/* <video
                muted
                autoPlay
                loop
                className="w-100"
                src={aboutpageanimation}
              /> */}
              <img
                src={aboutpageanimation}
                alt="Team anmation"
                className="w-100 banner_content_img "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBannar;
