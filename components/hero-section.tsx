"use client";

import { useState } from "react";
import { Play, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";
//import { NavigationMenu } from "../components/ui/navigation-menu";  // named import
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
//import Menubar from "@/components/ui/menubar";

export function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen w-full flex flex-col gap-5 hero">
      {/* ===== Header Start here ===== */}
      {/* <header className="w-full flex items-center justify-between px-4 sm:px-6 py-4">
        <div className="flex-1">
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
            <img src="/images/menu-icon.svg" />
          </Button>
          <div className="hidden md:block">
            Navigation Menu

            <NavigationMenu className="w-full bg-transparent py-4">
              <NavigationMenuList className="flex items-center justify-center space-x-6">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/"
                    className="text-white hover:text-gray-300 transition font-medium"
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <span className="text-white">|</span>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/about"
                    className="text-white hover:text-gray-300 transition font-medium"
                  >
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <span className="text-white">|</span>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/services"
                    className="text-white hover:text-gray-300 transition font-medium"
                  >
                    Services
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <span className="text-white">|</span>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/contact"
                    className="text-white hover:text-gray-300 transition font-medium"
                  >
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>


          </div>

        </div>
      </header> */}

      {/* ===== Header End here ===== */}

      {/* ===== Hero Section start here ===== */}
      {/* <div className="flex-grow flex items-center justify-center px-10 sm:px-6">
        <div className="h-full-vh flex flex-col md:flex-row gap-4">
          <div className="flex flex-col justify-center h-full w-[277px] md:w-1/2 p-4 text-center animate-fadeIn">
            <h1 className="mb-4 text-[20px]/[20px] sm:text-4xl md:text-5xl lg:text-6xl font-[700] leading-tight">
              <span className="text-primary">ANITA:</span>{" "}
              <span className="text-white">The First AI Crypto Influencer Taking Over the Digital Space</span>
            </h1>
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-300">
              Blurring the Lines Between AI, Crypto, & Real-Time Engagement
            </p>
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-white-800">
              AnXE9mZYWReqBw4v5HrY2S2utt42uEtcBGmuCXASvRAi
            </p>
          </div>

          <div className="h-full-vh w-full md:w-1/2  p-4 mx-auto max-w-2xl overflow-hidden rounded-2xl bg-black/50 shadow-2xl animate-slideUp">
            <div className="h-full-vh relative aspect-video w-full">
              <Image
                src="/images/hero_banner_video.svg"
                alt="Anita AI Journey Video Thumbnail"
                layout="fill"
                objectFit="contain"
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
                <h2 className="text-xl sm:text-2xl font-bold text-white">WATCH MY JOURNEY UNFOLD</h2>
              </div>
            </div>
          </div>
        </div>

      </div> */}

      <div className="flex md:flex-row flex-col items-center justify-center gap-5 md:justify-between md:px-10 px-5 py-10 w-ful">
        {/* Left Content */}
        <div className=" flex-1 md:text-start flex flex-col gap-5 md:items-start md:justify-start items-center justify-center text-center md:px-10 px-4 sm:mx-auto">
          <h1 className="xl:text-[60px]/[60px] lg:text-[40px]/[40px] md:font-extrabold font-bold text-[20px]/[20px] leading-tight font-fielder">
            <span className="text-primary">$ANITA:</span>{" "}
            <span className="text-white">
              The First AI Crypto <br /> Influencer Taking Over the Digital
              Space
            </span>
          </h1>
          {/* <p className="md:text-[28px]/[38px] text-[14px] text-gray-300">
            Blurring the Lines Between AI, Crypto, & Real-Time Engagement
          </p> */}
          <Link href="https://voice.itsanita.com" target="_blank">
            <button className="md:text-[28px] text-[16px] bg-primary md:w-[225px] w-[180px] md:h-[73px] h-[50px] rounded-md shadow-lg font-fielder">
              Chat with me
            </button>
          </Link>
        </div>

        {/* Right Video Section */}
        {/* <div className="relative flex-1  overflow-hidden rounded-2xl bg-black/50 shadow-2xl animate-slideUp">
          <div className="relative aspect-video w-full mx-auto md:w-[600px]">
            <Image
              src="/images/videothumbnail.png"
              alt="Anita AI Journey Video Thumbnail"
              width={800}
              height={450}
              className="rounded-2xl object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center md:justify-center justify-end md:py-0 py-5">
              <button
                onClick={() => setVideoOpen(true)}
                className="group relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-primary transition-transform duration-300 hover:scale-110 mb-4"
              >
                <Play className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                <div className="absolute -inset-1 animate-ping rounded-full bg-primary/20" />
              </button>
              <h2 className="text-[18px]/[18px] sm:text-2xl font-bold text-white text-center">WATCH MY<br />JOURNEY UNFOLD</h2>
            </div>
          </div>
        </div> */}
        <div className=" h-[446px] md:h-[700px] w-full md:w-1/2  p-4 mx-auto max-w-2xl overflow-hidden rounded-2xl bg-black/50 shadow-2xl animate-slideUp">
          <div className="relative aspect-video w-full h-full">
            <Image
              src="/images/hero_banner_video.svg"
              alt="Anita AI Journey Video Thumbnail"
              layout="fill"
              objectFit="contain"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
            <div className="absolute inset-0 flex flex-col items-center md:justify-center justify-end md:mb-0 mb-10">
              <button
                onClick={() => setVideoOpen(true)}
                className="group relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-primary transition-transform duration-300 hover:scale-110 mb-4"
              >
                <Play className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                <div className="absolute -inset-1 animate-ping rounded-full bg-primary/20" />
              </button>
              <h2 className="text-xl sm:text-2xl font-bold text-white text-center">
                WATCH MY
                <br />
                JOURNEY UNFOLD
              </h2>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-4xl border-none bg-black p-0">
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/uWS6Tq4v4sY"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>

      <div className="w-full h-[10vh] flex flex-col gap-5 justify-center items-center text-center md:my-20 mb-10  font-fielder">
        <p className="uppercase md:text-[50px]/[50px] text-[34px]/[34px] font-extrabold text-primary">
          Real-time <br /> Connection
        </p>
        <div style={{backgroundColor: "rgba(105, 177, 68, 1)"}} className="flex items-center px-3 py-[10px] rounded-xl gap-[67px]">
          <Link className="w-[70px] md:w-auto" href="https://x.com/itsanita_ai" target="_blank"><img src="/twitterchat.png" /></Link>
          <Link className="w-[70px] md:w-auto" href="https://t.me/itsanitaai" target="_blank"><img src="/telegramchat.png" /></Link>
        </div>
        <p>CHAT WITH ME</p>
        {/* <img
          src="/images/herobuttons.svg"
          alt=""
          className="md:w-[296px] w-[157px]"
        /> */}
      </div>

      {/* ===== Hero Section End here ===== */}
    </section>
  );
}
