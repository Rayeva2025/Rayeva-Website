import { useState, useEffect } from "react";
import {
  Leaf,
  Recycle,
  Globe,
  Package,
  CheckCircle,
  Star,
  ArrowRight,
  Heart,
  Sparkles,
  ShoppingBag,
} from "lucide-react";
import Partner from "./partner";

const StarterPack = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedKit, setSelectedKit] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const kitItems = [
    "Bamboo Toothbrush",
    "Reusable Water Bottle",
    "Organic Cotton Bag",
    "Beeswax Food Wraps",
    "Eco-friendly Soap",
    "Bamboo Cutlery Set",
  ];

  

  const handleShopKit = () => {
    setSelectedKit(true);
    setTimeout(() => setSelectedKit(false), 2000);
  };

  return (
    <div className="min-h-screen px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Product Image */}
          <div
            className={`relative transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <div className="relative group">
              {/* Main Product Image */}
              <div className="bg-gradient-to-br from-[#084189] to-teal-100 rounded-3xl p-2 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop"
                  alt="Rayeva Starter Kit"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-500"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-[#084189] text-white p-3 rounded-full shadow-lg animate-bounce">
                <Sparkles className="w-6 h-6" />
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-xl border-4 border-[#1a3c65] animate-pulse">
                <Leaf className="w-8 h-8 text-[#084189]" />
              </div>

              {/* Discount Badge */}
              <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse">
                Save ₹150.0!
              </div>

              {/* Kit Items Preview */}
              <div className="absolute inset-0 bg-black/60 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 transform scale-90 group-hover:scale-100 transition-transform duration-500">
                  <h4 className="font-bold text-gray-800 mb-4 text-center">
                    Kit Includes:
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    {kitItems.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div
            className={`space-y-8 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <div>
              <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Rayeva: Begin Your
                <span className="bg-gradient-to-r from-[#2c70c2] to-[#084189] bg-clip-text text-transparent block">
                  Journey
                </span>
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our curated starter kit contains everything you need to begin
                your sustainable lifestyle transformation. Each product is
                carefully selected for maximum impact and ease of use.
              </p>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <span className="text-gray-600">(4.9/5 from 234 reviews)</span>
              </div>

              {/* Pricing */}
              <div className="flex items-center gap-6 mb-8">
                <div className="text-5xl font-bold text-[#084189]">₹499.0</div>
                <div className="text-2xl text-gray-400 line-through">
                  ₹650.0
                </div>
                <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full font-semibold">
                  23% OFF
                </div>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Leaf, text: "100% Sustainable" },
                  { icon: Recycle, text: "Zero Waste" },
                  { icon: Heart, text: "Ethically Sourced" },
                  { icon: Globe, text: "Planet Friendly" },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <benefit.icon className="w-6 h-6 text-emerald-500" />
                    <span className="font-medium text-gray-700">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={handleShopKit}
                className={`group w-full md:w-auto px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3 ${
                  selectedKit
                    ? "bg-[#254b79a7] text-white"
                    : "bg-[#084189] hover:bg-[#2775d4] text-white"
                }`}
              >
                {selectedKit ? (
                  <>
                    <CheckCircle className="w-6 h-6" />
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-6 h-6 group-hover:animate-bounce" />
                    Shop the Kit
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Partner />
    </div>
  );
};

export default StarterPack;
