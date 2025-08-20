import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Earth from "./Earth.jsx"; // Import Earth component

const Goals = () => {
  const [visibleElements, setVisibleElements] = useState([]);

  const elements = [
    { id: "eco", text: "Eco - Friendly", position: "top-left", delay: 500 },
    { id: "ecofre", text: "Innovation", position: "top", delay: 500 },
    {
      id: "sustainability",
      text: "Sustainability",
      position: "top-right",
      delay: 1000,
    },
    {
      id: "consciousness",
      text: "Consciousness",
      position: "bottom-left",
      delay: 1500,
    },
    {
      id: "consumerism",
      text: "Consumerism",
      position: "bottom-right",
      delay: 2000,
    },
  ];

  useEffect(() => {
    elements.forEach((element, index) => {
      setTimeout(() => {
        setVisibleElements((prev) => [...prev, element.id]);
      }, element.delay);
    });
  }, []);

  const getPositionClasses = (position) => {
    switch (position) {
      case "top-left":
        return "bottom-[45%] left-[25%]";
      case "top-right":
        return "bottom-1 right-[30%]";
      case "bottom-left":
        return "bottom-1 left-[30%]";
      case "bottom-right":
        return "bottom-[45%] right-[25%]";
      case "top":
        return "top-3";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen w-[100vw] scale-100 flex items-center justify-center">
      <div className="relative h-[800px] w-full flex items-center justify-center">

        {/* Earth component container */}
        <div
          className="relative w-[560px] h-[560px] mt-30 z-10 rounded-full overflow-hidden shadow-2xl"
          style={{
            boxShadow: "0 0 60px rgba(79, 195, 247, 0.4)",
          }}
        >
          <div className="absolute mt-[100px] inset-0 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 opacity-20 blur-xl scale-150"></div>
          {/* Use Canvas with Earth component */}
          <Canvas shadows>
            <ambientLight intensity={2} />
            <Earth position={[0, 0, 2]} scale={1.5} />
          </Canvas>
        </div>

        {/* Goal elements */}
        {elements.map((element) => (
          <div
            key={element.id}
            className={`absolute ${getPositionClasses(
              element.position
            )} transition-all duration-1000 ease-out z-20`}
            style={{
              opacity: visibleElements.includes(element.id) ? 1 : 0,
              transform: visibleElements.includes(element.id)
                ? "translate(0, 0)"
                : `${
                    element.position.includes("left")
                      ? "translateX(-40px)"
                      : "translateX(40px)"
                  } ${
                    element.position.includes("top")
                      ? "translateY(-40px)"
                      : "translateY(40px)"
                  }`,
            }}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-full flex justify-center items-center w-[200px] h-[200px] shadow-2xl hover:bg-white/20 transition-all duration-300 border-2 border-blue-500/60 hover:scale-105 hover:shadow-2xl">
              <div className="text-[#4da8b3] font-bold text-3xl text-center whitespace-nowrap">
                {element.text}
              </div>
              <div className="absolute inset-0 w-[200px] h-[200px] rounded-full bg-gradient-to-r from-blue-400/10 to-emerald-400/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        ))}

        {/* Floating particles background */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ zIndex: 0 }}
        >
          {[...Array(300)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${
                  3 + Math.random() * 4
                }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-28px) rotate(180deg);
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
};

export default Goals;
