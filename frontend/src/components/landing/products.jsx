import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Heart,
  ShoppingCart,
  Zap,
} from "lucide-react";
import Stats from "./stats";

const Trendings = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState(new Set());
  const [addedToCart, setAddedToCart] = useState(new Set());

  const products = [
    {
      id: 1,
      name: "Bamboo Water Bottle",
      description: "Zero waste, plastic-free hydration",
      price: "₹249.9",
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=300&fit=crop",
      badge: "Bestseller",
      badgeColor: "bg-green-500",
      rating: 4.8,
      reviews: 128,
    },
    {
      id: 2,
      name: "Beeswax Food Wraps",
      description: "Reusable alternate to plastic wrap",
      price: "₹185.0",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
      badge: "New",
      badgeColor: "bg-orange-500",
      rating: 4.9,
      reviews: 94,
    },
    {
      id: 3,
      name: "Organic Shampoo Bar",
      description: "Plastic-free hair care",
      price: "₹129.9",
      image:
        "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=300&h=300&fit=crop",
      badge: "Trending",
      badgeColor: "bg-purple-500",
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 4,
      name: "Bamboo Cutlery Set",
      description: "Portable, reusable dining essentials",
      price: "₹167.5",
      image:
        "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=300&h=300&fit=crop",
      badge: "Eco Choice",
      badgeColor: "bg-teal-500",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 5,
      name: "Eco Glass Containers",
      description: "Sustainable food storage solution",
      price: "₹329.9",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
      badge: "Popular",
      badgeColor: "bg-blue-500",
      rating: 4.8,
      reviews: 203,
    },
    {
      id: 6,
      name: "Organic Cotton Tote",
      description: "Stylish, sustainable shopping bag",
      price: "₹199.9",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
      badge: "Limited",
      badgeColor: "bg-red-500",
      rating: 4.5,
      reviews: 67,
    },
  ];

  const itemsPerView = 4;
  const maxIndex = Math.max(0, products.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const toggleFavorite = (productId) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  const addToCart = (productId) => {
    setAddedToCart((prev) => new Set([...prev, productId]));
    setTimeout(() => {
      setAddedToCart((prev) => {
        const newSet = new Set(prev);
        newSet.delete(productId);
        return newSet;
      });
    }, 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <div className="min-h-screen  py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#084189] mb-4 animate-fade-in">
            Top Trendings
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-[#084189] mx-auto rounded-full"></div>
        </div>

        {/* Product Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
              currentIndex === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-emerald-500 hover:text-white hover:scale-110 hover:shadow-xl"
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
              currentIndex >= maxIndex
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-emerald-500 hover:text-white hover:scale-110 hover:shadow-xl"
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Products Container */}
          <div className="overflow-hidden mx-16">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 w-1/4 px-3"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group overflow-hidden">
                    {/* Product Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* Badge */}
                      <div
                        className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg animate-pulse`}
                      >
                        {product.badge}
                      </div>

                      {/* Favorite Button */}
                      <button
                        onClick={() => toggleFavorite(product.id)}
                        className={`absolute top-4 right-4 w-10 h-10 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
                          favorites.has(product.id)
                            ? "bg-red-500 text-white scale-110"
                            : "bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white hover:scale-110"
                        }`}
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            favorites.has(product.id) ? "fill-current" : ""
                          }`}
                        />
                      </button>

                      {/* Quick View Overlay */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <span className="text-gray-800 font-medium">
                            Quick View
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">
                          ({product.reviews})
                        </span>
                      </div>

                      <h3 className="font-bold text-[#084189] mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-[#10396bc4] text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Price and Add to Cart */}
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-[#084189]">
                          {product.price}
                        </span>
                        <button
                          onClick={() => addToCart(product.id)}
                          className={`px-2 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                            addedToCart.has(product.id)
                              ? "bg-[#216dc9] text-white scale-105"
                              : "bg-[#084189] hover:bg-emerald-600 text-white hover:scale-105 hover:shadow-lg"
                          }`}
                        >
                          {addedToCart.has(product.id) ? (
                            <>
                              <Zap className="w-4 h-4" />
                              Added!
                            </>
                          ) : (
                            <>
                              <ShoppingCart className="w-4 h-4" />
                              Add to Cart
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(maxIndex + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-[#084189]"
                    : "w-2 bg-gray-300 hover:bg-emerald-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Floating Action Elements */}
        <div className="fixed bottom-8 right-8 space-y-4">
          <div className="bg-emerald-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer">
            <Heart className="w-6 h-6" />
          </div>
          <div className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer animate-bounce">
            <ShoppingCart className="w-6 h-6" />
          </div>
        </div>

        {/* Statistics Section */}
        <Stats />
      </div>
    </div>
  );
};

export default Trendings;
