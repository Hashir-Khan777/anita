"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

function TestNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full flex items-center justify-between md:justify-center md:gap-[200px] md:px-[100px] px-[20px] py-[30px] text-white">
            <div className="relative flex flex-row items-center justify-between w-full px-4">
                <Image src="/images/logo.svg" alt="Logo" width={66} height={64} />
                <Button
                    variant="ghost"
                    size="icon"
                    className="text-white md:hidden block relative left-80"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <Image src="/images/menu-icon.svg" alt="Menu" width={35} height={19} />
                </Button>
            </div>



            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-[60px]">
                <Link href="/" className="text-white hover:text-gray-300 font-[700] md:text-[20px] font-fielder">Token</Link>
                <Link href="/" className="text-white hover:text-gray-300 font-[700] md:text-[20px] font-fielder">About Anita</Link>
                <Link href="/" className="text-white hover:text-gray-300 font-[700] md:text-[20px] font-fielder">Partners</Link>
                <Link href="/" className="text-white hover:text-gray-300 font-[700] md:text-[20px] font-fielder">Press Coverages</Link>
                <button
                    className='lg:w-[411px] h-[73px] rounded-[8px] text-[#6AB131] font-[700] md:text-[20px] font-fielder border-[1px] border-[#6AB131]'
                    style={{ background: "linear-gradient(90deg,#6BB1301A 10%,#65B0311A 10%,#1E3919)" }}
                >
                    START CONVERSATION WITH $ANITA
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-[80px] left-0 w-full bg-black text-white flex flex-col items-center py-5 space-y-4 md:hidden z-50">
                    <Link href="/" className="text-white hover:text-gray-300 font-[700] text-[18px] font-fielder" onClick={() => setIsMenuOpen(false)}>Token</Link>
                    <Link href="/" className="text-white hover:text-gray-300 font-[700] text-[18px] font-fielder" onClick={() => setIsMenuOpen(false)}>About Anita</Link>
                    <Link href="/" className="text-white hover:text-gray-300 font-[700] text-[18px] font-fielder" onClick={() => setIsMenuOpen(false)}>Partners</Link>
                    <Link href="/" className="text-white hover:text-gray-300 font-[700] text-[18px] font-fielder" onClick={() => setIsMenuOpen(false)}>Press Coverages</Link>
                    <button
                        className='w-[80%] h-[50px] rounded-[8px] text-[#6AB131] font-[700] text-[18px] font-fielder border-[1px] border-[#6AB131]'
                        style={{ background: "linear-gradient(90deg,#6BB1301A 10%,#65B0311A 10%,#1E3919)" }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        START CONVERSATION WITH $ANITA
                    </button>
                </div>
            )}
        </header>
    );
}

export default TestNavbar;
