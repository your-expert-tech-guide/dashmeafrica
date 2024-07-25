import React from "react";
import Header from "../../components/Header/Header";
import SecondHeader from "../../components/Header/SecondHeader";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/home/Hero";
import ProductCard from "../../components/home/ProductCard";
import Wig from "../../assets/images/products/wig.png";
import Cloth from "../../assets/images/products/cloth.png";
import ProfileCard from "../../components/home/ProfileCard";
import User from "../../assets/images/products/user.png";
import UserFeed from "./userFeed";

const Products = [
  {
    id: 1,
    name: "Brown colored wig",
    price: "N7,500",
    location: "Abraka, Delta State",
    img: Wig,
  },
  {
    id: 2,
    name: "White printed blouse",
    price: "Donation",
    location: "Oyigbo, Rivers State",
    img: Cloth,
  },
  {
    id: 3,
    name: "Brown colored wig",
    price: "N7,500",
    location: "Abraka, Delta State",
    img: Wig,
  },
  {
    id: 4,
    name: "White printed blouse",
    price: "Donation",
    location: "Oyigbo, Rivers State",
    img: Cloth,
  },
  {
    id: 5,
    name: "Brown colored wig",
    price: "N7,500",
    location: "Abraka, Delta State",
    img: Wig,
  },
  {
    id: 6,
    name: "White printed blouse",
    price: "Donation",
    location: "Oyigbo, Rivers State",
    img: Cloth,
  },
  // {
  //   id: 7,
  //   name: "Brown colored wig",
  //   price: "N7,500",
  //   location: "Abraka, Delta State",
  //   img: "wig.png",
  // },
];

const Home = () => {
  return (
    <div>
      <Header />
      <SecondHeader />
      {/* Hero Section start */}
      <Hero />
      {/* Hero Section end */}
      {/* Main section start */}
      {/* Recommended section start */}
      <div className="p-12">
        <div className="flex justify-between">
          <h1 className="text-xl font-medium">Recommended for you</h1>
          <p className="text-xl font-medium text-[#568203] cursor-pointer hover:scale-105 transition-transform">
            See All
          </p>
        </div>
        <div className="flex justify-between gap-3 flex-wrap mt-5">
          {Products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      {/* Recommended section end */}
      {/* Profile section start */}
      <div className="p-12">
        <div className="flex justify-between">
          <h1 className="text-xl font-medium">Explore Profiles</h1>
          <p className="text-xl font-medium text-[#568203] cursor-pointer hover:scale-105 transition-transform">
            See All
          </p>
        </div>
        <div className="flex justify-between gap-3 flex-wrap mt-5">
          {Products.map((product, key) => (
            <ProfileCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      {/* Profile section end */}
      {/* User feed section start */}
      <div className="p-12">
        <div className="flex justify-between">
          <h1 className="text-xl font-medium">User feed</h1>
          <p className="text-xl font-medium text-[#568203] cursor-pointer hover:scale-105 transition-transform">
            See All
          </p>
        </div>
        <div className="flex justify-between gap-3 flex-wrap mt-5">
          {UserFeed.map((product) => (
            <div className="pb-10">
              <div className="flex items-center gap-3 pb-2">
                <img
                  src={User}
                  alt="product"
                  className="w-[16.35px] h-[18px]"
                />
                <p>{product.profileName}</p>
              </div>
              <ProductCard key={product.id} product={product} />
            </div>
          ))}
        </div>
      </div>
      {/* User feed section end */}
      {/* Main section end */}
      <Footer />
    </div>
  );
};

export default Home;
