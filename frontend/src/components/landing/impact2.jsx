import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ScrollyTelling = () => {
  const containerRef = useRef(null);
  const [wasteDiverted, setWasteDiverted] = useState(0);
  const [emissionsSaved, setEmissionsSaved] = useState(0);
  const [artisansSupported, setArtisansSupported] = useState(0);

  // Section refs for intersection observer
  const [part1Ref, part1InView] = useInView({ threshold: 0.5 });
  const [part2Ref, part2InView] = useInView({ threshold: 0.5 });
  const [part3Ref, part3InView] = useInView({ threshold: 0.5 });
  const [part4Ref, part4InView] = useInView({ threshold: 0.5 });

  // Animate counters when part 4 comes into view
  useEffect(() => {
    if (part4InView) {
      let progress = 0;
      gsap.to(
        {},
        {
          duration: 2,
          onUpdate: () => {
            progress = gsap.getProperty(this, "progress");
            setWasteDiverted(Math.floor(5482 * progress));
            setEmissionsSaved(Math.floor(28450 * progress));
            setArtisansSupported(Math.floor(1574 * progress));
          },
          ease: "power2.out",
        }
      );
    }
  }, [part4InView]);

  // Initialize GSAP animations on component mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate pollution elements on scroll
      gsap.to(".pollution-element", {
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".part-1",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      // Shatter animation for the statistic
      gsap.to(".shatter-number", {
        opacity: 0,
        scale: 0,
        scrollTrigger: {
          trigger: ".shatter-number",
          start: "top center",
          end: "bottom center",
          scrub: true,
          onEnter: () => {
            gsap.to(".shatter-piece", {
              opacity: 1,
              y: 50,
              stagger: 0.1,
              duration: 1,
            });
          },
        },
      });

      // Circular arrow animation
      gsap.to(".circular-arrow", {
        rotation: 360,
        scrollTrigger: {
          trigger: ".part-3",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      // Positive icons orbit animation
      gsap.to(".positive-icon", {
        rotation: 360,
        transformOrigin: "center center",
        scrollTrigger: {
          trigger: ".positive-icons-container",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full h-[400vh]" ref={containerRef}>
      {/* Part 1: The Problem */}
      <section
        className="part-1 h-screen w-full relative flex justify-center items-center overflow-hidden"
        ref={part1Ref}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-300 to-blue-100 z-10">
          <svg viewBox="0 0 100 100" className="absolute bottom-0 w-full h-1/2">
            <path
              d="M0,70 Q20,50 40,60 T80,50 T100,70 L100,100 L0,100 Z"
              fill="#7ebc6f"
            />
            <circle cx="20" cy="40" r="10" fill="#f9d71c" />
            <path
              d="M30,30 Q40,10 50,30 T70,30"
              fill="none"
              stroke="#7ebc6f"
              strokeWidth="2"
            />
          </svg>

          {/* Pollution elements that fade in */}
          <div className="pollution-element absolute top-1/5 left-1/3 opacity-0">
            <svg viewBox="0 0 50 50" className="w-12 h-12">
              <path
                d="M25,10 Q10,15 10,30 Q15,40 25,40 Q40,40 40,25 Q40,15 25,10 Z"
                fill="#aaa"
                opacity="0.6"
              />
            </svg>
          </div>
          <div className="pollution-element absolute top-3/5 left-2/3 opacity-0">
            <svg viewBox="0 0 50 50" className="w-10 h-10">
              <path
                d="M20,10 Q30,5 35,15 L30,40 Q25,45 20,40 L15,15 Q15,10 20,10 Z"
                fill="#d4f1f9"
                opacity="0.8"
              />
            </svg>
          </div>
        </div>
        <div className="relative z-20 max-w-lg text-center p-8 bg-white/80 rounded-xl shadow-xl">
          <h2 className="typewriter text-2xl font-bold overflow-hidden border-r-4 border-r-orange-500 whitespace-nowrap animate-typing">
            Every year, the fashion industry produces 92 million tons of waste.
          </h2>
        </div>
      </section>

      {/* Part 2: The Cause */}
      <section
        className="part-2 h-screen w-full relative flex justify-center items-center overflow-hidden"
        ref={part2Ref}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-700 to-gray-400 z-10">
          <svg
            viewBox="0 0 100 100"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2"
          >
            <rect x="30" y="40" width="40" height="40" fill="#555" />
            <rect x="40" y="30" width="20" height="10" fill="#777" />
            <polygon points="30,40 70,40 80,30 20,30" fill="#666" />
            <rect x="45" y="50" width="10" height="20" fill="#333" />
            <path d="M50,20 L50,30" stroke="#333" strokeWidth="2" />
          </svg>

          <div className="shatter-number absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-white text-shadow-lg">
            100 Billion
          </div>
          <div className="shatter-pieces absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-24 opacity-0">
            <div className="shatter-piece absolute w-5 h-5 bg-white opacity-0"></div>
            <div className="shatter-piece absolute w-5 h-5 bg-white opacity-0"></div>
            <div className="shatter-piece absolute w-5 h-5 bg-white opacity-0"></div>
            <div className="shatter-piece absolute w-5 h-5 bg-white opacity-0"></div>
          </div>
        </div>
        <div className="relative z-20 max-w-lg text-center p-8 bg-white/80 rounded-xl shadow-xl">
          <p className="text-xl">
            Driven by linear models of 'take, make, waste,' we're extracting
            more than our planet can give.
          </p>
        </div>
      </section>

      {/* Part 3: The Solution */}
      <section
        className="part-3 h-screen w-full relative flex justify-center items-center overflow-hidden"
        ref={part3Ref}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-green-100 to-green-200 z-10">
          <div className="circular-arrow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg viewBox="0 0 100 100" className="w-24 h-24">
              <path
                d="M50,10 A40,40 0 1,1 50,90 A40,40 0 1,1 50,10"
                fill="none"
                stroke="#4CAF50"
                strokeWidth="5"
                strokeDasharray="5,5"
              />
              <path
                d="M50,10 A40,40 0 0,1 90,50"
                fill="none"
                stroke="#4CAF50"
                strokeWidth="5"
              />
              <polygon points="85,45 95,50 85,55" fill="#4CAF50" />
            </svg>
          </div>

          <div className="positive-icons-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48">
            <div className="positive-icon absolute top-0 left-1/2 -translate-x-1/2">
              <svg viewBox="0 0 50 50" className="w-8 h-8">
                <path d="M35,20 L15,20 L10,50 L40,50 Z" fill="#8BC34A" />
                <path
                  d="M20,20 A5,5 0 0,1 30,20"
                  fill="none"
                  stroke="#8BC34A"
                  strokeWidth="3"
                />
              </svg>
            </div>
            <div className="positive-icon absolute bottom-0 left-1/2 -translate-x-1/2">
              <svg viewBox="0 0 50 50" className="w-8 h-8">
                <path
                  d="M10,30 Q15,15 30,15 Q40,15 40,30 Q40,40 30,40 L20,40 Q10,40 10,30 Z"
                  fill="#FF9800"
                />
              </svg>
            </div>
            <div className="positive-icon absolute top-1/2 right-0 -translate-y-1/2">
              <svg viewBox="0 0 50 50" className="w-8 h-8">
                <circle cx="25" cy="15" r="10" fill="#FFD54F" />
                <path d="M15,40 L35,40 L30,25 L20,25 Z" fill="#4FC3F7" />
              </svg>
            </div>
          </div>
        </div>
        <div className="relative z-20 max-w-lg text-center p-8 bg-white/80 rounded-xl shadow-xl">
          <p className="text-xl">But there is another way. A circular way.</p>
        </div>
      </section>

      {/* Part 4: Our Impact */}
      <section
        className="part-4 h-screen w-full relative flex justify-center items-center overflow-hidden"
        ref={part4Ref}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-blue-200 z-10 flex justify-center items-center">
          <div className="circular-data-viz relative w-48 h-48">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="#e0e0e0"
                strokeWidth="10"
              />
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="#4CAF50"
                strokeWidth="10"
                strokeDasharray="565.48"
                strokeDashoffset="565.48"
                className="waste-progress"
              />
            </svg>

            <div className="impact-stats absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="stat my-2">
                <h3 className="text-2xl font-bold text-green-700 m-0">
                  {wasteDiverted} kg
                </h3>
                <p className="text-sm m-0">of waste diverted from landfills</p>
              </div>
              <div className="stat my-2">
                <h3 className="text-2xl font-bold text-green-700 m-0">
                  {emissionsSaved} kg
                </h3>
                <p className="text-sm m-0">of CO2 emissions saved</p>
              </div>
              <div className="stat my-2">
                <h3 className="text-2xl font-bold text-green-700 m-0">
                  {artisansSupported}
                </h3>
                <p className="text-sm m-0">artisans supported</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-20 max-w-lg text-center p-8 bg-white/80 rounded-xl shadow-xl">
          <h2 className="text-2xl font-bold">Your Role in the Solution</h2>
          <p className="text-xl">
            Every sustainable choice you make contributes to a better future.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ScrollyTelling;
