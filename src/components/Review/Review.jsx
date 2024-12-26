import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import User from '../User/User';

const Review = () => {
    const usrs = [
        {
            image:"/abdalazez.jpg",
            name:"Abdeleziz Hamdy",
            job:"UI/UX Designer",
            bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi vel nisl vehicula blandit. Praesent ac justo eu nunc commodo molestie."
        },
        {
            image:"my-image.ico",
            name:"Moahmmed Kamal",
            job:"Front End Developer",
            bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi vel nisl vehicula blandit. Praesent ac justo eu nunc commodo molestie."
        },
        {
            image:"my-image.ico",
            name:"Moahmmed Kamal",
            job:"Front End Developer",
            bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi vel nisl vehicula blandit. Praesent ac justo eu nunc commodo molestie."
        },
        {
            image:"my-image.ico",
            name:"Moahmmed Kamal",
            job:"Front End Developer",
            bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi vel nisl vehicula blandit. Praesent ac justo eu nunc commodo molestie."
        },

    ]
  return (
    <>
    <h1 className='text-2xl font-bold text-center text-gray-500 mb-3 mt-32'>Reviews</h1>
      <Swiper
         slidesPerView={3}
         spaceBetween={30}
         freeMode={true}
         pagination={{
           clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            usrs.map((user,index) => <SwiperSlide key={index}><User bio={user.bio} name={user.name} image={user.image} job={user.job}/></SwiperSlide>)
        }
        
      </Swiper>
    </>
  );
}

export default Review