import React, {useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './Slider.css'
import {Autoplay, EffectFade, Navigation, Pagination } from "swiper";

export default function Slider({images}) {
    return(
        <>
    <Swiper
        className='slider-container'
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,EffectFade, Navigation, Pagination]}
    >
    {images.map(image=>(
        <SwiperSlide className='slider-slide'>
            <img src={image} alt='slider not found'/>
        </SwiperSlide>
    ))}

    </Swiper>
    </>
    );






    //const [currentIndex,setCurrentIndex]=useState(0);

    // const sliderContainer={

    //     width:"100%",
    //     height:"80%",
    // };
    // const slider={
    //     height: "100%",
    //     position:"relative",
    // };
    // const slide={
    //     width:"100%",
    //     height:"100%",
    //     borderRadius:"10px",
    //     backgroundPosition:"center",
    //     backgroundSize:"100%",
    //     backgroundImage:`url(${images[currentIndex]})`,
    //     opacity:'1',
    // };
//     const goToPreviousSlide=()=>{
//         setCurrentIndex((prevIndex)=>
//             prevIndex === 0 ? images.length-1 : prevIndex-1
//         );
//     };

//     const goToNextSlide=()=>{
//         setCurrentIndex((prevIndex)=>
//             prevIndex === images.length-1 ? 0 : prevIndex+1
//         );
//     };

//     useEffect(()=>{
//         const interval=setInterval(goToNextSlide,5000);
//         return ()=> {
//             clearInterval(interval);
//         };
//     }, []);

//     const goToSlide=(index)=>{
//         setCurrentIndex(index);
//     };

//     return (
//     <>
//       <div className='slider-container'> 
//         <div className='slider'>
//             <div className='slide active'>
//                 <img src={`${images[currentIndex]}`} alt='images'/>

//             </div>
//         </div>
//         <div className='slider-navigation'>
//             <button onClick={goToPreviousSlide} className='left-arrow'>&lt;</button>
//             <button onClick={goToNextSlide} className='right-arrow'>&gt;</button>
//         </div>
//         <div className='slider-pagination'>
//             {images.map((_,index)=>(
//                 <button
//                     key={index}
//                     className={index === currentIndex ? 'active' : ''}
//                     onClick={()=>goToSlide(index)}
//                 ></button>
//             ))}
//         </div>
//      </div> 
//      <div className='slider-below-apply-button'>
//             <button className='apply-button'>Apply Now</button>
//         </div> 

    
//     </>
//   )
}
