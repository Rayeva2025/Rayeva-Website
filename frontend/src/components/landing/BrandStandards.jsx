import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function BrandStandards() {
  const [activeElement, setActiveElement] = useState(null);
  const [showCont, setShowCont] = useState(false);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const pathRef = useRef(null);
  const elementRefs = useRef([]);
  const lineRefs = useRef([]);

  const elements = [
    {
      label: "Quality",
      color: "bg-blue-500",
      description: "The Brand should highly focus on quality of product.",
    },
    {
      label: "Safety",
      color: "bg-green-500",
      description: "The product should pass the global standard quality check.",
    },
    {
      label: "Environment",
      color: "bg-purple-500",
      description:
        "We follow a non-tolerant nature towards brands that do not support Environmental Values",
    },
    {
      label: "Innovation",
      color: "bg-orange-500",
      description: "The brand should be technology and innovation driven.",
    },
    {
      label: "Transparency",
      color: "bg-red-500",
      description:
        "The brand should provide full disclosure of product to consumers.",
    },
  ];

  // Responsive SVG size and center
  const getSvgSize = () => {
    if (window.innerWidth < 640) return 260;
    if (window.innerWidth < 1024) return 340;
    return 384;
  };
  const [svgSize, setSvgSize] = useState(getSvgSize());
  const CENTER = svgSize / 2;

  useEffect(() => {
    const handleResize = () => setSvgSize(getSvgSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive circle radius
  const getRadius = () => {
    if (window.innerWidth < 640) return 120;
    if (window.innerWidth < 1024) return 140;
    return 140;
  };

  // GSAP entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
      gsap.fromTo(
        pathRef.current,
        { strokeDasharray: 1005, strokeDashoffset: 1005, opacity: 0 },
        {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut",
          delay: 0.5,
        }
      );
      elementRefs.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: 1 + i * 0.3,
            ease: "back.out(1.7)",
          }
        );
      });
      lineRefs.current.forEach((line, i) => {
        gsap.fromTo(
          line,
          { opacity: 0 },
          { opacity: 0.5, duration: 0.5, delay: 1.2 + i * 0.3 }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, [svgSize]);

  // Show content on hover
  const showContent = () => {
    setShowCont(false);
    setTimeout(() => setShowCont(true), 300);
  };

  // Responsive circle sizes
  const getCircleSize = (isActive) => {
    if (isActive) {
      if (window.innerWidth < 640) return { w: 200, h: 140 };
      if (window.innerWidth < 1024) return { w: 250, h: 170 };
      return { w: 260, h: 220 };
    } else {
      if (window.innerWidth < 640) return { w: 80, h: 80 };
      if (window.innerWidth < 1024) return { w: 120, h: 120 };
      return { w: 130, h: 130 };
    }
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center px-2 sm:px-8 lg:px-10 overflow-x-hidden overflow-y-hidden relative"
    >
      <div className="max-w-[87.5rem] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20 relative z-10 w-full">
        {/* Left Side */}
        <div className="flex-1 max-w-full lg:max-w-[40rem]">
          <h2
            ref={titleRef}
            className="text-2xl sm:text-4xl lg:text-[3.5rem] font-bold text-gray-800 mb-5 sm:mb-7 leading-tight"
          >
            How we choose a
            <br />
            <span className="font-bold text-[#4da8b3] text-2xl sm:text-4xl lg:text-[3.75rem] block mt-1">
              Brand ?
            </span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 sm:mb-10 text-base sm:text-lg lg:text-[1.6rem]">
            Rayeva is built with values and have strong care for{" "}
            <span className="text-black font-bold">Sustainability</span> and{" "}
            <span className="text-black font-bold">Consumer Conciousness</span>.
            We are strictly adhered to few principles and our selection criteria
            is truly rigorous in terms of positive impact to living.
          </p>
          <div className="flex gap-3 flex-wrap">
            <button className="px-5 sm:px-7 py-3 sm:py-4 bg-[#4da8b3] border border-gray-300 text-white rounded-md hover:bg-[#3260b7] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-base sm:text-[1.4rem]">
              Learn More
            </button>
            <button className="px-5 sm:px-7 py-3 sm:py-4 bg-[#4da8b3] border border-gray-300 text-white rounded-md hover:bg-[#3260b7] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-base sm:text-[1.4rem]">
              Be a part
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 relative flex items-center justify-center min-w-[220px] sm:min-w-[340px] lg:min-w-[384px] scale-100 sm:scale-110 lg:scale-125">
          <div
            className="relative"
            style={{ width: svgSize, height: svgSize, minWidth: svgSize }}
          >
            <div className="absolute inset-0 rounded-full bg-blue-100 opacity-20 blur-xl" />
            {/* Center Text */}
            <div
              className="absolute flex flex-col items-center justify-center z-10"
              style={{
                left: CENTER - 60,
                top: CENTER - 40,
                width: 120,
                height: 80,
              }}
            >
              <h3 className="text-base sm:text-2xl lg:text-[2.5rem] font-bold text-[#4da8b3] mb-1 sm:mb-3">
                Rayeva
              </h3>
              <p className="text-sm sm:text-xl lg:text-[1.5rem] text-[#4da8b3] font-light">
                Standards
              </p>
            </div>
            {/* SVG Circle */}
            <svg
              className="absolute"
              width={svgSize}
              height={svgSize}
              viewBox={`0 0 ${svgSize} ${svgSize}`}
              style={{ left: 0, top: 0 }}
            >
              <circle
                ref={pathRef}
                cx={CENTER}
                cy={CENTER}
                r={getRadius()}
                fill="none"
                stroke="#d1d5db"
                strokeWidth="2"
                strokeDasharray="1005"
              />
            </svg>
            {/* Elements on Circle */}
            {elements.map((element, index) => {
              const angle = index * (360 / elements.length) - 90;
              const radius = getRadius();
              const { w, h } = getCircleSize(activeElement === index);
              const x = CENTER + Math.cos((angle * Math.PI) / 180) * radius - w / 2;
              const y = CENTER + Math.sin((angle * Math.PI) / 180) * radius - h / 2;
              const isActive = activeElement === index;
              return (
                <div
                  key={index}
                  ref={el => (elementRefs.current[index] = el)}
                  className={`absolute flex flex-col items-center justify-center transition-all duration-300 ${
                    isActive
                      ? "bg-white/10 backdrop-blur shadow-xl border border-gray-200"
                      : "bg-white border-2 border-gray-300 shadow-lg hover:shadow-xl"
                  }`}
                  style={{
                    left: x,
                    top: y,
                    width: w,
                    height: h,
                    borderRadius: "9999px",
                    zIndex: isActive ? 20 : 10,
                  }}
                  onMouseEnter={() => {
                    setActiveElement(index);
                    showContent();
                  }}
                  onMouseLeave={() => setActiveElement(null)}
                >
                  <div
                    className={`w-4 h-4 ${element.color} rounded-full mb-2 ${
                      isActive ? "mt-3 scale-125" : ""
                    } transition-transform duration-300`}
                  />
                  <span
  className={`text-xs sm:text-sm md:text-base lg:text-lg font-medium text-gray-700 text-center px-2 ${
    isActive ? "font-semibold" : ""
  } transition-all duration-300`}
>
  {element.label}
</span>
{isActive && showCont && (
  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mt-2 sm:mt-3 px-2 sm:px-5 text-center animate-fadeIn">
    {element.description}
  </p>
)}
                </div>
              );
            })}
            {/* Lines from center to circles */}
            {elements.map((_, index) => {
              const angle = index * (360 / elements.length) - 90;
              const radius = getRadius();
              return (
                <svg
                  key={`line-${index}`}
                  className="absolute pointer-events-none"
                  width={svgSize}
                  height={svgSize}
                  viewBox={`0 0 ${svgSize} ${svgSize}`}
                  style={{ left: 0, top: 0 }}
                >
                  <line
                    ref={el => (lineRefs.current[index] = el)}
                    x1={CENTER}
                    y1={CENTER}
                    x2={CENTER + Math.cos((angle * Math.PI) / 180) * radius}
                    y2={CENTER + Math.sin((angle * Math.PI) / 180) * radius}
                    stroke="#e5e7eb"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                  />
                </svg>
              );
            })}
          </div>
        </div>
      </div>
      <style jsx="true" global="true">{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(12.5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}