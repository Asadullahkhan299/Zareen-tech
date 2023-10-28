import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Services from './../../pages/Services';
import { ImCross } from 'react-icons/im';
const Menu = (props) => {
    const styling = {
        textDecoration: 'none',
        color: 'black'
    }

    const removelayout = () => {
        props.setAddingclass('menu')
    }


    return (
        <>
            <div className='main_menu_otter py-5'>
                <div className='cross_icon' onClick={removelayout}>
                    <ImCross />
                </div>
                <div className='container'>
                    <div className='main_menu'>
                        <div>
                            <NavLink to="/" style={styling}>

                                <div className='home_page' onClick={() => {
                                    props.setAddingclass("menu")
                                }}>

                                    <span className='first_line'></span>
                                    <span className='second_line'></span>
                                    <span className='third_line'></span>
                                    <span className='forth_line'></span>
                                    <h1>Home Page</h1>
                                </div>
                            </NavLink>
                            <NavLink to="/Project" style={styling}>

                                <div className='project_section mt-5' onClick={() => {
                                    props.setAddingclass("menu")

                                }}>
                                    <span className='first_line'></span>
                                    <span className='second_line'></span>
                                    <span className='third_line'></span>
                                    <span className='forth_line'></span>
                                    <div className='overlay'>
                                        <h1>Project</h1>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/Services" style={styling}>

                                <div className='services_section' onClick={() => {
                                    props.setAddingclass("menu")
                                }}>

                                    <span className='first_line'></span>
                                    <span className='second_line'></span>
                                    <span className='third_line'></span>
                                    <span className='forth_line'></span>
                                    <h1>Services</h1>
                                </div>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/Team" style={styling}>

                                <div className='project_section team_section' onClick={() => {
                                    props.setAddingclass("menu")

                                }}>
                                    <span className='first_line'></span>
                                    <span className='second_line'></span>
                                    <span className='third_line'></span>
                                    <span className='forth_line'></span>
                                    <div className='overlay'>
                                        <h1>Team</h1>
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink to="/About" style={styling}>

                                <div className='home_page mt-5' onClick={() => {
                                    props.setAddingclass("menu")
                                }}>
                                    <span className='first_line'></span>
                                    <span className='second_line'></span>
                                    <span className='third_line'></span>
                                    <span className='forth_line'></span>
                                    <h1>About</h1>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu
