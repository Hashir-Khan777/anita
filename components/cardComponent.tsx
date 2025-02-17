// import React from "react";
// import Link from "next/link";

// // Define the type for the card data
// interface CardProps {
//   id: number;
//   title: string;
//   location: string;
//   date: string;
//   image: string;
//   btnText: string;
// }

// // Define the type for the component props
// interface CardComponentProps {
//   cards: CardProps[];
// }

// const CardComponent: React.FC<CardComponentProps> = ({ cards }) => {
//   return (
// <div className="grid md:grid-cols-3 grid-cols-1 gap-5">

// {cards.map((card)=>{
//             return(
//                 <div  key={card.id} className="max-w-[514px] max-h-[782px] mx-auto bg-gradient-to-b from-[#6ab130] to-[#2b4f1d] rounded-xl shadow-lg p-4 text-black  mx-2">
//                   <div className="rounded-lg overflow-hidden object-cover">
//                     {/* Image Section */}
//                     <div className="w-[488px] h-[438px]">
//                     <img
//                       src={card.imageUrl}
//                       alt={card.title}
//                       className="w-full h-full"
//                     />
//                     </div>


//                     {/* Content Section */}
//                     <div className="mt-4">
//                       <h3 className="font-bold text-lg">{card.title}</h3>
//                       <p className="text-sm mt-2">
//                         {card.location} <br />
//                         {card.date}
//                       </p>
//                       <Link href="#" className="text-black font-bold mt-3 block">

//                       {card.btnText}
//                       </Link>
//                     </div>
//                   </div>
//               </div>
//             )
//         })
//     }

// </div>
//   );
// };

// export default CardComponent;

import React from "react";
import Link from "next/link";

// // Define the type for the card data
// interface CardProps {
//     id: number;
//     title: string;
//     location: string;
//     date: string;
//     image: string;
//     btnText: string;
// }

// // Define the type for the component props
// interface CardComponentProps {
//     cards: CardProps[];
// }

const CardComponent = ({ cards }) => {
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 px-4">
            {cards.map((card) => (
                <div
                    key={card.id}
                    className="w-full max-w-[350px] md:max-w-[380px] lg:max-w-[400px] mx-auto bg-gradient-to-b from-[#6ab130] to-[#2b4f1d] rounded-xl shadow-lg p-4 pb-10 text-black flex flex-col gap-5"
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
                        <h3 className="font-bold sm:text-[30px]/[30px] text-[15px]/[15px] leading-tight">{card.title}</h3>
                        <p className="md:text-[22px]/[30px] text-[14px]/[20px] mt-2 opacity-80">
                            {card.location} <br />
                            {card.date}
                        </p>
                        <Link href="#" className="text-black underline sm:text-[20px]/[15px] text-[13px]/[15px] font-bold mt-3 block">
                            {card.btnText}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardComponent;


