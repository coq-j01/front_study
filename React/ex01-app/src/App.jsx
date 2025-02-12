import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Header";
import Nav from "./Nav";
import Section from "./Section";
import Aside from "./Aside";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <div className="flex">
        <Section />
        <Aside />
      </div>
      <Footer />
    </>
  );
}
export default App;
