import React from 'react'
import { whatWeDoobject } from './../../Data/AboutPage'
import main_img from './../../assets/images/what-we-do-main.png'
import background_img from './../../assets/images/we-do-icons.png'
import center_img from './../../assets/images/what-we-do-center.png'



const WhatweDo = () => {
    return (
        <>
            <div className='whatwedo'>
                <h1 className='text-center pt-5 pb-4 fw-bold'>What we do</h1>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 text-end'>
                            <div className='left_shadow pe-4 '>
                                {
                                    whatWeDoobject.map((val, index) => {
                                        if (index <= 1) {
                                            return (<div>
                                                <p className='py-4 text-black'>{val.Details}</p>
                                            </div>)
                                        }
                                        else { return (null) }
                                    })}
                            </div>
                        </div>
                        <div className='col-md-4 align-self-center'>
                            <div className='main_img'>
                                <div>
                                    <img className='w-100' src={main_img} alt="" />
                                </div>
                                <div className='background_img'>
                                    <img className='w-100' src={background_img} alt="" />
                                </div>
                                <div className='center_img'>
                                    <img className='w-100' src={center_img} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 text-end'>
                            <div className='right_shadow ps-4'>
                                {
                                    whatWeDoobject.map((val, index) => {
                                        if (index > 1) {
                                            return (
                                                <div >
                                                    <p className='py-4 text-black'>{val.Details}</p>
                                                </div>
                                            )
                                        } else { return (null) }
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhatweDo
