import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWater,
  FaTools,
  FaTree,
  FaChartBar,
} from "react-icons/fa";

const campaignIcons = [FaWater, FaTools, FaTree, FaChartBar];

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
      icon: FaWater,
    },
    {
      title: "DIY Workshops",
      description: "Learn to make your own eco products",
      icon: FaTools,
    },
    {
      title: "Tree Planting Program",
      description: "One purchase – One tree planted",
      icon: FaTree,
    },
    {
      title: "Carbon Calculator",
      description: "Measure and offset your impact",
      icon: FaChartBar,
    },
  ];

  const timelineVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + i * 0.18, type: "spring", stiffness: 120 },
    }),
  };

  const campaignVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: 0.3 + i * 0.15, type: "spring", stiffness: 120 },
    }),
  };

  return (
    <motion.div
      className=" transition-opacity duration-1000"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl font-bold text-[#084189] mb-4">
            Rayeva & Beyond
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Building a sustainable future through innovation and community
            engagement
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div className="mb-20">
          <motion.h2
            className="text-3xl font-semibold text-center mb-12 text-[#084189]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Journey
          </motion.h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-1 bg-[#0d64ce] transform -translate-x-1/2" />
            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={timelineVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`relative flex ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  } items-center`}
                  onMouseEnter={() => setActiveYear(index)}
                >
                  <div
                    className={`w-full md:w-5/12 p-6 rounded-lg shadow-lg transition-all duration-500 ${
                      activeYear === index
                        ? "bg-[#084189] text-white scale-105"
                        : "bg-white scale-95"
                    }`}
                  >
                    <div className="flex items-center mb-2 gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                          activeYear === index
                            ? "bg-white text-[#084189]"
                            : "bg-[#084189] text-white"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <h3
                        className={`text-xl font-bold transition-colors ${
                          activeYear === index ? "text-white" : "text-[#084189]"
                        }`}
                      >
                        {item.year}: {item.title}
                      </h3>
                    </div>
                    <p
                      className={
                        activeYear === index
                          ? "text-white"
                          : "text-gray-600"
                      }
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Campaigns Section */}
        <motion.h2
          className="text-3xl font-semibold text-center mb-12 text-[#084189]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sustainability Campaigns
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {campaigns.map((campaign, index) => {
            const Icon = campaign.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                variants={campaignVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
              >
                <div className="p-7 flex flex-col items-center">
                  <div className="mb-4">
                    <Icon className="text-[#084189] text-5xl" />
                  </div>
                  <h3 className="text-xl font-bold text-[#295d9e] mb-2 text-center">
                    {campaign.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {campaign.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Campaign;