import React from 'react'
import { BsEye } from "react-icons/bs";
import { blogTags } from '../../core/blogTags';


const ArticlesLink = () => {
    const data = blogTags;
  return (
        <>
            {
                data.map((tage)=>{
                    return (
                        <div key={tage.id} className='bg-light py-3 px-4 my-3 rounded-4 shadow-lg w-100'>
                            <h6 className='mb-3 text-secondary'>{tage.title}</h6>
                            <span className='text-secondary'>{tage.date}</span>
                            <span className='mx-3 text-secondary'><BsEye className='mx-2'/>{tage.view}</span>
                        </div>
                    )
                })
            }
        </>
  )
}

export default ArticlesLink