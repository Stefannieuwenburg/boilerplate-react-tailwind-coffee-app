import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Product from "./components/Product";
import Review from "./components/Review";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
          <Home />
          <Menu />
          <About />
          <Product />
          <Review />
      <Footer />
    </div>
  );
};

export default App;
