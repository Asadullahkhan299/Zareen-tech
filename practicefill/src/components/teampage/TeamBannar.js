import React from "react";
import team_animation from "./../../assets/animation/team.gif";

const TeamBannar = () => {
  return (
    <>
      <div className="team_bannar">
        <div className="container pt-5 px-0">
          <div className="row w-100">
            <div className="col-md-7 mt-5 pt-5 ps-4">
              <h1>great tech takes </h1>
              <h1>great people </h1>
              <p className="py-4">
                Everyone at EQUALIXER is here for the same reason: We see it as
                out duty to improve the user experience of the world by guiding
                clients through impactful digital transformation.
              </p>
            </div>

            <div className="col-md-5 pt-5">
              <img
                src={team_animation}
                alt="Team anmation"
                className="w-100 banner_content_img ms-3"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamBannar;
