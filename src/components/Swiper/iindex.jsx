import React from 'react';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const ImageSwiper = ({ data }) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
    >
      {data?.map((d, idx) => (
        <SwiperSlide key={idx}>
          <img style={{ width: '100%' }} src={d.imagePath} alt='image' />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper;
