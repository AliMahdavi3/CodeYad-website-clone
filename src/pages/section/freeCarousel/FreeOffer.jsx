import React from 'react'
import FreeCarousel from './FreeCarousel'

const FreeOffer = () => {
  return (
    <div className='carousel'>
        <div className='d-flex justify-content-between'>
            <a className='py-3 px-3 mb-1 text-decoration-none text-dark h6 fw-bold shadow-lg rounded-5' href="#">دیدن همه</a>
            <p className='py-2 px-3 h4 mb-1 fw-bold'>پیشنهادات کدیاد</p>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
            <FreeCarousel/>
        </div>
    </div>
  )
}

export default FreeOffer