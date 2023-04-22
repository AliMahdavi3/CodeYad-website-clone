import React from 'react'

const About = () => {
  return (
    <div className='container section'>
        <div className='my-5 bg-light py-4 rounded-4 shadow-lg px-4'>
            <img src="./assets/image/about/1.jpg" className='w-100' alt="" />
            <p className='text-end my-3 fs-5 fw-bold'>وب سایت کدیاد توسط گروهی از عاشقان برنامه نویسی با هدف آموزش
             این مهارت جذاب درست شده. هدف ما اینه که شما هم با
             آموزش های باکیفیت از طرفداران برنامه نویسی بشید
             و راحت تر مسیر موفقیت در اون رو طی کنید.</p>
            <img src="./assets/image/about/2.jpg" className='mt-3 w-100' alt="" />
            <h1 className='text-end my-3'>ویژگی های برتر وبسایت آموزش برنامه نویسی کدیاد</h1>
            <p className='text-end fs-5 fw-bold mb-4 mt-3'>ما در آموزش های برنامه نویسی کدیاد به شما
             کمک میکنیم که یک مسیر یادگیری بهتری را دنبال کنید و
             در انتهای مسیر یادگیری برنامه نویسی یا حرفه ها،
             مسیر درآمدزایی هموارتری را داشته باشید.</p>
             <ul className='list-unstyled text-end'>
                <li className="my-5 fs-5 fw-bold">پرسش و پاسخ آنلاین با مدرسین دوره های آموزشی</li>
                <li className="my-5 fs-5 fw-bold">پشتیبانی رایگان دوره های آموزشی همراه با تیم حرفه ای کدیاد </li>
                <li className="my-5 fs-5 fw-bold">سیستم امتیازدهی هوشمند برای کاربران وبسایت</li>
                <li className="my-5 fs-5 fw-bold">تخفیفهای ویژه و لحظه ای در پیج اینستاگرام </li>
             </ul>
            <img src="./assets/image/about/3.jpg" className='mt-3 w-100' alt="" />
            <div>
            <img src="./assets/image/about/dis.jpg" className='mt-3 w-100' alt="" />
            <img src="./assets/image/about/insta.jpg" className='mt-3 w-100' alt="" />
            <img src="./assets/image/about/telg.jpg" className='mt-3 w-100' alt="" />
            <img src="./assets/image/about/twitter.jpg" className='mt-3 w-100' alt="" />
            </div>
        </div>
    </div>
  )
}

export default About