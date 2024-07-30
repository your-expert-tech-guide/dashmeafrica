import React from "react";
import Chair from "../../assets/images/products/chair.png";
import Gen from "../../assets/images/products/gen-cloth.png";
import User from "../../assets/images/products/user.png";

// Reusable component for user information
const UserInfo = ({ src, username }) => (
  <div className="flex items-center gap-3">
    <img src={src} alt="user" className="w-[16.35px] h-[18px]" />
    <p>{username}</p>
  </div>
);

// Reusable component for product images
const ProductImage = ({ src, alt, styles }) => (
  <img src={src} alt={alt} className={styles} />
);

// Main ProfileCard component
const ProfileCard = () => {
  return (
    <div className="w-[198px] h-[224px]">
      {/* User Information */}
      <UserInfo src={User} username="taznn61" />
      
      {/* Product Images */}
      <div className="relative">
        <ProductImage
          src={Chair}
          alt="Chair"
          styles="w-[150px] sm:w-[198px] h-[160px] sm:h-[224px] absolute"
        />
        <div className="relative ml-[103px] sm:ml-[123px]">
          <ProductImage
            src={Gen}
            alt="Generator"
            styles="w-[60px] sm:w-[75px] h-[160px] sm:h-[224px] absolute"
          />
          {/* Overlay with additional items count */}
          <div className="flex items-center justify-center w-[60px] sm:w-[75px] h-[160px] sm:h-[224px] opacity-85 bg-black absolute cursor-pointer">
            <p className="text-white text-2xl font-semibold">+ 8</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
