import React, { useEffect, useRef, useState } from "react";
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

export default function Tags() {
  const scrollerRef = useRef(null);
  const animationRef = useRef(null);
  const [screenSize, setScreenSize] = useState("desktop");

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
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setScreenSize("mobile");
      else if (width < 1024) setScreenSize("tablet");
      else setScreenSize("desktop");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to calculate position along sinusoidal path
  const calculateSinusoidalPosition = (progress, screenSize) => {
    const configs = {
      mobile: {
        width: 320,
        height: 180,
        centerY: 90,
        amplitude: 25,
        frequency: 1.0,
      },
      tablet: {
        width: 700,
        height: 300,
        centerY: 150,
        amplitude: 60,
        frequency: 1.2,
      },
      desktop: {
        width: 1200,
        height: 400,
        centerY: 200,
        amplitude: 80,
        frequency: 1.0,
      },
    };

    const config = configs[screenSize];
    const x = (progress * (config.width + 150)) % (config.width + 150);
    const y =
      config.centerY +
      Math.sin(progress * Math.PI * 2 * config.frequency) * config.amplitude;

    return { x: x - 75, y }; // Offset to start off-screen
  };

  useEffect(() => {
    if (!scrollerRef.current) return;

    const items = Array.from(scrollerRef.current.children);
    const total = items.length;
    let startTime = Date.now();

    // Show fewer tags on mobile to prevent clutter
    const visibleCount =
      screenSize === "mobile" ? 6 : screenSize === "tablet" ? 8 : total;

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      const speed =
        screenSize === "mobile"
          ? 0.025
          : screenSize === "tablet"
          ? 0.02
          : 0.025;

      items.forEach((item, i) => {
        // Only animate visible tags on mobile
        if (screenSize === "mobile" && i >= visibleCount) {
          item.style.opacity = "0";
          return;
        }

        const offset = i / visibleCount;
        const progress = (elapsed * speed + offset) % 1;
        const position = calculateSinusoidalPosition(progress, screenSize);

        // Calculate opacity based on position (fade at edges)
        const containerWidth =
          screenSize === "mobile" ? 320 : screenSize === "tablet" ? 700 : 1200;
        const fadeStart = containerWidth * 0.15;
        const fadeEnd = containerWidth * 0.85;
        let opacity = 1;

        if (position.x < fadeStart) {
          opacity = Math.max(0, position.x / fadeStart);
        } else if (position.x > fadeEnd) {
          opacity = Math.max(
            0,
            (containerWidth - position.x) / (containerWidth - fadeEnd)
          );
        }

        item.style.transform = `translate(${position.x}px, ${position.y}px)`;
        item.style.opacity = opacity;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [screenSize]);

  const getViewBox = () => {
    switch (screenSize) {
      case "mobile":
        return "0 0 320 180";
      case "tablet":
        return "0 0 700 300";
      default:
        return "0 0 1200 400";
    }
  };

  const getSVGPath = () => {
    switch (screenSize) {
      case "mobile":
        return "M-40 90 Q 80 65 160 90 Q 240 115 320 105 Q 360 100 400 105";
      case "tablet":
        return "M-50 150 Q 175 90 350 150 Q 525 210 700 180 Q 750 170 800 180";
      default:
        return "M-100 200 Q 300 120 600 200 Q 900 280 1200 240 Q 1300 220 1400 240";
    }
  };

  const getStrokeWidth = () => {
    switch (screenSize) {
      case "mobile":
        return 30;
      case "tablet":
        return 60;
      default:
        return 80;
    }
  };

  // Responsive top offsets for the SVG wrapper (adjust values as needed)
  const svgTop = screenSize === "mobile" ? "80px" : screenSize === "tablet" ? "150px" : "215px";

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 relative bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Background SVG - Behind everything */}
      <div
        className="absolute inset-0 rotate-x-180 scale-120 pointer-events-none z-0 overflow-visible"
        style={{ top: svgTop }}
      >
<svg
  viewBox="0 0 1440 400"
  width="100%"
  height="auto"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
>
  <path fill="#9FD4DB" fill-opacity="0.7">
    <animate 
      attributeName="d" 
      dur="10s" 
      repeatCount="indefinite"
      values="
        M0,200 
        C240,120 480,280 720,200 
        C960,120 1200,280 1440,200 
        L1440,300 
        C1200,380 960,220 720,300 
        C480,380 240,220 0,300 
        Z;

        M0,220 
        C240,140 480,300 720,220 
        C960,140 1200,300 1440,220 
        L1440,320 
        C1200,400 960,240 720,320 
        C480,400 240,240 0,320 
        Z;

        M0,200 
        C240,120 480,280 720,200 
        C960,120 1200,280 1440,200 
        L1440,300 
        C1200,380 960,220 720,300 
        C480,380 240,220 0,300 
        Z
      "
    />
  </path>

  <path fill="#B3E1E6" fill-opacity="0.6">
    <animate 
      attributeName="d" 
      dur="12s" 
      repeatCount="indefinite"
      values="
        M0,240 
        C300,160 600,320 900,240 
        C1200,160 1440,320 1440,240 
        L1440,360 
        C1200,440 900,280 600,360 
        C300,440 0,280 0,360 
        Z;

        M0,260 
        C300,180 600,340 900,260 
        C1200,180 1440,340 1440,260 
        L1440,380 
        C1200,460 900,300 600,380 
        C300,460 0,300 0,380 
        Z;

        M0,240 
        C300,160 600,320 900,240 
        C1200,160 1440,320 1440,240 
        L1440,360 
        C1200,440 900,280 600,360 
        C300,440 0,280 0,360 
        Z
      "
    />
  </path>
</svg>

      </div>

      {/* Tags Container - Above SVG */}
      <div className="relative z-10 w-full flex items-center justify-center">
        <div
          ref={scrollerRef}
          className="relative"
          style={{
            width:
              screenSize === "mobile"
                ? "320px"
                : screenSize === "tablet"
                ? "700px"
                : "1200px",
            height:
              screenSize === "mobile"
                ? "180px"
                : screenSize === "tablet"
                ? "300px"
                : "400px",
            overflow: "visible",
          }}
        >
          {tags.map((tag, idx) => (
            <div
              key={idx}
              className={`
                flex items-center gap-1 rounded-full absolute
                ${screenSize === "mobile" ? "px-2 py-1" : "px-3 py-2"}
              `}
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow:
                  "0 6px 20px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                willChange: "transform, opacity",
                transformOrigin: "center center",
              }}
              aria-label={tag.label}
            >
              <div
                className={`
                  flex items-center justify-center rounded-full shadow-lg
                  ${
                    screenSize === "mobile"
                      ? "w-5 h-5"
                      : screenSize === "tablet"
                      ? "w-7 h-7"
                      : "w-9 h-9"
                  }
                `}
                style={{
                  background:
                    "linear-gradient(135deg, #2EB5D0 0%, #4DA8B3 100%)",
                  color: "white",
                  boxShadow: "0 3px 8px rgba(46, 181, 208, 0.25)",
                }}
              >
                <span
                  className={
                    screenSize === "mobile"
                      ? "text-xs"
                      : screenSize === "tablet"
                      ? "text-xs"
                      : "text-sm"
                  }
                  aria-hidden="true"
                >
                  {tag.icon}
                </span>
              </div>

              <span
                className={`
                  font-semibold text-slate-700 whitespace-nowrap
                  ${screenSize === "mobile" ? "text-xs" : "text-sm"}
                `}
              >
                {screenSize === "mobile" && tag.label.includes(" ")
                  ? tag.label.split(" ")[0]
                  : screenSize === "mobile" && tag.label.length > 8
                  ? tag.label.substring(0, 6) + "..."
                  : tag.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}