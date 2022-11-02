import React, { useEffect, useState } from 'react'
import Navbar from './../../Components/Navbar'
import { images, testimonials, features } from './../../utils/sampledata'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Rating from '@mui/material/Rating';
import { BsArrowRight, BsCalendarEvent, BsFilm } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import Footer from './../../Components/Footer'

const Home = () => {
  useEffect(() => {
    document.title = 'Drive | Home'
  }, [])


  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      activeFeature === 2 ? setActiveFeature(0) : setActiveFeature(activeFeature + 1)
    }, 2000)
  }
    , [activeFeature])

  return (
    <div className='w-screen flex flex-col items-center justify-center h-fit bg-white'>
      <Navbar active="home" />
      <div className=' flex w-full px-12 my-12 items-center justify-center'>
        <span className='text-4xl text-start  w-full font-bold font-titillium'>Welcome to drive!!</span>
      </div>

      <div className='w-full flex lg:flex-row flex-col md:px-2 lg:px-12  items-center justify-center'>
        <div className='rounded w-full lg:w-7/12 flex items-center'>
          <Swiper className='rounded w-full h-[38rem]'
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={100}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            autoplay={{ delay: 1, disableOnInteraction: false }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {
              images.map((image, index) => (
                <SwiperSlide key={index} className='w-full flex h-full items-center justify-center relative'>
                  <img src={image.imageUrl} className='h-full w-full' alt={image.imageAlt} />
                  <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent w-full h-24'></div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <div className='px-4 lg:mt-0 mt-8 h-[38rem] w-full lg:w-5/12 flex flex-col items-start justify-start p-2'>
          <div className='flex flex-col items-start justify-start lg:w-4/5'>
            <span className='text-3xl font-bold font-poppins'>The one and only car rental service</span>
            <div className=' items-center w-full flex justify-between'>
              <span className='font-light text-xl font-poppins my-6'>Rated top for our services</span>
              <Rating name="read-only" value={4} readOnly />
            </div>
            <div className='flex text-xl flex-col my-8'>
              <span className='duration-1000 font-semibold font-poppins text-2xl'>
                {features[activeFeature].subheading}
              </span>
              <ul className='list-disc  text-xl font-light pl-8 font-poppins'>

                {
                  features[activeFeature].list.map((item, index) => (
                    <li key={index}>{item.name}</li>
                  ))
                }
              </ul>
            </div>

            <Link className='flex items-center justify-around' to={`/explore`}>
              <button className='rounded flex items-center justify-around cursor-pointer px-12 pr-6 py-2 border font-light duration-75 my-6 border-drive-blue bg-white hover:bg-drive-blue text-drive-blue hover:text-white'>
                <span className='text-xl font-poppins font-medium duration-0'>
                  Explore
                </span>
                <BsArrowRight className='ml-4' />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className='w-full mt-0 lg:mt-24 flex flex-col items-center justify-center'>
        <span className='text-4xl font-semibold font-poppins px-3'>We are trusted by millions of people.</span>
        <div className="w-full px-2 lg:px-12 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          <div className='flex flex-col p-3 items-start justify-start'>
            <div className='w-full flex my-3 items-center justify-start'>
              <div className='p-3 rounded-full bg-drive-blue text-white'>
                <BsCalendarEvent size={20} />
              </div>
              <span className='ml-2 font-medium  w-full text-2xl font-poppins'>Event Planners</span>
            </div>
            <span className='my-3 text-[17px] font-poppins font-light'>
              <strong>
                drive {" "}
              </strong>
              helps event planners by renting them car to flourish and make their events smarter and memorable,
              aside of car renting we also help event planners choose the right choice according to their events.

            </span>
          </div>

          <div className='flex flex-col p-3 items-start justify-start'>
            <div className='w-full flex my-3 items-center justify-start'>
              <div className='p-3 rounded-full bg-drive-blue text-white'>
                <BsFilm size={20} />
              </div>
              <span className='ml-2 font-medium  w-full text-2xl font-poppins'>Film Makers</span>
            </div>
            <span className='my-3 text-[17px] font-poppins font-light'>
              <strong>
                drive {" "}
              </strong>
              helps event planners by renting them car to flourish and make their events smarter and memorable,
              aside of car renting we also help event planners choose the right choice according to their events.

            </span>
          </div>

          <div className='flex flex-col p-3 items-start justify-start'>
            <div className='w-full flex my-3 items-center justify-start'>
              <div className='p-3 rounded-full bg-drive-blue text-white'>
                <BsCalendarEvent size={20} />
              </div>
              <span className='ml-2 font-medium  w-full text-2xl font-poppins'>Personal Services</span>
            </div>
            <span className='my-3 text-[17px] font-poppins font-light'>
              <strong>
                drive {" "}
              </strong>
              helps event planners by renting them car to flourish and make their events smarter and memorable,
              aside of car renting we also help event planners choose the right choice according to their events.

            </span>
          </div>

        </div>
      </div>

      <div className='w-full my-14 flex flex-col items-center justify-center'>
        <span className='text-4xl font-semibold font-poppins px-3'>Testimonials</span>
        <Swiper className='rounded w-full h-[38rem]'
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={100}
          slidesPerView={3}
          // navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          autoplay={{ delay: 1, disableOnInteraction: false }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {
            testimonials.map((image, index) => (
              <SwiperSlide key={index} className='px-3 md:px-12 w-full flex-col flex h-full items-center justify-center'>
                <img alt={image.imageAlt} src={image.imageUrl} className="w-16 my-3 rounded-full object-cover" />
                <span className='font-semibold text-xl font-poppins my-3'>{image.name}</span>

                <Rating name="read-only" value={image.rating} readOnly className='my-2' />

                <span className='font-medium text-base text-slate-600 italic font-poppins my-3'>{image.testimony}</span>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>


      <div className='w-full flex flex-col items-center justify-center'>
        <span className='text-4xl font-semibold font-poppins px-3 my-4'>Get Our Mobile Appp</span>
        <div className='w-full flex items-center justify-center my-4'></div>
      </div>
      <Footer />
    </div>
  )
}

export default Home