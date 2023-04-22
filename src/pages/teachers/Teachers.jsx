import React, { useState } from 'react'
import { teachers } from '../../core/teachers'

const Teachers = () => {
  const [techer, setTeacher] = useState(teachers);
  return (
    <div className='container'>
      <div className='row bg-light d-flex justify-content-center align-items-center rounded-4 shadow-lg my-5'>
        {
          techer.map((teach)=>{
            return (
              <div key={teach.id} className='col-12 col-md-4 my-5 mx-5 w-25 rounded-4 shadow-lg'>
                <div className='d-flex py-3 px-3 flex-row-reverse justify-content-center align-items-center'>
                  <img src={teach.img} className='rounded-circle w-25' alt="teacher" />
                  <div>
                    <h6 className='text-end mx-4'>{teach.name}</h6>
                    <p className='text-end mx-4'>{teach.email}</p>
                  </div>
                </div>
                <hr />
                <div className='d-flex justify-content-between flex-row-reverse'>
                  <h6 className='text-end'>دوره ها</h6>
                  <span>{teach.courses}</span>
                </div>
                <div className='d-flex justify-content-between flex-row-reverse'>
                  <h6 className='text-end'>دنبال کننده</h6>
                  <span>{teach.followers}</span>
                </div>
                <div className='d-flex align-items-center justify-content-center my-5'>
                  <button className='mainBackground text-light pb-3 pt-2 rounded-4 border-0 shadow-lg fw-bold fs-5 w-75'>
                    <a className='text-light' href={teach.path}>مشاهده پروفایل</a>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
};

export default Teachers;