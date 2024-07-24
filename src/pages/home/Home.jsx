import React from "react";
import Header from "../../components/Header/Header";
import SecondHeader from "../../components/Header/SecondHeader";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/home/Hero";

const Home = () => {
  return (
    <div>
      <Header />
      <SecondHeader />
      {/* Hero Section start */}
      <Hero />
      {/* Hero Section end */}
      <Footer />
    </div>
  );
};

export default Home;
