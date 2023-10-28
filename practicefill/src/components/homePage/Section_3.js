import React from "react";
import { BsArrowRight } from "react-icons/bs";
const Section_3 = () => {
  const iconstyle = {
    color: "white",
    paddingLeft: "10",
    fontSize: "30",
    marginTop: "-6",
  };

  return (
    <>
      <div className="section_3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-7">
              <div>
                <p className="text-white">Our advantage</p>
                <h3 className="py-4">
                  A Web Design &amp; Development Company that Specializes in
                  Creating Unparalleled User Experience
                </h3>
                <p className="text-white">
                  In today's digital world, mobile web development has become a
                  core element in solidifying your business's digital presence.
                  Through responsive web designs and customer-focused website
                  development services, Tekrevol is always ready and capable to
                  cater to all kinds of customer requirements.{" "}
                </p>
                <h5 className="text-white text-uppercase fs-6 d-inline">
                  let's take your brand online
                </h5>
                <BsArrowRight style={iconstyle} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section_3;
