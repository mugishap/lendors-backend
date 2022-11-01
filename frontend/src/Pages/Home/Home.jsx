import React, { useEffect } from 'react'
import Navbar from './../../Components/Navbar'
import { carsObject } from './../../utils/sampledata'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Home = () => {
  console.log(carsObject)
  useEffect(() => {
    document.title = 'Drive | Home'
  }, [])

  return (
    <div className='w-screen flex flex-col items-center justify-center h-fit bg-white'>
      <Navbar active="home" />

      <div className=' flex w-full px-12 my-12 items-center justify-center'>
        <span className='text-4xl text-start  w-full font-bold font-titillium'>Welcome to drive!!</span>
      </div>

      <div className='w-full flex px-12  items-center justify-center'>
        <div className='rounded sm:w-11/12 md:w-9/12 lg:w-7/12 flex items-center'>
          <Swiper className='rounded w-full h-[38rem]'
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={100}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            autoplay={{ delay: 5000 }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide className='w-full flex h-full items-center justify-center relative'>
              <img src="https://wallpapercave.com/wp/wp4318749.jpg" className='h-full w-full' alt="" />
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent w-full h-24'></div>
            </SwiperSlide>
            <SwiperSlide className='w-full flex h-full items-center justify-center relative'>
              <img src="https://wallpapercave.com/wp/wp7013023.jpg" className='h-full w-full' alt="" />
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent w-full h-24'></div>
            </SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>

          </Swiper>
        </div>
        <div className='w-5/12'></div>
      </div>

    </div>
  )
}

export default Home