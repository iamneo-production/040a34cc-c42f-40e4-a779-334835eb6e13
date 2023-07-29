import React from 'react'
import './Home.css';
import Slider from '../../../components/public/Slider';
import sliderImages from '../../../components/public/SliderImages';
import Testimonial from '../../../components/public/Testimonial';
import Loans from '../../../components/public/Loans';
import About from '../../../components/public/About';
import Contact from '../../../components/public/Contact';
import Footer from '../../../components/public/Footer';
import Navbar from '../../../components/public/Navbar';
import FaqMain from '../../../components/public/FaqMain';

function Home() {
  return (
    <>
      <Navbar/>
      <div className='scrollable-content'>
        <section id='home'>
          <Slider images={sliderImages}/>
          <section id='about'>
            <About/>
          </section>
          <section id='loans'>
            <Loans/>
          </section>
          <section id='testimonial'>
            <Testimonial/>
          </section>
          <section id="faq">
            <FaqMain/>
          </section>
          <section id='contact'>
            <Contact/>
          </section>
          <Footer/>
        </section>
      </div>
  
      
      {/* <AboutUs/>
      <section id='testimonial'>
        <Testimonial />
      </section>
      <ContactUs/> */}
    </>
  )
}
export default Home;
