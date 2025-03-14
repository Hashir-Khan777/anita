"use client";

import { useState } from "react";
import { Play, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
//import { NavigationMenu } from "../components/ui/navigation-menu";  // named import
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import CustomButton from "./CustomButton";
//import Menubar from "@/components/ui/menubar";
export function HowToBuySection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen w-full hero mb-7">
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 my-10">
        <div className="w-full flex flex-col justify-center md:flex-row md:justify-between gap-4">
          <div className="flex flex-col  w-full md:w-1/2 justify-center items-center md:items-start p-4 animate-fadeIn md:text-start text-center">
            <h1 className="mb-2 text-4xl sm:text-5xl font-bold leading-tight ">
              <span className="text-primary">
                How to Buy <br />{" "}
              </span>{" "}
              <span className="text-white">$ANITA</span>
            </h1>

            {/* <p className="md:text-[28px]/[38px]">
              Blurring the Lines Between AI, Crypto,
              <br />& Real-Time Engagement
            </p> */}
          </div>

          <div className=" w-full md:w-1/2 p-4 pb-0 mx-auto max-w-2xl overflow-hidden rounded-2xl bg-black/50 shadow-2xl animate-slideUp">
            <div className=" relative aspect-video w-full md:h-[800px] h-[491px]">
              <Image
                src="/images/how-to-buy-video.svg"
                alt="How to buy"
                layout="fill"
                objectFit="cover"
                className="w-full h-full rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <button
                  onClick={() => setVideoOpen(true)}
                  className="group relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-primary transition-transform duration-300 hover:scale-110 mb-4"
                >
                  <Play className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  <div className="absolute -inset-1 animate-ping rounded-full bg-primary/20" />
                </button>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  WATCH NOW
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 justify-center items-center my-7">
        <CustomButton link="https://raydium.io/swap/?inputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&outputMint=AnXE9mZYWReqBw4v5HrY2S2utt42uEtcBGmuCXASvRAi">
          Get $Anita
        </CustomButton>
      </div>

      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-4xl border-none bg-black p-0">
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/bQyF321dVF8"
              title="Anita AI Journey"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="aspect-video"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

// "use client"

// import { useState } from "react"
// import { Play } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Dialog, DialogContent } from "@/components/ui/dialog"
// import Image from "next/image"
// import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";

// export function HowToBuySection() {
//   const [videoOpen, setVideoOpen] = useState(false)

//   return (
//     <section className="relative min-h-screen w-full flex flex-col hero">
//       <div className="flex-grow flex items-center justify-center px-4 sm:px-6">
//         <div className="w-full flex flex-col md:flex-row md:justify-between gap-y-4 sm:gap-y-6 md:gap-8 gap-x-6">

//           <div className="flex flex-col w-full md:w-1/2 justify-center items-start p-4 text-center md:text-left animate-fadeIn">
//             <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-[80px]/[80px] font-bold leading-tight">
//               <span className="text-primary">How to Buy <br/> </span>
//               <span className="text-white">$ANITA</span>
//             </h1>
//             <p className="md:text-[28px]/[38px] text-start">Blurring the Lines Between AI, Crypto,<br/>
//             & Real-Time Engagement</p>
//           </div>

//           <div className="h-[300px] sm:h-[300px] md:h-[500px] w-full md:w-1/2 p-4 mx-auto max-w-2xl overflow-hidden rounded-2xl bg-black/50 shadow-2xl animate-slideUp">
//             <div className="relative h-full w-full">
//               <Image
//                 src="/images/how-to-buy-video.svg"
//                 alt="How to buy"
//                 layout="fill"
//                 objectFit="contain"
//               />
//               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
//               <div className="absolute inset-0 flex flex-col items-center justify-center">
//                 <button
//                   onClick={() => setVideoOpen(true)}
//                   className="group relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-primary transition-transform duration-300 hover:scale-110 mb-4"
//                 >
//                   <Play className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
//                   <div className="absolute -inset-1 animate-ping rounded-full bg-primary/20" />
//                 </button>
//                 <h2 className="text-xl sm:text-2xl font-bold text-white">WATCH NOW</h2>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
//         <DialogContent className="max-w-4xl border-none bg-black p-0">
//           <div className="aspect-video w-full">
//             <iframe
//               width="100%"
//               height="100%"
//               src="https://www.youtube.com/embed/bQyF321dVF8"
//               title="Anita AI Journey"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               className="aspect-video"
//             />
//           </div>
//         </DialogContent>
//       </Dialog>
//     </section>
//   )
// }
