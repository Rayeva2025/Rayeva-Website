import React, { useState, useEffect } from "react";
import {
  Star,
  Quote,
  Users,
  Building,
  Globe,
  Target,
  Package,
  Lightbulb,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Heart,
  Award,
  Leaf,
} from "lucide-react";
import Testimonial from "./testimonial";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  //   {
  //     id: 1,
  //     name: "Sarah Miller",
  //     avatar:
  //       "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
  //     rating: 5,
  //     text: "Rayeva has completely transformed how I shop. I love knowing that every purchase aligns with my values and makes a positive impact.",
  //     role: "Sustainable Living Advocate",
  //   },
  //   {
  //     id: 2,
  //     name: "Marcus Johnson",
  //     avatar:
  //       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  //     rating: 4.5,
  //     text: "The quality of products is exceptional. I've been using the starter kit for months and everything is holding up beautifully.",
  //     role: "Environmental Engineer",
  //   },
  //   {
  //     id: 3,
  //     name: "Elena Rodriguez",
  //     avatar:
  //       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
  //     rating: 5,
  //     text: "Customer service is outstanding. When I had questions about product origins, they provided detailed information within hours.",
  //     role: "Eco-conscious Parent",
  //   },
  //   {
  //     id: 4,
  //     name: "David Kim",
  //     avatar:
  //       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
  //     rating: 5,
  //     text: "The subscription service has made sustainable living so convenient. I love discovering new eco-friendly products every month.",
  //     role: "Tech Professional",
  //   },
  // ];

  const aboutSections = [
    {
      title: "Our Founder",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
      description:
        "Maya Chen started Rayeva after witnessing the environmental impact of consumer waste firsthand.",
      icon: Users,
      color: "from-emerald-400 to-green-500",
    },
    {
      title: "Our Team",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
      description:
        "A passionate group of environmental advocates, product experts, and ethical commerce specialists.",
      icon: Building,
      color: "from-blue-400 to-indigo-500",
    },
    {
      title: "Our Community",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
      description:
        "Join thousands of conscious consumers making better choices for our planet every day.",
      icon: Heart,
      color: "from-purple-400 to-pink-500",
    },
    {
      title: "Our Mission",
      image:
        "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=400&h=300&fit=crop",
      description:
        "To make sustainable living accessible, enjoyable, and impactful for everyone.",
      icon: Target,
      color: "from-teal-400 to-cyan-500",
    },
  ];

  const services = [
    {
      title: "Subscription Boxes",
      description:
        "Curated monthly deliveries of sustainable essentials tailored to your preferences and needs.",
      icon: Package,
      color: "bg-blue-500",
      features: [
        "Monthly delivery",
        "Personalized selection",
        "Eco-friendly packaging",
        "Cancel anytime",
      ],
    },
    {
      title: "Sustainability Consulting",
      description:
        "Expert guidance for businesses looking to reduce their environmental footprint and improve practices.",
      icon: Lightbulb,
      color: "bg-emerald-500",
      features: [
        "Custom solutions",
        "Expert guidance",
        "Implementation support",
        "Progress tracking",
      ],
    },
    {
      title: "Community Events",
      description:
        "Join workshops, cleanups, and educational sessions to connect with like-minded individuals.",
      icon: Calendar,
      color: "bg-purple-500",
      features: [
        "Monthly workshops",
        "Community cleanups",
        "Expert speakers",
        "Networking opportunities",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      {/* Testimonials Section */}
      <Testimonial />

      {/* About Us & Services Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* About Us */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                About Us
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aboutSections.map((section, index) => (
                <div
                  key={index}
                  className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                    {/* Image */}
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${section.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                      ></div>

                      {/* Icon Overlay */}
                      <div
                        className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${section.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                        {section.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Services */}
          <div
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Our Services
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
            </div>

            <div className="space-y-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  style={{ animationDelay: `${600 + index * 200}ms` }}
                >
                  <div className="flex items-start gap-6">
                    {/* Service Icon */}
                    <div
                      className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Service Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-2"
                          >
                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Learn More Button */}
                      <button className="mt-6 px-6 py-2 bg-emerald-100 text-emerald-600 rounded-lg font-medium hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        
      </div>

      {/* <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/30 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-teal-200/30 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-green-200/20 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div> */}
    </div>
  );
};

export default About;