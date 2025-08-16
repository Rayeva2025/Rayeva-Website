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

    // Clean up previous scene if exists
    if (rendererRef.current) {
      mountRef.current.removeChild(rendererRef.current.domElement);
      cancelAnimationFrame(animationRef.current);
    }

    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 400 / 400, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(400, 400);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Create Earth globe
    const geometry = new THREE.SphereGeometry(1.5, 64, 64);

    // Create a simple earth-like texture
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 256;
    const context = canvas.getContext("2d");

    const gradient = context.createLinearGradient(0, 0, 512, 256);
    gradient.addColorStop(0, "#1e40af");
    gradient.addColorStop(0.3, "#3b82f6");
    gradient.addColorStop(0.5, "#22c55e");
    gradient.addColorStop(0.7, "#16a34a");
    gradient.addColorStop(1, "#15803d");

    context.fillStyle = gradient;
    context.fillRect(0, 0, 512, 256);

    // Add some continent-like shapes
    context.fillStyle = "#15803d";
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 256;
      const radius = Math.random() * 30 + 10;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.MeshPhongMaterial({
      map: texture,
      transparent: true,
      opacity: 0.9,
    });

    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);
    globeRef.current = globe;

    // Add atmosphere glow
    const atmosphereGeometry = new THREE.SphereGeometry(1.7, 64, 64);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x4fc3f7,
      transparent: true,
      opacity: 0.1,
      side: THREE.BackSide,
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      if (globeRef.current) {
        globeRef.current.rotation.y += 0.005;
        globeRef.current.rotation.x = Math.sin(Date.now() * 0.0005) * 0.1;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Animate elements appearance
    elements.forEach((element, index) => {
      setTimeout(() => {
        setVisibleElements((prev) => [...prev, element.id]);
      }, element.delay);
    });

    // Cleanup
    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      cancelAnimationFrame(animationRef.current);
      renderer.dispose();
    };
  }, []);

  const getPositionClasses = (position) => {
    switch (position) {
      case "top-left":
        return "top-8 left-8";
      case "top-right":
        return "top-8 right-8";
      case "bottom-left":
        return "bottom-8 left-8";
      case "bottom-right":
        return "bottom-8 right-8";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-8">
      <div className="relative w-full max-w-4xl h-96 flex items-center justify-center">
        {/* Connecting lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 1 }}
        >
          {elements.map((element) => (
            <line
              key={`line-${element.id}`}
              x1={
                element.position.includes("left") ? "120" : "calc(100% - 120px)"
              }
              y1={element.position.includes("top") ? "80" : "calc(100% - 80px)"}
              x2="50%"
              y2="50%"
              stroke="rgba(255, 255, 255, 0.2)"
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

        {/* Central Globe */}
        <div
          ref={mountRef}
          className="relative w-[400px] h-[400px]"
          style={{ zIndex: 2 }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 opacity-20 blur-xl scale-150"></div>
        </div>

        {/* Element Cards */}
        {elements.map((element) => (
          <div
            key={element.id}
            className={`absolute ${getPositionClasses(
              element.position
            )} transition-all duration-1000 ease-out ${
              visibleElements.includes(element.id)
                ? "opacity-100 translate-x-0 translate-y-0"
                : `opacity-0 ${
                    element.position.includes("left")
                      ? "-translate-x-4"
                      : "translate-x-4"
                  } ${
                    element.position.includes("top")
                      ? "-translate-y-4"
                      : "translate-y-4"
                  }`
            }`}
            style={{ zIndex: -20000 }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-32 py-10 border shadow-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl -z-200">
              <div className="text-black font-semibold text-lg text-center whitespace-nowrap">
                {element.text}
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/10 to-emerald-400/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        ))}

        {/* Floating particles */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ zIndex: 0 }}
        >
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-500 rounded-full opacity-30"
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
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default Goals;
