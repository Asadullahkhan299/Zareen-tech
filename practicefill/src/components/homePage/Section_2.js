import React from "react";
import { NavLink } from "react-router-dom";
const Section_2 = () => {
  return (
    <>
      <div className="section_2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5 col-xl-5 text-center">
              <div className="experiencs_counter">
                <span>04</span>
              </div>
            </div>
            <div className="col-sm-8 col-md-6 col-lg-5 col-xl-3 ps-xl-0 ps-md-4 ps-4">
              <div>
                <h3 className="my-4">Years of Experience</h3>
                <p className="mt-4">
                  Equalixer is a team of highly experienced app designers and
                  developers creating unique software for you.
                </p>
                <NavLink to="/about">
                  <button className="s_button">More About Us</button>
                </NavLink>
              </div>
            </div>
            <div className="col-sm-10 col-md-8 col-lg-6 col-xl-4 mt-md-0 mt-5">
              <div className="row text-center justify-content-center">
                <div className="col-9 col-sm-6">
                  <div className="app_developed_counter">
                    <span>10</span>
                  </div>
                  <h6 className="my-4">apps developed</h6>
                </div>
                <div
                  className="col-9 col-sm-6"
                  style={{ borderLeft: "1px solid white" }}
                >
                  <div className="app_developed_counter">
                    <span>2</span>
                  </div>
                  <h6 className="my-4">Consultants</h6>
                </div>
                <div
                  className="col-9 col-sm-6 pt-4"
                  style={{ borderTop: "1px solid white" }}
                >
                  <div className="app_developed_counter">
                    <span>12</span>
                  </div>
                  <h6 className="my-4">Web developed</h6>
                </div>
                <div
                  className="col-9 col-sm-6 pt-4"
                  style={{
                    borderTop: "1px solid white",
                    borderLeft: "1px solid white",
                  }}
                >
                  <div className="app_developed_counter">
                    <span>5</span>
                  </div>
                  <h6 className="my-4">Employees</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section_2;
