import React from 'react'

const RightList = ({title, link, path}) => {
  return (
    <div className='bg-light position-relative side_section text-center py-3 my-4 rounded-5 shadow-lg'>
        <a className='text-decoration-none fs-5 text-dark fw-bold' href="#">{link}</a>
        <img src={path} className='rounded-circle side_image' />
        <p className='mt-2 h6'>{title}</p>
    </div>
  )
}

export default RightList;