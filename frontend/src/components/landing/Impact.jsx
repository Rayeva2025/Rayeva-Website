import { motion } from "framer-motion";

export default function Impact() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        src="/videos/story.mp4" // replace with your generated AI video path
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

      {/* Optional Floating Logo/Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center px-6"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
          Our Journey to a Plastic-Free Future
        </h2>
      </motion.div>
    </section>
  );
}
