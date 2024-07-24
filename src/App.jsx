import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Signup2 from "./pages/Signup2/Signup2.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup" element={<Signup2 />} />
      </Routes>
    </div>
  );
}

export default App;
