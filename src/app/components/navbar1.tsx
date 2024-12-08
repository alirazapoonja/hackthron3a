import React from "react";

import { RiShoppingCartLine } from "react-icons/ri";
import { PiNumberCircleTwoFill } from "react-icons/pi";




export default function navbar1() {
  return (
    <header className="bg-[#F0F2F3] text-sm flex justify-between  items-center w-[1920px]  pt-[20px] pr-[300px] pb-[20px] pl-[300px]">
      <div className="flex justify-between items-center px-8 py-4">
        {/* Image sofa */}
        <div className="w-[40px] h-[40px]">
          <img src="./sofa.png"></img>{" "}
        </div>
        {/* Text comforty */}
        <h1 className="text-2xl font-bold text-[#272343] w-[118px] h-[31px]">Comforty</h1>
        
      </div>
        {/* user link */}
        <div className="flex item-center justify-center space-x-6">
            <div className="flex items-center justify-center">
            <RiShoppingCartLine className="w-[22px] h-[22px]" />
            </div>
            <div className="flex items-center justify-center w-[26px] h-[13px] text-[#272343]">Cart
            </div>
            <div>
            <PiNumberCircleTwoFill className="w-[22px] h-[22px] text-blue-500"/>
            </div>
        </div>
     
    </header>
  );
}
