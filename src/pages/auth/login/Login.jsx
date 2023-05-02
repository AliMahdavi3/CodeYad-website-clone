import React from 'react'
import Form from 'react-bootstrap/Form';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className='conatiner'>
      <div className='d-flex align-items-center justify-content-center align-items-center'>
        <div dir='rtl' className='section rounded-5 shadow-lg w-50 my-5 d-flex align-items-center flex-column'>
          <div className='mt-5'>
            <h2>ورود به حساب کاربری</h2>
          </div>
          <div className='d-flex flex-column w-75'>
            <label className='fs-5 fw-bold' htmlFor="email">ایمیل</label>
            <input type="email" placeholder='Info@example.com' className='form-control fs-5 fw-bold my-3'/>
          </div>
          <div className='d-flex flex-column w-75'>
            <label className='fs-5 fw-bold' htmlFor="password">رمز عبور</label>
            <input type="password" placeholder='********' className='form-control fs-5 fw-bold my-3'/>
          </div>
          <div className='d-flex flex-row-reverse align-items-end my-5'> 
            <span className='fw-bold fs-5'>مرا به خاطر بسپار</span>
            <Form.Check className='mx-3' aria-label="option 1" />
          </div>
            <button className='w-75 my-4 py-2 d-flex align-items-center 
            justify-content-center rounded-4 border-0 text-light fs-5 fw-bold mainBackground'>
            ورود به سایت</button>
            <div className='my-4 d-flex align-items-center justify-content-center'>
              <FcGoogle className='fs-2'/>
              <h5 className='text-secondary mx-3'>ورود با گوگل</h5>
            </div>
            <div className='d-flex align-items-center flex-column my-3 justify-content-center'>
              <h5 className='no_account'>حساب کاربری ندارید؟</h5>
              <a className='fs-5 fw-bold' href="/register">ثبت نام</a>
            </div>
            <div className='d-flex align-items-center flex-column my-5 justify-content-center'>
              <h5 className='no_account'>کلمه عبور را فراموش کرده اید؟</h5>
              <a className='fs-5 fw-bold' href="#">تغییر کلمه عبور</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login