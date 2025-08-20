import React from "react";
import { motion } from "framer-motion";
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

// Animation variants for random effects
const variants = [
  {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 2, type: "spring", stiffness: 120 },
  },
  {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 2, type: "spring", stiffness: 180 },
  },
  {
    initial: { opacity: 0, x: -80 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 2, type: "spring", stiffness: 100 },
  },
  {
    initial: { opacity: 0, x: 80 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 2, type: "spring", stiffness: 100 },
  },
  {
    initial: { opacity: 0, rotate: -8 },
    whileInView: { opacity: 1, rotate: 0 },
    transition: { duration: 2, type: "spring", stiffness: 120 },
  },
];

function getRandomVariant(idx) {
  return variants[idx % variants.length];
}

const sections = [
  { Component: Header },          // Navigation & brand logo
  { Component: HeroSection },     // Big first impression
  { Component: Impact },          // Showcase brand value / impact
  { Component: Goals },           // Mission & vision
  { Component: BrandStandards },  // Brand authenticity / trust
  { Component: CategorySection }, // Shop categories
  { Component: Trendings },       // Trending products
  { Component: StarterPack },     // Curated starter bundles
  { Component: Content },         // Rich content (blogs, articles, stories)
  { Component: Tags },            // Quick links / filters
  { Component: Missions },        // Social / ethical initiatives
  { Component: Campaign },        // Ongoing campaigns / promotions
  { Component: AboutUs },         // About the company
  { Component: Footer },          // Links, socials, legal, contact
];


const Landing = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
      {/* <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+PHBhdGggZD0iTTAgMEg1MFY1MEgwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')]" /> */}
      {sections.map(({ Component }, idx) => (
        <motion.div
          key={idx}
          {...getRandomVariant(idx)}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Component />
        </motion.div>
      ))}
    </div>
  );
};

export default Landing;