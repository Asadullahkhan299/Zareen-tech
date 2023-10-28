import React from 'react'
import { AboutPage } from '../../Data/AboutPage';




const WeAreEqualixer = () => {
    return (
        <>
            <div className='ourValue py-5'>
                <h1 className='text-center'>We Are Equalixer!</h1>
                <div className='container'>
                    <div className='row justify-content-center'>
                        {
                            AboutPage.map((val) => {
                                return (
                                    <div className='col-lg-4 col-sm-6 text-center'>
                                        <div className="card-box">
                                            <img src="aboutus/triangle.svg" alt="" className="hover_imges triangle" />
                                            <img src="aboutus/squar.svg" alt="" className="hover_imges square" />
                                            <img src="aboutus/cross.svg" alt="" className="hover_imges cross" />
                                            <img src="aboutus/blue-circle.svg" alt="" className="hover_imges blue_circle" />
                                            <img src="aboutus/orange-circle.svg" alt="" className="hover_imges orange_circle" />
                                            <div className="icon">
                                                <div className="image my-3" style={{
                                                    boxShadow: val.boxShadow,
                                                    background: val.backgroundColor
                                                }}>
                                                    <i>{val.icon}</i>
                                                </div>
                                            </div>
                                            <h2 className="title text-black pb-0 pt-4 m-0">{val.titel}</h2>
                                            <p className="para">{val.description}</p>

                                        </div>
                                    </div>)
                            })}
                    </div>
                </div>
            </div>



        </>
    )
}

export default WeAreEqualixer
