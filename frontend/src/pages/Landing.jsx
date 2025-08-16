import React from "react";
import HeroSection from "../components/landing/Hero";
import Impact from "../components/landing/Impact";
import Content from "../components/landing/Content";
import Goals from "../components/landing/Goals";
import BrandStandards from "../components/landing/BrandStandards";
import CategorySection from "../components/landing/Categories";

const Landing = () => {
  return (
    <div className="relative overflow-hidden">
      <HeroSection />
      <Content />
      <Goals />
      <BrandStandards />
      <CategorySection />
      {/* <Impact /> */}
    </div>
  );
};

export default Landing;
