import React from "react";
import HeroSection from "../components/landing/Hero";
import Impact from "../components/landing/Impact";
import Content from "../components/landing/Content";
import Goals from "../components/landing/Goals";
import BrandStandards from "../components/landing/BrandStandards";
import CategorySection from "../components/landing/Categories";
import Footer from "../components/landing/newsletter";
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
    <div className="relative overflow-hidden">
      <Header />
      <HeroSection />
      <Content />
      <Goals />
      <BrandStandards />
      <CategorySection />
      <Trendings />
      <StarterPack />
      {/* <About /> */}
      <AboutUs/>
      <Tags/>
      <Impact />
      <Missions/>
      <Campaign />
      <Footer />
      {/* <Impact /> */}
    </div>
  );
};

export default Landing;
