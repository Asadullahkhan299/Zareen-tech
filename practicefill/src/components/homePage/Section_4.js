import React from "react";
import anim_img from "./../../assets/images/desginSetting.gif";
import { NavLink } from "react-router-dom";
const Section_4 = () => {
  return (
    <>
      <div className="section_4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <h2 className="text-black">PROJECTS THAT MAKE US BLUSH</h2>
                <p className="py-4">
                  At Equalixer we combine creativity, technical expertise, and
                  process-driven development to create innovative products for
                  our clients.
                </p>
                <NavLink to="/Project">
                  <button className="s_button">See all Projects</button>
                </NavLink>
              </div>
            </div>
            <div className="col-md-6 section_4_right_sides">
              <img className="w-100" src={anim_img} alt="animation" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section_4;
