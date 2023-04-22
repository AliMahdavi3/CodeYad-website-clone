import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { suggestion } from "../../../core/suggestion"
const RightCarousel = () => {
    const [courese, setCourese] = useState(suggestion)
  return (

    <Carousel fade>
        {
            courese.map((coures)=>{
                return (
                    <Carousel.Item interval={1000} key={coures.id}>
                        <img
                        className="d-block w-100"
                        style={{borderRadius : "20px 20px 20px 20px"}}
                        src={coures.path}
                        alt="First slide"
                        />
                    </Carousel.Item>
                )
            })
        }
    </Carousel>
  )
}

export default RightCarousel