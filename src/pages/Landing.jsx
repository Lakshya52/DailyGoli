import React from "react";
import Hero from "../components/Hero";
import Facts from "../components/Facts";
import Ingredients from "../components/Ingredients";
import Product from "../components/Product"
import Reviews from "../components/Reviews";
import Faq from "../components/Faq";

const Landing = () => {
  return (
    <>
      <div className="min-h-[100px] max-h-[20dvh] px-[100px]" ></div>
      <Hero />
      <img id="benefits" src="/images/ribbon1.png" className="w-full mt-15" />
      <Facts />
      <Ingredients />
      <img src="/images/ribbon2.png" className="w-full relative z-50" />
      <Product />
      <Reviews />
      <Faq />
    </>
  );
};

export default Landing;
