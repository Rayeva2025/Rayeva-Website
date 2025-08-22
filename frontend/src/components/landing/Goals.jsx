import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Earth from "../ui/Earth.jsx";
import OrbitingCircles from "./OrbitingCircles.jsx";

const DEFAULT_ELEMENTS = [
  { id: "eco", text: "Eco - Friendly" },
  { id: "ecofre", text: "Innovation" },
  { id: "sustainability", text: "Sustainability" },
  { id: "consciousness", text: "Consciousness" },
  { id: "consumerism", text: "Consumerism" },
];

export default function Goals() {
  const wrapperRef = useRef(null);
  const [visibleElements, setVisibleElements] = useState([]);
  const [radius, setRadius] = useState(160);
  const [canvasSize, setCanvasSize] = useState(360);
  const elements = DEFAULT_ELEMENTS;

  // show all immediately (no stagger)
  useEffect(() => {
    setVisibleElements(elements.map((e) => e.id));
  }, [elements]);

  // measure container and compute responsive sizes
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const compute = () => {
      const rect = el.getBoundingClientRect();
      const w = rect.width || 560;
      const h = rect.height || 560;
      // radius is half the smaller dimension minus margin
      const margin = Math.max(24, Math.min(80, Math.round(Math.min(w, h) * 0.08)));
      const newRadius = Math.max(60, Math.round(Math.min(w, h) / 2 - margin));
      // canvas should fit inside the orbit; keep it a bit smaller
      const newCanvas = Math.max(160, Math.round(Math.min(w, h) * 0.55));

      setRadius(newRadius);
      setCanvasSize(newCanvas);
    };

    compute();

    // ResizeObserver for responsiveness
    let ro = null;
    if (window.ResizeObserver) {
      ro = new ResizeObserver(compute);
      ro.observe(el);
    } else {
      window.addEventListener("resize", compute);
    }

    return () => {
      if (ro) ro.disconnect();
      else window.removeEventListener("resize", compute);
    };
  }, []);

  return (
    <section className="w-full max-sm:flex-col flex items-center justify-center py-12">
      <div className="w-full max-w-5xl px-4">
        <div
          ref={wrapperRef}
          className="relative mx-auto"
          style={{
            width: "100%",
            maxWidth: "900px",
            aspectRatio: "1 / 1",
            overflow: "visible",
          }}
        >
          <div
            className="absolute inset-0 flex items-center  justify-center"
            aria-hidden="true"
            style={{ pointerEvents: "none" }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                boxShadow: "0 0 60px rgba(79,195,247,0.15)",
              }}
            />
          </div>

          {/* Earth Canvas centered */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div
              style={{
                width: `${canvasSize}px`,
                height: `${canvasSize}px`,
                maxWidth: "100%",
                maxHeight: "100%",
              }}
              className="flex items-center justify-center"
            >
              <Canvas
                shadows
                style={{ width: "100%", height: "100%", pointerEvents: "none" }}
              >
                <ambientLight intensity={1.8} />
                <directionalLight position={[5, 5, 5]} intensity={0.6} />
                <Earth position={[0, 0, 2]} scale={1.5} />
              </Canvas>
            </div>
          </div>

          {/* Orbiting circles */}
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <OrbitingCircles
              radius={radius}
              duration={14}
              speed={1}
              reverse={false}
              path={true}
              className="pointer-events-none "
            >
              {elements.map((el) => (
                <div
                  key={el.id}
                  className="flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 shadow-lg transition-opacity duration-300"
                  style={{
                    width: Math.max(80, Math.round(radius * 0.45)),
                    height: Math.max(80, Math.round(radius * 0.45)),
                    opacity: visibleElements.includes(el.id) ? 1 : 0,
                    pointerEvents: visibleElements.includes(el.id)
                      ? "auto"
                      : "none",
                    background:
                      "linear-gradient(135deg, rgba(46,181,208,0.06) 0%, rgba(77,168,179,0.04) 100%)",
                    borderColor: "rgba(77,168,179,0.18)",
                  }}
                >
                  <span
                    className="text-center font-semibold"
                    style={{
                      color: "#4da8b3",
                      padding: "0 8px",
                      fontSize: Math.max(12, Math.round(radius * 0.07)),
                    }}
                  >
                    {el.text}
                  </span>
                </div>
              ))}
            </OrbitingCircles>
          </div>
        </div>
      </div>

      <div className="content w-[33%] max-sm:w-[80%] flex flex-col justify-center lg:w-1/3 space-y-8">
        <h2 className="text-5xl md:text-8xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
            Our Goal
          </span>
        </h2>

        <p className="text-2xl text-slate-700">
          <span className="font-bold">Our Goal is not just a statement</span>. It is a commitment to shaping a
          better world through mindful action and visionary design.
        </p>
      </div>
    </section>
  );
}