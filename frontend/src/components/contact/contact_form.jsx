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
import "../../App.css"


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
    <div className="min-h-screen w-full relative overflow-hidden">
      <div className="relative z-10 w-full flex items-center  justify-center min-h-screen p-4 py-24">
        <div className="w-full">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-6xl font-bold bg-white bg-clip-text text-transparent mb-4 ">
              Get In Touch
            </h1>
          </div>

          {/* Contact Form */}
          <div className="flex gap-6 justify-center align-center  w-full">
            <div className="backdrop-blur-lg min-w-[60%] rounded-3xl hover:shadow-2xl p-8 transform hover:scale-105 transition-all duration-500 animate-slide-up">
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
                      className={`absolute left-4 top-5 w-5 h-5 transition-all duration-300 text-white`}
                    />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField("")}
                      placeholder="..Your Name.."
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-white  focus:border-cyan-400 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:border-[#0f8996] hover:placeholder-[#0f8996]"
                      required
                    />
                  </div>
                  <div
                    className={`h-1 bg-gradient-to-r from-teal-600 to-teal-700 rounded-full transition-all duration-300 ${
                      focusedField === "name" ? "w-full" : "w-0"
                    }`}
                  />
                </div>

                {/* Email Field */}
                <div className="group">
                  <div className="relative">
                    <Mail
                      className={`absolute left-4 top-5 w-5 h-5 transition-all duration-300 text-white scale-110`}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField("")}
                      placeholder="your.email@example.com"
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-white  focus:border-purple-400 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:border-[#0f8996] hover:placeholder-[#0f8996]"
                      required
                    />
                  </div>
                  <div
                    className={`h-1 bg-gradient-to-r from-teal-600 to-teal-700 rounded-full transition-all duration-300 ${
                      focusedField === "email" ? "w-full" : "w-0"
                    }`}
                  />
                </div>

                {/* Phone Field */}
                <div className="group">
                  <div className="relative">
                    <Phone
                      className={`absolute left-4 top-4 w-5 h-5 transition-all duration-300 text-white scale-110`}
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField("")}
                      placeholder="Your Phone Number"
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder- focus:border-pink-400 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:border-[#0f8996] hover:placeholder-[#0f8996]"
                    />
                  </div>
                  <div
                    className={`h-1 bg-gradient-to-r from-teal-600 to-teal-700 rounded-full transition-all duration-300 ${
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
                          ? "text-white scale-110"
                          : "text-white"
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
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-white  focus:border-yellow-400 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:border-[#0f8996] hover:placeholder-[#0f8996] resize-none"
                      required
                    />
                  </div>
                  <div
                    className={`h-1 bg-gradient-to-r from-teal-600 to-teal-700 rounded-full transition-all duration-300 ${
                      focusedField === "message" ? "w-full" : "w-0"
                    }`}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="group relative w-full py-4 px-8 bg-white rounded-xl text-[#4da8b3] font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white backdrop-blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
