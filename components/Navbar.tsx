import React from "react";
import { Play, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "@/styles/globals.css"; // Ensure global styles are loaded

function Navbar() {
  return (
    <header className="flex items-center justify-between px-4 md:px-[70px] py-[20px]">
      <div className="shrink-0">
        <img
          src="/images/logo.png" // Path to your logo image
          alt="Logo"
          className="md:w-[67px] w-[66px] md:h-[64px] h-[64px]" // Ensure the logo fits within the container
        />
      </div>
      <div className="whitespace-nowrap hidden xl:flex flex-row justify-center items-center lg:gap-[20px] gap-[20px]">
        <Link
          target="_blank"
          href="https://www.instagram.com/itsanitaai/"
          className="list-none lg:text-[15px] text-[14px] font-bold font-fielder"
        >
          Instagram
        </Link>
        <Link
          target="_blank"
          href="https://www.tiktok.com/@itsanitaai"
          className="list-none lg:text-[15px] text-[14px] font-bold font-fielder"
        >
          TikTok
        </Link>
        <Link
          target="_blank"
          href="https://www.youtube.com/@itsAnitaAI"
          className="list-none lg:text-[15px] text-[14px] font-bold font-fielder"
        >
          YouTube
        </Link>
        <Link
          target="_blank"
          href="https://open.spotify.com/show/0JcTw3Af1g6gCjxUqJXskW?si=nj2Ld9qdTlGHHMG135PKJg&fbclid=PAZXh0bgNhZW0CMTEAAabqEpe9KEdCN8Xk87EeDDu5dJ2hH7ZCD9nqVju4zUEZZEtNVWAKkWbl6AU_aem_n5cGTnS17vcKEjLUjfCbsA&nd=1&dlsi=f3b2245565464888"
          className="list-none lg:text-[15px] text-[14px] font-bold font-fielder"
        >
          Spotify
        </Link>
        <Link
          target="_blank"
          href="https://www.dextools.io/app/en/token/anitaai"
          className="list-none lg:text-[15px] text-[14px] font-bold font-fielder"
        >
          Dextools
        </Link>
        <Link
          target="_blank"
          href="https://dexscreener.com/solana/2xrl1b4zmjygtrqj6faexea9uhjw1wqvgs6evvyy26nq"
          className="list-none lg:text-[15px] text-[14px] font-bold font-fielder"
        >
          Dexscreener
        </Link>
        <Link
          target="_blank"
          href="https://whitepaper.itsanita.com"
          className="list-none lg:text-[15px] text-[14px] font-bold font-fielder"
        >
          Whitepaper
        </Link>
        {/* <Link
          href="https://www.instagram.com/itsanitaai/"
          target="_blank"
          className="list-none lg:w-[35px] lg:h-[35px] h-[25px] w-[25px] font-bold font-fielder"
        >
          <img src="./images/insta.svg" alt="" />
        </Link>
        <Link
          href="https://x.com/itsanita_ai"
          target="_blank"
          className="list-none lg:w-[35px] lg:h-[35px] h-[25px] w-[25px] font-bold font-fielder"
        >
          <img src="./images/twitter.svg" alt="" />
        </Link>
        <Link
          href="https://www.youtube.com/@itsAnitaAI"
          target="_blank"
          className="list-none lg:w-[35px] lg:h-[35px] h-[25px] w-[25px] font-bold font-fielder"
        >
          <img src="./images/youtube.svg" alt="" />
        </Link> */}

        <Link
          href="https://voice.itsanita.com"
          target="_blank"
          passHref
          legacyBehavior
        >
          <a target="_blank">
            <button
              className="font-fielder capitalize lg:text-[15px] text-[12px] font-bold text-primary border-primary border-2 rounded-[8px] lg:h-[73px] md:h-[55px] md:px-3  px-2"
              style={{
                background: "linear-gradient(135deg,#0d1407 50%,#6AB131)",
              }}
            >
              Start conversation with $Anita
            </button>
          </a>
        </Link>
      </div>

      <div className="block xl:hidden">
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
  );
}

export default Navbar;
