"use client"

import { motion } from "framer-motion";
import React from "react";

const logos = [
    "/kummuni 1.png",
    "/ray-logo 1.png",
    "/sol-logo 1-1.png",
    "/sqaure 1.png",
    "/bull 1.png",
    "/messari 1.png",
    "/coinmarket.svg"
];

function OurPartners() {
  return (
    <section className="w-full  md:py-[100px] py-[50px]">
      {/* ======  Container starts ====== */}
      <div className="w-full flex flex-col gap-14 justify-center items-center">
        <div className="w-[90%] mx-auto flex flex-col gap-3 justify-center items-center text-center md:px-[100px]">
          <h1 className="lg:text-[80px]/[80px] sm:text-[60px]/[60px] text-[20px]/[20px]">
            <span className="text-primary">Stronger together</span>
            <br /> our partners in innovaton
          </h1>
          <p className="md:text-[28px]/[38px] text-[14px]/[20px]">
            See what the world is saying about me and my groundbreaking journey.
          </p>
        </div>
        <motion.div className="flex gap-[32px]" animate={{ x: [0, -1000] }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }}>
                {Array(3).fill([...logos]).flat().map((logo, index) => (
                    <div
                        key={index}
                        className="w-[295px] h-[262px] flex justify-center items-center rounded-xl"
                        style={{ backgroundColor: "rgba(236, 236, 235, 0.1)", border: "1px solid rgba(106, 177, 49, 0.2)" }}
                    >
                        <img src={logo} alt="logo" className="object-contain" />
                    </div>
                ))}
        </motion.div>
        <motion.div className="flex gap-[32px]" animate={{ x: [0, 1000] }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }}>
                {Array(3).fill([...logos]).flat().map((logo, index) => (
                    <div
                        key={index}
                        className="w-[295px] h-[262px] flex justify-center items-center rounded-xl"
                        style={{ backgroundColor: "rgba(236, 236, 235, 0.1)", border: "1px solid rgba(106, 177, 49, 0.2)" }}
                    >
                        <img src={logo} alt="logo" className="object-contain" />
                    </div>
                ))}
        </motion.div>
      </div>
      {/* ======  Container starts ====== */}
    </section>
  );
}

export default OurPartners;
