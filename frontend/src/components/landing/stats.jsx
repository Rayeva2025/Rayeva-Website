import React from "react";

const Stats = () => {
  return (
    <>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { number: "10K+", label: "Happy Customers", icon: "😊" },
          { number: "500+", label: "Eco Products", icon: "🌱" },
          { number: "50+", label: "Countries Served", icon: "🌍" },
          { number: "100%", label: "Sustainable", icon: "♻️" },
        ].map((stat, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
              {stat.icon}
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
              {stat.number}
            </div>
            <div className="text-[#163963a3] font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
      
    </>
  );
};

export default Stats;
