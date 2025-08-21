import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import HeroSection from "../components/landing/Hero";
import Impact from "../components/landing/Impact";
import Content from "../components/landing/Content";
import Goals from "../components/landing/Goals";
import BrandStandards from "../components/landing/BrandStandards";
import CategorySection from "../components/landing/Categories";
import Footer from "../components/landing/Footer";
import Trendings from "../components/landing/products";
import StarterPack from "../components/landing/StarterPack";
import Campaign from "../components/landing/campaign";
import Header from "../components/landing/header";
import AboutUs from "../components/landing/AboutUs";
import Tags from "../components/landing/Tags";
import Missions from "../components/landing/Missions";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  { Component: Header },
  { Component: HeroSection },
  { Component: Impact },
  { Component: Goals },
  { Component: BrandStandards },
  { Component: CategorySection },
  { Component: Trendings },
  { Component: StarterPack },
  { Component: Content },
  { Component: Tags },
  { Component: Missions },
  { Component: Campaign },
  { Component: AboutUs },
  { Component: Footer },
];

const gsapVariants = [
  { y: 60, opacity: 0, scale: 1 },
  { scale: 0.95, opacity: 0, y: 0 },
  { x: -80, opacity: 0, scale: 1 },
  { x: 80, opacity: 0, scale: 1 },
  { rotate: -8, opacity: 0, scale: 1 },
];

const Landing = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current.forEach((ref, idx) => {
      if (ref) {
        const variant = gsapVariants[idx % gsapVariants.length];
        gsap.fromTo(
          ref,
          variant,
          {
            y: 0,
            x: 0,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen w-full">
      <Header />
      
<div
  className="
    mx-auto
    w-full
    min-h-screen
    flex flex-col
    items-center
    justify-center
    max-w-full
    lg:max-w-[100vw]
    px-2
    sm:px-4
    md:px-8
    lg:px-0
    overflow-x-hidden
  "
>
        {sections
          .filter(({ Component }) => Component !== Header)
          .map(({ Component }, idx) => (
            <div
              key={idx}
              ref={el => (sectionRefs.current[idx] = el)}
              style={{ willChange: "transform, opacity" }}
              className="mb-12 w-full"
            >
              <Component />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Landing;