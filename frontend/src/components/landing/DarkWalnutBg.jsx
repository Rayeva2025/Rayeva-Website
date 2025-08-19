import React from "react";

const DarkWalnutBg = ({ children, className = "", style = {} }) => {
  return (
    <div
      className={`relative ${className}`}
      style={{
        background: "linear-gradient(to right, #b2e4ea, #a0d7dd, #c0f0f5)", // light tones of #4da8b3
        ...style,
      }}
    >
      {/* Soft texture lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(90deg, 
              transparent 0px, 
              rgba(77, 168, 179, 0.2) 1px, 
              transparent 2px, 
              transparent 6px
            ),
            repeating-linear-gradient(90deg, 
              transparent 0px, 
              rgba(77, 168, 179, 0.1) 1px, 
              transparent 4px, 
              transparent 20px
            )
          `,
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(77, 168, 179, 0.2) 0%, transparent 50%)",
        }}
      />

      {/* Accent shimmer lines */}
      <div className="absolute top-16 left-8 right-8 h-8 bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-20 left-12 right-12 h-6 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default DarkWalnutBg;
