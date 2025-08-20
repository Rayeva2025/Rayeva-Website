import React, { useEffect, useRef } from "react";
import {
  FaLeaf,
  FaRecycle,
  FaWater,
  FaSeedling,
  FaGlobe,
  FaSun,
  FaTree,
  FaWind,
  FaCloud,
  FaMountain,
} from "react-icons/fa";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

export default function Tags() {
  const scrollerRef = useRef(null);

  const tags = [
    { label: "Plastic-Free", icon: <FaRecycle /> },
    { label: "Organic", icon: <FaLeaf /> },
    { label: "Fair Trade", icon: <FaGlobe /> },
    { label: "Refillable", icon: <FaWater /> },
    { label: "Plant-Based", icon: <FaSeedling /> },
    { label: "Solar Powered", icon: <FaSun /> },
    { label: "Forest Safe", icon: <FaTree /> },
    { label: "Wind Energy", icon: <FaWind /> },
    { label: "Cloud Neutral", icon: <FaCloud /> },
    { label: "Mountain Grown", icon: <FaMountain /> },
  ];

  useEffect(() => {
    if (scrollerRef.current) {
      const items = scrollerRef.current.children;
      const total = items.length;

      gsap.utils.toArray(items).forEach((el, i) => {
        el.style.transformOrigin = "center";
        el.style.willChange = "transform, opacity";

        // Set initial position
        gsap.set(el, {
          motionPath: {
            path: "#ribbonPath",
            align: "#ribbonPath",
            alignOrigin: [0.5, 0.5],
            autoRotate: false,
            start: i / total,
            end: i / total + 1,
          },
        });

        // Animate along the path
        gsap.to(el, {
          duration: 20,
          repeat: -1,
          ease: "linear",
          motionPath: {
            path: "#ribbonPath",
            align: "#ribbonPath",
            alignOrigin: [0.5, 0.5],
            autoRotate: false,
            start: i / total,
            end: i / total + 1,
          },
        });
      });
    }
  }, []);

  return (
    <section className="w-full py-20 relative overflow-hidden">
      {/* Full Height SVG Container */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
        <svg
          width="100%"
          height="400"
          viewBox="0 0 1440 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Ribbon color gradient */}
            <linearGradient id="ribbonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2EB5D0" />
              <stop offset="50%" stopColor="#3DA5B5" />
              <stop offset="100%" stopColor="#4DA8B3" />
            </linearGradient>

            {/* Edge fade mask */}
            <linearGradient id="edgeMaskGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="5%" stopColor="white" stopOpacity="0.3" />
              <stop offset="10%" stopColor="white" stopOpacity="1" />
              <stop offset="90%" stopColor="white" stopOpacity="1" />
              <stop offset="95%" stopColor="white" stopOpacity="0.3" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>

            <mask id="edgeFade">
              <rect x="0" y="0" width="100%" height="100%" fill="url(#edgeMaskGradient)" />
            </mask>

            {/* Glow filter */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Main ribbon path - centered vertically */}
          <path
            id="ribbonPath"
            d="M0 200 Q 360 130 720 200 Q 1080 270 1440 240"
            stroke="url(#ribbonGradient)"
            strokeWidth="120"
            strokeLinecap="round"
            fill="none"
            opacity="0.15"
            mask="url(#edgeFade)"
            filter="url(#glow)"
          />
          
          {/* Additional ribbon layers for depth */}
          <path
            d="M0 200 Q 360 130 720 200 Q 1080 270 1440 240"
            stroke="url(#ribbonGradient)"
            strokeWidth="80"
            strokeLinecap="round"
            fill="none"
            opacity="0.08"
            mask="url(#edgeFade)"
          />
          
          <path
            d="M0 200 Q 360 130 720 200 Q 1080 270 1440 240"
            stroke="url(#ribbonGradient)"
            strokeWidth="40"
            strokeLinecap="round"
            fill="none"
            opacity="0.12"
            mask="url(#edgeFade)"
          />
        </svg>
      </div>

      {/* Tags Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <ul ref={scrollerRef} className="relative">
          {tags.map((tag, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 px-4 py-2 rounded-full"
              style={{
                position: "absolute",
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 8px 32px rgba(15, 23, 42, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)",
              }}
              aria-label={tag.label}
            >
              {/* Icon container */}
              <div 
                className="flex items-center justify-center w-10 h-10 rounded-full shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #2EB5D0 0%, #4DA8B3 100%)",
                  color: "white",
                  boxShadow: "0 4px 12px rgba(46, 181, 208, 0.3)",
                }}
              >
                <span className="text-sm" aria-hidden="true">
                  {tag.icon}
                </span>
              </div>

              {/* Label */}
              <span className="text-sm font-semibold text-slate-700 pr-1">
                {tag.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}