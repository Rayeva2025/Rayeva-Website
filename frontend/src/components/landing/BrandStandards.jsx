import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaLeaf,
  FaLightbulb,
  FaEye,
} from "react-icons/fa";

const elements = [
  {
    label: "Quality",
    color: "bg-blue-400",
    icon: FaCheckCircle,
    description: "We focus on the highest product quality.",
  },
  {
    label: "Safety",
    color: "bg-emerald-400",
    icon: FaShieldAlt,
    description: "Products pass global standard safety checks.",
  },
  {
    label: "Environment",
    color: "bg-teal-400",
    icon: FaLeaf,
    description: "Brands must support environmental values.",
  },
  {
    label: "Innovation",
    color: "bg-yellow-300",
    icon: FaLightbulb,
    description: "Driven by technology and innovation.",
  },
  {
    label: "Transparency",
    color: "bg-pink-400",
    icon: FaEye,
    description: "Full product disclosure for consumers.",
  },
];

const circleVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.12, type: "spring", stiffness: 180 },
  }),
};

const activeVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function BrandStandards() {
  const [activeElement, setActiveElement] = useState(null);

  return (
    <motion.section
      className="min-h-[80vh] flex items-center justify-center px-2 py-20 bg-gradient-to-br from-blue-50 to-emerald-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.15 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-28">
        {/* Left: Text */}
        <motion.div
          className="flex-1 max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-7 leading-tight">
            How we choose a <br />
            <span className="font-bold text-[#0745b8]">Brand?</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-10 text-lg md:text-xl">
            Rayeva is built on values of <span className="text-black font-semibold">Sustainability</span> and <span className="text-black font-semibold">Consumer Consciousness</span>. Our selection criteria is rigorous and focused on positive impact.
          </p>
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.04 }}
              className="px-7 py-3 bg-[#0745b8] text-white rounded-md hover:bg-[#3260b7] transition-all duration-200 text-lg font-medium shadow-sm"
            >
              Learn More
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              className="px-7 py-3 bg-white border border-[#0745b8] text-[#0745b8] rounded-md hover:bg-blue-50 transition-all duration-200 text-lg font-medium shadow-sm"
            >
              Be a part
            </motion.button>
          </div>
        </motion.div>

        {/* Right: Animated Circle */}
        <motion.div
          className="flex-1 flex items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative w-[32rem] h-[32rem]">
            {/* Center logo/text */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-4xl md:text-5xl font-bold text-[#0745b8] mb-2">Rayeva</span>
              <span className="text-2xl text-gray-500 font-light">Standards</span>
            </motion.div>
            {/* SVG Circle */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 512 512"
              style={{ transform: "rotate(-90deg)" }}
            >
              <circle
                cx="256"
                cy="256"
                r="180"
                fill="none"
                stroke="#d1d5db"
                strokeWidth="2"
                strokeDasharray="1130"
                strokeDashoffset="0"
              />
            </svg>
            {/* Elements around the circle */}
            {elements.map((element, index) => {
              const angle = index * (360 / elements.length) - 90;
              const radius = 180 * 1.15;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              const isActive = activeElement === index;
              const Icon = element.icon;

              return (
                <motion.div
                  key={index}
                  custom={index}
                  variants={circleVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.09, zIndex: 20 }}
                  className={`absolute flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "w-64 h-40 rounded-lg bg-white/80 backdrop-blur-md shadow-md border border-blue-100"
                      : "w-30 h-30 rounded-full bg-white border border-blue-200 shadow hover:shadow-md"
                  }`}
                  style={{
                    left: `calc(50% + ${x}px - ${isActive ? "8rem" : "3rem"})`,
                    top: `calc(50% + ${y}px - ${isActive ? "5rem" : "3rem"})`,
                    zIndex: isActive ? 20 : 10,
                  }}
                  onMouseEnter={() => setActiveElement(index)}
                  onMouseLeave={() => setActiveElement(null)}
                >
                  <motion.div
    className={`flex items-center justify-center rounded-full
      ${isActive ? "w-14 h-14 mb-2" : "w-10 h-10 mb-1"}
      ${element.color} text-white text-3xl transition-all duration-200
      ${isActive ? "scale-110 shadow" : ""}
    `}
  >
    <Icon />
  </motion.div>
  <span
    className={`text-base font-medium text-gray-700 text-center px-2 transition-all duration-200
      ${isActive ? "text-lg font-semibold" : ""}
    `}
  >
    {element.label}
  </span>
  <AnimatePresence>
    {isActive && (
      <motion.p
        className="text-sm text-gray-600 px-2 text-center"
        variants={activeVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        {element.description}
      </motion.p>
    )}
  </AnimatePresence>
</motion.div>
              );
            })}
            {/* Removed lines from center to elements for cleaner look */}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}