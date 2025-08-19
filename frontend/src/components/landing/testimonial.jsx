import React , {useState , useEffect} from 'react'
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
const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
      setIsVisible(true);
    }, []);
  const testimonials = [
    {
      id: 1,
      name: "Sarah Miller",
      avatar:
        "https://tse1.mm.bing.net/th/id/OIP.t87MABjGyqhAnKcQZMFAVQHaJj?rs=1&pid=ImgDetMain&o=7&rm=3",
      rating: 5,
      text: "Rayeva has completely transformed how I shop. I love knowing that every purchase aligns with my values and makes a positive impact.",
      role: "Sustainable Living Advocate",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      rating: 4.5,
      text: "The quality of products is exceptional. I've been using the starter kit for months and everything is holding up beautifully.",
      role: "Environmental Engineer",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "Customer service is outstanding. When I had questions about product origins, they provided detailed information within hours.",
      role: "Eco-conscious Parent",
    },
    {
      id: 4,
      name: "David Kim",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "The subscription service has made sustainable living so convenient. I love discovering new eco-friendly products every month.",
      role: "Tech Professional",
    },
  ];
  const nextTestimonial = () => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };
  
    const prevTestimonial = () => {
      setCurrentTestimonial(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
    };
  
    // Auto-advance testimonials
    useEffect(() => {
      const interval = setInterval(nextTestimonial, 4000);
      return () => clearInterval(interval);
    }, []);
  return (
    <div className="max-w-7xl mx-auto mb-32">
      <div
        className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="text-4xl font-bold text-[#084189] mb-4">
          What Our Customers Say
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-[#084189] mx-auto rounded-full"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 p-12">
                <div className="text-center space-y-8">
                  {/* Quote Icon */}
                  <div className="relative">
                    <Quote className="w-16 h-16 text-[#3c72b4] mx-auto" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Quote className="w-8 h-8 text-[#084189]" />
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto italic">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Rating */}
                  <div className="flex justify-center items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${
                          i < Math.floor(testimonial.rating)
                            ? "text-yellow-400 fill-current"
                            : i < testimonial.rating
                            ? "text-yellow-400 fill-current opacity-50"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-gray-600 ml-2">
                      ({testimonial.rating})
                    </span>
                  </div>

                  {/* Customer Info */}
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-4 border-[#64a0ea] shadow-lg"
                    />
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800 text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-[#084189] font-medium">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:bg-emerald-50 group"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-emerald-600" />
        </button>

        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:bg-emerald-50 group"
        >
          <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-emerald-600" />
        </button>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? "w-8 bg-[#084189]"
                  : "w-2 bg-gray-300 hover:bg-emerald-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial