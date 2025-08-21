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
      gradient: "bg-gradient-to-br from-emerald-500/40 to-teal-600/40",
      href: "/sustainability",
    },
    {
      Icon: FaUsers,
      name: "Community",
      description: "Empowering people through collaboration and support.",
      stats: "12,000+ community members",
      color: "from-amber-500 to-orange-600",
      gradient: "bg-gradient-to-br from-amber-500/40 to-orange-600/40",
      href: "/community",
    },
    {
      Icon: FaGlobe,
      name: "Global Reach",
      description: "Connecting ideas and people across continents.",
      stats: "Active in 47 countries",
      color: "from-blue-500 to-indigo-600",
      gradient: "bg-gradient-to-br from-blue-500/40 to-indigo-600/40",
      href: "/global",
    },
    {
      Icon: FaLightbulb,
      name: "Innovation",
      description: "Pioneering solutions for tomorrow's challenges.",
      stats: "15 patents filed this year",
      color: "from-violet-500 to-purple-600",
      gradient: "bg-gradient-to-br from-violet-500/40 to-purple-600/40",
      href: "/innovation",
    },
    
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16  relative overflow-hidden">
      {/* Animated background elements */}
      {/* <div className="absolute top-0 left-0 w-full h-full opacity-10">
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
      </div> */}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left column - 33% width for additional content */}
          <div className="w-full lg:w-1/3 space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
                Our Impact
              </span>
            </h2>

            <p className="text-lg text-slate-700">
              We are committed to making a positive difference in the world
              through our sustainable practices and community initiatives.
            </p>

            {/* <div className="p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-slate-800">
                Making a Difference
              </h3>
              <p className="text-slate-600 mb-4">
                Our efforts span across environmental sustainability, community
                development, and global outreach programs.
              </p>
              <button className="px-6 py-2 bg-teal-500 text-white rounded-full font-medium hover:bg-teal-600 transition-colors">
                Learn About Our Mission
              </button>
            </div> */}

            <div className="p-6 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-slate-800">
                Annual Report
              </h3>
              <p className="text-slate-600 mb-4">
                Download our latest impact report to see the full extent of our
                initiatives.
              </p>
              <button className="flex items-center text-teal-600 font-medium">
                Download Report
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right column - 67% width for the impact cards */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    className={`absolute inset-0 ${impact.gradient} opacity-100`}
                  />

                  {/* Animated border */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${
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
          </div>
        </div>

      </div>

      <style jsx="true">{`
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
