import React, { useState, useContext } from "react";
import Menu from "./Menu";
import darklogo from "../../assets/images/equilixer-white.png";
import { AiOutlineBars } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import noteContext from "../../context/notes/NoteContext";

const Navbarr = () => {
  const [context, setContext] = useContext(noteContext);

  return (
    <>
      <div className="nav_main background_gridient">
        <div className="logo">
          <img src={darklogo} alt="" />
        </div>

        <div className="d-flex align-items-center">
          <div className="nav_Items">
            <NavLink to="/">
              <p>Home Page</p>
            </NavLink>
            <NavLink to="/Project">
              <p>Project</p>
            </NavLink>
            <NavLink to="/Services">
              <p>Services</p>
            </NavLink>
            <NavLink to="/Team">
              <p>Team</p>
            </NavLink>
            <NavLink to="/About">
              <p>About</p>
            </NavLink>
          </div>

          <div
            className="navbarr"
            onClick={() => {
              context == "menu" ? setContext("fadeleft") : setContext("menu");
            }}
          >
            <AiOutlineBars />
          </div>
        </div>

        <div className={context}>
          <Menu setAddingclass={setContext} addingclass={context} />
        </div>
      </div>
    </>
  );
};

export default Navbarr;
