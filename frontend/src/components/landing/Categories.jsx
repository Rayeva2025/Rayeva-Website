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
    {
      id: 1,
      name: "Furniture",
      color: "bg-emerald-600",
      imageUrl:
        "https://www.decornation.in/wp-content/uploads/2020/02/home-furniture-traditional-designer-sitting-coffee-table-1.png",
    },
    {
      id: 2,
      name: "Fashion",
      color: "bg-teal-500",
      imageUrl: "https://www.delogue.com/hubfs/AdobeStock_562145128.jpeg",
    },
    {
      id: 3,
      name: "Kitchen",
      color: "bg-lime-500",
      imageUrl:
        "https://www.jdinstitute.edu.in/media/2021/11/5-Eco-friendly-products-to-design-a-sustainable-kitchen-6.jpg",
    },
    {
      id: 4,
      name: "Health",
      color: "bg-rose-500",
      imageUrl:
        "https://www.sustainablebusinesstoolkit.com/wp-content/uploads/Sustainable-Healthcare-Solutions.jpg",
    },
    {
      id: 5,
      name: "Green Tech",
      color: "bg-sky-500",
      imageUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/022/147/669/small_2x/a-cute-tiny-green-sprout-growing-from-an-electronic-circuit-board-generative-ai-photo.jpg",
    },
    {
      id: 6,
      name: "Education",
      color: "bg-yellow-500",
      imageUrl:
        "https://i1.wp.com/www.norrag.org/app/uploads/2019/10/NORRAG_Highlights36.jpg?fit=1923%2C1065&ssl=1",
    },
    {
      id: 7,
      name: "Beauty",
      color: "bg-pink-400",
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:800/1*WRhG241U9uD0pEG9JMhjgw.jpeg",
    },
    {
      id: 8,
      name: "Decor",
      color: "bg-orange-400",
      imageUrl:
        "https://th.bing.com/th/id/R.1e2058072ebbce9ae736715da01a2cb6?rik=4Y1%2b8owKZrhJRw&riu=http%3a%2f%2fstatic1.squarespace.com%2fstatic%2f6284ae28ba19530f06620d18%2ft%2f647ef887c4477c2326631707%2f1686042765120%2f1674540054892_Masthead_Press_Sustainability.jpg%3fformat%3d1500w&ehk=3sIZotpQXPvRK5EkHgA7XNc8lJBmFA6erQpXzNhjtpc%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 9,
      name: "Groceries",
      color: "bg-green-600",
      imageUrl: "https://usercontent1.hubstatic.com/6404510_f520.jpg",
    },
    {
      id: 10,
      name: "Fitness",
      color: "bg-indigo-500",
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1024/1*xKkg-XjCnQ0yOh4igbNeCQ.jpeg",
    },
    {
      id: 11,
      name: "Toys",
      color: "bg-violet-500",
      imageUrl:
        "https://www.sustainablejungle.com/wp-content/uploads/2024/09/Image-by-PlanToys-sustainable-toys.jpg",
    },
    {
      id: 12,
      name: "Instruments",
      color: "bg-red-500",
      imageUrl:
        "https://tse4.mm.bing.net/th/id/OIP.LjpY5fMRJKy4knuTZ7nuyQHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
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

  const [isHovered, setIsHovered] = useState(false);

  const CategoryCard = ({ category, isLeft = false }) => (
    <div
      className={`${category.color} rounded-xl p-6 text-white relative overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl select-none`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        opacity: isLeft ? slideProgress : 1,
        transform: isLeft
          ? `translateX(${(1 - slideProgress) * -30}px) scale(${
              0.9 + slideProgress * 0.1
            })`
          : "translateX(0)",
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 scale-100"
        style={{
          backgroundImage: `url(${category.imageUrl})`,
        }}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-100 opacity-0`}
      />

      {/* Inset Shadow Effect */}
      <div
        className={`absolute inset-0 rounded-xl shadow-[inset_0_0_30px_10px_rgba(0,0,0)] transition-opacity duration-500 group-hover:opacity-100 opacity-0`}
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 transform group-hover:visible">
        <h3
          className={`text-xl font-bold transition-all duration-500 transform group-hover:translate-y-0 group-hover:opacity-100 translate-y-4 opacity-0`}
        >
          {category.name}
        </h3>
        <p
          className={`text-sm mt-1 transition-all duration-500 delay-100 hover:translate-y-0 group-hover:opacity-90 $translate-y-4 opacity-0`}
        >
          Explore amazing products
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen p-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#4da8b3] mb-4  bg-clip-text text-transparen">
            Categories
          </h1>
        </div>

        <div className="relative">
          <DarkWalnutBg className="relative backdrop-blur-md rounded-3xl p-2 border-2 border-teal-500 shadow-2xl overflow-hidden">
            <div className="grid grid-cols-4 gap-2 h-144">
              <div className="col-span-2 grid grid-cols-2 gap-2 relative">
                {leftCategories.map((category) => (
                  <CategoryCard
                    key={category.id}
                    category={category}
                    isLeft={true}
                  />
                ))}
                <div
                  className={`absolute inset-0 backdrop-blur-xl rounded-2xl transition-transform duration-500 ease-out shadow-2xl cursor-grab ${
                    isDragging ? "cursor-grabbing" : ""
                  }`}
                  style={{
                    transform: `translateX(${-slideProgress * 100}%)`,
                    background: `linear-gradient(90deg, 
                rgba(77, 168, 179, 0.25) 0%, 
                rgba(93, 186, 199, 0.22) 20%,
                rgba(115, 203, 216, 0.18) 50%, 
                rgba(93, 186, 199, 0.22) 80%,
                rgba(77, 168, 179, 0.25) 100%)`,
                  }}
                  onMouseDown={handleMouseDown}
                  onTouchStart={handleTouchStart}
                >
                  {/* Ultra-light glass surface texture */}
                  <div className="absolute inset-0 opacity-15 backdrop-blur-lg">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `
          repeating-linear-gradient(45deg, 
            transparent 0px, 
            rgba(77, 168, 179, 0.1) 1px, 
            transparent 4px, 
            transparent 20px
          ),
          repeating-linear-gradient(-45deg, 
            transparent 0px, 
            rgba(115, 203, 216, 0.08) 1px, 
            transparent 3px, 
            transparent 18px
          )
        `,
                      }}
                    ></div>
                  </div>

                  {/* Ethereal frosted glass overlay */}
                  <div
                    className="absolute inset-0 backdrop-blur-2xl opacity-20"
                    style={{
                      backgroundImage: `
        radial-gradient(circle at 20% 30%, rgba(115, 203, 216, 0.15) 0%, transparent 60%),
        radial-gradient(circle at 80% 70%, rgba(93, 186, 199, 0.12) 0%, transparent 55%),
        radial-gradient(circle at 60% 15%, rgba(77, 168, 179, 0.1) 0%, transparent 50%)
      `,
                    }}
                  />

                  {/* Delicate glass frame */}
                  <div className="absolute inset-2 border border-cyan-300/15 rounded-xl backdrop-blur-md shadow-inner"></div>

                  {/* Translucent glass panels */}
                  <div className="absolute top-6 left-6 right-6 h-32 border border-cyan-200/10 rounded-lg bg-gradient-to-br from-cyan-300/5 to-teal-400/8 backdrop-blur-xl shadow-inner"></div>
                  <div className="absolute bottom-6 left-6 right-6 h-32 border border-cyan-200/10 rounded-lg bg-gradient-to-br from-teal-300/5 to-cyan-500/8 backdrop-blur-xl shadow-inner"></div>

                  {/* Soft glass reflections */}
                  <div className="absolute top-8 left-8 w-24 h-px bg-gradient-to-r from-transparent via-cyan-200/30 to-transparent blur-sm"></div>
                  <div className="absolute top-20 right-12 w-20 h-px bg-gradient-to-r from-transparent via-teal-200/25 to-transparent blur-sm"></div>
                  <div className="absolute bottom-16 left-12 w-28 h-px bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent blur-md"></div>
                  <div className="absolute top-32 left-20 w-16 h-px bg-gradient-to-r from-transparent via-cyan-100/35 to-transparent blur-sm"></div>

                  {/* Gentle glass shimmer */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-12"
                    style={{
                      background: `
        linear-gradient(120deg, 
          transparent 0%, 
          rgba(115, 203, 216, 0.15) 25%, 
          rgba(77, 168, 179, 0.25) 50%, 
          rgba(115, 203, 216, 0.15) 75%, 
          transparent 100%
        )
      `,
                    }}
                  />

                  {/* Glass distortion effect */}
                  <div
                    className="absolute inset-0 pointer-events-none backdrop-blur-sm opacity-10"
                    style={{
                      backgroundImage: `
        repeating-radial-gradient(circle at 30% 40%, 
          transparent 0px, 
          rgba(77, 168, 179, 0.08) 3px, 
          transparent 6px, 
          transparent 35px
        )
      `,
                    }}
                  />

                  {/* Refined drag indicator */}
                  <div className="absolute top-4 right-4 text-white text-xs font-light backdrop-blur-md bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-300/20">
                    ⋮⋮ Drag left
                  </div>
                </div>
              </div>

              <div className="col-span-2 grid grid-cols-2 gap-2">
                {rightCategories.map((category) => (
                  <CategoryCard key={category.id} category={category} />
                ))}
              </div>
            </div>
          </DarkWalnutBg>

          <div
            className="absolute inset-0 rounded-3xl blur-3xl -z-10 transition-all duration-500"
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
