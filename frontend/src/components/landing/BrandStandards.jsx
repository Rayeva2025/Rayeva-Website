import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function BrandStandards() {
  const [showTitle, setShowTitle] = useState(false);
  const [showPath, setShowPath] = useState(false);
  const [visibleElements, setVisibleElements] = useState(0);
  const [activeElement, setActiveElement] = useState(null);
  const [showCont, setShowCont] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20%" });

  const showContent = () => {
    setShowCont(false);
    setTimeout(() => {
      setShowCont(true);
    }, 300);
  };

  useEffect(() => {
    if (isInView) {
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
    } else {
      // Reset animations when out of view
      setShowTitle(false);
      setShowPath(false);
      setVisibleElements(0);
    }
  }, [isInView]);

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const circleVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5, ease: "easeInOut" },
        opacity: { duration: 0.5 },
      },
    },
  };

  return (
    <div
      ref={ref}
      className="min-h-screen flex items-center justify-center p-10 overflow-hidden relative transform origin-center"
    >
      <motion.div
        className="max-w-[87.5rem] mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="flex-1 max-w-[40rem]" variants={itemVariants}>
          <motion.h2
            className="text-[3.5rem] font-bold text-gray-800 mb-7 leading-tight"
            variants={titleVariants}
          >
            How we choose a
            <br />
            <motion.p
              className="font-bold text-[#0745b8] text-[3.75rem]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Brand ?
            </motion.p>
          </motion.h2>

          <motion.p
            className="text-gray-600 leading-relaxed mb-10 text-[1.6rem]"
            variants={itemVariants}
          >
            Rayeva is built with values and have strong care for{" "}
            <span className="text-black font-bold">Sustainability</span> and{" "}
            <span className="text-black font-bold">Consumer Conciousness</span>.
            We are strictly adhered to few principles and our selection criteria
            is truly rigorous in terms of positive impact to living.
          </motion.p>

          <motion.div className="flex gap-3" variants={itemVariants}>
            <motion.button
              className="px-7 py-4 bg-[#0745b8] border border-gray-300 text-white rounded-md hover:bg-[#3260b7] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-[1.4rem]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
            <motion.button
              className="px-7 py-4 bg-[#0745b8] border border-gray-300 text-white rounded-md hover:bg-[#3260b7] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-[1.4rem]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Be a part
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 relative flex items-center justify-center min-w-[500px] scale-125"
          variants={itemVariants}
        >
          <div className="relative w-[35rem] h-[30rem]">
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-100 opacity-20 blur-xl"
              animate={isInView ? { scale: [1, 1.1, 1] } : { scale: 1 }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                isInView && showTitle
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.5 }
              }
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h3
                className="text-[3.75rem] font-bold text-gray-800 mb-3"
                animate={isInView ? { y: [0, -10, 0] } : { y: 0 }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Rayeva
              </motion.h3>
              <motion.p
                className="text-[2.5rem] text-gray-500 font-light"
                animate={isInView ? { y: [0, -10, 0] } : { y: 0 }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              >
                Standards
              </motion.p>
            </motion.div>

            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 384 384"
              style={{ transform: "rotate(-90deg)" }}
            >
              <motion.circle
                cx="192"
                cy="192"
                r="160"
                fill="none"
                stroke="#d1d5db"
                strokeWidth="2"
                strokeDasharray="1005"
                variants={circleVariants}
                initial="hidden"
                animate={isInView && showPath ? "visible" : "hidden"}
              />
            </svg>

            {elements.map((element, index) => {
              const angle = index * 72 - 90;
              const radius = 160 * 1.2;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              const isVisible = index < visibleElements;
              const isActive = activeElement === index;

              return (
                <motion.div
                  key={index}
                  className={`absolute flex flex-col items-center justify-center ${
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
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={
                    isInView && isVisible
                      ? {
                          opacity: 1,
                          scale: 1,
                          transition: {
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            delay: index * 0.3,
                          },
                        }
                      : { opacity: 0, scale: 0 }
                  }
                  whileHover={isActive ? {} : { scale: 1.1 }}
                  onMouseEnter={() => {
                    setActiveElement(index);
                    showContent();
                  }}
                  onMouseLeave={() => setActiveElement(null)}
                >
                  <motion.div
                    className={`w-5 h-5 ${element.color} rounded-full mb-2 ${
                      isActive ? "mt-5" : ""
                    }`}
                    animate={isActive ? { scale: 1.5 } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className={`text-[0.9375rem] font-medium text-gray-700 text-center px-2 ${
                      isActive ? "text-[1.171875rem] font-semibold" : ""
                    }`}
                    animate={
                      isActive
                        ? { fontSize: "1.171875rem" }
                        : { fontSize: "0.9375rem" }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    {element.label}
                  </motion.span>
                  {isActive && showCont && (
                    <motion.p
                      className="text-[0.9375rem] text-gray-600 mt-3 px-5 text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      {element.description}
                    </motion.p>
                  )}
                </motion.div>
              );
            })}

            {elements.map((_, index) => {
              const angle = index * 72 - 90;
              const radius = 160 * 1.2;
              const isVisible = index < visibleElements;

              return (
                <svg
                  key={`line-${index}`}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 384 384"
                >
                  <motion.line
                    x1="192"
                    y1="192"
                    x2={192 + Math.cos((angle * Math.PI) / 180) * radius}
                    y2={192 + Math.sin((angle * Math.PI) / 180) * radius}
                    stroke="#e5e7eb"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    initial={{ opacity: 0 }}
                    animate={
                      isInView && isVisible ? { opacity: 0.5 } : { opacity: 0 }
                    }
                    transition={{ delay: index * 0.3 + 0.2, duration: 0.5 }}
                  />
                </svg>
              );
            })}
          </div>
        </motion.div>
      </motion.div>

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
