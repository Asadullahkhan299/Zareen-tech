import React from 'react'
import { AiFillHome, AiFillMessage, AiFillClockCircle, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FaProjectDiagram, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';
import { RiTeamFill } from 'react-icons/ri';
import { FcAbout } from 'react-icons/fc';
import logoimg from './../../assets/images/equilixer-new.png'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="footer-section">
                <div className="container pt-4">
                    <div className="container-wapper">
                        <div className="row">
                            <div className="box-footer col-md-5 d-flex flex-column justify-content-center">
                                <div className="widget-box d-flex justify-content-center">
                                    <img src={logoimg} />
                                </div>
                                <div className="newsletter-sec text-center">
                                    <div className="newsletter-box style1">
                                        <div className="equalixer-socials">
                                            <ul className="socials mt-3 ms-0">
                                                <li>
                                                    <a href="https://www.facebook.com/equalixer" target="_blank"
                                                        className="social-item"><i><FaFacebookF /></i></a>
                                                    <a href="https://www.instagram.com/equalixertechnologies/?hl=en"
                                                        target="_blank" className="social-item"><i><AiFillInstagram /></i></a>
                                                    <a href="https://www.linkedin.com/company/equalixertechnologies/?trk=companies_directory&originalSubdomain=pk"
                                                        target="_blank" className="social-item"><i><AiFillLinkedin /></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer  col-md-3">
                                <div className="custom-menu widget-box">
                                    <h2 className="widget-title">Quick menu</h2>
                                    <ul className="widget-menu">
                                        <a href="./home.html">
                                            <li className="widget-items">
                                                <NavLink to="/">
                                                    <i><AiFillHome /></i>
                                                    <span>Home</span>
                                                </NavLink>
                                            </li>
                                        </a>
                                        <a href="./works.html">
                                            <li className="widget-items">
                                                <NavLink to="/project">
                                                    <i><FaProjectDiagram /></i>
                                                    <span>Projects</span>
                                                </NavLink>
                                            </li>
                                        </a>
                                        <a href="./services.html">
                                            <li className="widget-items">
                                                <NavLink to="/services">
                                                    <i><MdDesignServices /></i>
                                                    <span>Services</span>
                                                </NavLink>
                                            </li>
                                        </a>
                                        <a href="./team.html">
                                            <li className="widget-items">
                                                <NavLink to="/team">
                                                    <i> <RiTeamFill /></i>
                                                    <span>Team</span>
                                                </NavLink>
                                            </li>
                                        </a>
                                        <a href="./aboutus.html">
                                            <li className="widget-items">
                                                <NavLink to="/about">
                                                    <i><FcAbout /></i>
                                                    <span>About</span>
                                                </NavLink>
                                            </li>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                            <div className="box-footer  col-md-4">
                                <div className="widget-box">
                                    <div className="newsletter-head">
                                        <h2 className="widget-title">Contact Us</h2>
                                    </div>
                                    <ul className="widget-menu">
                                        <li className="widget-items">
                                            <i><AiFillMessage /></i>
                                            <span className="icons-text">tech@equalixer.com</span>
                                        </li>
                                        <li className="widget-items">
                                            <i><FaPhoneAlt /></i>
                                            <span className="icons-text">051 844 2537</span>
                                            <span className="icons-text">+9243 915 0259</span>
                                        </li>
                                        <li className="widget-items">
                                            <i><AiFillClockCircle /></i>
                                            <span className="icons-text">Monday-Friday 02:00 PM - 10:00 PM (PKT)</span>
                                        </li>
                                        <li className="widget-items">
                                            <i> <FaMapMarkerAlt /> </i>
                                            <span className="icons-text">Office #04, 1st Floor, ABC Plaza, Commercial Market
                                                Satellite Town Rawalpindi</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
            <div className="footer-end">
                <div className="row">
                    <div className="copyright">
                        Copyright © 2022 Equalixer Technologies&reg;
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
