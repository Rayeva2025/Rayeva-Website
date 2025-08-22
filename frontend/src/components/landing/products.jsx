import React, { useState, useRef, useEffect } from "react";
import {
  Star,
  Heart,
  ShoppingCart,
  Zap,
} from "lucide-react";
import Stats from "./stats";

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

function ProductCard({ product, favorites, toggleFavorite, addedToCart, addToCart }) {
  return (
    <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-2 sm:px-3 transition-transform duration-700">
      <div className="bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 transform group overflow-hidden">
        {/* Product Image */}
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <button
            onClick={() => toggleFavorite(product.id)}
            className={`absolute top-2 right-2 md:top-4 md:right-4 w-8 h-8 md:w-10 md:h-10 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
              favorites.has(product.id)
                ? "bg-red-500 text-white scale-110"
                : "bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white hover:scale-110"
            }`}
          >
            <Heart
              className={`w-4 h-4 md:w-5 md:h-5 ${
                favorites.has(product.id) ? "fill-current" : ""
              }`}
            />
          </button>

          {/* Quick View Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 md:px-4 md:py-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-gray-800 text-sm md:text-base font-medium">
                Quick View
              </span>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 md:p-6">
          {/* Rating */}
          <div className="flex items-center gap-2 mb-2 md:mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 md:w-4 md:h-4 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs md:text-sm text-gray-500">
              ({product.reviews})
            </span>
          </div>

          <h3 className="font-bold text-[#4da8b3] text-base md:text-lg mb-1 md:mb-2 group-hover:text-[#0a50588b] transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-[#10396bc4] text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">
            {product.description}
          </p>

          {/* Price and Add to Cart */}
          <div className="flex items-center justify-between">
            <span className="text-xl md:text-2xl font-bold text-[#4da8b3]">
              {product.price}
            </span>
            <button
              onClick={() => addToCart(product.id)}
              className={`px-2 py-1 md:px-2 md:py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-1 md:gap-2 text-xs md:text-sm ${
                addedToCart.has(product.id)
                  ? "bg-[#216dc9] text-white scale-105"
                  : "bg-[#4da8b3] hover:bg-[#0a50588b] text-white hover:scale-105 hover:shadow-lg"
              }`}
            >
              {addedToCart.has(product.id) ? (
                <>
                  <Zap className="w-3 h-3 md:w-4 md:h-4" />
                  Added!
                </>
              ) : (
                <>
                  <ShoppingCart className="w-3 h-3 md:w-4 md:h-4" />
                  Add to Cart
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Trendings() {
  const [current, setCurrent] = useState(0);
  const [favorites, setFavorites] = useState(new Set());
  const [addedToCart, setAddedToCart] = useState(new Set());
  const [itemsPerView, setItemsPerView] = useState(4);
  const carouselRef = useRef(null);
  const isOverCarousel = useRef(false);
  const wheelDelta = useRef(0);
  const wheelTimeout = useRef(null);
  const WHEEL_THRESHOLD = 60;

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, products.length - itemsPerView);

  // --- Wheel scroll animation ---
  const handleWheel = (e) => {
    if (!isOverCarousel.current) return;
    const scrollingUp = e.deltaY < 0;
    const scrollingDown = e.deltaY > 0;
    if (current === 0 && scrollingUp) return;
    if (current === maxIndex && scrollingDown) return;
    e.preventDefault();
    wheelDelta.current += e.deltaY || e.deltaX;
    clearTimeout(wheelTimeout.current);
    wheelTimeout.current = setTimeout(() => {
      if (wheelDelta.current > WHEEL_THRESHOLD) {
        setCurrent((prev) => Math.min(prev + 1, maxIndex));
        wheelDelta.current = 0;
      } else if (wheelDelta.current < -WHEEL_THRESHOLD) {
        setCurrent((prev) => Math.max(prev - 1, 0));
        wheelDelta.current = 0;
      }
    }, 80);
  };

  // --- Touch swipe support ---
  const touchStartX = useRef(null);
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.touches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrent((prev) => Math.min(prev + 1, maxIndex));
      } else {
        setCurrent((prev) => Math.max(prev - 1, 0));
      }
      touchStartX.current = null;
    }
  };

  // --- Drag-to-scroll for desktop ---
  const dragStartX = useRef(null);
  const isDragging = useRef(false);

  const handleMouseDown = (e) => {
    dragStartX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    dragStartX.current = null;
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || dragStartX.current === null) return;
    const diff = dragStartX.current - e.clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrent((prev) => Math.min(prev + 1, maxIndex));
      } else {
        setCurrent((prev) => Math.max(prev - 1, 0));
      }
      dragStartX.current = e.clientX;
    }
  };

  const handleMouseEnter = () => {
    isOverCarousel.current = true;
  };

  const handleMouseLeave = () => {
    isOverCarousel.current = false;
    isDragging.current = false;
    dragStartX.current = null;
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [current, maxIndex]);

  // Remove auto-slide (slideshow)
  // Removed the interval useEffect

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

  // --- Render ---
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4da8b3] mb-4 animate-fade-in">
            Top Trendings
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-[#4da8b3] mx-auto rounded-full"></div>
        </div>

        {/* Product Carousel */}
        <div
          className="relative"
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onMouseDown={handleMouseDown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          tabIndex={0}
          style={{
            outline: "none",
            cursor: isDragging.current ? "grabbing" : "grab",
          }}
        >
          {/* Removed Navigation Buttons */}

          {/* Products Container */}
          <div className="overflow-hidden mx-0 sm:mx-12 md:mx-16">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${current * (100 / itemsPerView)}%)`,
                width: `${(products.length * 100) / itemsPerView}%`,
              }}
            >
              {products.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                  addedToCart={addedToCart}
                  addToCart={addToCart}
                />
              ))}
            </div>
          </div>

          {/* Removed Mobile Navigation Buttons */}

          {/* Progress Indicators */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {[...Array(maxIndex + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-6 md:w-8 bg-[#4da8b3]"
                    : "w-2 bg-gray-300 hover:bg-emerald-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <Stats />
      </div>
    </div>
  );
}