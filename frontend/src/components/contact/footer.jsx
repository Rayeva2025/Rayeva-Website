import React, { useState, useEffect } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
  FaLeaf,
  FaAward,
  FaStar,
  FaTshirt,
  FaHome,
  FaUtensils,
  FaBath,
  FaGift,
  FaTree,
  FaEnvelope,
  FaHeart,
  FaArrowUp,
  FaPhone,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaRecycle,
} from "react-icons/fa";


const categories = [
  { icon: <FaTshirt />, label: "Clothing", color: "bg-[#4da8b3]" },
  { icon: <FaHome />, label: "Home", color: "bg-[#4da8b3]" },
  {
    icon: <FaUtensils />,
    label: "Kitchen",
    color: "bg-[#4da8b3]",
  },
  { icon: <FaBath />, label: "Bath", color: "bg-[#4da8b3]" },
  { icon: <FaGift />, label: "Gifts", color: "bg-[#4da8b3]" },
  { icon: <FaTree />, label: "Garden", color: "bg-[#4da8b3]" },
];

const socialIcons = [
  {
    icon: <FaInstagram />,
    href: "#",
    label: "Instagram",
    color: "hover:bg-pink-500",
  },
  {
    icon: <FaFacebookF />,
    href: "#",
    label: "Facebook",
    color: "hover:bg-blue-600",
  },
  {
    icon: <FaTwitter />,
    href: "#",
    label: "Twitter",
    color: "hover:bg-sky-500",
  },
  {
    icon: <FaPinterestP />,
    href: "#",
    label: "Pinterest",
    color: "hover:bg-red-500",
  },
  {
    icon: <FaYoutube />,
    href: "#",
    label: "YouTube",
    color: "hover:bg-red-600",
  },
];

const certifications = [
  { icon: <FaStar />, label: "Organic Certified", color: "text-teal-900" },
  { icon: <FaAward />, label: "Fair Trade", color: "text-teal-900" },
  { icon: <FaRecycle />, label: "Eco Friendly", color: "text-teal-900" },
];

const footerLinks = [
  {
    title: "Shop",
    icon: <FaTshirt />,
    links: ["New Arrivals", "Bestsellers", "Gift Sets", "Sale", "Gift Cards"],
  },
  {
    title: "About",
    icon: <FaLeaf />,
    links: [
      "Our Story",
      "Sustainability",
      "Careers",
      "Press",
      "Impact Reports",
    ],
  },
  {
    title: "Support",
    icon: <FaPhone />,
    links: [
      "Contact Us",
      "FAQs",
      "Shipping & Returns",
      "Track Order",
      "Accessibility",
    ],
  },
];

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative text-gray-800">
      <footer className="bg-gradient-to-br from-[#4da9b331] to-[#4ed6e530] text-black relative overflow-hidden">
        <div className="relative py-16 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {footerLinks.map((section, index) => (
              <div
                key={section.title}
                className="space-y-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#4da8b3] rounded-lg flex items-center justify-center text-teal-900">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black">
                    {section.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {section.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="block text-black hover:text-teal-700 transition-all duration-300 hover:translate-x-2 hover:font-medium"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            {/* Connect Section */}
            <div
              className="space-y-6 animate-fade-in-up"
              style={{ animationDelay: "600ms" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-teal-400 rounded-lg flex items-center justify-center text-teal-900">
                  <FaHeart />
                </div>
                <h3 className="text-xl font-bold ">Connect</h3>
              </div>

              {/* Social Icons */}
              <div className="flex flex-wrap gap-6">
                {socialIcons.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center bg-teal-500 text-teal-900 ${social.color} hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Certifications */}
              <div>
                <h4 className="font-semibold mb-4 text-black">
                  Our Certifications
                </h4>
                <div className="flex gap-3">
                  {certifications.map((cert) => (
                    <div
                      key={cert.label}
                      title={cert.label}
                      className={`w-12 h-12 rounded-xl flex items-center justify-center bg-teal-700/50 ${cert.color} hover:bg-teal-600 transition-all duration-300 hover:scale-110 cursor-pointer`}
                    >
                      {cert.icon}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3 text-black">
                  <FaMapMarkerAlt className="text-teal-400" />
                  <span className="text-sm">123 Eco Street, Green City</span>
                </div>
                <div className="flex items-center gap-3 text-black">
                  <FaPhone className="text-teal-400" />
                  <span className="text-sm">+1 (555) RAYEVA-1</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-teal-700 bg-[#1b363958] backdrop-blur-sm py-8 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3 font-bold text-black">
              <img src="/logo.svg" alt="logo" width={60} height={60} />
              <span className="text-2xl">Rayeva</span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-black">
              <span>© 2025 Rayeva. Made with 💚 for the planet</span>
              <div className="flex gap-4">
                <a href="#" className="hover:text-yellow-300 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-yellow-300 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-400 text-teal-900 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-50 animate-bounce-in"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="mx-auto" />
          </button>
        )}
      </footer>

      <style jsx="true">{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(-10deg);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delayed {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-in {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-fade-in-delayed {
          animation: fade-in-delayed 1s ease-out 0.8s forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-bounce-in {
          animation: bounce-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Footer;
