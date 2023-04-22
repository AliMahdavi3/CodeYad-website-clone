import React from 'react'
import RightCarousel from './RightCarousel'

const RightSection = () => {
  return (
    <div className='mainBackground position-relative text-center pt-3 pb-5 my-4 rounded-5 shadow-lg'>
        <a href='#' className='mt-2 text-decoration-none fs-5 text-light fw-bold'>دوره های ویژه</a>
        <RightCarousel/>
    </div>
  )
}

export default RightSection