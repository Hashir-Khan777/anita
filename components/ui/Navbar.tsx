import React from 'react'
import { Play, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

function Navbar() {
  return (
    <header className="w-[100%] flex items-center justify-between  px-4 lg:px-[70px] py-[20px]">

        <div className='shrink-0'>
        <img
              src="/images/logo.png"  // Path to your logo image
              alt="Logo"
              className="lg:w-[87px] md:w-[66px] w-[40px] lg:h-[84px] md:h-[64px]"  // Ensure the logo fits within the container
            />

        </div>

        <div className='whitespace-nowrap hidden md:flex flex-row justify-center items-center xl:gap-[50px] gap-[20px]'>
            <li className='list-none lg:text-[20px] text-[14px] font-bold'>Token</li>
            <li className='list-none lg:text-[20px] text-[14px] font-bold'>ABout Anita</li>
            <li className='list-none lg:text-[20px] text-[14px] font-bold'>Partners</li>
            <li className='list-none lg:text-[20px] text-[14px] font-bold'>Press coverages</li>
            <button className='capitalize lg:text-[20px] text-[10px] font-bold text-primary border-primary border-2 rounded-[8px] lg:h-[73px] md:h-[55px] md:px-5  px-2'
            style={{
                background:"linear-gradient(135deg,#0d1407 50%,#6AB131)"
            }}
            >Start conversation with $Anita AI</button>
        </div>

        <div className='block md:hidden'>
            <img src="/images/menuButton.svg" alt="" />
        </div>

        {/* <div className="flex-1">
          <div className="relative h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary-hover shadow-lg">
            <span className="absolute inset-0 flex items-center justify-center text-lg sm:text-xl font-bold text-white">
             
            </span>
            Replace the text with the logo
            <img
              src="/images/logo.png"  // Path to your logo image
              alt="Logo"
              className="absolute inset-0 w-full h-full object-contain"  // Ensure the logo fits within the container
            />
          </div>
        </div>
        <div className="flex-1 flex justify-center">Center content if needed</div>
        <div className="flex-1 flex justify-end">
          <Button variant="ghost" size="icon" className="text-white">
            <Menu className="h-6 w-6" />
          </Button>
        </div> */}
      </header> 
  )
}

export default Navbar
