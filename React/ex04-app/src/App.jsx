import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Top from "./Top";
import Nav from "./Nav";
import MovieNav from "./MovieNav";
import MovieList from "./MovieList";
import Pedometer from "./Pedometer";
import "./App.css";

function App() {
  return (
    <>
      <Top />
      <Nav />
      <MovieNav />
      <MovieList />
    </>
  );
}

export default App;
