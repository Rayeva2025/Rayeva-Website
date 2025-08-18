import { useState, useEffect } from "react";

const Campaign = () => {
  const [activeYear, setActiveYear] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setActiveYear((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const timelineItems = [
    {
      year: "2023",
      title: "Foundation",
      description:
        "Building our core product offerings and establishing brand values",
    },
    {
      year: "2024",
      title: "Expansion",
      description:
        "Growing our partner network and launching subscription services",
    },
    {
      year: "2025",
      title: "Innovation",
      description:
        "Developing proprietary sustainable products and circular economy initiatives",
    },
  ];

  const campaigns = [
    {
      title: "Ocean Cleanup Initiative",
      description: "Join our monthly beach cleanup events",
      icon: "🌊",
    },
    {
      title: "DIY Workshops",
      description: "Learn to make your own eco products",
      icon: "🛠️",
    },
    {
      title: "Tree Planting Program",
      description: "One purchase – One tree planted",
      icon: "🌳",
    },
    {
      title: "Carbon Calculator",
      description: "Measure and offset your impact",
      icon: "📊",
    },
  ];

  return (
    <div
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-emerald-700 mb-4 animate-fade-in-down">
            Rayeva & Beyond
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Building a sustainable future through innovation and community
            engagement
          </p>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-12 text-emerald-600 animate-fade-in">
            Our Journey
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-1 bg-emerald-200 transform -translate-x-1/2 animate-draw-line"></div>

            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  } items-center transition-all duration-500 ${
                    activeYear === index ? "scale-105" : "scale-95"
                  }`}
                  onMouseEnter={() => setActiveYear(index)}
                >
                  <div
                    className={`w-5/12 p-6 rounded-lg shadow-lg ${
                      activeYear === index
                        ? "bg-emerald-600 text-white"
                        : "bg-white"
                    } transform transition-all duration-500 hover:scale-105`}
                  >
                    <div className="flex items-center mb-2">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          activeYear === index
                            ? "bg-white text-emerald-600"
                            : "bg-emerald-600 text-white"
                        } font-bold mr-3`}
                      >
                        {index + 1}
                      </div>
                      <h3
                        className={`text-xl font-bold ${
                          activeYear === index
                            ? "text-white"
                            : "text-emerald-600"
                        }`}
                      >
                        {item.year}: {item.title}
                      </h3>
                    </div>
                    <p
                      className={
                        activeYear === index
                          ? "text-emerald-100"
                          : "text-gray-600"
                      }
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Campaigns Section */}
        <div>
          <h2 className="text-3xl font-semibold text-center mb-12 text-emerald-600 animate-fade-in">
            Sustainability Campaigns
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {campaigns.map((campaign, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-float"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div
                    className="text-4xl mb-4 animate-wiggle"
                    style={{ animationDelay: `${index * 100 + 500}ms` }}
                  >
                    {campaign.icon}
                  </div>
                  <h3 className="text-xl font-bold text-emerald-600 mb-2">
                    {campaign.title}
                  </h3>
                  <p className="text-gray-600">{campaign.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;