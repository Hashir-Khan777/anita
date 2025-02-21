"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { FaRegCircleRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import CustomButton from "./Button";

const Slider = ({cards }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [mounted, setMounted] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (window) {
      const breakpoint = window.matchMedia("(min-width: 1024px)");
      if (breakpoint.matches) {
        setActiveIndex(1);
      } else {
        setActiveIndex(0);
      }
    }
  }, []);

  useEffect(() => {
    setMounted(true);
    if (prevRef.current && nextRef.current) {
      console.log("Refs initialized:", prevRef.current, nextRef.current);
    }
  }, []);

  return (
    <div
      className="container rounded-lg mx-auto mt-20 py-20 px-1 md:px-16 border-[2px] border-white"
      style={{
        background: "linear-gradient(0deg, #E8F3FF 15.92%, #92A8FF 100%)",
        boxShadow: "0px 4px 24px 0px rgba(0, 69, 197, 0.64)",
      }}
    >
      {/* <h1 className="text-center text-[28px] md:text-5xl mb-6 md:mb-16 font-medium font-cashdisplay">
        <span className="text-white">{headingWhite}</span> {headingBlack}
      </h1> */}
      {/* <div className="mb-4 overflow-hidden"> */}
      <Swiper
        autoplay
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          320: {
            slidesPerView: 1,
          },
        }}
        style={{ padding: "15px 0" }}
        spaceBetween={24}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Navigation]}
        onSlideChange={(e) => {
          if (e.currentBreakpoint >= 1024) {
            setActiveIndex(e.activeIndex + 1);
          } else {
            setActiveIndex(e.activeIndex);
          }
        }}
      >
        {cards?.map((card, index) => (
          <SwiperSlide key={index}>
                            <div
                    key={card.id}
                    className="w-full max-w-[350px] md:max-w-[380px] lg:max-w-[400px] mx-auto bg-gradient-to-b from-[#6ab130] to-[#2b4f1d] rounded-xl shadow-lg p-4 pb-10 text-black flex flex-col gap-5"
                >
                    {/* Image Section */}
                    <div className="rounded-lg overflow-hidden">
                        <div className="w-full h-[250px] md:h-[300px] lg:h-[350px]">
                            <img
                                src={card.imageUrl}
                                alt={card.title}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="mt-4 text-black flex flex-col sm:gap-5 gap-2">
                        <h3 className="font-bold sm:text-[30px]/[30px] text-[15px]/[15px] leading-tight">{card.title}</h3>
                        <p className="md:text-[22px]/[30px] text-[14px]/[20px] mt-2 opacity-80">
                            {card.location} <br />
                            {card.date}
                        </p>
                        <Link target="_blank" href={`${card?.link}`} className="text-black underline sm:text-[20px]/[15px] text-[13px]/[15px] font-bold mt-3 block">
                            {card.btnText}
                        </Link>
                    </div>
                </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* </div> */}
      <div className="pe-4 flex justify-end items-end gap-4 container">
        <button className="text-3xl" aria-label="Scroll Left" ref={prevRef}>
          <img
            className="w-[34px] h-[34px] md:w-[48px] md:h-[48px] rotate-180"
            src="/svgIcons/slidericon.svg"
          />
        </button>
        <button className="text-3xl" aria-label="Scroll Right" ref={nextRef}>
          <img
            className="w-[34px] h-[34px] md:w-[48px] md:h-[48px]"
            src="/svgIcons/slidericon.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default Slider;
