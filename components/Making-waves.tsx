import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"; // Adjust the import path if needed
import { Button } from "@/components/ui/button"; // If you are using a button component
import CardComponent from './cardComponent';
import { Slider } from '@radix-ui/react-slider';

const cardData = [
    {
        id: 1,
        title: "ANITA AI: THE FIRST AI-DRIVEN INFLUENCER LAUNCHES HER OWN TOKEN, $ANITA",
        location: "Dubai, UAE",
        date: "9th December 2024, Chainwire",
        imageUrl: "./images/makewavesCard1.svg", // Replace with actual image
        btnText: "Read More"
    },
    {
        id: 1,
        title: "ANITA AI: THE FIRST AI-DRIVEN INFLUENCER LAUNCHES HER OWN TOKEN, $ANITA",
        location: "Dubai, UAE",
        date: "9th December 2024, Chainwire",
        imageUrl: "./images/makingWaves2.svg", // Replace with actual image
        btnText: "Read More"
    },
    {
        id: 1,
        title: "ANITA AI: THE FIRST AI-DRIVEN INFLUENCER LAUNCHES HER OWN TOKEN, $ANITA",
        location: "Dubai, UAE",
        date: "9th December 2024, Chainwire",
        imageUrl: "./images/makewavesCard3.svg", // Replace with actual image
        btnText: "Read More"
    },
]

function MakingWaves() {
    return (
        <section className='w-full md:px-[100px]'>
            {/* ======  Container starts ====== */}
            <div className='flex flex-col gap-14 justify-center items-center'>
                <div className='md:w-[70%] w-[90%] mx-auto flex flex-col gap-3 justify-center items-center text-center'>
                    <h1 className='lg:text-[80px]/[80px] sm:text-[60px]/[60px] text-[20px]/[20px]'><span className='text-primary'>$Anita</span> making waves</h1>
                    <p className='md:text-[28px]/[38px] text-[14px]/[20px]'>From Decrypt to Cointelegraph, see what the world is saying about me and my groundbreaking journey.</p>

                </div>

                <div className=''>
                    <CardComponent cards={cardData} />
                </div>

                {/* <div className='md:hidden block'>
                    <Slider />
                </div> */}

            </div>
            {/* ======  Container starts ====== */}

        </section>
    )
}

export default MakingWaves
