import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooterContainer from "./components/Footer";

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="bg-black">
        <Outlet />
      </div>
      <FooterContainer />
    </div>
  );
}

export default App;
