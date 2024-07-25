import React from "react";
import Hero2 from "../../assets/images/hero/hero-bg.png";

const Hero = () => {
  return (
    <div className="pt-7">
      <div className="bg-hero-pattern w-full h-[504px]">
        <div className="pt-44">
          <div className="w-[346px] h-[280px] bg-white flex flex-col items-center justify-center rounded-2xl ml-10 gap-3">
            <p className="text-[1.75rem] font-medium">Sell It!</p>
            <p className="text-[1.75rem] font-medium">Donate It!</p>
            <p className="text-[1.75rem] font-medium">Don't Trash It!</p>
            <button className="bg-[#568203] hover:bg-[#648528] text-white font-bold py-2 px-24 mt-4 rounded-xl">
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
