import React, { useState } from "react";
// import baapimg from './../../assets/images/baap.png'
import project from "../../Data/project";
const Projects = () => {
  return (
    <>
      <div className="project_data">
        <div className="container-fluid">
          <div className="row">
            {project.map((val) => {
              return (
                <div
                  className="col-md-6 px-5 pt-5 text-center"
                  style={{ backgroundColor: val.backgroundcolor }}
                >
                  <div className="position-relative">
                    <h3 className="heading ps-2 text-dark">
                      {val.projectFirstName} <br />
                      {val.projectSecondName}{" "}
                    </h3>
                    <img
                      className="w-100 h-100"
                      src={val.img}
                      alt="project picture"
                    />
                  </div>
                  <div className="exceptiona_work_inner d-flex justify-content-center flex-column">
                    <div className="project-para">
                      <p className="para title-uppercase text-black">
                        {val.discription}
                      </p>
                    </div>
                    <div className="picture-btn my-5">
                      <a
                        className="s_button text-decoration-none"
                        style={{ border: val.border, color: val.textColor }}
                        href="https://baap.education/"
                        target="blank"
                      >
                        Visit Project
                      </a>
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

export default Projects;
