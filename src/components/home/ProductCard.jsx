import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

// Reusable component for product information
const ProductInfo = ({ name, price, location }) => (
  <div className="flex flex-col gap-1">
    <h1 className="font-medium text-xs sm:text-base">{name}</h1>
    <p className="text-[#71033F] text-xs sm:text-base">{price}</p>
    <p className="text-xs sm:text-sm">{location}</p>
  </div>
);

// Reusable component for the heart icon
const HeartIcon = ({ isSaved, onClick }) => (
  isSaved ? (
    <AiFillHeart onClick={onClick} className="text-2xl cursor-pointer text-[#568203]" />
  ) : (
    <AiOutlineHeart onClick={onClick} className="text-2xl text-opacity-55 cursor-pointer" />
  )
);

// Main ProductCard component
const ProductCard = ({ product }) => {
  const [isSaved, setIsSaved] = useState(false);

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div>
      {/* Product Image */}
      <img
        src={product.img}
        alt="product"
        className="w-[150px] sm:w-[198px] h-[150px] sm:h-[224px] cursor-pointer hover:scale-105"
      />
      {/* Product Info and Save Icon */}
      <div className="flex justify-between w-[150px] sm:w-[198px] mt-1">
        <ProductInfo name={product.name} price={product.price} location={product.location} />
        <HeartIcon isSaved={isSaved} onClick={toggleSave} />
      </div>
    </div>
  );
};

export default ProductCard;
