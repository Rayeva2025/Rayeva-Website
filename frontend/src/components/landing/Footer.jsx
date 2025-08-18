import React, { useState } from "react";
import {
  Mail,
  Users,
  Building2,
  Handshake,
  Shirt,
  Home,
  ChefHat,
  Bath,
  Gift,
  TreePine,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Star,
  Award,
  Leaf,
  Camera,
} from "lucide-react";
import Newsletter from "./newsletter";

const Footer = () => {
  const categories = [
    { icon: Shirt, label: "Clothing", color: "bg-emerald-400" },
    { icon: Home, label: "Home", color: "bg-green-400" },
    { icon: ChefHat, label: "Kitchen", color: "bg-teal-400" },
    { icon: Bath, label: "Bath", color: "bg-cyan-400" },
    { icon: Gift, label: "Gifts", color: "bg-blue-400" },
    { icon: TreePine, label: "Garden", color: "bg-lime-400" },
  ];

  const socialIcons = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Camera, href: "#", label: "Pinterest" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const certifications = [
    { icon: Star, label: "Organic Certified" },
    { icon: Award, label: "Fair Trade" },
    { icon: Leaf, label: "Eco Friendly" },
  ];

  return (
    <div className="min-h-screen ">
      {/* Newsletter & Partnership Section */}
      <Newsletter />

      {/* Categories Section */}
      <div className="py-12 px-4 ">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-20 h-20 ${category.color} rounded-full flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg group-hover:shadow-xl`}
                >
                  <category.icon className="w-10 h-10 text-white" />
                </div>
                <span className="text-gray-700 font-medium group-hover:text-emerald-600 transition-colors duration-300">
                  {category.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Shop */}
            <div className="space-y-4 group">
              <h3 className="text-xl font-bold mb-6 group-hover:text-emerald-400 transition-colors duration-300">
                Shop
              </h3>
              {[
                "New Arrivals",
                "Bestsellers",
                "Gift Sets",
                "Sale",
                "Gift Cards",
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-gray-300 hover:text-emerald-400 transition-all duration-300 hover:translate-x-2 hover:font-medium"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* About */}
            <div className="space-y-4 group">
              <h3 className="text-xl font-bold mb-6 group-hover:text-emerald-400 transition-colors duration-300">
                About
              </h3>
              {[
                "Our Story",
                "Sustainability",
                "Careers",
                "Press",
                "Impact Reports",
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-gray-300 hover:text-emerald-400 transition-all duration-300 hover:translate-x-2 hover:font-medium"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Support */}
            <div className="space-y-4 group">
              <h3 className="text-xl font-bold mb-6 group-hover:text-emerald-400 transition-colors duration-300">
                Support
              </h3>
              {[
                "Contact Us",
                "FAQs",
                "Shipping & Returns",
                "Track Order",
                "Accessibility",
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-gray-300 hover:text-emerald-400 transition-all duration-300 hover:translate-x-2 hover:font-medium"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Connect */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Connect</h3>

              {/* Social Icons */}
              <div className="flex space-x-4">
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:scale-110 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:text-white" />
                  </a>
                ))}
              </div>

              {/* Certifications */}
              <div>
                <h4 className="font-semibold mb-4">Certifications</h4>
                <div className="flex space-x-3">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center hover:bg-emerald-400 hover:scale-110 transition-all duration-300 cursor-pointer"
                      title={cert.label}
                    >
                      <cert.icon className="w-6 h-6 text-white" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Rayeva</span>
              </div>

              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-gray-300">
                <span>© 2023 Rayeva. All rights reserved.</span>
                <div className="flex space-x-6">
                  <a
                    href="#"
                    className="hover:text-emerald-400 transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="hover:text-emerald-400 transition-colors duration-300"
                  >
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
