import React, { useState, useEffect } from "react";

export default function BrandStandards() {
  const [showTitle, setShowTitle] = useState(false);
  const [showPath, setShowPath] = useState(false);
  const [visibleElements, setVisibleElements] = useState(0);
  const [activeElement, setActiveElement] = useState(null);
  const [showCont, setShowCont] = useState(false);

  const showContent = () => {
    setShowCont(false);
    setTimeout(() => {
      setShowCont(true);
    }, 300);
  };

  useEffect(() => {
    setShowTitle(true);
    const pathTimer = setTimeout(() => {
      setShowPath(true);
    }, 1000);

    const elementTimers = [];
    for (let i = 0; i < 5; i++) {
      const timer = setTimeout(() => {
        setVisibleElements((prev) => prev + 1);
      }, 2500 + i * 800);
      elementTimers.push(timer);
    }

    return () => {
      clearTimeout(pathTimer);
      elementTimers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-10 overflow-hidden relative transform origin-center">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-100 opacity-20"
            style={{
              width: `${Math.random() * 100 + 50}px`, // Scaled 1.25x
              height: `${Math.random() * 100 + 50}px`, // Scaled 1.25x
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+PHBhdGggZD0iTTAgMEg1MFY1MEgwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')]" />

      {/* Main content container */}
      <div className="max-w-[87.5rem] mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
        {/* Left content - scaled text and spacing */}
        <div className="flex-1 max-w-[40rem]">
          <h2 className="text-[3.5rem] font-bold text-gray-800 mb-7 leading-tight">
            How we choose a
            <br />
            <p className="font-bold text-[#0745b8] text-[3.75rem] animate-fadeIn">
              Brand ?
            </p>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-10 text-[1.6rem]">
            Rayeva is built with values and have strong care for{" "}
            <span className="text-black font-bold">Sustainability</span> and{" "}
            <span className="text-black font-bold">Consumer Conciousness</span>.
            We are strictly adhered to few principles and our selection criteria
            is truly rigorous in terms of positive impact to living.
          </p>

          <div className="flex gap-3">
            <button className="px-7 py-4 bg-[#0745b8] border border-gray-300 text-white rounded-md hover:bg-[#3260b7] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-[1.4rem]">
              Learn More
            </button>
            <button className="px-7 py-4 bg-[#0745b8] border border-gray-300 text-white rounded-md hover:bg-[#3260b7] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-[1.4rem]">
              Be a part
            </button>
          </div>
        </div>

        {/* Right animation container - scaled circle and elements */}
        <div className="flex-1 relative flex items-center justify-center min-w-[500px] scale-125">
          <div className="relative w-[35rem] h-[30rem]">
            {/* Glowing center effect */}
            <div className="absolute inset-0 rounded-full bg-blue-100 opacity-20 blur-xl animate-pulse" />

            {/* Central title */}
            <div
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10 transition-all duration-1000 ${
                showTitle ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
            >
              <h3 className="text-[3.75rem] font-bold text-gray-800 mb-3 animate-float">
                Rayeva
              </h3>
              <p className="text-[2.5rem] text-gray-500 font-light animate-float delay-100">
                Standards
              </p>
            </div>

            {/* Animated circle path */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 384 384"
              style={{ transform: "rotate(-90deg)" }}
            >
              <circle
                cx="192"
                cy="192"
                r="160"
                fill="none"
                stroke="#d1d5db"
                strokeWidth="2"
                strokeDasharray="1005"
                strokeDashoffset={showPath ? "0" : "1005"}
                className="transition-all duration-[1500ms] ease-in-out"
              />
            </svg>

            {/* Circular elements */}
            {elements.map((element, index) => {
              const angle = index * 72 - 90;
              const radius = 160 * 1.20; // Scaled radius
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              const isVisible = index < visibleElements;
              const isActive = activeElement === index;

              return (
                <div
                  key={index}
                  className={`absolute flex flex-col items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  } ${
                    isActive
                      ? "w-80 h-40 rounded-lg bg-white/10 backdrop-blur-md shadow-xl border border-gray-200"
                      : "w-30 h-30 rounded-full bg-white border-2 border-gray-300 shadow-lg hover:shadow-xl"
                  }`}
                  style={{
                    left: `calc(50% + ${x}px - ${
                      isActive ? "10rem" : "3.75rem"
                    })`,
                    top: `calc(50% + ${y}px - ${
                      isActive ? "5rem" : "3.75rem"
                    })`,
                    zIndex: isActive ? 20 : 10,
                  }}
                  onMouseEnter={() => {
                    setActiveElement(index);
                    showContent();
                  }}
                  onMouseLeave={() => setActiveElement(null)}
                >
                  <div
                    className={`w-5 h-5 ${
                      element.color
                    } rounded-full mb-2 transition-all duration-300 ${
                      isActive ? "scale-150 mt-5" : ""
                    }`}
                  />
                  <span
                    className={`text-[0.9375rem] font-medium text-gray-700 text-center px-2 transition-all duration-300 ${
                      isActive ? "text-[1.171875rem] font-semibold" : ""
                    }`}
                  >
                    {element.label}
                  </span>
                  {isActive && showCont && (
                    <p className="text-[0.9375rem] text-gray-600 mt-3 px-5 text-center animate-fadeIn">
                      {element.description}
                    </p>
                  )}
                </div>
              );
            })}

            {/* Connection lines */}
            {elements.map((_, index) => {
              const angle = index * 72 - 90;
              const radius = 160 * 1.20; // Scaled radius
              const isVisible = index < visibleElements;

              return (
                <svg
                  key={`line-${index}`}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 384 384"
                >
                  <line
                    x1="192"
                    y1="192"
                    x2={192 + Math.cos((angle * Math.PI) / 180) * radius}
                    y2={192 + Math.sin((angle * Math.PI) / 180) * radius}
                    stroke="#e5e7eb"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    className={`transition-opacity duration-500 ${
                      isVisible ? "opacity-50" : "opacity-0"
                    }`}
                    style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
                  />
                </svg>
              );
            })}
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12.5px);
          }
        }
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
        @keyframes floatBubble {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-125px) translateX(25px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
