import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const Goals = () => {
  const mountRef = useRef(null);
  const [visibleElements, setVisibleElements] = useState([]);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const globeRef = useRef(null);
  const animationRef = useRef(null);

  const elements = [
    { id: "eco", text: "Eco - Friendly", position: "top-left", delay: 500 },
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
    if (!mountRef.current) return;

    if (rendererRef.current) {
      mountRef.current.removeChild(rendererRef.current.domElement);
      cancelAnimationFrame(animationRef.current);
    }

    // Increase Three.js canvas size by 1.4x
    const canvasSize = 560; // 400 * 1.4 = 560

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      canvasSize / canvasSize,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setSize(canvasSize, canvasSize);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Increase globe size proportionally
    const geometry = new THREE.SphereGeometry(2.1, 64, 64); // 1.5 * 1.4 = 2.1

    const canvas = document.createElement("canvas");
    canvas.width = 1024; // Increased resolution for better quality
    canvas.height = 512;
    const context = canvas.getContext("2d");

    const gradient = context.createLinearGradient(0, 0, 1024, 512);
    gradient.addColorStop(0, "#1e40af");
    gradient.addColorStop(0.3, "#3b82f6");
    gradient.addColorStop(0.5, "#22c55e");
    gradient.addColorStop(0.7, "#16a34a");
    gradient.addColorStop(1, "#15803d");

    context.fillStyle = gradient;
    context.fillRect(0, 0, 1024, 512);

    context.fillStyle = "#15803d";
    for (let i = 0; i < 50; i++) {
      // More details for larger globe
      const x = Math.random() * 1024;
      const y = Math.random() * 512;
      const radius = Math.random() * 40 + 15;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.MeshPhongMaterial({
      map: texture,
      transparent: true,
      opacity: 0.95, // Increased opacity for better visibility
      shininess: 30,
    });

    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);
    globeRef.current = globe;

    // Increase atmosphere size proportionally
    const atmosphereGeometry = new THREE.SphereGeometry(2.38, 64, 64); // 1.7 * 1.4 = 2.38
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x4fc3f7,
      transparent: true,
      opacity: 0.15, // Increased opacity
      side: THREE.BackSide,
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6); // Increased ambient light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0); // Increased intensity
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x4fc3f7, 0.5, 100); // Added point light
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 5;

    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      if (globeRef.current) {
        globeRef.current.rotation.y += 0.005;
        globeRef.current.rotation.x = Math.sin(Date.now() * 0.0005) * 0.1;
      }

      renderer.render(scene, camera);
    };
    animate();

    elements.forEach((element, index) => {
      setTimeout(() => {
        setVisibleElements((prev) => [...prev, element.id]);
      }, element.delay);
    });

    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      cancelAnimationFrame(animationRef.current);
      if (renderer) renderer.dispose();
    };
  }, []);

  const getPositionClasses = (position) => {
    switch (position) {
      case "top-left":
        return "top-16 left-16"; // Increased spacing
      case "top-right":
        return "top-16 right-16"; // Increased spacing
      case "bottom-left":
        return "bottom-16 left-16"; // Increased spacing
      case "bottom-right":
        return "bottom-16 right-16"; // Increased spacing
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 ">
      <div className="relative w-full max-w-6xl h-[600px] flex items-center justify-center">
        {" "}
        {/* Increased container size */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 1 }}
        >
          {elements.map((element) => (
            <line
              key={`line-${element.id}`}
              x1={
                element.position.includes("left") ? "180" : "calc(100% - 180px)" // Increased spacing
              }
              y1={
                element.position.includes("top") ? "130" : "calc(100% - 130px)"
              } // Increased spacing
              x2="50%"
              y2="50%"
              stroke="rgba(255, 255, 255, 0.3)" // Increased visibility
              strokeWidth="2"
              className={`transition-opacity duration-1000 ${
                visibleElements.includes(element.id)
                  ? "opacity-100"
                  : "opacity-0"
              }`}
              strokeDasharray="5,5"
            />
          ))}
        </svg>
        <div
          ref={mountRef}
          className="relative w-[560px] h-[560px] z-10 rounded-full overflow-hidden shadow-2xl"
          style={{
            boxShadow: "0 0 60px rgba(79, 195, 247, 0.4)",
          }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 opacity-20 blur-xl scale-150"></div>
        </div>
        {elements.map((element) => (
          <div
            key={element.id}
            className={`absolute ${getPositionClasses(
              element.position
            )} transition-all duration-1000 ease-out z-20 `} // Added z-index
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
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-16 py-12 shadow-2xl hover:bg-white/20 transition-all duration-300 border-2 border-blue-500/60 hover:scale-105 hover:shadow-2xl">
              <div className="text-[#084189] font-bold text-4xl text-center whitespace-nowrap">
                {element.text}
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/10 to-emerald-400/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        ))}
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

      <style jsx>{`
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
