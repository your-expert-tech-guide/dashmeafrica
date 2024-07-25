import React from "react";
import Chair from "../../assets/images/products/chair.png";
import Gen from "../../assets/images/products/gen-cloth.png";
import User from "../../assets/images/products/user.png";

const ProfileCard = () => {
  return (
    <div className="w-[198px] h-[224px]">
      <div className="flex items-center gap-3">
        <img src={User} alt="product" className="w-[16.35px] h-[18px]" />
        <p>taznn61</p>
      </div>
      <div className="relative">
        <img
          src={Chair}
          alt="product"
          className="w-[198px] h-[224px] absolute"
        />
        <div className="relative  ml-[123px]">
          <img
            src={Gen}
            alt="product"
            className="w-[75px] h-[224px] absolute"
          />
          <div className="flex items-center justify-center w-[75px] h-[224px] opacity-85 bg-black absolute cursor-pointer">
            <p className="text-white text-2xl font-semibold">+ 8</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
