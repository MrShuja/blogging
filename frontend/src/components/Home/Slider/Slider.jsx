import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import style from './slider.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Slider = () => {
  return (
    <div>
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src='https://logoman.ca/wp-content/uploads/2018/01/Slider-Banner-Programming-Image--1024x375.jpg'/></SwiperSlide>
        <SwiperSlide><img src='https://images.vexels.com/media/users/3/198595/raw/70ea7f8f08f92f962f2e35d1eee74666-online-courses-kids-slider-template.jpg'/></SwiperSlide>
        <SwiperSlide><img src='http://www.reading-rewards.com/wp-content/uploads/2018/09/slider.jpg'/></SwiperSlide>
        <SwiperSlide><img src='https://i.ytimg.com/vi/qM0FyW7KZEA/maxresdefault.jpg'/></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider
