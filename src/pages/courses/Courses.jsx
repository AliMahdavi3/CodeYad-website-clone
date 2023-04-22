import React from 'react'
import Stage from './Stage'
import CoursesCard from './CoursesCard';


const Courses = () => {
  return (
    <div className='container'>
      <p className='text-center my-5 fw-bold text-secondary courses_font'>آموزش برنامه نویسی</p>
      <Stage/>
      <hr />
      <CoursesCard/>
    </div>
  )
}

export default Courses