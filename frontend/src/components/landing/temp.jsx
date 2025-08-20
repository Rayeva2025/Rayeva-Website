import React, { useRef } from "react";
import { FaUserTie, FaUsers, FaGlobe } from "react-icons/fa";

const TeamSection = () => {
  const cardRefs = useRef([]);

  // Sample images - replace with your actual image paths
  const founderBg =
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80";
  const teamBg =
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80";
  const communityBg =
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80";

  return (
    <div className="grid md:grid-cols-3 gap-8 md:gap-10">
      {/* Founder Card */}
      <div
        ref={(el) => (cardRefs.current[0] = el)}
        className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${founderBg})` }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500" />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end p-6 text-white">
          <FaUserTie className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-500" />
          <h3 className="text-2xl font-semibold mb-2">Our Founder</h3>

          {/* Description that appears on hover */}
          <div className="absolute inset-4 bg-white/90 backdrop-blur-sm rounded-xl p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-inset-lg">
            <p className="text-gray-800 leading-relaxed text-center">
              Our journey began with a vision to create meaningful impact. Our
              founder believed in innovation, collaboration, and building
              solutions that empower people and businesses worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* Team Card */}
      <div
        ref={(el) => (cardRefs.current[1] = el)}
        className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${teamBg})` }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500" />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end p-6 text-white">
          <FaUsers className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-500" />
          <h3 className="text-2xl font-semibold mb-2">Our Team</h3>

          {/* Description that appears on hover */}
          <div className="absolute inset-4 bg-white/90 backdrop-blur-sm rounded-xl p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-inset-lg">
            <p className="text-gray-800 leading-relaxed text-center">
              A group of diverse thinkers, creators, and innovators. We bring
              together expertise across technology, design, and strategy to
              achieve a shared purpose.
            </p>
          </div>
        </div>
      </div>

      {/* Community Card */}
      <div
        ref={(el) => (cardRefs.current[2] = el)}
        className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${communityBg})` }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500" />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end p-6 text-white">
          <FaGlobe className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-500" />
          <h3 className="text-2xl font-semibold mb-2">Our Community</h3>

          {/* Description that appears on hover */}
          <div className="absolute inset-4 bg-white/90 backdrop-blur-sm rounded-xl p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-inset-lg">
            <p className="text-gray-800 leading-relaxed text-center">
              Our strength lies in our community. Together, we learn, grow, and
              support each other while shaping a better, more sustainable
              future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
