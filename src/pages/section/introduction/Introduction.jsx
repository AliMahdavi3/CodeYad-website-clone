import React from 'react'

const Introduction = () => {
  return (
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
  )
}

export default Introduction