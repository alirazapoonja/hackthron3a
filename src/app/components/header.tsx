import Link from "next/link";
import React from "react";

import { IoIosArrowRoundForward } from "react-icons/io";

export default function header() {
  return (
    <div className="flex items-center justify-center p-6 px-10">
      <div className="text-white flex flex-col justify-center space-x-5 w-[1321px] md:w-[300px] lg:w-[400px]">
        <div className="flex items-center  justify-center gap-2 w-[177px] h-[14px] text-[#272343]">WELCOME TO CHAIRY</div>
        <h1 className="flex items-center justify-center sm:text-2xl md:text-4xl lg:text-5xl font-bold  leading-snug text-[#272343]">
          Best Furniture Collection for your interior.
        </h1>
     <Link href={"#products"}
     className="flex items-center justify-center mt-[50px]  w-[171px] h-[52px] pt-[14px] pr-[24px] pb-[14px] pl-[24px] gap-2 bg-[#029FAE]"
     >
        Shop Now
        <IoIosArrowRoundForward />
     </Link>
        </div>

        <div>
            <img src="./chair.png" alt="Product Image"/>
        </div>
      </div>
   
  );
}
