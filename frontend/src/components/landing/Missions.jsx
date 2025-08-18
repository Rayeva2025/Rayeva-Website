import { HeroVideoDialog } from "../ui/video-modal";
import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaGlobe, FaHandsHelping } from "react-icons/fa";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1 },
};

const Missions = () => {
  return (
    <section className="w-full py-8">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center text-3xl md:text-4xl font-bold text-[#084189] mb-6"
      >
        Our Mission
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-32 max-w-5xl mx-auto">
        {/* Left: Video Modal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={iconVariants}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <HeroVideoDialog
            animationStyle="from-center"
            videoSrc="/videos/missions.mp4"
            thumbnailSrc="/images/missions.png"
            thumbnailAlt="Missions Video Thumbnail"
          />
        </motion.div>
        {/* Right: Mission Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/2 flex flex-col justify-center items-start px-2 md:px-0"
        >
          <div className="flex items-center gap-2 mb-2">
            <FaLeaf className="text-[#3BB372] text-xl" />
            <FaGlobe className="text-[#2EB5D0] text-xl" />
            <FaHandsHelping className="text-[#084189] text-xl" />
            <h3 className="text-xl md:text-2xl font-semibold text-[#2C6BAA] ml-2">
              Why We Do What We Do
            </h3>
          </div>
          <p className="text-sm md:text-base text-[#084189] mb-2">
            At Rayeva, our mission is to drive impactful change for a cleaner, greener planet.
            We believe in empowering communities, supporting sustainable innovation, and inspiring
            everyone to take action for the environment.
          </p>
          <p className="text-sm md:text-base text-[#2C6BAA] mb-2">
            Through our campaigns, partnerships, and educational initiatives, we strive to make sustainability accessible and achievable for all.
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="inline-block px-3 py-1 rounded-full bg-[#DAFBE6] text-[#084189] text-xs font-medium shadow">
              Sustainability
            </span>
            <span className="inline-block px-3 py-1 rounded-full bg-[#E7F6FF] text-[#2C6BAA] text-xs font-medium shadow">
              Community
            </span>
            <span className="inline-block px-3 py-1 rounded-full bg-[#3BB372]/20 text-[#3BB372] text-xs font-medium shadow">
              Impact
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Missions;