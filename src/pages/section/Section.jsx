import React from 'react'
import Articles from './article/Articles';
import RightList from './rightSection/RightList';
import Poster from './poster/Poster';
import Update from './updateCarousel/Update';
import Introduction from './introduction/Introduction';
import FreeOffer from './freeCarousel/FreeOffer';
import RightSection from './rightSection/RightSection';
import SocialMedia from './socialMedia/SocialMedia';

const Section = () => {
  return (
    <div className='container section'>
        <div className='row'>
            <section className='col-12 col-md-8 mt-4'>

                <Poster/>
                <Update/>
                <Introduction/>
                <FreeOffer/>
                
            </section>
            <section className='col-12 col-md-4 my-4'>

                {/* links */}
                <RightList path="./assets/image/1/list.png" link="رایگان یاد بگیر" title="اموزش رایگان برنامه نویسی"/>
                <RightList path="./assets/image/1/list-2.png" link="نقشه راه" title="چطوری برنامه نویس بشیم؟"/>
                <RightList path="./assets/image/1/list-3.png" link="ثبت نام بوت کمپ فلاتر" title="بوت کمپ فلاتر"/>
                {/* links */}

                <RightSection/>
                <Articles/>
                <SocialMedia/>

            </section>
        </div>
    </div>
  )
}

export default Section