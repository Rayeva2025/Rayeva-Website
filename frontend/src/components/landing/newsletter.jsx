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

const Newsletter = () => {
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
  return <div className="py-16 px-4">
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
        </div>;
};

export default Newsletter;
