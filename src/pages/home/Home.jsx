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
  const itemsPerRow = 6;
  const rows = [];

  for (let i = 0; i < UserFeed.length; i += itemsPerRow) {
    const row = UserFeed.slice(i, i + itemsPerRow);
    rows.push(row);
  }
  return (
    <div>
      <Header />
      <SecondHeader />
      {/* Hero Section start */}
      <Hero />
      {/* Hero Section end */}
      {/* Main section start */}
      {/* Recommended section start */}
      <div className="max-[950px]:mt-[-120px] pl-5 sm:pl-9 pt-12">
        <div className="flex justify-between pr-5 sm:pr-12">
          <h1 className="text-base sm:text-xl font-medium">
            Recommended for you
          </h1>
          <p className="text-base sm:text-xl font-medium text-[#568203] cursor-pointer hover:scale-105 transition-transform">
            See All
          </p>
        </div>
        <div className="bg-scroll flex overflow-x-auto scrollbar-hide whitespace-nowrap mt-2 sm:mt-5 gap-5 2xl:justify-between 2xl:overflow-x-hidden 2xl:pr-9 pr-2">
          {Products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      {/* Recommended section end */}
      {/* Profile section start */}
      <div className="pl-5 sm:pl-9 pt-12">
        <div className="flex justify-between pr-5 sm:pr-12">
          <h1 className="text-base sm:text-xl font-medium">Explore Profiles</h1>
          <p className="text-base sm:text-xl font-medium text-[#568203] cursor-pointer hover:scale-105 transition-transform">
            See All
          </p>
        </div>
        <div className="flex overflow-x-auto scrollbar-hide whitespace-nowrap h-[225px] sm:h-[260px] 2xl:justify-between 2xl:overflow-x-hidden 2xl:pr-9 pr-2 mt-5">
          {Products.map((product) => (
            <div key={product.id} className="mr-[-10px] sm:mr-3">
              {" "}
              <ProfileCard key={product.id} product={product} />
            </div>
          ))}
        </div>
      </div>
      {/* Profile section end */}
      {/* User feed section start */}
      <div className="pl-5 sm:pl-9 pt-12">
        <div className="flex justify-between pr-5 sm:pr-12 pb-5">
          <h1 className="text-base sm:text-xl font-medium">User feed</h1>
          <p className="text-base sm:text-xl font-medium text-[#568203] cursor-pointer hover:scale-105 transition-transform">
            See All
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {" "}
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex overflow-x-auto scrollbar-hide whitespace-nowrap 2xl:justify-between 2xl:overflow-x-hidden 2xl:pr-9 pr-2"
            >
              {row.map((product) => (
                <div className="pb-10 mr-3">
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
