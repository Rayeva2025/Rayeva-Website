import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

export default function OrbitingCircles({
  children,
  duration = 20,
  radius = 160,
  reverse = false,
  speed = 1,
  path = true,
  className = "",
  ...props
}) {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);
  const pathIdRef = useRef(`orbitPath-${Math.random().toString(36).slice(2, 9)}`);

  useEffect(() => {
    const items = itemsRef.current.filter(Boolean);
    if (!items.length) return;

    const total = items.length;
    const dur = duration / Math.max(0.0001, speed);

    items.forEach((el, i) => {
      const startOffset = (i / total) % 1;

      gsap.set(el, {
        xPercent: -50,
        yPercent: -50,
        willChange: "transform",
      });

      const tween = gsap.to(el, {
        duration: dur,
        repeat: -1,
        ease: "none",
        motionPath: {
          path: `#${pathIdRef.current}`,
          align: `#${pathIdRef.current}`,
          alignOrigin: [0.5, 0.5],
          autoRotate: false,
          start: startOffset,
          end: startOffset + 1,
        },
        // reverse direction if requested
        onStart() {
          if (reverse) tween.time(dur);
        },
      });

      // small stagger variance optional
      tween.progress(i/total);
    });

    return () => {
      gsap.killTweensOf(items);
    };
  }, [children, duration, radius, reverse, speed]);

  // svg sizing: make viewBox large enough to hold orbit
  const padding = 40;
  const size = radius * 2 + padding;
  const cx = size / 2;
  const cy = size / 2;

  // build circular path using arc commands (two arcs to complete circle)
  const d = `M ${cx + radius}, ${cy}
             A ${radius} ${radius} 0 1 0 ${cx - radius} ${cy}
             A ${radius} ${radius} 0 1 0 ${cx + radius} ${cy}`;

  return (
    <div
      ref={containerRef}
      className={`relative inline-block ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      {...props}
    >
      {path && (
        <svg
          className="absolute inset-0 pointer-events-none"
          viewBox={`0 0 ${size} ${size}`}
          preserveAspectRatio="xMidYMid meet"
          style={{ width: "100%", height: "100%" }}
        >
          <path
            id={pathIdRef.current}
            d={d}
            fill="none"
            stroke="rgba(77,168,179,0.12)"
            strokeWidth="1"
          />
        </svg>
      )}

      {React.Children.map(children, (child, idx) => {
        return (
          <div
            ref={(el) => (itemsRef.current[idx] = el)}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              pointerEvents: "auto",
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}