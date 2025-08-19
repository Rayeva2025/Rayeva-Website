import React from "react";
import Newsletter from "./newsLetter";
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
} from "react-icons/fa";

const categories = [
  { icon: <FaTshirt />, label: "Clothing" },
  { icon: <FaHome />, label: "Home" },
  { icon: <FaUtensils />, label: "Kitchen" },
  { icon: <FaBath />, label: "Bath" },
  { icon: <FaGift />, label: "Gifts" },
  { icon: <FaTree />, label: "Garden" },
];

const socialIcons = [
  { icon: <FaInstagram />, href: "#", label: "Instagram" },
  { icon: <FaFacebookF />, href: "#", label: "Facebook" },
  { icon: <FaTwitter />, href: "#", label: "Twitter" },
  { icon: <FaPinterestP />, href: "#", label: "Pinterest" },
  { icon: <FaYoutube />, href: "#", label: "YouTube" },
];

const certifications = [
  { icon: <FaStar />, label: "Organic Certified" },
  { icon: <FaAward />, label: "Fair Trade" },
  { icon: <FaLeaf />, label: "Eco Friendly" },
];

const footerLinks = [
  {
    title: "Shop",
    links: ["New Arrivals", "Bestsellers", "Gift Sets", "Sale", "Gift Cards"],
  },
  {
    title: "About",
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
    links: [
      "Contact Us",
      "FAQs",
      "Shipping & Returns",
      "Track Order",
      "Accessibility",
    ],
  },
];

const Footer = () => (
  <div className=" text-gray-800">
    <Newsletter />

    {/* Categories */}
    <div className="py-10 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((cat, i) => (
          <div
            key={cat.label}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow group-hover:shadow-lg transition-all duration-300 text-[#084189] text-2xl group-hover:bg-emerald-50">
              {cat.icon}
            </div>
            <span className="text-sm font-medium text-gray-600 group-hover:text-[#084189] transition-colors duration-300">
              {cat.label}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Main Footer */}
    <footer className="bg-white/80 backdrop-blur-lg border-t border-blue-100 py-12 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {footerLinks.map((section) => (
          <div key={section.title} className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 text-emerald-700">
              {section.title}
            </h3>
            {section.links.map((link) => (
              <a
                key={link}
                href="#"
                className="block text-gray-500 hover:text-emerald-500 transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        ))}

        {/* Connect */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold mb-4 text-emerald-700">
            Connect
          </h3>
          <div className="flex space-x-3">
            {socialIcons.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 rounded-full flex items-center justify-center bg-emerald-50 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all duration-200 shadow"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div>
            <h4 className="font-medium mb-2 text-gray-700">Certifications</h4>
            <div className="flex space-x-2">
              {certifications.map((cert) => (
                <div
                  key={cert.label}
                  title={cert.label}
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-emerald-100 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all duration-200"
                >
                  {cert.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-blue-100 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <div className="flex items-center gap-2 font-bold text-emerald-700">
          <FaLeaf className="text-emerald-500" />
          Rayeva
        </div>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <span>© 2025 Rayeva. All rights reserved.</span>
          <a href="#" className="hover:text-emerald-500 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-emerald-500 transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;