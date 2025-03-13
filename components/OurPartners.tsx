import { Section } from "lucide-react";
import React from "react";

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

        <div className="hidden md:block w-full object-cover">
          <img
            src="/images/partners.svg"
            alt="Our Partners"
            className="w-full h-full"
          />
        </div>
        <div className="md:hidden block w-full object-cover">
          <img
            src="/images/partnerSm.svg"
            alt="Our Partners"
            className="w-full h-full"
          />
        </div>
      </div>
      {/* ======  Container starts ====== */}
    </section>
  );
}

export default OurPartners;
