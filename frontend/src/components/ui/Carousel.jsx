import { useState, useRef, useId, useEffect } from "react";

const Slide = ({
  slide,
  index,
  current,
  handleSlideClick
}) => {
  const slideRef = useRef(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, button, title } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}>
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[15%] overflow-hidden transition-all duration-150 ease-out"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}>
          <img
            className="absolute inset-0 w-[120%] h-[120%] object-cover opacity-100 transition-opacity duration-600 ease-in-out"
            style={{
              opacity: current === index ? 1 : 0.5,
            }}
            alt={title}
            src={src}
            onLoad={imageLoaded}
            loading="eager"
            decoding="sync" />
          {current === index && (
            <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
          )}
        </div>

        <article
          className={`relative p-[4vmin] transition-opacity duration-1000 ease-in-out ${
            current === index ? "opacity-100 visible" : "opacity-0 invisible"
          }`}>
          <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold  relative">
            {title}
          </h2>
          <div className="flex justify-center">
            <button
              className="mt-6  px-4 py-2 w-fit mx-auto sm:text-sm text-black bg-white h-12 border border-transparent text-xs flex justify-center items-center rounded-2xl hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              {button}
            </button>
          </div>
        </article>
      </li>
    </div>
  );
};

export function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef(null);
  const isOverCarousel = useRef(false);

  // --- Smooth Mouse Wheel ---
  const wheelDelta = useRef(0);
  const wheelTimeout = useRef(null);
  const WHEEL_THRESHOLD = 60; // Adjust for sensitivity

  const handleWheel = (e) => {
    // Only handle wheel events when mouse is over the carousel
    if (!isOverCarousel.current) return;

    const scrollingUp = e.deltaY < 0;
    const scrollingDown = e.deltaY > 0;

    // Allow page scroll up when on first slide and scrolling up
    if (current === 0 && scrollingUp) {
      return; // Don't prevent, allow page scroll
    }

    // Allow page scroll down when on last slide and scrolling down
    if (current === slides.length - 1 && scrollingDown) {
      return; // Don't prevent, allow page scroll
    }

    // Prevent default for carousel navigation
    e.preventDefault();
    
    wheelDelta.current += e.deltaY || e.deltaX;
    clearTimeout(wheelTimeout.current);
    wheelTimeout.current = setTimeout(() => {
      if (wheelDelta.current > WHEEL_THRESHOLD) {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        wheelDelta.current = 0;
      } else if (wheelDelta.current < -WHEEL_THRESHOLD) {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
        wheelDelta.current = 0;
      }
    }, 80); // debounce
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
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      } else {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
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
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      } else {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      }
      dragStartX.current = e.clientX;
    }
  };

  const handleMouseEnter = () => {
    isOverCarousel.current = true;
  };

  const handleMouseLeave = () => {
    isOverCarousel.current = false;
  };

  useEffect(() => {
    const handleMouseUpGlobal = () => {
      isDragging.current = false;
      dragStartX.current = null;
    };
    const handleMouseMoveGlobal = (e) => handleMouseMove(e);
    const handleMouseLeaveGlobal = () => {
      isDragging.current = false;
      dragStartX.current = null;
    };

    // Add wheel event listener to window to catch all wheel events
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener("mouseup", handleMouseUpGlobal);
    window.addEventListener("mousemove", handleMouseMoveGlobal);
    window.addEventListener("mouseleave", handleMouseLeaveGlobal);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener("mouseup", handleMouseUpGlobal);
      window.removeEventListener("mousemove", handleMouseMoveGlobal);
      window.removeEventListener("mouseleave", handleMouseLeaveGlobal);
    };
  }, [current, slides.length]);

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <div
      ref={carouselRef}
      className="relative w-[70vmin] h-[70vmin] mx-auto select-none"
      aria-labelledby={`carousel-heading-${id}`}
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
      <ul
        className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}>
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick} />
        ))}
      </ul>
    </div>
  );
}