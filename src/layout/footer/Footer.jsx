import React from "react";
import { BsTwitter, BsInstagram, BsTelegram, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="container-fluid">
      <footer className=" footer shadow-lg">
        <div className="row">
          <div className="col-12 col-md-3 d-flex flex-column align-items-center justify-content-center padding_footer">
            <img className="bg-light py-2 rounded-4 shadow-lg px-3" src="./assets/image/enamad.png" alt="enamad" />
            <div className='d-flex mt-5'>
              <a className='fs-3 mx-2 text-light' href="#"><BsTwitter/></a>
              <a className='fs-3 mx-2 text-light' href="#"><BsLinkedin/></a>
              <a className='fs-3 mx-2 text-light' href="#"><BsTelegram/></a>
              <a className='fs-3 mx-2 text-light' href="#"><BsInstagram/></a>
            </div>
          </div>
          <div className="col-12 col-md-5 padding_footer">
            <h3 className="text-end fw-bold text-warning">کدیاد</h3>
            <p className="text-light fw-bold fs-5">
              کدیاد، تیمی تشکیل شده از مدرسان متخصص در زمینه‌ی برنامه‌نویسی
              می‌باشد. این تیم با هدف چشاندن لذت کدنویسی و کمک به افراد
              علاقه‌مند این علم تشکیل شده است. در کدیاد دوره‌های آموزش متعددی
              برای یادگیری تمام زبان‌های برنامه نویسی و مباحث دیگر این علم از
              جمله فریم ورک ها یا بلاک چین و غیره، وجود دارد. هدف ما در کدیاد،
              همواره آموزش صفر تا صد برنامه نویسی به علاقه‌مندان همراه با مسیر
              یادگیری متفاوت می‌باشد.
            </p>
          </div>
          <div className="col-12 col-md-4 padding_footer">
            <input type="text" placeholder="ایمیلتو وارد کن" className="form-control mb-3 py-3 fw-bold fs-5 pe-4 text-end rounded-5 border-0" />
            <button className="px-2 py-3 rounded-5 fw-bold btn btn-success">عضویت در خبرنامه</button>
            <ul className="list-unstyled text-end">
              <li className="my-2"><a className="text-light fs-5 fw-bold" href="#">اموزش رایگان پایتون</a></li>
              <li className="my-2"><a className="text-light fs-5 fw-bold" href="#">اموزش رایگان C#</a></li>
              <li className="my-2"><a className="text-light fs-5 fw-bold" href="#">اموزش رایگان php</a></li>
              <li className="my-2"><a className="text-light fs-5 fw-bold" href="#">اموزش رایگان جاوااسکریپت</a></li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="py-4">
        <p className="text-center fw-bold fs-5">
          . هر کسی باید یاد بگیره که چه‌طور کد بزنه چرا که برنامه‌نویسی به شما
          یاد می‌ده که چه‌طور فکر کنید
        </p>
      </div>
    </div>
  );
};

export default Footer;
