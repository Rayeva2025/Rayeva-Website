import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Earth from "./Earth.jsx"; // Import Earth component
import OrbitingCircles from "./OrbitingCircles.jsx";

const Goals = () => {
  const [visibleElements, setVisibleElements] = useState([]);

  const elements = [
    { id: "eco", text: "Eco - Friendly", delay: 500 },
    { id: "ecofre", text: "Innovation", delay: 700 },
    { id: "sustainability", text: "Sustainability", delay: 900 },
    { id: "consciousness", text: "Consciousness", delay: 1100 },
    { id: "consumerism", text: "Consumerism", delay: 1300 },
  ];

  // useEffect(() => {
  //   elements.forEach((element) => {
  //     setTimeout(() => {
  //       setVisibleElements((prev) => [...prev, element.id]);
  //     }, element.delay);
  //   });
  // }, []);

  useEffect(() => {
    // show all immediately (no stagger)
    setVisibleElements(elements.map((e) => e.id));
  }, []);

  return (
    <div className="min-h-screen w-[100vw] scale-100 flex items-center justify-center">
      <div className="relative h-[800px] w-full flex items-center justify-center">
        <div
          className="relative w-[560px] h-[560px] mt-30 z-10 rounded-full overflow-visible"
          style={{
            boxShadow: "0 0 60px rgba(79, 195, 247, 0.4)",
          }}
        >
          <div className="absolute mt-[100px] inset-0 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 opacity-20 blur-xl scale-150"></div>

          <div className="absolute inset-0 flex items-center justify-center z-10">
            <Canvas shadows style={{ width: 360, height: 360 }}>
              <ambientLight intensity={2} />
              <Earth position={[0, 0, 2]} scale={1.5} />
            </Canvas>
          </div>

          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <OrbitingCircles
              radius={360}
              duration={14}
              speed={1}
              reverse={false}
              path={true}
            >
              {elements.map((el) => (
                <div
                  key={el.id}
                  className="w-[160px] h-[160px] rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border-2 border-blue-500/30 shadow-xl transition-opacity duration-500"
                  style={{
                    opacity: visibleElements.includes(el.id) ? 1 : 0,
                    pointerEvents: visibleElements.includes(el.id)
                      ? "auto"
                      : "none",
                  }}
                >
                  <div className="text-[#4da8b3] font-bold text-xl text-center px-2">
                    {el.text}
                  </div>
                </div>
              ))}
            </OrbitingCircles>
          </div>
        </div>

        {/* Floating particles background */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ zIndex: 0 }}
        >
          {[...Array(200)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
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