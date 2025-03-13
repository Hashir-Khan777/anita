// "use client"


// import { useState } from "react"
// import { Play, Menu } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Dialog, DialogContent } from "@/components/ui/dialog"
// import Image from "next/image"

// export function PodcastSection() {
//   const [videoOpen, setVideoOpen] = useState(false)

//   // Simulate loading state


//   return (
//     <section className="relative bg-black px-4 sm:px-6 py-16 overflow-hidden">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

//       <div className="flex-grow flex flex-col md:flex-row items-center justify-center px-4 sm:px-6">

//         <div className="flex flex-col justify-center items-center md:flex-row gap-4">

//           <div className="flex flex-col justify-center items-start gap-10 h-full w-full md:w-1/2 p-4 text-center animate-fadeIn">
//             <div>
//               <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//                 <span className="text-primary">50+ </span>{" "}
//                 <span className="text-white">PODCAST ON</span>
//               </h1>
//               <p className="text-gray-300 flex flex-row gap-5 justify-start items-center ">
//                 <img src="/images/spotify.svg" className="md:h-[55px] h-[28px] w-[92px]" />
//                 <span className="font-fielder lg:text-[60px]/[24px] text-[20px]/[20px]">&</span>
//                 <img src="/images/youtube-logo.svg" className="md:h-[55px] h-[28px] w-[92px]" />
//               </p>
//             </div>
//             <p className="text-start">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

//             <button className='capitalize lg:text-[20px] text-[12px] font-bold text-primary border-primary border-2 rounded-[8px] lg:h-[73px] h-[58px] w-[300px] md:w-[286px]'
//               style={{
//                 background: "linear-gradient(135deg,#0d1407 50%,#6AB131)"
//               }}
//             >Chat with Me</button>

//           </div>

//           <div className="h-full-vh w-full md:w-1/2  p-4 mx-auto max-w-2xl overflow-hidden rounded-2xl bg-black/50 shadow-2xl animate-slideUp">

//             <div className="h-full-vh relative aspect-video w-full">
//               <Image
//                 src="/images/spotify-video.svg"
//                 alt="Anita AI Journey Video Thumbnail"
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


"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"
import CustomButton from "./CustomButton"

export function PodcastSection() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section className="relative bg-black px-4 sm:px-6 py-16 overflow-hidden md:px-[100px]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 gap-8 lg:gap-16">
        <div className="flex flex-col justify-center items-center md:items-start gap-6 text-center md:text-left w-full lg:w-1/2 animate-fadeIn">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-primary">50+ </span>
            <span className="text-white">PODCAST ON</span>
          </h1>
          <p className="text-gray-300 flex flex-row gap-3 justify-center md:justify-start items-center">
            <img src="/images/spotify.svg" className="md:h-[55px] h-[28px] w-[92px]" alt="Spotify" />
            <span className="font-fielder lg:text-[60px]/[24px] text-[20px]/[20px]">&</span>
            <img src="/images/youtube-logo.svg" className="md:h-[55px] h-[28px] w-[92px]" alt="YouTube" />
          </p>
          <p className="text-gray-300 max-w-md">A reader will be distracted by the readable content of a page when looking at its layout.</p>
          {/* <button className='capitalize lg:text-[20px] text-[12px] font-bold text-primary border-primary border-2 rounded-[8px] lg:h-[73px] h-[58px] w-[80%] md:w-[286px]'
            style={{ background: "linear-gradient(135deg,#0d1407 50%,#6AB131)" }}>
            Chat with Me
          </button> */}
          <CustomButton link="https://www.youtube.com/@itsAnitaAI">Go Listen</CustomButton>
        </div>
{/* 
        <div className="relative aspect-video w-full md:w-1/2 max-w-xl rounded-2xl object-cover bg-black/50 shadow-2xl overflow-hidden animate-slideUp">
          <Image
            src="/images/spotify-video.svg"
            alt="Anita AI Journey Video Thumbnail"
            layout="fill"
            objectFit="contain"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setVideoOpen(true)}
              className="group relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-primary transition-transform duration-300 hover:scale-110 mb-4"
            >
              <Play className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              <div className="absolute -inset-1 animate-ping rounded-full bg-primary/20" />
            </button>
          </div>
        </div> */}
         <div className="relative aspect-video w-full md:w-[600px] md:h-[600px] h-[300px] max-w-[684px] rounded-2xl bg-black/50 shadow-2xl overflow-hidden animate-slideUp">
      <Image
        src="/images/spotify-video.svg"
        alt="Anita AI Journey Video Thumbnail"
        layout="fill"
        objectFit="cover"
        className="rounded-2xl"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
      <div className="absolute inset-0 flex items-center justify-center">
        <button
           onClick={() => setVideoOpen(true)}
          className="group relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-primary transition-transform duration-300 hover:scale-110 mb-4"
        >
          <Play className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
          <div className="absolute -inset-1 animate-ping rounded-full bg-primary/20" />
        </button>
      </div>
    </div>


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
  )
}


