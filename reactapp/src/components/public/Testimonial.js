import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

//import 'swiper/swiper-bundle.min.css';
import 'swiper/css/navigation';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import  { Navigation, Pagination, Scrollbar ,EffectCoverflow} from 'swiper';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarRateIcon from '@mui/icons-material/StarRate';

import './Testimonial.css';
import testimonialDetails from './TestimonialDetails';

// SwiperCore.use([Navigation, Pagination, Scrollbar, EffectCoverflow]);

export default function Testimonial() {
  
  return (
    <>
      <div className='swiper-container'>
        <div className='swiper-heading'>
          Testimonials
        </div>
          <Swiper
            modules={[Navigation,Pagination,Scrollbar,EffectCoverflow]}
            spaceBetween={50}
            centeredSlides={true}
            slidesPerView={3}
            navigation
            pagination={{clickable:true}}
            scrollbar={{draggable:true}}
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            className='mySwiper'
          >
            {testimonialDetails.map(testimonial=>(
              <SwiperSlide className='swiper-box'>
                <img src={testimonial.image} alt='swiper-image' className='swiper-image'/>
                <h3 className='swiper-name'>{testimonial.name}</h3>
                <div className='swiper-message'>{testimonial.message}</div>
                <div className='swiper-rating'>
                  Rating : <StarRateIcon style={{fontSize:10}} className='star-icon'/>
                           <StarRateIcon style={{fontSize:10}} className='star-icon'/>
                           <StarRateIcon style={{fontSize:10}} className='star-icon'/>
                           <StarRateIcon style={{fontSize:10}} className='star-icon'/>
                           <StarRateIcon style={{fontSize:10}} className='star-icon'/></div>
              </SwiperSlide>
            ))}
          </Swiper>
      </div>
    </>
  )
}
