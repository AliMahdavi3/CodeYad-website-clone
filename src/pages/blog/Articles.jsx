import React, {useEffect, useState} from 'react'
import { BsEye, BsPersonCircle, BsFillCaretRightFill, BsFillCaretLeftFill} from "react-icons/bs";
import { articles } from '../../core/articles';

const Articles = () => {
    const numOfPage = 3;
    const [currentPage, setCurrentPage] = useState(1)
    const [data, setData] = useState(articles);
    const [courseData, setCourseData] = useState([]);
    const [pages, setPages] = useState([]);
    const [pageCount, setPageCount] = useState(1);

    useEffect(()=>{
        let pCount = Math.ceil(data.length / numOfPage);
        setPageCount(pCount);
        let pArr = [];
        for(let i = 1; i <= pCount; i++) pArr = [...pArr, i];
        setPages(pArr);
    },[]);

    useEffect(()=>{
        let start = (currentPage * numOfPage) - numOfPage;
        let end = (currentPage * numOfPage)
        setCourseData(data.slice(start, end));
    },[currentPage]);


  return (
    <>
    {
        courseData.map((art)=>{
            return (
                    <div key={art.id} className='d-flex align-items-center my-3 justify-content-center bg-light shadow-lg rounded-4'>
                        <div className='w-75'>
                        <img src={art.img} className='rounded-4 height w-100' alt="img" />
                        </div>
                        <div className='px-4 py-3'>
                        <a href="">{art.title}</a>
                        <p>{art.text}</p>
                        <div className='d-flex justify-content-between'>
                            <span><BsPersonCircle className='mx-2'/>{art.name}</span>
                            <span><BsEye className='mx-2'/>{art.view}</span>
                        </div>
                        </div>
                    </div>
            )
        })
    }
        <div dir='ltr' className='col-12 d-flex align-items-center justify-content-center mt-5'>
            <div className={`shadow-lg pagination border-0 px-3 py-3 rounded-5 fw-bold mx-1 pointer ${currentPage == 1 ? "disabled" : ""}`} 
            onClick={()=>setCurrentPage(currentPage - 1)}><BsFillCaretLeftFill/></div>
            {
              pages.map((page, index)=>{
                return (
                    <div className={`shadow-lg pagination border-0 px-3 py-3 rounded-5 fw-bold mx-1 pointer ${currentPage == page ? "text-light mainBackground" : ""}`} 
                    key={index} onClick={()=>setCurrentPage(page)}>{page}</div>
                )
              })
            }
            <div className={`shadow-lg pagination border-0 px-3 py-3 rounded-5 fw-bold mx-1 pointer ${currentPage === pageCount ? "disabled" : ""}`} 
            onClick={()=>setCurrentPage(currentPage + 1)}><BsFillCaretRightFill/></div>
        </div>
    </>

  )
}

export default Articles