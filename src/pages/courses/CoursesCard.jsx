import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { BsClockFill } from "react-icons/bs";
import { courses } from '../../core/courses';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

const CoursesCard = () => {
  const numOfPage = 8;
  const [data, setData] = useState(courses)
  const [currentPage, setCurrentPage] = useState(1);
  const [courseData, setCourseData] = useState([]);
  const [pages, setPages] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  const categoryFilter = (catItem) => {
    const result = courses.filter((index)=>{
      return index.category === catItem
    })
    setCourseData(result)
  }

  const refreshPage = () =>{
    window.location.reload(false)
  }
  
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
    <div>
      <div className='my-3 d-none d-md-flex justify-content-around flex-row-reverse'>
          <button  className='px-2 py-1 border-0 rounded-5 fw-bold w-100 mainBackground mx-3 text-light text-center' onClick={refreshPage}>همه</button>
          <button  className='px-2 py-1 border-0 rounded-5 fw-bold w-100 mainBackground mx-3 text-light text-center' onClick={()=>categoryFilter("web")}>برنامه نویسی سایت</button>
          <button  className='px-2 py-1 border-0 rounded-5 fw-bold w-100 mainBackground mx-3 text-light text-center' onClick={()=>categoryFilter("ui")}>طراحی سایت</button>
          <button  className='px-2 py-1 border-0 rounded-5 fw-bold w-100 mainBackground mx-3 text-light text-center' onClick={()=>categoryFilter("data")}>بانک اطلاعات</button>
          <button  className='px-2 py-1 border-0 rounded-5 fw-bold w-100 mainBackground mx-3 text-light text-center' onClick={()=>categoryFilter("mobile")}>برنامه نویسی موبایل</button>
      </div>

        <div className='row bg-light py-4 rounded-4 shadow-lg my-5 d-flex align-items-center justify-content-center'>
          {
            courseData.map((cour)=>{
              return (
                <Card key={cour.id} className='col-12 col-sm-6 col-md-3 mx-3 my-3 rounded-4 shadow border-0 px-0' style={{ width: '18rem' }}>
                  <Card.Img variant="top" className='rounded-4' src={cour.img} />
                  <Card.Body>
                    <Card.Title className='text-end'>{cour.title}</Card.Title>
                    <Card.Text>
                      <span className='d-flex flex-row-reverse my-4'><BsClockFill className='mx-2'/>{cour.time}</span>
                      <span className='d-flex justify-content-between my-4 flex-row-reverse'>
                          <span>{cour.name}</span>
                          <span>{cour.price}</span>
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
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
        </div>
      </div>
  )
};

export default CoursesCard