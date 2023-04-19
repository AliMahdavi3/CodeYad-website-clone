import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { suggestion } from '../../core/suggestion';
import UpdateCarousel from './UpdateCarousel';
import FreeCarousel from './FreeCarousel';
import Articles from './article/Articles';

const Section = () => {
    const [freeItems, setFreeItems] = useState(suggestion)
  return (
    <div className='container section'>
        <div className='row'>
            <section className='col-12 col-md-8 mt-4'>
                <div className=' my-4'>
                    <img src="./assets/image/1/poster-1.jpg" className='w-100 rounded-5 shadow-lg'/>
                </div>
                <div className='carousel'>
                    <div className='d-flex justify-content-between'>
                        <a className='py-3 px-3 mb-3 text-decoration-none text-dark h6 fw-bold shadow-lg rounded-5' href="#">دیدن همه</a>
                        <p className='py-2 px-3 h4 mb-3 fw-bold'>اخرین بروز رسانی ها</p>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <UpdateCarousel/>
                    </div>
                </div>
                <div className='d-flex title_introducing'>
                    <div>
                        <h2 className='text-end my-5'>برنامه نویسی رو از کجا شروع کنم؟</h2>
                        <p className='fw-bold h5'>برنامه‌نویسی ابزاری نوین برای
                         تسلط بر جهان تکنولوژی است. بهترین روش برای فراگیری این علم 
                         از پایه و به صورت تخصصی، گذراندن دوره‌های آموزش برنامه نویسی
                         زیر نظر مدرسان کارآزموده است. کدیاد، تیمی متشکل از مدرسان
                         متخصص می‌باشد و هدفشان آموزش صفر تا صد برنامه نویسی به علاقه‌مندان
                         است. در ضمن بسیاری از دوره‌های موجود در کدیاد، رایگان بوده و
                         شما می‌توانید نیمی از مسیر را بدون هیچ هزینه‌ای پیش بروید.</p>
                        <button className='my-4 border-0 shadow-lg pb-3 pt-2 rounded-4 bg-danger text-light fw-bold px-3'>بزن بریم</button>
                    </div>
                    <img className='w-25 my-5 d-none d-lg-block' src="./assets/image/1/rocket.png" alt="rocket" />
                </div>
                <div className='carousel'>
                    <div className='d-flex justify-content-between'>
                        <a className='py-3 px-3 mb-1 text-decoration-none text-dark h6 fw-bold shadow-lg rounded-5' href="#">دیدن همه</a>
                        <p className='py-2 px-3 h4 mb-1 fw-bold'>پیشنهادات کدیاد</p>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <FreeCarousel/>
                    </div>
                </div>
                <Articles/>
            </section>
            <section className='col-12 col-md-4 my-4'>
                <div className='bg-light position-relative text-center py-3 my-4 rounded-5 shadow-lg'>
                    <a className='text-decoration-none fs-5 text-dark fw-bold' href="#">رایگان یادبگیر</a>
                    <img src="./assets/image/1/img (2).jpg" className='rounded-circle side_image' />
                    <p className='mt-2 h6'>اموزش رایگان برنامه نویسی</p>
                </div>
                <div className='bg-light position-relative text-center py-3 my-4 rounded-5 shadow-lg'>
                    <a className='text-decoration-none fs-5 text-dark fw-bold' href="#">نقشه راه</a>
                    <img src="./assets/image/1/img (3).jpg" className='rounded-circle side_image' />
                    <p className='mt-2 h6'>چطوری برنامه نویس بشیم؟</p>
                </div>
                <div className='bg-light position-relative text-center py-3 my-4 rounded-5 shadow-lg'>
                    <a className='text-decoration-none fs-5 text-dark fw-bold' href="#">بوت کمپ فلاتر</a>
                    <img src="./assets/image/1/img (4).jpg" className='rounded-circle side_image' />
                    <p className='mt-2 h6'>ثبت نام بوت کمپ فلاتر</p>
                </div>
                <div className='bg-light position-relative text-center py-3 my-4 rounded-5 shadow-lg'>
                    <a href='#' className='mt-2 text-decoration-none fs-5 text-dark fw-bold'>اموزش رایگان برنامه نویسی</a>
                </div>
            </section>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
    </div>
  )
}

export default Section