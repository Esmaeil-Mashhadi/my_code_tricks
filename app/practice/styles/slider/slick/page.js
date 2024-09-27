'use client'
import  './slider.css';

import Slider from 'react-slick';

function SliderPage() {
  const imagePack = [
    '/images/0.jpg',
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg'
  ];


  const settings = {
    dots:true,
    speed:500,
    slideToShow:1,
    slideToScroll:1,
    initialSlide:0,
    pauseOnHover:true,
    autoplay:false,
}
/**
 * slideToShow determines the number of slides to be displayed at once on the screen. For example, if you set slideToShow: 1, only one slide will be shown at a time.

slideToScroll determines the number of slides to be scrolled when the user interacts with the slider. For example, if you set slideToScroll: 1, the slider will move one slide at a time when the user clicks the previous/next buttons or uses navigation d
 */
  return (
    <div className="image__slider__container">
       <Slider {...settings}>
          {
            imagePack.map((image,index)=>(
                <img src={image} alt="" key={index} />
            ))
          }
       </Slider>
    </div>
  )
}

export default SliderPage;