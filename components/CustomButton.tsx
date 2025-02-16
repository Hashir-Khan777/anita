import React, { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  link: string;
  children: ReactNode;
}

function CustomButton({ link, children }: ButtonProps): JSX.Element {
  return (
    <Link href={link} target="_blank">
      <button
        className="font-fielder capitalize lg:text-[20px] text-[12px] font-bold text-primary border-primary border-2 rounded-[8px] lg:h-[73px] h-[55px]  md:px-5 px-2 md:w-[286px] w-[327px]"
        style={{
          background: "linear-gradient(135deg,#0d1407 50%,#6AB131)",
        }}
      >
        {children}
      </button>
    </Link>
  );
}

export default CustomButton;
