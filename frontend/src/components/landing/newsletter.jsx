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

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Newsletter & Partnership Section */}
      <div className="bg-gradient-to-r from-emerald-100 via-green-50 to-teal-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Newsletter Section */}
            <div className="space-y-6">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <h2 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-3">
                  <Mail className="text-emerald-600 animate-pulse" />
                  Get Insights
                </h2>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Join Our Newsletter
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Subscribe for sustainable living tips, exclusive offers, and
                    updates on new products.
                  </p>

                  <div onSubmit={handleSubscribe} className="space-y-4">
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors duration-300"
                        required
                      />
                    </div>
                    <button
                      onClick={handleSubscribe}
                      type="button"
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        isSubscribed
                          ? "bg-green-500 text-white"
                          : "bg-emerald-500 hover:bg-emerald-600 text-white hover:shadow-lg"
                      }`}
                    >
                      {isSubscribed ? "✓ Subscribed!" : "Subscribe"}
                    </button>
                  </div>

                  <p className="text-sm text-emerald-600 mt-4 font-medium">
                    Get 10% off your first order when you sign up!
                  </p>
                </div>
              </div>
            </div>

            {/* Partnership Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                <Handshake className="text-blue-600 animate-bounce" />
                Join & Partner
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Users,
                    title: "Become a Member",
                    desc: "Join our community for exclusive benefits",
                    action: "Join Now",
                    color: "bg-blue-500",
                  },
                  {
                    icon: Building2,
                    title: "For Business",
                    desc: "Corporate packages and bulk ordering",
                    action: "Learn More",
                    color: "bg-cyan-500",
                  },
                  {
                    icon: Handshake,
                    title: "Partner With Us",
                    desc: "Bring your sustainable products to our platform",
                    action: "Apply Now",
                    color: "bg-teal-500",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group"
                  >
                    <div
                      className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                    <button
                      className={`${item.color} text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity duration-300`}
                    >
                      {item.action}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-12 px-4 bg-gradient-to-r from-gray-50 to-gray-100">
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
