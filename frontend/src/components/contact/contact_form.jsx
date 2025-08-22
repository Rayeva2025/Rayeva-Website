import React, { useState, useEffect } from "react";
import {
  Send,
  Mail,
  User,
  MessageSquare,
  Phone,
  MapPin,
  Star,
  Heart,
  Sparkles,
} from "lucide-react";
import { Canvas } from "@react-three/fiber";
import Puppy from "../ui/puppy";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [floatingElements, setFloatingElements] = useState([]);

  // Generate floating background elements
  useEffect(() => {
    const elements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 10 + 5,
      delay: Math.random() * 5,
    }));
    setFloatingElements(elements);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen py-[100px] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute rounded-full opacity-20 animate-pulse"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
              background: `linear-gradient(45deg, #8B5CF6, #06B6D4, #10B981)`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          >
            <div
              className="w-full h-full rounded-full animate-ping"
              style={{ animationDelay: `${element.delay + 1}s` }}
            />
          </div>
        ))}
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Star
          className="absolute top-20 left-20 w-6 h-6 text-yellow-400 animate-bounce"
          style={{ animationDelay: "0s" }}
        />
        <Heart
          className="absolute top-40 right-32 w-5 h-5 text-pink-400 animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <Sparkles
          className="absolute bottom-40 left-16 w-7 h-7 text-cyan-400 animate-bounce"
          style={{ animationDelay: "2s" }}
        />
        <Star
          className="absolute bottom-20 right-20 w-4 h-4 text-purple-400 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="relative z-10 w-full flex items-center min-w-screen justify-center min-h-screen p-4">
        <div className="w-full max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-teal-500 to-[#0eb3ef] bg-clip-text text-transparent mb-4 animate-pulse">
              Get In Touch
            </h1>
            <p className="text-xl text-[#0eb3ef] animate-slide-up">
              Let's create something amazing together
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-teal-600 mx-auto mt-4 rounded-full animate-expand" />
          </div>

          {/* Contact Form */}
          <div className="flex max-md:flex-col gap-6 justify-center align-center w-full">
            <div className="w-full flex-1/2 backdrop-blur-lg bg-[#25958a4f] rounded-3xl border border-white/20 shadow-2xl p-8 transform hover:scale-105 transition-all duration-500 animate-slide-up">
              {/* Success Message */}
              {isSubmitted && (
                <div className="mb-6 p-4 bg-white border border-green-500/30 rounded-xl text-green-400 text-center animate-bounce">
                  <div className="flex items-center justify-center space-x-2">
                    <Heart className="w-5 h-5 animate-ping" />
                    <span>
                      Message sent successfully! We'll get back to you soon.
                    </span>
                    <Heart className="w-5 h-5 animate-ping" />
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="group">
                  <div className="relative">
                    <User
                      className={`absolute left-4 top-5 w-5 h-5 transition-all duration-300 ${
                        focusedField === "name" || formData.name
                          ? "text-[#0c7aa2] scale-110"
                          : "text-[#4da8b3]"
                      }`}
                    />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField("")}
                      placeholder="..Your Name.."
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-[#0c7aa2] placeholder-[#57545462] focus:border-cyan-400 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:border-purple-400"
                      required
                    />
                  </div>
                  <div
                    className={`h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-300 ${
                      focusedField === "name" ? "w-full" : "w-0"
                    }`}
                  />
                </div>

                {/* Email Field */}
                <div className="group">
                  <div className="relative">
                    <Mail
                      className={`absolute left-4 top-5 w-5 h-5 transition-all duration-300 ${
                        focusedField === "email" || formData.email
                          ? "text-[#0c7aa2] scale-110"
                          : "text-[#4da8b3]"
                      }`}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField("")}
                      placeholder="your.email@example.com"
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-[#0c7aa2] placeholder-[#57545462] focus:border-purple-400 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:border-cyan-400"
                      required
                    />
                  </div>
                  <div
                    className={`h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-300 ${
                      focusedField === "email" ? "w-full" : "w-0"
                    }`}
                  />
                </div>

                {/* Phone Field */}
                <div className="group">
                  <div className="relative">
                    <Phone
                      className={`absolute left-4 top-4 w-5 h-5 transition-all duration-300 ${
                        focusedField === "phone" || formData.phone
                          ? "text-[#0c7aa2] scale-110"
                          : "text-[#4da8b3]"
                      }`}
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField("")}
                      placeholder="Your Phone Number"
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-[#0c7aa2] placeholder-[#57545462] focus:border-pink-400 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:border-purple-400"
                    />
                  </div>
                  <div
                    className={`h-1 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full transition-all duration-300 ${
                      focusedField === "phone" ? "w-full" : "w-0"
                    }`}
                  />
                </div>

                {/* Message Field */}
                <div className="group">
                  <div className="relative">
                    <MessageSquare
                      className={`absolute left-4 top-4 w-5 h-5 transition-all duration-300 ${
                        focusedField === "message" || formData.message
                          ? "text-[#0c7aa2] scale-110"
                          : "text-[#4da8b3]"
                      }`}
                    />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField("")}
                      placeholder="Tell us about your project..."
                      rows="4"
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-[#0c7aa2] placeholder-[#57545462] focus:border-yellow-400 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:border-pink-400 resize-none"
                      required
                    />
                  </div>
                  <div
                    className={`h-1 bg-gradient-to-r from-yellow-400 to-cyan-400 rounded-full transition-all duration-300 ${
                      focusedField === "message" ? "w-full" : "w-0"
                    }`}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="group relative w-full py-4 px-8 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-xl text-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[#0c7aa2] backdrop-blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-center space-x-3">
                    <span className="text-lg">
                      {isSubmitted ? "Message Sent!" : "Send Message"}
                    </span>
                    <Send
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isSubmitted
                          ? "scale-0"
                          : "group-hover:translate-x-1 group-hover:scale-110"
                      }`}
                    />
                    {isSubmitted && (
                      <Heart className="w-5 h-5 text-pink-300 animate-ping" />
                    )}
                  </div>
                </button>
              </form>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="flex flex-wrap justify-center gap-6 text-sm text-[#33313162]">
                  <div className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-300">
                    <Mail className="w-4 h-4" />
                    <span>shop@rayeva.com</span>
                  </div>
                  <div className="flex items-center space-x-2 hover:text-purple-400 transition-colors duration-300">
                    <Phone className="w-4 h-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2 hover:text-pink-400 transition-colors duration-300">
                    <MapPin className="w-4 h-4" />
                    <span>Bombay , India</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex-1/2">
              <Canvas
                shadows
                style={{ width: "100%", height: "100%", pointerEvents: "none" }}
              >
                <ambientLight intensity={3.5} />
                <directionalLight position={[5, 5, 5]} intensity={0.6} />
                <Puppy position={[0, -0.7, 2.8]} />
              </Canvas>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 8rem;
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.2s both;
        }

        .animate-expand {
          animation: expand 1s ease-out 0.5s both;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
