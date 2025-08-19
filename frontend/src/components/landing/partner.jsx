import React from 'react'
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

const Partner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedKit, setSelectedKit] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const partners = [
    {
      id: 1,
      name: "EcoHarvest",
      description: "Organic farming collective",
      logo: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=200&h=200&fit=crop",
      color: "from-green-400 to-emerald-500",
      icon: Leaf,
    },
    {
      id: 2,
      name: "GreenThread",
      description: "Sustainable textile innovators",
      logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop",
      color: "from-teal-400 to-cyan-500",
      icon: Recycle,
    },
    {
      id: 3,
      name: "OceanGuard",
      description: "Marine conservation nonprofit",
      logo: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=200&h=200&fit=crop",
      color: "from-blue-400 to-indigo-500",
      icon: Globe,
    },
    {
      id: 4,
      name: "PurePackage",
      description: "Compostable packaging solutions",
      logo: "https://th.bing.com/th/id/R.3818a8305b65278c06b048286b49fecd?rik=Wpa%2b3lYANtIfsw&riu=http%3a%2f%2fcdn1.tnwcdn.com%2fwp-content%2fblogs.dir%2f1%2ffiles%2f2013%2f11%2fparcel-delivery-package.jpg&ehk=YKK3LDCYnMg3kHXX1FFXBCyNaqVSOcQF8f8dZTm2%2bWM%3d&risl=&pid=ImgRaw&r=0",
      color: "from-orange-400 to-red-500",
      icon: Package,
    },
  ];
  
  return (
    <div className="max-w-7xl mx-auto">
      <div
        className={`text-center mb-16 transform transition-all duration-1000 delay-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="text-4xl font-bold text-[#084189] mb-4">Our Partners</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-[#084189] mx-auto rounded-full mb-6"></div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We collaborate with leading sustainable brands and organizations to
          create a better future together
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {partners.map((partner, index) => (
          <div
            key={partner.id}
            className={`group cursor-pointer transform transition-all duration-700 hover:scale-105 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
            style={{ transitionDelay: `${600 + index * 150}ms` }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center h-full flex flex-col justify-between">
              {/* Partner Logo */}
              <div className="relative mb-6">
                <div
                  className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${partner.color} p-1 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-white p-2">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* Icon Overlay */}
                <div
                  className={`absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br ${partner.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <partner.icon className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Partner Info */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
                  {partner.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {partner.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className={`h-1 bg-gradient-to-r ${partner.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Partnership CTA */}
      <div
        className={`text-center mt-16 transform transition-all duration-1000 delay-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="bg-gradient-to-r from-emerald-500 to-[#084189] rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-shadow duration-500 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Want to Partner With Us?</h3>
          <p className="text-emerald-100 mb-6">
            Join our mission to create sustainable solutions for a better
            tomorrow
          </p>
          <button className="bg-white text-emerald-600 px-8 py-3 rounded-full font-bold hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Become a Partner
          </button>
        </div>
      </div>
    </div>
  );
}

export default Partner