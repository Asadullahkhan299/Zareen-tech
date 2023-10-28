import React from 'react'
import Services from '../../Data/Services'



const ServicesSmallScreenCard = (props) => {
    return (
        <>
            <div className='mt-5 pt-5'>
                <div className='row justify-content-center m-0'>
                    {
                        Services.map((val) => {
                            return (
                                <div className='col-sm-7 py-4'>
                                    <div className='s_card servicesSmallCard' style={{ backgroundImage: `url(${val.Image})` }}>
                                        <div className='servicesSmallCard_inner'>
                                            <div className='h-50'>
                                                <img className='w-100 h-100' src={val.Image} alt="Cardpic" style={{ objectFit: 'cover' }} />
                                            </div>
                                            <div className='p-2'>
                                                <h1 className='text-dark'>{val.Title}</h1>
                                                <p>{val.Description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
        </>
    )
}

export default ServicesSmallScreenCard
