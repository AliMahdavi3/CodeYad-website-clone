import React from 'react'
import { BsFillHouseFill, BsFillQuestionCircleFill, BsFillTagsFill } from "react-icons/bs";

const Links = () => {
  return (

        <ul className='list-unstyled w-100 text-end d-flex justify-content-around 
        align-items-center d-md-block bg-light py-3 px-4 rounded-5 shadow-lg'>
            <li className='my-2'><a className='fs-4 fw-bold text-dark' 
            href="#">خانه<BsFillHouseFill className='ms-2'/></a></li>
            <li className='my-2'><a className='fs-4 fw-bold text-dark' 
            href="#">سوالات<BsFillQuestionCircleFill className='ms-2'/></a></li>
            <li className='my-2'><a className='fs-4 fw-bold text-dark' 
            href="#">تگ ها<BsFillTagsFill className='ms-2'/></a></li>
        </ul>
  );
};

export default Links