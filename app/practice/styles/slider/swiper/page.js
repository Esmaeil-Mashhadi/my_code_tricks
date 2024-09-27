'use client'

import styles from './swiper.module.css';
import './swiper.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function SliderPage() {
  const imagePack = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg'
  ];

  return (
    <Swiper className={styles.container}  
    pagination ={{clickable:true}} 
     navigation={true} loop={true} modules={[Autoplay ,Pagination, Navigation] }
     autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
          {
            imagePack.map((image,index)=>(
                <SwiperSlide>
                 <img src={image} alt="" key={index} />
                </SwiperSlide>
            ))
          }
    </Swiper>
  )
}

export default SliderPage;