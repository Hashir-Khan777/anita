import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const MySwiperComponent = ({ cards }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  // const swiperContent = useMemo(
  //   () => (
  //     <Swiper
  //       // onSwiper={(swiper) => console.log("swiper")}
  //       onSwiper={(swiper) => {
  //           if (!swiperRef.current) {
  //             swiperRef.current = swiper;
  //             console.log("Swiper Initialized:", swiper);
  //           }
  //         }}
  //       onSlideChange={(swiper) => console.log("slide change")}
  //       slidesPerView={1}
  //       loop
  //     >
  //       {cards.map((card: any, index: any) => (
  //         <SwiperSlide key={index}>
  //           <div className="w-full max-w-[350px] md:max-w-[380px] lg:max-w-[400px] mx-auto bg-gradient-to-b from-[#6ab130] to-[#2b4f1d] rounded-xl shadow-lg p-4 pb-10 text-black flex flex-col gap-5">
  //             {/* Image Section */}
  //             <div className="rounded-lg overflow-hidden">
  //               <div className="w-full h-[250px] md:h-[300px] lg:h-[350px]">
  //                 <img
  //                   src={card.imageUrl}
  //                   alt={card.title}
  //                   className="w-full h-full object-cover rounded-lg"
  //                 />
  //               </div>
  //             </div>

  //             {/* Content Section */}
  //             <div className="mt-4 text-black flex flex-col sm:gap-5 gap-2">
  //               <h3 className="font-bold sm:text-[30px]/[30px] text-[15px]/[15px] leading-tight">
  //                 {card.title}
  //               </h3>
  //               <p className="md:text-[22px]/[30px] text-[14px]/[20px] mt-2 opacity-80">
  //                 {card.location} <br />
  //                 {card.date}
  //               </p>
  //               <Link
  //                 target="_blank"
  //                 href={`${card?.link}`}
  //                 className="text-black underline sm:text-[20px]/[15px] text-[13px]/[15px] font-bold mt-3 block"
  //               >
  //                 {card.btnText}
  //               </Link>
  //             </div>
  //           </div>
  //         </SwiperSlide>
  //       ))}
  //     </Swiper>
  //   ),
  //   [cards]
  // );

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform ease-in-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {cards.map((card: any, index: any) => (
          <div className="w-full flex-shrink-0">
            <div
              key={index}
              className="w-full max-w-[350px] mx-auto bg-gradient-to-b from-[#6ab130] to-[#2b4f1d] rounded-xl shadow-lg p-4 pb-10 text-black flex flex-col gap-5 flex-shrink-0"
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
                <h3 className="font-bold sm:text-[30px]/[30px] text-[15px]/[15px] leading-tight">
                  {card.title}
                </h3>
                <p className="md:text-[22px]/[30px] text-[14px]/[20px] mt-2 opacity-80">
                  {card.location} <br />
                  {card.date}
                </p>
                <a
                  target="_blank"
                  href={`${card?.link}`}
                  className="text-black underline sm:text-[20px]/[15px] text-[13px]/[15px] font-bold mt-3 block"
                >
                  {card.btnText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="float-right mt-2 mr-2">
        <button
          className="p-2 rounded-full shadow-md"
          onClick={prevSlide}
        >
          <FaArrowAltCircleLeft size={40} color="#6ab130" />
        </button>
        <button
          className="p-2 rounded-full shadow-md"
          onClick={nextSlide}
        >
          <FaArrowAltCircleRight size={40} color="#6ab130" />
        </button>
      </div>
    </div>
  );
};

export default MySwiperComponent;
