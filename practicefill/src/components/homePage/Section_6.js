import React from "react";
import animation from "./../../assets/animation/services.mp4";
const Section_6 = () => {
  return (
    <>
      <div className="section_6">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 section_6 left_side">
              <video
                muted
                autoPlay
                loop
                className="w-100"
                src={animation}
              ></video>
            </div>
            <div className="col-sm-7 d-flex flex-column justify-content-center">
              <h2 className="text-black">
                GIVE US A SHOUT AND WE'D BE HAPPY TO ANSWER THAT TOGETHER{" "}
              </h2>
              <div className="row ">
                <div className="col-sm-6 pt-5 d-flex">
                  <div className="icon1">
                    <span></span>
                  </div>
                  <h3 className="text-black ps-3">
                    Web <br /> Application
                  </h3>
                </div>
                <div className="col-sm-6 pt-5 d-flex">
                  <div className="icon1">
                    <span></span>
                  </div>
                  <h3 className="text-black ps-3">
                    Mobile <br />
                    Application
                  </h3>
                </div>
                <div className="col-sm-6 pt-5 d-flex">
                  <div className="icon1">
                    <span></span>
                  </div>
                  <h3 className="text-black ps-3">
                    Blockchain <br />
                    development
                  </h3>
                </div>
                <div className="col-sm-6 pt-5 d-flex">
                  <div className="icon1">
                    <span></span>
                  </div>
                  <h3 className="text-black ps-3">
                    Digital <br />
                    Marketing
                  </h3>
                </div>
              </div>
              <span className="pt-5">
                <button className="s_button">Explore Services</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section_6;
