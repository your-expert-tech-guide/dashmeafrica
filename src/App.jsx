import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Signup2 from "./pages/Signup2/Signup2.jsx";
import Header from "./components/Header/Header.jsx";
import SecondHeader from "./components/Header/SecondHeader.jsx";
import Hero from "./components/home/Hero.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div>
      {/* <Header />
      <SecondHeader />
      <Hero />
      <Footer /> */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup" element={<Signup2 />} />
      </Routes>
    </div>
  );
}

export default App;
