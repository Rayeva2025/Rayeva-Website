import React from "react";

const DarkWalnutBg = ({ children, className = "", style = {} }) => {
  return (
    <div
      className={`relative ${className}`}
      style={{
        background: "linear-gradient(to right, #0c63b3, #084189, #0a56a5)",
        ...style,
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(90deg, 
              transparent 0px, 
              rgba(12, 74, 150, 0.4) 1px, 
              transparent 2px, 
              transparent 6px
            ),
            repeating-linear-gradient(90deg, 
              transparent 0px, 
              rgba(8, 65, 137, 0.3) 1px, 
              transparent 4px, 
              transparent 20px
            )
          `,
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(12, 99, 179, 0.3) 0%, transparent 50%)",
        }}
      />

      <div className="absolute top-16 left-8 right-8 h-8 bg-gradient-to-r from-transparent via-blue-700/20 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-20 left-12 right-12 h-6 bg-gradient-to-r from-transparent via-blue-800/30 to-transparent pointer-events-none"></div>

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default DarkWalnutBg;
