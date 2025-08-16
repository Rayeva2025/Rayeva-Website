import React, { useState, useRef, useEffect } from "react";
import DarkWalnutBg from "./DarkWalnutBg";

const CategorySection = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [slideProgress, setSlideProgress] = useState(0); 
  const [dragStartProgress, setDragStartProgress] = useState(0);
  const [startX, setStartX] = useState(0);
  const doorRef = useRef(null);
  const maxSlide = 400; 

  const categories = [
    { id: 1, name: "Furniture", color: "bg-emerald-600", icon: "🪑" },
    { id: 2, name: "Fashion", color: "bg-teal-500", icon: "👕" },
    { id: 3, name: "Kitchen", color: "bg-lime-500", icon: "🍽️" },
    { id: 4, name: "Health", color: "bg-rose-500", icon: "🌿" },
    { id: 5, name: "Green Tech", color: "bg-sky-500", icon: "🔋" },
    { id: 6, name: "Education", color: "bg-yellow-500", icon: "📘" },
    { id: 7, name: "Beauty", color: "bg-pink-400", icon: "💄" },
    { id: 8, name: "Decor", color: "bg-orange-400", icon: "🧺" },
    { id: 9, name: "Groceries", color: "bg-green-600", icon: "🥦" },
    { id: 10, name: "Fitness", color: "bg-indigo-500", icon: "🧘" },
    { id: 11, name: "Toys", color: "bg-violet-500", icon: "🧸" },
    { id: 12, name: "Instruments", color: "bg-red-500", icon: "🎸" },
  ];


  const leftCategories = categories.slice(0, 6); 
  const rightCategories = categories.slice(6); 

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setDragStartProgress(slideProgress);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setDragStartProgress(slideProgress);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const currentX = e.clientX;
    const deltaX = startX - currentX; 
    const dragDistance = deltaX / maxSlide;
    const newProgress = dragStartProgress + dragDistance;

    setSlideProgress(Math.max(dragStartProgress, Math.min(1, newProgress)));
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const currentX = e.touches[0].clientX;
    const deltaX = startX - currentX; 
    const dragDistance = deltaX / maxSlide;
    const newProgress = dragStartProgress + dragDistance;

    setSlideProgress(Math.max(dragStartProgress, Math.min(1, newProgress)));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, startX, dragStartProgress]);

  const CategoryCard = ({ category, isLeft = false }) => (
    <div
      className={`${category.color} rounded-xl p-6 text-white relative overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl select-none`}
      style={{
        opacity: isLeft ? slideProgress : 1,
        transform: isLeft
          ? `translateX(${(1 - slideProgress) * -30}px) scale(${
              0.9 + slideProgress * 0.1
            })`
          : "translateX(0)",
      }}
    >
      <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-200">
        {category.icon}
      </div>
      <h3 className="text-xl font-bold mb-2  ">{category.name}</h3>
      <p className="text-sm opacity-90 select-none">Explore amazing products</p>

      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="absolute inset-0 rounded-xl border-2 border-white/0 group-hover:border-white/30 transition-all duration-300"></div>
    </div>
  );

  return (
    <div className="min-h-screen  p-8 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-black mb-4  bg-clip-text text-transparen">
            Categories
          </h1>
        </div>

        <div className="relative">
          <DarkWalnutBg className="relative backdrop-blur-md rounded-3xl p-8 border shadow-2xl overflow-hidden">
            <div className="grid grid-cols-4 gap-6 h-144">
              <div className="col-span-2 grid grid-cols-2 gap-6 relative">
                {leftCategories.map((category) => (
                  <CategoryCard
                    key={category.id}
                    category={category}
                    isLeft={true}
                  />
                ))}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 backdrop-blur-sm rounded-2xl transition-transform duration-500 ease-out shadow-2xl cursor-grab ${
                    isDragging ? "cursor-grabbing" : ""
                  }`}
                  style={{
                    transform: `translateX(${-slideProgress * 100}%)`,
                    background: `linear-gradient(90deg, 
                      rgba(15, 23, 42, 0.98) 0%, 
                      rgba(30, 41, 59, 0.95) 20%,
                      rgba(51, 65, 85, 0.9) 50%, 
                      rgba(30, 41, 59, 0.95) 80%,
                      rgba(15, 23, 42, 0.98) 100%)`,
                  }}
                  onMouseDown={handleMouseDown}
                  onTouchStart={handleTouchStart}
                >
                  <div className="absolute inset-0 opacity-20">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(255,255,255,0.1) 3px, rgba(255,255,255,0.1) 6px)",
                      }}
                    ></div>
                  </div>

                  <div className="absolute inset-2 border border-white/10 rounded-xl"></div>

                  <div className="absolute top-6 left-6 right-6 h-32 border border-white/5 rounded-lg bg-white/5"></div>
                  <div className="absolute bottom-6 left-6 right-6 h-32 border border-white/5 rounded-lg bg-white/5"></div>

                  <div className="absolute top-4 right-4 text-white/50 text-xs">
                    ⋮⋮ Drag left
                  </div>
                </div>
              </div>

              <div className="col-span-2 grid grid-cols-2 gap-6">
                {rightCategories.map((category) => (
                  <CategoryCard key={category.id} category={category} />
                ))}
              </div>
            </div>

            {/* Progress indicator */}
            {/* <div className="mt-8 flex justify-center">
              <div className="bg-white/10 rounded-full px-4 py-2">
                <div className="flex items-center space-x-2 text-black/70 text-sm">
                  <span>Progress:</span>
                  <div className="w-32 h-2 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300"
                      style={{ width: `${slideProgress * 100}%` }}
                    ></div>
                  </div>
                  <span>{Math.round(slideProgress * 100)}%</span>
                </div>
              </div>
            </div> */}
          </DarkWalnutBg>

          <div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl -z-10 transition-all duration-500"
            style={{
              opacity: 0.3 + slideProgress * 0.4,
              transform: `scale(${1 + slideProgress * 0.1})`,
            }}
          ></div>
        </div>        
      </div>
    </div>
  );
};

export default CategorySection;
