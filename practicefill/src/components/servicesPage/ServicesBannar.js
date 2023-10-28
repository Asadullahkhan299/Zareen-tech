import React from "react";
import servicesAnim from "./../../assets/animation/services-Animation.gif";
const ServicesBannar = () => {
  return (
    <>
      <div className="services_bannar">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-7">
              <div className="work-left">
                <h5 className="sub_heading">THE EXPERTS INY</h5>
                <h3 className="banner_heading">DIGITAL TRANSFORMATION</h3>
                <p>
                  From award-winning iOS and Android app development to elegant,
                  seamless web development, we build products that thrive at the
                  intersection of business goals and user needs.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="work-right">
                <img src={servicesAnim} className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesBannar;
