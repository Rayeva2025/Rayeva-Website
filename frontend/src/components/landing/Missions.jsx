import { HeroVideoDialog } from "../ui/video-modal";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaGlobe, FaHandsHelping } from "react-icons/fa";
import { createClient } from "@supabase/supabase-js";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1 },
};

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const Missions = () => {
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    // Get public URL for the missions video from Supabase Storage
    const { data } = supabase.storage
      .from("Videos") // replace with your bucket name
      .getPublicUrl("missions.mp4"); // path inside the bucket, no leading slash

    if (data?.publicUrl) setVideoUrl(data.publicUrl);
  }, []);

  return (
    <section className="w-full py-20">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center text-5xl md:text-6xl font-bold text-[#4da8b3] mb-6"
      >
        Our Mission
      </motion.h2>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        className="text-center text-xl md:text-2xl text-[#2C6BAA] mb-12 max-w-3xl mx-auto"
      >
        Inspiring change, empowering communities, and building a cleaner,
        greener future for all.
      </motion.p>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-20 max-w-7xl mx-auto px-4">
        {/* Left: Video Modal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={iconVariants}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0"
        >
          <div className="w-full max-w-xl rounded-3xl shadow-xl bg-white/80 p-6 flex items-center justify-center">
            <HeroVideoDialog
              animationStyle="from-center"
              videoSrc={videoUrl}
              thumbnailSrc="/images/missions.png"
              thumbnailAlt="Missions Video Thumbnail"
            />
          </div>
        </motion.div>
        {/* Right: Mission Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-1/2 flex flex-col justify-center items-start px-2 md:px-0"
        >
          <div className="flex items-center gap-3 mb-4">
            {/* <FaLeaf className="text-[#3BB372] text-3xl" />
            <FaGlobe className="text-[#2EB5D0] text-3xl" />
            <FaHandsHelping className="text-[#4da8b3] text-3xl" /> */}
            <h3 className="text-5xl font-bold max-md:text-3xl text-[#2C6BAA] ml-3">
              Why We Do? <br />{" "}
              <span className="text-[#1979da]">
                {" "}
                What We Do ?
              </span>
            </h3>
          </div>
          <p className="text-lg md:text-xl text-[#4da8b3] mb-4 leading-relaxed">
            At Rayeva, our mission is to drive impactful change for a cleaner,
            greener planet. We believe in empowering communities, supporting
            sustainable innovation, and inspiring everyone to take action for
            the environment.
          </p>
          <p className="text-lg md:text-xl text-[#2C6BAA] mb-4 leading-relaxed">
            Through our campaigns, partnerships, and educational initiatives, we
            strive to make sustainability accessible and achievable for all.
          </p>
          
        </motion.div>
      </div>
    </section>
  );
};

export default Missions;
