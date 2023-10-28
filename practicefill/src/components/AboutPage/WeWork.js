import React from 'react'
import { weWorkWithYou_section } from '../../Data/AboutPage'



const WeWork = () => {
    return (
        <>
            <div className='OurWork py-5'>
                <div className='container'>
                    <h1 className='text-center fw-bold'>We Work With you</h1>
                    <div className='row'>
                        {
                            weWorkWithYou_section.map((val) => {
                                return (
                                    <div className='col-md-4'>
                                        <div class="white-box shadow">
                                            <div class="icon-bg-blue">
                                                <div class="card-img">
                                                    <img src={val.image} class="rocket" />
                                                </div>
                                            </div>
                                            <div class="text">
                                                <h3>{val.title}</h3>
                                                <p>{val.paragraph}</p>
                                            </div>
                                        </div>
                                    </div>)
                            })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeWork
