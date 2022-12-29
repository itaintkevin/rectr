import Image from 'next/image'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <div>
      <h1 className='text-[2.2rem] pt-[6rem] pb-[2rem] px-[2rem]'>Core Team</h1>
      <Swiper
        style={{
          "--swiper-pagination-color": "#03B5AA",
          "--swiper-navigation-color": "#000",
          "--swiper-navigation-size": "25px",
        }}
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="w-[80%] h-[100%] pb-[3rem]"
      >
        <SwiperSlide className='pt-[2rem] pb-[4rem]'>
          <div className='px-20 py-28 rounded-2xl shadow-2xl'>
            <div className='bg-black shadow-2xl rounded-full h-56 w-56'>
              <Image src={""} alt="" />
            </div>
            <p className='pt-10'>Sresanjai</p>
            <p className='text-[#03B5AA]'>Founder & CEO</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='pt-[2rem] pb-[4rem]'>
        <div className='px-20 py-28 rounded-2xl shadow-2xl'>
            <div className='bg-black rounded-full h-56 w-56'>
              <Image src={""} alt="" />
            </div>
            <p className='pt-10'>Dhanush</p>
            <p>Front-end</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
