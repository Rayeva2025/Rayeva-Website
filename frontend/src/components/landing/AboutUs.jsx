import { motion } from "framer-motion";
import { FaUserTie, FaUsers, FaGlobe } from "react-icons/fa";
import Testimonial from "./testimonial";

export default function AboutUs() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-10">
      <div className="max-w-6xl w-full space-y-16">
        <Testimonial />
        {/* Title */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-[#4da8b3]">About Us</h2>
          <p className="mt-4 text-lg text-[#2C6BAA]">
            Driven by passion, guided by vision, connected by community.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Founder */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <FaUserTie className="text-4xl text-[#4da8b3] mb-4" />
            <h3 className="text-2xl font-semibold text-[#4da8b3] mb-4">
              Our Founder
            </h3>
            <p className="text-[#2C6BAA] leading-relaxed">
              Our journey began with a vision to create meaningful impact. Our
              founder believed in innovation, collaboration, and building
              solutions that empower people and businesses worldwide.
            </p>
          </motion.div>

          {/* Team */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <FaUsers className="text-4xl text-[#3BB372] mb-4" />
            <h3 className="text-2xl font-semibold text-[#4da8b3] mb-4">
              Our Team
            </h3>
            <p className="text-[#2C6BAA] leading-relaxed">
              A group of diverse thinkers, creators, and innovators. We bring
              together expertise across technology, design, and strategy to
              achieve a shared purpose.
            </p>
          </motion.div>

          {/* Community */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            <FaGlobe className="text-4xl text-[#2EB5D0] mb-4" />
            <h3 className="text-2xl font-semibold text-[#4da8b3] mb-4">
              Our Community
            </h3>
            <p className="text-[#2C6BAA] leading-relaxed">
              Our strength lies in our community. Together, we learn, grow, and
              support each other while shaping a better, more sustainable
              future.
            </p>
          </motion.div>
        </div>

        {/* Buttons */}
        <motion.div
          className="flex justify-center gap-6 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/mission"
            className="px-6 py-3 rounded-full bg-[#4da8b3] text-white font-medium shadow-lg transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Mission
          </motion.a>
          <motion.a
            href="/services"
            className="px-6 py-3 rounded-full bg-[#238794] text-white font-medium shadow-lg transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Services
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
