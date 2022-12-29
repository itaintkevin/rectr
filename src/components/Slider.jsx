import Image from 'next/image'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';

// import required modules
import { EffectCreative, Autoplay, Keyboard, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <div>
      <Swiper
        speed={1500}
        style={{
          "--swiper-pagination-color": "#03B5AA",
          "--swiper-navigation-color": "#000",
          "--swiper-navigation-size": "20px",
        }}
        slidesPerView={'auto'}
        spaceBetween={0}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Keyboard, Pagination, Navigation]}
        className="w-[100%] h-[100%]"
      >
        <SwiperSlide className='pt-[2rem] pb-[4rem] px-[1rem]'>
            <div 
                className='px-20 py-28 rounded-2xl shadow-lg bg-center bg-cover w-full h-[22rem] xs:h-[28rem]'
                style={{backgroundImage: `url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/travel-quotes-1523907497.jpg?crop=1.00xw:0.752xh;0,0.233xh&resize=980:*")`}}
            >
            </div>
        </SwiperSlide>
        <SwiperSlide className='pt-[2rem] pb-[4rem] px-[1rem]'>
            <div 
                className='px-20 py-28 rounded-2xl shadow-lg bg-center bg-cover w-full h-[22rem] xs:h-[28rem]'
                style={{backgroundImage: `url("https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`}}
            >
            </div>
        </SwiperSlide>
        <SwiperSlide className='pt-[2rem] pb-[4rem] px-[1rem]'>
            <div 
                className='px-20 py-28 rounded-2xl shadow-lg bg-center bg-cover w-full h-[22rem] xs:h-[28rem]'
                style={{backgroundImage: `url("https://images.unsplash.com/photo-1504233529578-6d46baba6d34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80")`}}
            >
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
