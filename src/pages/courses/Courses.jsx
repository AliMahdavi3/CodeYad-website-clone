import React from 'react'
import CoursesCard from './CoursesCard';


const Courses = () => {
  return (
    <div className='container'>
      <p className='text-center my-5 fw-bold text-secondary courses_font'>آموزش برنامه نویسی</p>
      <hr />
      <CoursesCard/>
    </div>
  )
}

export default Courses