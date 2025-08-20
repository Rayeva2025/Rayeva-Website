import React, { useRef, useEffect } from "react";
import { FaUserTie, FaUsers, FaGlobe } from "react-icons/fa";
import Testimonial from "./testimonial";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardRefs = useRef([]);
  const buttonRefs = useRef([]);

  useEffect(() => {
    // Title animation
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    // Subtitle animation
    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    // Cards animation
    cardRefs.current.forEach((ref, idx) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { opacity: 0, y: 60, scale: 0.95, rotate: idx === 1 ? -3 : idx === 2 ? 3 : 0 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            duration: 0.9 + idx * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
    // Buttons animation
    buttonRefs.current.forEach((ref, idx) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7 + idx * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center p-4 md:p-10 bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="max-w-6xl w-full space-y-16">
        <Testimonial />
        {/* Title */}
        <div className="text-center">
          <h2
            ref={titleRef}
            className="text-5xl md:text-6xl font-bold text-[#4da8b3]"
          >
            About Us
          </h2>
          <p
            ref={subtitleRef}
            className="mt-4 text-lg md:text-2xl text-[#2C6BAA]"
          >
            Driven by passion, guided by vision, connected by community.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {/* Founder */}
          <div
            ref={el => (cardRefs.current[0] = el)}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition"
          >
            <FaUserTie className="text-4xl text-[#4da8b3] mb-4" />
            <h3 className="text-2xl font-semibold text-[#4da8b3] mb-4">
              Our Founder
            </h3>
            <p className="text-[#2C6BAA] leading-relaxed">
              Our journey began with a vision to create meaningful impact. Our
              founder believed in innovation, collaboration, and building
              solutions that empower people and businesses worldwide.
            </p>
          </div>

          {/* Team */}
          <div
            ref={el => (cardRefs.current[1] = el)}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition"
          >
            <FaUsers className="text-4xl text-[#3BB372] mb-4" />
            <h3 className="text-2xl font-semibold text-[#4da8b3] mb-4">
              Our Team
            </h3>
            <p className="text-[#2C6BAA] leading-relaxed">
              A group of diverse thinkers, creators, and innovators. We bring
              together expertise across technology, design, and strategy to
              achieve a shared purpose.
            </p>
          </div>

          {/* Community */}
          <div
            ref={el => (cardRefs.current[2] = el)}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition"
          >
            <FaGlobe className="text-4xl text-[#2EB5D0] mb-4" />
            <h3 className="text-2xl font-semibold text-[#4da8b3] mb-4">
              Our Community
            </h3>
            <p className="text-[#2C6BAA] leading-relaxed">
              Our strength lies in our community. Together, we learn, grow, and
              support each other while shaping a better, more sustainable
              future.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-10">
          <a
            ref={el => (buttonRefs.current[0] = el)}
            href="/mission"
            className="px-6 py-3 rounded-full bg-[#4da8b3] text-white font-medium shadow-lg transition hover:scale-105 active:scale-95"
          >
            Our Mission
          </a>
          <a
            ref={el => (buttonRefs.current[1] = el)}
            href="/services"
            className="px-6 py-3 rounded-full bg-[#238794] text-white font-medium shadow-lg transition hover:scale-105 active:scale-95"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}