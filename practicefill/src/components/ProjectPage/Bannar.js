import React from "react";
import img from "./../../assets/animation/work1.gif";
const Bannar = () => {
  return (
    <>
      <div className="bannar py-5 px-3 px-md-5">
        <div className="row mt-5">
          <div className="col-lg-7 d-flex align-items-center">
            <div className="work-left">
              <h5 className="sub_heading">FEATURED CASE STUDY</h5>
              <h2 className="banner_heading">Explore Our Exceptional Work</h2>
              <p>
                From award-winning iOS and Android app development to elegant,
                seamless web development, we build products that thrive at the
                intersection of business goals and user needs.
              </p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="work-right">
              <img src={img} className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bannar;
