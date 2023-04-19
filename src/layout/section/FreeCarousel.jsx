import React, { useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { suggestion } from '../../core/suggestion';

const FreeCarousel = () => {
    const [items, setItems] = useState(suggestion);
    const responsive = {
        superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
        },
        desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        },
        tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        },
        mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        },
    };
  return (
    <Carousel
    responsive={responsive} autoPlay={true} infinite={true} customTransition="all 3s" autoPlaySpeed={3000}
     className='rounded-5 w-100 carousel'>
        {
            items.map((item)=>{
                return (
                    <div className='card mx-2 rounded-5 border-0 text-end' key={item.id}>
                        <img src={item.path} className="d-block w-100 rounded-5"/>
                        <h5 className='d-none mx-3 my-2 d-md-block text-warning fw-bold'>{item.name}</h5>
                        <p className='d-none d-md-block mx-3 text-info h6 pb-2 fw-bold'>قیمت : {item.price}</p>
                    </div>
                )
            })
        }
    </Carousel>
  )
}

export default FreeCarousel