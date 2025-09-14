import React from 'react'
import classcarousel from './Carousel.module.css'
import { Carousel } from 'react-responsive-carousel';
import { img } from '../Carousel/img/data';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Don't forget to import the CSS!

function CarouselEffect () {
 return (
 <div>
 <Carousel
 autoPlay={true}
 infiniteLoop={true}
 showThumbs={false}
 showIndicators={false} // Corrected the prop here
 > 
        {img.map((imageitemlink, index) => {
            // Added the 'key' prop here
            return <img src={imageitemlink} key={index} alt={`Carousel Image ${index}`} /> 
        })}
</Carousel>
<div className={classcarousel.hero_img}> </div>
 </div>
 )
}

export default CarouselEffect