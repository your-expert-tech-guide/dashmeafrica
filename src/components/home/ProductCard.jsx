import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const ProductCard = ({ product }) => {
  const [isSaved, setIsSaved] = useState(false);

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };
  return (
    <div>
      <img
        src={product.img}
        alt="product"
        className="w-[198px] h-[224px] cursor-pointer hover:scale-105"
      />
      <div className="flex justify-between w-[198px] mt-1">
        <div>
          <h1 className="font-medium">{product.name}</h1>
          <p className="text-[#71033F]">{product.price}</p>
          <p className="text-sm">{product.location}</p>
        </div>
        <div className="cash">
          {isSaved ? (
            <AiFillHeart
              onClick={toggleSave}
              className="text-2xl cursor-pointer text-[#568203]"
            />
          ) : (
            <AiOutlineHeart
              onClick={toggleSave}
              className="text-2xl text-opacity-55 cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
