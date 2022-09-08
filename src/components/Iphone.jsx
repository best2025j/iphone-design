import React from "react";
import Image from "../assets/eth2.jpeg";

const Iphone = () => {
  return (
    // iphone body
    <div className="border-[6px] mt-4 mx-auto rounded-[40px] bg-white border-[#e97474] relative h-[42rem] w-[20rem]">
      {/* iphone-top */}
      <div className="mt-4">
        {/* sensor */}
        <div className="flex justify-center items-center">
          <span className="rounded-full bg-black w-2 h-2"></span>
        </div>
        {/* camera */}
        <div className="px-[6.5rem] mt-2 flex items-center">
          <span className="rounded-full bg-black w-3 h-3"></span>
          {/* speaker */}
          <span className="w-16 h-[6px] ml-1 rounded-md bg-black"></span>
        </div>
        {/* top-bar */}
        <div className="h-3 border border-r-[5px] border-slate-200 w-[6px] -ml-[6px]">
          <div className="h-3 border border-l-[5px] border-slate-200 w-[6px] mx-[19.56rem]"></div>
        </div>
        {/* buttons */}
        <div className="absolute mt-[2rem]">
          <div className="grid -ml-[10px] ">
            {/* silence */}
            <span className=" w-[4px] h-5 -mt-2 bg-white rounded-xl"></span>
            {/* up */}
            <span className=" w-[6px] h-12 mt-3 bg-white rounded-xl"></span>
            {/* down */}
            <span className=" w-[6px] h-12 mt-2 bg-white rounded-xl"></span>
          </div>
          {/* on-off */}
          <div className="ml-[19.5rem] -mt-24">
            <span className="w-[6px] h-12 bg-white float-right rounded-xl"></span>
          </div>
        </div>
        {/* iphone-screen */}
        <div className=" h-[32.5rem] border w-[18rem] mx-auto mt-2">
          <img src={Image} alt="/" className="h-full w-full" />
        </div>
      </div>
      {/* bottom-bar */}
      <div className="h-3 border border-r-[5px] border-slate-200 w-[6px] -ml-[6px]">
        <div className="h-3 border border-l-[5px] border-slate-200 w-[6px] mx-[19.56rem]"></div>
      </div>

      {/* Iphone Button */}
      <div className="-mt-[4px]">
        <span className="border-4 bg-white border-slate-900 rounded-full flex mx-auto h-14 w-14"></span>
      </div>
    </div>
  );
};

export default Iphone;
