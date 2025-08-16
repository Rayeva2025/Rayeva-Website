import React from 'react'

const DarkWalnutBg = ({ children, className = "", style = {} }) => {
  return (
    <div
      className={`relative ${className}`}
      style={{
        background: "linear-gradient(to right, #78350f, #a16207, #92400e)",
        ...style,
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(90deg, 
              transparent 0px, 
              rgba(92, 51, 23, 0.4) 1px, 
              transparent 2px, 
              transparent 6px
            ),
            repeating-linear-gradient(90deg, 
              transparent 0px, 
              rgba(139, 69, 19, 0.3) 1px, 
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
            "radial-gradient(circle at 30% 20%, rgba(160, 82, 45, 0.3) 0%, transparent 50%)",
        }}
      />

      <div className="absolute top-16 left-8 right-8 h-8 bg-gradient-to-r from-transparent via-yellow-800/20 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-20 left-12 right-12 h-6 bg-gradient-to-r from-transparent via-amber-900/30 to-transparent pointer-events-none"></div>

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default DarkWalnutBg