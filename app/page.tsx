"use client"

import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Inter } from "@next/font/google";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />

<div
  style={{
    paddingBottom: '30px',
    position: 'relative' ,
    width: '100%',
    height: '100%',
    paddingTop: '30px',
  }}
>
  <Carousel
    additionalTransfrom={0}
    arrows
    autoPlaySpeed={3000}
    centerMode={false}
    className=""
    containerClass="container"
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite
    itemClass="carousel-item-padding-40-px"
    keyBoardControl
    minimumTouchDrag={80}
    pauseOnHover
    renderArrowsWhenDisabled={false}
    renderButtonGroupOutside={false}
    renderDotsOutside
    responsive={{
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024
        },
        items: 1
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0
        },
        items: 1
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464
        },
        items: 1
      }
    }}
    rewind={false}
    rewindWithAnimation={false}
    rtl={false}
    shouldResetAutoplay
    showDots
    sliderClass=""
    slidesToSlide={1}
    swipeable
  >
    <img
      src="/images/ss/sas1.png"
      style={{
        display: 'block',
        height: '100%',
        margin: 'auto',
        width: '100%'
      }}
    />
   
   <img
      src="/images/ss/saas2.png"
      style={{
        display: 'block',
        height: '100%',
        margin: 'auto',
        width: '100%'
      }}
    />

<img
      src="/images/ss/saas3.png"
      style={{
        display: 'block',
        height: '100%',
        margin: 'auto',
        width: '100%'
      }}
    />

<img
      src="/images/ss/saas4.png"
      style={{
        display: 'block',
        height: '100%',
        margin: 'auto',
        width: '100%'
      }}
    />

<img
      src="/images/ss/saas5.png"
      style={{
        display: 'block',
        height: '100%',
        margin: 'auto',
        width: '100%'
      }}
    />


  </Carousel>
</div>
    

      <Contact />
    </>
  );
}
