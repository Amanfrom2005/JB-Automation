import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    img: "/slider/img1.jpg",
    title: "Robot",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore nisi corporis quasi neque laborum fugiat saepe quibusdam rem,"
  },
  {
    img: "/slider/img2.jpg",
    title: "Cutting",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore nisi corporis quasi neque laborum fugiat saepe quibusdam rem,"
  },
  {
    img: "/slider/img3.jpg",
    title: "Packaging",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore nisi corporis quasi neque laborum fugiat saepe quibusdam rem,"
  },
  {
    img: "/slider/img4.jpg",
    title: "Automation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore nisi corporis quasi neque laborum fugiat saepe quibusdam rem,"
  },
];

export default function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const startAutoSlide = useCallback(() => {
    clearInterval(timeoutRef.current);
    timeoutRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  }, [nextSlide]);

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(timeoutRef.current);
  }, [startAutoSlide]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };
  return (
    <div className="relative h-[600px] w-full overflow-hidden text-white mt-32 rounded-md shadow-2xl">
      {/* Main Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, idx) => (
          <AnimatePresence key={idx}>
            {idx === activeIndex && (
              <motion.div
                key={slide.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="h-full w-full object-cover bg-center brightness-75"
                />
                <div className="absolute inset-0" />
                <div className="absolute top-1 left-1 p-4 max-w-md bg-white/45 backdrop-blur-lg rounded-md border-2 border-white">
                  <p className="uppercase tracking-widest text-black">Design</p>
                  <h2 className="text-2xl md:text-4xl font-bold mb-4 text-black">
                    {slide.title}
                  </h2>
                  <p className="text-lg leading-relaxed text-black">{slide.desc}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>

      {/* Arrows */}
      <div className="absolute top-1/1 right-4 z-30 space-y-4">
        <button
          onClick={prevSlide}
          className="w-10 h-10 hover:bg-blue-600 bg-white/30 backdrop-blur-lg rounded-sm transition pl-2 mr-2"
        >
        <ArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 hover:bg-blue-600 bg-white/30 backdrop-blur-lg rounded-sm transition pl-2"
        >
          <ArrowRight />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="absolute bottom-8 w-full flex justify-center gap-4 px-4 overflow-x-auto z-30">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`relative w-40 h-20 cursor-pointer transition filter rounded-md overflow-hidden ${
              idx === activeIndex ? "brightness-100 border border-cyan-300" : "brightness-75"
            }`}
          >
            <img src={slide.img} alt="thumb" className="w-full h-full object-cover" />
            <div className="absolute bottom-2 left-2 text-sm text-black bg-white/50 backdrop-blur-lg px-1">
              {slide.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
