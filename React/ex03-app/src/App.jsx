import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TechStore from "./TechStore";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <TechStore />
    </>
  );
}

export default App;
