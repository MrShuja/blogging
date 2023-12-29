import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import style from './slider.css'
// import 'swiper/css/bundle';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// const Slider = () => {
//   const customArrowStyles = {
//     color: 'red', // Change the color as needed
//     fontWeight: 'bold', // Change the font weight as needed
//     fontSize: '24px', // Add other styles as needed
//   };


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
        <SwiperSlide><img src={`${process.env.PUBLIC_URL}/assets/1.jpg`} alt="Car icon" /></SwiperSlide>
        <SwiperSlide><img src={`${process.env.PUBLIC_URL}/assets/2.jpg`} alt="Car icon" /></SwiperSlide>
        <SwiperSlide><img src={`${process.env.PUBLIC_URL}/assets/3.jpg`} alt="Car icon" /></SwiperSlide>
        <SwiperSlide><img src={`${process.env.PUBLIC_URL}/assets/4.jpg`} alt="Car icon" /></SwiperSlide>
      </Swiper>
      
    </div>
   
  )
}

export default Slider
