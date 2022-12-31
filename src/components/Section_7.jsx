import Image from 'next/image'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper";
import sresanjai from '../assets/Section_7/sresanjai.webp'
import dhanush from '../assets/Section_7/dhanush.jpeg'
import suresh from '../assets/Section_7/suresh.jpg'

export default function App() {
  return (
    <div id="section-7">
      <h1 className='text-[2.2rem] pt-[6rem] pb-[2rem] px-[2rem]'>Core Team</h1>
      <Swiper
        style={{
          "--swiper-pagination-color": "#03B5AA",
          "--swiper-navigation-color": "#000",
          "--swiper-navigation-size": "25px",
        }}
        speed={1000}
        slidesPerView={"auto"}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="w-[96%] xs:w-[85%] h-[100%] pb-[3rem]"
      >
        <SwiperSlide className='pt-[2rem] pb-[4rem]'>
          <div className='px-20 py-28 rounded-2xl shadow-lg'>
            <div className='bg-black shadow-2xl rounded-full h-56 w-56'>
              <Image src={sresanjai} alt="" />
            </div>
            <p className='pt-10'>Sresanjai</p>
            <p className='text-[#03B5AA]'>Founder & CEO</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='pt-[2rem] pb-[4rem]'>
          <div className='px-20 py-28 rounded-2xl shadow-lg'>
            <div className='bg-black rounded-full h-56 w-56'>
              <Image src={dhanush} alt="" />
            </div>
            <p className='pt-10'>Dhanush</p>
            <p className='text-[#03B5AA]'>Front-end</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='pt-[2rem] pb-[4rem]'>
          <div className='px-20 py-[57px] rounded-2xl shadow-lg'>
            <div className='bg-black rounded-full h-56 w-56'>
              <Image src={suresh} alt="" />
            </div>
            <p className='pt-10'>Suresh</p>
            <p className='text-[#03B5AA]'>Social Media <br/> and Content</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
