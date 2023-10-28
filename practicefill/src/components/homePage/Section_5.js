import React from "react";
import { NavLink } from "react-router-dom";
const Section_5 = () => {
  return (
    <>
      <div className="sectnion_5">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="animation">
                <h3>WE ARE THE MOST</h3>
                <h1>CREATIVE TEAM</h1>
                <div className="row justify-content-md-end py-4">
                  <div className="col-md-5">
                    <p className="fs-5 text-white">
                      Motivation come from working on things we care about. It
                      also comes from working with people we care about.
                    </p>
                  </div>
                </div>
                <NavLink to="/team">
                  <button className="s_button">Meet our team</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section_5;
