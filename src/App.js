import React from "react";
import NavBar from "./componnets/NavBar";
import HeroSection from "./componnets/HeroSection";
import ContentSection from "./componnets/ContentSection";
import Footer from "./componnets/Footer";
import "./App.css"; // Make sure you create an App.css file to style your components

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <ContentSection />
      <Footer />
    </div>
  );
};

export default App;
