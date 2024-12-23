import React from "react";
import Navbar from "../navbar/navbar";
import Slider from "../slider/slider";
import NavigateButtons from "../navigateButtons/navigateButtons";
import ProductSection from "../productsection/productsection";
import Footer from "../footer/footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <NavigateButtons></NavigateButtons>
      <ProductSection></ProductSection>
      <Footer></Footer>
    </div>
  );
};

export default Main;