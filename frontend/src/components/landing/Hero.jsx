import React, { useEffect, useRef, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const [videoUrl, setVideoUrl] = useState("");

  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const btnsRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);

  useEffect(() => {
    // Get public URL for hero.mp4 from Supabase Storage
    const { data } = supabase.storage
      .from("Videos")
      .getPublicUrl("hero.mp4");

    if (data?.publicUrl) setVideoUrl(data.publicUrl);
  }, []);

  useEffect(() => {
    // Animate blobs with GSAP
    if (blob1Ref.current && blob2Ref.current) {
      gsap.to(blob1Ref.current, {
        x: 40,
        y: 60,
        scale: 1.1,
        rotate: 20,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
      gsap.to(blob2Ref.current, {
        x: -40,
        y: -60,
        scale: 1.08,
        rotate: -15,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    // Animate text and buttons in sequence
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1.1 },
      delay: 0.2,
    });
    tl
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 80, scale: 0.95, rotate: -8 },
        { opacity: 1, y: 0, scale: 1, rotate: 0 }
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 40, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1 },
        "-=0.7"
      )
      .fromTo(
        descRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0 },
        "-=0.6"
      )
      .fromTo(
        btnsRef.current,
        { opacity: 0, y: 20, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1 },
        "-=0.5"
      );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video from Supabase */}
      {videoUrl && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
        />
      )}

      {/* Animated Blobs */}
      <div
        ref={blob1Ref}
        className="absolute -top-32 -left-32 w-96 h-96 bg-[rgb(121,203,210)] rounded-full mix-blend-overlay filter blur-3xl opacity-30"
      />
      <div
        ref={blob2Ref}
        className="absolute -bottom-40 -right-32 w-[32rem] h-[32rem] bg-[rgb(23,145,207)] rounded-full mix-blend-overlay filter blur-3xl opacity-20"
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center text-white px-6">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          Rayeva
        </h1>

        <p
          ref={subtitleRef}
          className="mt-4 text-lg md:text-2xl font-light"
        >
          Small Changes. Global Impact.
        </p>

        <p
          ref={descRef}
          className="mt-6 text-base md:text-lg opacity-90"
        >
          Join us in building a future where sustainability is the norm.
        </p>
        {/* Buttons */}
        <div
          ref={btnsRef}
          className="mt-8 flex justify-center gap-4"
        >
          <button className="px-6 py-3 rounded-full bg-[rgb(23,145,207)] hover:bg-[rgb(121,203,210)] text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300">
            Shop Sustainably
          </button>
          <button className="px-6 py-3 rounded-full border-2 border-black text-white font-semibold hover:bg-black hover:text-[rgb(23,145,207)] transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}