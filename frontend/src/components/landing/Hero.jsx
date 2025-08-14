import { motion } from "framer-motion";

export default function HeroSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 3, ease: "easeOut" } },
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero.mp4" // place your downloaded video here
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(23,145,207,0.35)] mix-blend-multiply"></div>

      {/* Animated Blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-[rgb(121,203,210)] rounded-full mix-blend-overlay filter blur-3xl opacity-30"
        animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-32 w-[32rem] h-[32rem] bg-[rgb(23,145,207)] rounded-full mix-blend-overlay filter blur-3xl opacity-20"
        animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center text-white px-6">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          Rayeva
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="mt-4 text-lg md:text-2xl font-light"
        >
          Small Changes. Global Impact.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="mt-6 text-base md:text-lg opacity-90"
        >
          Join us in building a future where sustainability is the norm.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
          className="mt-8 flex justify-center gap-4"
        >
          <button className="px-6 py-3 rounded-full bg-[rgb(23,145,207)] hover:bg-[rgb(121,203,210)] text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300">
            Shop Sustainably
          </button>
          <button className="px-6 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-[rgb(23,145,207)] transition-all duration-300">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
