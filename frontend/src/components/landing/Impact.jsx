import { useState, useEffect } from "react";
import {
  FaLeaf,
  FaUsers,
  FaGlobe,
  FaLightbulb,
  FaHandshake,
  FaRecycle,
} from "react-icons/fa";

const Impact = () => {
  const [activeCard, setActiveCard] = useState(null);

  const impacts = [
    {
      Icon: FaLeaf,
      name: "Sustainability",
      description: "Driving eco-friendly initiatives for a greener future.",
      stats: "Reduced carbon footprint by 42%",
      color: "from-emerald-500 to-teal-600",
      gradient: "bg-gradient-to-br from-emerald-500/20 to-teal-600/20",
      href: "/sustainability",
    },
    {
      Icon: FaUsers,
      name: "Community",
      description: "Empowering people through collaboration and support.",
      stats: "12,000+ community members",
      color: "from-amber-500 to-orange-600",
      gradient: "bg-gradient-to-br from-amber-500/20 to-orange-600/20",
      href: "/community",
    },
    {
      Icon: FaGlobe,
      name: "Global Reach",
      description: "Connecting ideas and people across continents.",
      stats: "Active in 47 countries",
      color: "from-blue-500 to-indigo-600",
      gradient: "bg-gradient-to-br from-blue-500/20 to-indigo-600/20",
      href: "/global",
    },
    {
      Icon: FaLightbulb,
      name: "Innovation",
      description: "Pioneering solutions for tomorrow's challenges.",
      stats: "15 patents filed this year",
      color: "from-violet-500 to-purple-600",
      gradient: "bg-gradient-to-br from-violet-500/20 to-purple-600/20",
      href: "/innovation",
    },
    {
      Icon: FaHandshake,
      name: "Partnerships",
      description: "Building strong alliances for lasting impact.",
      stats: "87 strategic partnerships",
      color: "from-rose-500 to-pink-600",
      gradient: "bg-gradient-to-br from-rose-500/20 to-pink-600/20",
      href: "/partnerships",
    },
    {
      Icon: FaRecycle,
      name: "Circular Economy",
      description: "Promoting reuse, recycling, and responsible consumption.",
      stats: "92% waste reduction achieved",
      color: "from-lime-500 to-green-600",
      gradient: "bg-gradient-to-br from-lime-500/20 to-green-600/20",
      href: "/circular-economy",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-teal-400 animate-pulse"
            style={{
              width: Math.random() * 200 + 50 + "px",
              height: Math.random() * 200 + 50 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animationDelay: Math.random() * 5 + "s",
              animationDuration: Math.random() * 10 + 10 + "s",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
            Our Impact
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impacts.map((impact, index) => (
            <div
              key={impact.name}
              className={`relative rounded-2xl overflow-hidden transform transition-all duration-500 ${
                activeCard === index
                  ? "scale-105 shadow-2xl"
                  : "scale-100 shadow-lg"
              }`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 ${impact.gradient} opacity-80`}
              />

              {/* Animated border */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  impact.color
                } opacity-0 transition-opacity duration-700 ${
                  activeCard === index ? "opacity-100" : ""
                }`}
              />

              {/* Content */}
              <div className="relative p-6 h-80 flex flex-col justify-between text-white">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <impact.Icon
                      className={`text-4xl ${
                        activeCard === index
                          ? "text-white"
                          : `text-${
                              impact.color.split(" ")[0].split("-")[1]
                            }-500`
                      }`}
                    />
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        activeCard === index ? "bg-white/20" : "bg-black/10"
                      }`}
                    >
                      <span className="text-lg font-bold">{index + 1}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{impact.name}</h3>
                  <p className="mb-4 opacity-90">{impact.description}</p>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    activeCard === index ? "max-h-20" : "max-h-0"
                  }`}
                >
                  <p className="font-semibold text-sm">{impact.stats}</p>
                </div>

                <div
                  className={`flex justify-between items-center mt-4 transition-all duration-300 ${
                    activeCard === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  <a
                    href={impact.href}
                    className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/30 transition-colors"
                  >
                    Learn more
                  </a>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`absolute rounded-full bg-white/10 backdrop-blur-sm transition-all duration-1000 ${
                    activeCard === index ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    width: Math.random() * 40 + 10 + "px",
                    height: Math.random() * 40 + 10 + "px",
                    top: Math.random() * 80 + 10 + "%",
                    left: Math.random() * 80 + 10 + "%",
                    animation: `float ${
                      Math.random() * 5 + 5
                    }s infinite ease-in-out`,
                    animationDelay: Math.random() * 2 + "s",
                  }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Connection lines animation */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {impacts.map((_, i) =>
              impacts.map(
                (_, j) =>
                  i < j && (
                    <line
                      key={`${i}-${j}`}
                      x1={(i % 3) * 33.33 + 16.66}
                      y1={Math.floor(i / 3) * 50 + 25}
                      x2={(j % 3) * 33.33 + 16.66}
                      y2={Math.floor(j / 3) * 50 + 25}
                      stroke="url(#gradient)"
                      strokeWidth="0.2"
                      strokeDasharray="2"
                      className="opacity-30"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="10"
                        to="0"
                        dur="15s"
                        repeatCount="indefinite"
                      />
                    </line>
                  )
              )
            )}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Impact;
