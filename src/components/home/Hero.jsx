import React from "react";
import Hero2 from "../../assets/images/hero/hero-bg.png";

const Hero = () => {
  return (
    <div className="pt-7">
      <div className="bg-hero-pattern bg-no-repeat w-full h-[504px] max-[426px]:bg-hero-pattern-m max-[686px]:bg-hero-pattern-md max-[540px]:bg-hero-pattern-5 max-[951px]:bg-hero-pattern-9">
        <div className="pt-44 max-[430px]:pt-52 max-[951px]:pt-44">
          <div className="w-[346px] h-[280px] max-[1000px]:w-[250px] max-[1000px]:text-2xl max-[951px]:h-[180px] max-[951px]:w-[170px] bg-white flex flex-col items-center justify-center rounded-2xl ml-10 gap-3 max-[500px]:gap-2 max-[500px]:ml-5 max-[430px]:w-[125px] max-[430px]:h-[130px] max-[430px]:gap-1 max-[951px]:ml-5">
            <p className="text-[1.75rem] font-medium max-[1000px]:text-2xl max-[951px]:text-xl max-[430px]:text-sm">
              Sell It!
            </p>
            <p className="text-[1.75rem] font-medium max-[1000px]:text-2xl max-[951px]:text-xl max-[430px]:text-sm">
              Donate It!
            </p>
            <p className="text-[1.75rem] font-medium max-[1000px]:text-2xl max-[951px]:text-xl max-[430px]:text-sm">
              Don't Trash It!
            </p>
            <button className="bg-[#568203] hover:bg-[#648528] text-white font-bold py-2 px-24 mt-4 rounded-xl max-[1000px]:px-16 max-[951px]:px-10 max-[951px]:text-base max-[951px]:mt-0 max-[430px]:text-sm max-[430px]:px-5 max-[430px]:py-1">
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
