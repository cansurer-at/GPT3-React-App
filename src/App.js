import React from "react";

import "./App.css";
import {
  Footer,
  Blog,
  Possibility,
  Feature,
  WhatGPT3,
  Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";

function App() {
  return (
    <div>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Feature />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

export default App;
