import React, { useState, useContext } from "react";
import noteContext from "../../context/notes/NoteContext";

function Section_1(props) {
  const [context, setContext] = useContext(noteContext);

  return (
    <>
      <div
        className="section_1"
        style={{ backgroundImage: `url(${props.backgroundPicture})` }}
      >
        <div className="overlay">
          <div className="animation">
            <div className="row d-flex justify-content-center">
              <div className="col-md-10 text-center">
                <div className="section_1_content px-2 position-relative">
                  <h2>{props.title}</h2>
                  <h3>{props.heading}</h3>
                  <p className="mt-4">
                    {props.para}
                    <br />
                    {props.para1}
                    <span className="d-none d-md-inline-block">
                      {props.para2}
                    </span>
                  </p>
                  <br />
                  <button
                    className="s_button mt-3"
                    onClick={() => {
                      setContext("fadeleft");
                    }}
                  >
                    Lets get started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section_1;
