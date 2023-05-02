import React from 'react'
import Links from './Links';
import ArticlesLink from '../blog/ArticlesLink';
import { FaFilter } from "react-icons/fa";

const Questions = () => {
  return (
    <div className='container'>
      <p className='text-center my-5 fw-bold text-secondary courses_font'>پرسش و پاسخ</p>
      <div>
        <div className='row d-flex justify-content-center'>
          <div className='col-12 col-md-8 mb-3'>
            <div className='bg-light section rounded-5 shadow-lg'>
              <div className='d-flex flex-row-reverse justify-content-between py-4 mx-4'>
                <h3 className='text-dark'>همه سوالات</h3>
                <button className='border-0 rounded-4 mainBackground text-light fs-5 fw-bold px-4 pb-2'>پرسش سوال</button>
              </div>
              <div className='d-flex justify-content-end mt-5 mx-4'>
                <button className='fs-5 fw-bold px-4 pt-2 shadow-sm pb-3 rounded-4 border-0'>فیلتر<FaFilter/></button>
              </div>
              <div>
                <hr className='mx-3 mt-5'/>
                <div>
                  <div>
                    <p>0 پاسخ</p>
                  </div>
                  <div>
                    <a href="#">لینک گیت هاب فایل نهایی</a>
                    <p>لینک گیت هاب فایل های نهایی پروژه اپ هواشناسی</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-4'>
            <Links/>
            <div dir='rtl'>
              <h4 className='text-center'>محبوب ترین مقالات</h4>
              <ArticlesLink/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Questions;