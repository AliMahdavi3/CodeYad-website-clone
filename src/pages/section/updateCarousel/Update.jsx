import React from 'react'
import UpdateCarousel from './UpdateCarousel'

const Update = () => {
  return (
    <div className='carousel'>
        <div className='d-flex justify-content-between'>
            <a className='py-3 px-3 mb-3 text-decoration-none text-dark h6 fw-bold shadow-lg rounded-5' href="/courses">دیدن همه</a>
            <p className='py-2 px-3 h4 mb-3 fw-bold'>اخرین بروز رسانی ها</p>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
            <UpdateCarousel/>
        </div>
    </div>
  )
}

export default Update