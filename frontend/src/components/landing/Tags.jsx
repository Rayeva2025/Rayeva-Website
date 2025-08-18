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
      containerRef.current.style.setProperty("--animation-duration", "40s");
      setStart(true);
    }
  }, [start]);

  return (
    <>
        <style>
            {`
            .animate-scroll {
                animation: scroll-x var(--animation-duration, 40s) linear infinite;
                animation-direction: var(--animation-direction, forwards);
            }
            @keyframes scroll-x {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            `}
        </style>
        <section className="w-full py-10">
        <h2 className="text-center text-3xl font-bold text-[#084189] mb-6">
            Tags
        </h2>
        <div
            ref={containerRef}
            className="scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
        >
            <ul
            ref={scrollerRef}
            className={`flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4 ${start ? "animate-scroll" : ""} hover:[animation-play-state:paused]`}
            >
            {tags.map((tag, idx) => (
                <li
                key={idx}
                className="flex items-center gap-2 px-6 py-3 rounded-full shadow-md bg-gradient-to-r from-[#DAFBE6] to-[#E7F6FF] border border-[#2EB5D0]/30 text-[#084189] font-medium text-sm"
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

// Add this to your global CSS or Tailwind config for the animation
// .animate-scroll {
//   animation: scroll-x var(--animation-duration, 40s) linear infinite;
//   animation-direction: var(--animation-direction, forwards);
// }
// @keyframes scroll-x {
//   0% { transform: translateX(0); }
//   100% { transform: translateX(-50%); }
//