import React, { useState } from 'react'
import { mainArticles } from '../../../core/mainArticles'


const Articles = () => {
    const [article, setArticle] = useState(mainArticles)
  return (
    <div className='carousel'>
        <h3 className='text-end'>اخرین مقالات</h3>
        <div className='row'>
        {
            article.map((art)=>{
                return (
                    <div key={art.id} className='col-12 col-md-6 style_card my-2'>
                        <div className=' rounded-4 shadow-lg'>
                            <img className='w-100' src={art.path} alt="" />
                        </div>
                        <div className='bg-light shadow-lg px-2 py-2' style={{borderRadius : "0px 0px 20px 20px"}}>
                            <a className='text-decoration-none my-2 fs-4 mx-2' href="#">{art.title}</a>
                            <p className='mx-2 my-2 fw-bold'>{art.Summary}</p>
                        </div>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Articles