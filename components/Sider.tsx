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
      <h1 className="text-center text-[28px] md:text-5xl mb-6 md:mb-16 font-medium font-cashdisplay">
        <span className="text-white">{headingWhite}</span> {headingBlack}
      </h1>
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
                        <Link href="#" className="text-black underline sm:text-[20px]/[15px] text-[13px]/[15px] font-bold mt-3 block">
                            {card.btnText}
                        </Link>
                    </div>
                </div>

            {/* <div
              className={`font-lexend shrink-0 mx-auto w-[310px] md:w-full py-16 px-3 md:px-6 rounded-md  border-4 border-white
                ${
                  index === activeIndex
                    ? "bg-gradient-to-b from-white to-[#C2DEFF] shadow-lg my-3"
                    : "bg-white/50 scale-90 opacity-40"
                }
              transition-transform duration-300`}
              style={{
                background:
                  "linear-gradient(180deg, #FFFFFF 16%, #C2DEFF 100%)",
                boxShadow: "0px 4px 24px 0px rgba(0, 69, 197, 0.48)",
              }}
            >
              {card.payment || card.appointment ? (
                <div
                  className={`flex gap-6 text-2xl items-center justify-center w-full ${
                    card.alertType === "success"
                      ? "text-[#0F7400]"
                      : "text-[#F93434]"
                  } font-semibold mb-5`}
                >
                  {card.alertType === "danger" ? (
                    <svg
                      viewBox="0 0 27 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[18px] h-[18px] md:w-[27px] md:h-[25px]"
                    >
                      <path
                        d="M11.0809 1.92012C12.1561 0.026628 14.844 0.0266264 15.9192 1.92012L26.3216 20.2396C27.3968 22.1331 26.0528 24.5 23.9025 24.5H3.09763C0.94726 24.5 -0.396723 22.1331 0.678463 20.2396L11.0809 1.92012Z"
                        fill="#F93434"
                      />
                      <path
                        d="M15.0296 16.7564H11.9702C11.9702 15.088 11.5447 10.5915 11.5447 9.02483V7.60059H15.4551V9.02483C15.4551 10.5915 15.0296 15.1084 15.0296 16.7564ZM15.2323 21.2326H11.7675V17.9162H15.2323V21.2326Z"
                        fill="white"
                      />
                    </svg>
                  ) : null}
                  <h1 className="text-[18px] font-semibold md:text-[28px]">
                    {card.alert}
                  </h1>
                </div>
              ) : null}
            //   {/* ---- Card ---- 
              <div
                className={`flex ${
                  card.propertyId ? "items-start" : "items-center"
                } justify-between w-full`}
              >
                <div>
                  <h1
                    className={`${
                      card.showMoreInfo ? "text-sm" : "text-lg"
                    } md:text-2xl font-semibold`}
                  >
                    {card.title}
                  </h1>
                  {card.propertyId ? (
                    <p className="text-xs md:text-base font-medium bg-[#D1BCFF] rounded-full px-5 py-2 mt-3">
                      Property ID:{" "}
                      <span className="font-semibold text-xs md:text-base">
                        {card.propertyId}
                      </span>
                    </p>
                  ) : null}
                </div>

                {card.showMoreInfo && (
                  <Link
                    href="/"
                    className="text-black text-xs md:text-lg underline font-normal"
                  >
                    More Info
                  </Link>
                )}
              </div>
              {card.payment ? (
                <p className="font-semibold text-2xl md:text-[32px] text-center my-3 md:my-12">
                  AED {card.amount}
                </p>
              ) : null}
              {card.appointment ? (
                <p className="font-semibold text-2xl md:text-[32px] text-center my-3 md:my-12">
                  {card.date}
                </p>
              ) : null}
              {!card.payment && !card.appointment ? (
                <p className="py-4 md:py-9 text-[12px] md:text-xl font-light">
                  {card.info}{" "}
                  {card.offer ? (
                    <span className="text-[16px] md:text-2xl font-semibold">
                      {card.ref_no}
                    </span>
                  ) : null}
                </p>
              ) : null}
              {card.ref_no && !card.offer ? (
                <p className="text-[12px] md:text-xl font-light mb-12">
                  Refrence Number:{" "}
                  <span className="text-[12px] md:text-2xl font-semibold">
                    {card.ref_no}
                  </span>
                </p>
              ) : null}

              <Link href={card.link || "#"}>
                <CustomButton
                  textClass="md:text-xl"
                  btnClass="mx-auto"
                  iconClass="md:w-[32px] md:h-[32px]"
                >
                  {card.btnText}
                </CustomButton>
              </Link>
            </div> */}
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
