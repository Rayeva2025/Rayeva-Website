import React, { useEffect, useRef, useState } from "react";
import { FaLeaf, FaRecycle, FaWater, FaSeedling, FaGlobe, FaSun, FaTree, FaWind, FaCloud, FaMountain } from "react-icons/fa";

export default function Tags() {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  // Hardcoded 10 tags with icons
  const tags = [
    { label: "Plastic-Free", icon: <FaRecycle /> },
    { label: "Organic", icon: <FaLeaf /> },
    { label: "Fair Trade", icon: <FaGlobe /> },
    { label: "Refillable", icon: <FaWater /> },
    { label: "Plant-Based", icon: <FaSeedling /> },
    { label: "Solar Powered", icon: <FaSun /> },
    { label: "Forest Safe", icon: <FaTree /> },
    { label: "Wind Energy", icon: <FaWind /> },
    { label: "Cloud Neutral", icon: <FaCloud /> },
    { label: "Mountain Grown", icon: <FaMountain /> },
  ];

  useEffect(() => {
    if (containerRef.current && scrollerRef.current && !start) {
      // Duplicate tags for infinite scroll effect
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });
      // Set animation direction and speed
      containerRef.current.style.setProperty("--animation-direction", "forwards");
      containerRef.current.style.setProperty("--animation-duration", "40s"); // Smaller animation duration
      setStart(true);
    }
  }, [start]);

  return (
    <>
      <style>
        {`
          .animate-scroll {
            animation: scroll-x var(--animation-duration, 20s) linear infinite;
            animation-direction: var(--animation-direction, forwards);
          }
          @keyframes scroll-x {
            0% { transform: translateX(0); }
            100% { transform: translateX(-25%); } /* Smaller scroll distance */
          }
        `}
      </style>
      <section className="w-full py-20">
        <h2 className="text-center text-4xl font-bold text-[#084189] mb-10">
          Tags
        </h2>
        <div
          ref={containerRef}
          className="scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
        >
          <ul
            ref={scrollerRef}
            className={`flex w-max min-w-full shrink-0 flex-nowrap gap-8 py-6 ${start ? "animate-scroll" : ""} hover:[animation-play-state:paused]`}
          >
            {tags.map((tag, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 px-8 py-4 rounded-full shadow-md border border-[#2EB5D0]/30 text-[#084189] font-medium text-base bg-transparent"
              >
                {tag.icon}
                {tag.label}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}