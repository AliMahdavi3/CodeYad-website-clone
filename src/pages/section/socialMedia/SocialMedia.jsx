import React from 'react'
import { BsTwitter, BsInstagram, BsTelegram, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='d-flex justify-content-around mt-5'>
            <a className='fs-1 rounded-3 text_color' href="#"><BsTwitter/></a>
            <a className='fs-1 rounded-3 text_color' href="#"><BsLinkedin/></a>
            <a className='fs-1 rounded-3 text_color' href="#"><BsTelegram/></a>
            <a className='fs-1 rounded-3 text_color' href="#"><BsInstagram/></a>
    </div>
  )
}

export default SocialMedia