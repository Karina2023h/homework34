import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Hotels from "./pages/Hotels";
import Header from "./components/Header";
import HotelDetails from "./pages/HotelDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotel/:hotelName" element={<HotelDetails />} />
      </Routes>
    </>
  );
}

export default App;
