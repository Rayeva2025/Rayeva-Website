import React from "react";
import HeroSection from "../components/landing/Hero";
import Impact from "../components/landing/Impact";
import Content from "../components/landing/Content";
import Goals from "../components/landing/Goals";
import BrandStandards from "../components/landing/BrandStandards";
import CategorySection from "../components/landing/Categories";
import Footer from "../components/landing/Footer";
import Trendings from "../components/landing/products";
import StarterPack from "../components/landing/StarterPack";
import About from "../components/landing/about";
import Campaign from "../components/landing/campaign";
import Header from "../components/landing/header";
import AboutUs from "../components/landing/AboutUs";
import Tags from "../components/landing/Tags";
import Missions from "../components/landing/Missions";

const Landing = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
      {/* <div className="absolute inset-0 overflow-hidden">
        {[...Array(120)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-100 opacity-20"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div> */}

      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+PHBhdGggZD0iTTAgMEg1MFY1MEgwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')]" />
      <Header />
      <HeroSection />
      <Impact />
      <Goals />
      <Content />
      <BrandStandards />
      <CategorySection />
      <Trendings />
      <StarterPack />
      <AboutUs />
      <Tags />
      <Missions />
      <Campaign />
      <Footer />
    </div>
  );
};

export default Landing;
