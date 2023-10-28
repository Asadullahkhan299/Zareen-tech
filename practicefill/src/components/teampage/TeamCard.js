import React from "react";
import TeamPageCardData from "./../../Data/TeamPageCardData";
// import Hamzaimg from './../../assets/images/Team-imgs/1.jpg'

const TeamCard = () => {
  return (
    <>
      <div className="Team_Card py-5">
        <div className="container">
          <div className="row">
            {TeamPageCardData.map((val) => {
              return (
                <div className="col-sm-6 col-lg-3 mt-5">
                  <div className="s_card shadow">
                    <img
                      className="card_img shadow w-100"
                      src={val.image}
                      alt="Equalixer-team-pictures"
                    />
                    <div className="stack-technology">
                      <h5 className="px-3 pt-4">{val.name}</h5>
                      <h6 className="px-3 text-uppercase pb-1">{val.title}</h6>
                      <p className="p-3">{val.description}</p>
                      <span className="d-block w-100">
                        <i className="fa-solid fa-business-time"></i>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
