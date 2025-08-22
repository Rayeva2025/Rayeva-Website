import React, { useState, useEffect, useRef } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Building,
  MessageSquare,
  Send,
  CheckCircle,
  Star,
  Sparkles,
  Globe,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Headphones,
  Zap,
  Heart,
  ArrowRight,
  Rocket,
  Shield,
  Award,
} from "lucide-react";

const PartnerUs = () => {
  const [formData, setFormData] = useState({
    yourName: "",
    brandName: "",
    email: "",
    phone: "",
    country: "INDIA (IND)",
    subject: "",
    address: "",
    newsletter: false,
  });

  const [focusedField, setFocusedField] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [particles, setParticles] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  // Generate floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.2,
    }));
    setParticles(newParticles);
  }, []);

  // Mouse move handler for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          x: (particle.x + particle.vx + window.innerWidth) % window.innerWidth,
          y:
            (particle.y + particle.vy + window.innerHeight) %
            window.innerHeight,
        }))
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    if (formData.yourName && formData.email && formData.address) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          yourName: "",
          brandName: "",
          email: "",
          phone: "",
          country: "INDIA (IND)",
          subject: "",
          address: "",
          newsletter: false,
        });
      }, 4000);
    }
  };

  return (
    <div className="min-h-screen py-8  relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-teal-400 rounded-full animate-pulse"
            style={{
              left: particle.x,
              top: particle.y,
              opacity: particle.opacity,
              transform: `scale(${particle.size})`,
              boxShadow: "0 0 6px #2dd4bf",
            }}
          />
        ))}
      </div>

      {/* Mouse Follow Effect */}
      <div
        className="fixed w-96 h-96 pointer-events-none z-0"
        style={{
          left: mousePos.x - 192,
          top: mousePos.y - 192,
          background:
            "radial-gradient(circle, rgba(45, 212, 191, 0.1) 0%, transparent 70%)",
          transition: "all 0.1s ease-out",
        }}
      />

      <div className="relative z-10 min-h-screen p-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 pt-12">
            <div className="inline-flex items-center space-x-3 mb-6">
              <Rocket className="w-8 h-8 text-teal-400 animate-bounce" />
              <h1 className="text-6xl font-bold bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                PARTNER WITH US
              </h1>
              <Star
                className="w-8 h-8 text-cyan-400 animate-spin"
                style={{ animationDuration: "3s" }}
              />
            </div>
            
            <div className="flex justify-center space-x-4">
              <Shield
                className="w-6 h-6 text-emerald-400 animate-bounce"
                style={{ animationDelay: "0s" }}
              />
              <Award
                className="w-6 h-6 text-amber-400 animate-bounce"
                style={{ animationDelay: "0.5s" }}
              />
              <Zap
                className="w-6 h-6 text-teal-400 animate-bounce"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <div className="backdrop-blur-xl bg-[#2dbbd16a] rounded-3xl border border-white/20 shadow-2xl p-8 transform hover:scale-[1.02] transition-all duration-500">
                {/* Success Message */}
                {isSubmitted && (
                  <div className="mb-8 p-6 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-2xl animate-bounce">
                    <div className="flex items-center justify-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-emerald-400 animate-spin" />
                      <span className="text-emerald-400 font-semibold text-lg">
                        Registration Successful! Welcome aboard! 🚀
                      </span>
                    </div>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Your Name */}
                  <div className="group">
                    <label className="block text-sm font-medium text-[#4da8b3] mb-2">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User
                        className={`absolute left-4 top-4 w-5 h-5 transition-all duration-300 ${
                          focusedField === "yourName" || formData.yourName
                            ? "text-white scale-110"
                            : "text-[#4da8b3]"
                        }`}
                      />
                      <input
                        type="text"
                        name="yourName"
                        value={formData.yourName}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("yourName")}
                        onBlur={() => setFocusedField("")}
                        className="w-full pl-12 pr-4 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-teal-400 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:border-cyan-400"
                      />
                      <div
                        className={`h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full transition-all duration-300 ${
                          focusedField === "yourName" ? "w-full" : "w-0"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Brand Name */}
                  <div className="group">
                    <label className="block text-sm font-medium text-[#4da8b3] mb-2">
                      Brand Name *
                    </label>
                    <div className="relative">
                      <Building
                        className={`absolute left-4 top-4 w-5 h-5 transition-all duration-300 ${
                          focusedField === "brandName" || formData.brandName
                            ? "text-white scale-110"
                            : "text-[#4da8b3]"
                        }`}
                      />
                      <input
                        type="text"
                        name="brandName"
                        value={formData.brandName}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("brandName")}
                        onBlur={() => setFocusedField("")}
                        className="w-full pl-12 pr-4 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:border-teal-400"
                      />
                      <div
                        className={`h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full transition-all duration-300 ${
                          focusedField === "brandName" ? "w-full" : "w-0"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group">
                    <label className="block text-sm font-medium text-[#4da8b3] mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail
                        className={`absolute left-4 top-4 w-5 h-5 transition-all duration-300 ${
                          focusedField === "email" || formData.email
                            ? "text-white scale-110"
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
                        className="w-full pl-12 pr-4 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-emerald-400 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:border-cyan-400"
                      />
                      <div
                        className={`h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full transition-all duration-300 ${
                          focusedField === "email" ? "w-full" : "w-0"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="group">
                    <label className="block text-sm font-medium text-[#4da8b3] mb-2">
                      Phone Number (Optional)
                    </label>
                    <div className="relative">
                      <Phone
                        className={`absolute left-4 top-4 w-5 h-5 transition-all duration-300 ${
                          focusedField === "phone" || formData.phone
                            ? "text-white scale-110"
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
                        className="w-full pl-12 pr-4 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-green-400 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:border-teal-400"
                      />
                      <div
                        className={`h-1 bg-gradient-to-r from-green-400 to-teal-400 rounded-full transition-all duration-300 ${
                          focusedField === "phone" ? "w-full" : "w-0"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Country */}
                  <div className="group">
                    <label className="block text-sm font-medium text-[#4da8b3] mb-2">
                      Category Of Your Product *
                    </label>
                    <div className="relative">
                      <Globe
                        className={`absolute left-4 top-4 w-5 h-5 transition-all duration-300 ${
                          focusedField === "country"
                            ? "text-white scale-110"
                            : "text-[#4da8b3]"
                        }`}
                      />
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("country")}
                        onBlur={() => setFocusedField("")}
                        className="w-full pl-12 pr-4 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-white focus:border-cyan-400 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:border-teal-400 appearance-none"
                      >
                        <option value="edu" className="bg-teal-600">
                          EDUCATION
                        </option>
                        <option value="furniture" className="bg-teal-600">
                          FURNITURE
                        </option>
                        <option value="grocery" className="bg-teal-600">
                          GROCERY
                        </option>
                        <option value="decor" className="bg-teal-600">
                          DECORATION
                        </option>
                        <option value="kitchen" className="bg-teal-600">
                          KITCHEN
                        </option>
                        <option value="fitness" className="bg-teal-600">
                          FITNESS
                        </option>
                        <option value="toys" className="bg-teal-600">
                          TOYS
                        </option>
                      </select>
                      <div
                        className={`h-1 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full transition-all duration-300 ${
                          focusedField === "country" ? "w-full" : "w-0"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="group">
                    <label className="block text-sm font-medium text-[#4da8b3] mb-2">
                      Subject (Optional)
                    </label>
                    <div className="relative">
                      <MessageSquare
                        className={`absolute left-4 top-4 w-5 h-5 transition-all duration-300 ${
                          focusedField === "subject" || formData.subject
                            ? "text-white scale-110"
                            : "text-[#4da8b3]"
                        }`}
                      />
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("subject")}
                        onBlur={() => setFocusedField("")}
                        className="w-full pl-12 pr-4 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-amber-400 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:border-emerald-400"
                      />
                      <div
                        className={`h-1 bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full transition-all duration-300 ${
                          focusedField === "subject" ? "w-full" : "w-0"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-[#4da8b3] mb-2">
                    Address
                  </label>
                  <div className="relative">
                    <MapPin
                      className={`absolute left-4 top-4 w-5 h-5 transition-all duration-300 ${
                        focusedField === "address" || formData.address
                          ? "text-white scale-110"
                          : "text-[#4da8b3]"
                      }`}
                    />
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("address")}
                      onBlur={() => setFocusedField("")}
                      rows="3"
                      placeholder="More about your order, e.g. special note for delivery"
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-[#4da8b3] focus:border-teal-400 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:border-cyan-400 resize-none"
                    />
                    <div
                      className={`h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full transition-all duration-300 ${
                        focusedField === "address" ? "w-full" : "w-0"
                      }`}
                    />
                  </div>
                </div>

                {/* Newsletter Checkbox */}
                <div className="mt-6 flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="w-5 h-5 rounded border-2 border-white/20 bg-white/10 text-teal-400 focus:ring-teal-400 focus:ring-2"
                  />
                  <span className="text-[#4da8b3] text-sm">
                    I want to receive news and updates once in a while. By
                    submitting, I'm agreed to the{" "}
                    <span className="text-teal-400 hover:text-teal-300 cursor-pointer underline">
                      Terms & Conditions
                    </span>
                  </span>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitted}
                  className="group relative w-full mt-8 py-4 px-8 bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 rounded-xl text-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-cyan-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-center space-x-3">
                    <span className="text-lg font-bold">
                      {isSubmitted ? "REGISTERED!" : "REGISTER TODAY"}
                    </span>
                    {isSubmitted ? (
                      <Heart className="w-6 h-6 text-emerald-300 animate-ping" />
                    ) : (
                      <Send className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
                    )}
                  </div>
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info Cards */}
              <div className="backdrop-blur-xl bg-[#155b66c6] rounded-3xl border border-white/20 shadow-xl p-6 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                  <Headphones className="w-5 h-5 text-teal-400 animate-pulse" />
                  <span>BOMBAY INDIA HEAD QUARTER</span>
                </h3>
                <div className="space-y-3 text-[#4da8b3]">
                  <p>152 Thatcher Road St, Mahajan, 10453, BOMBAY</p>
                  <p className="text-emerald-400 hover:text-emerald-300 cursor-pointer">
                    rayeva@world.com
                  </p>
                </div>
              </div>

              

              {/* Social Media */}
              <div className="backdrop-blur-xl bg-[#155b66c6] rounded-3xl border border-white/20 shadow-xl p-6 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <Twitter className="w-8 h-8 text-teal-400 hover:text-teal-300 cursor-pointer transition-all duration-300 hover:scale-125 animate-pulse" />
                  <Facebook
                    className="w-8 h-8 text-cyan-600 hover:text-cyan-500 cursor-pointer transition-all duration-300 hover:scale-125 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <Instagram
                    className="w-8 h-8 text-emerald-500 hover:text-emerald-400 cursor-pointer transition-all duration-300 hover:scale-125 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                  <Youtube
                    className="w-8 h-8 text-red-500 hover:text-red-400 cursor-pointer transition-all duration-300 hover:scale-125 animate-pulse"
                    style={{ animationDelay: "1.5s" }}
                  />
                </div>
              </div>

              {/* Decorative Image Placeholder */}
              <div className="backdrop-blur-xl overflow-hidden object-cover  bg-gradient-to-br from-teal-500/50 to-cyan-500/50 rounded-3xl border border-white/20 shadow-xl transform hover:scale-105 transition-all duration-300 h-90 flex items-center justify-center">
                <img src="/images/partner.png" alt="Grow with us" />
              </div>
            </div>
          </div>

          {/* Map Section */}
          {/* <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-white mb-8 flex items-center justify-center space-x-3">
              <MapPin className="w-8 h-8 text-teal-400 animate-bounce" />
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                LOCATE YOURSELF ON GOOGLE
              </span>
            </h2>
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 shadow-2xl p-4 transform hover:scale-[1.01] transition-all duration-500">
              <div className="bg-gradient-to-br from-teal-900/50 to-cyan-900/50 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Globe
                    className="w-24 h-24 text-teal-400 mx-auto mb-6 animate-spin"
                    style={{ animationDuration: "10s" }}
                  />
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Interactive Map Coming Soon
                  </h3>
                  <p className="text-[#4da8b3] text-lg">
                    Google Maps integration would be embedded here
                  </p>
                  <div className="flex justify-center space-x-4 mt-6">
                    <div className="w-4 h-4 bg-teal-400 rounded-full animate-ping" />
                    <div
                      className="w-4 h-4 bg-cyan-400 rounded-full animate-ping"
                      style={{ animationDelay: "0.5s" }}
                    />
                    <div
                      className="w-4 h-4 bg-emerald-400 rounded-full animate-ping"
                      style={{ animationDelay: "1s" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.5s both;
        }
      `}</style>
    </div>
  );
};

export default PartnerUs;
