import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Logo from "../assets/Images/3.png";
import { Thumbs } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

export default function Products() {
  return (
    <div>
    <Swiper
     modules={[Thumbs]}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={Logo}/></SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>

    </div>
  )
}
