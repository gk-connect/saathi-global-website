import { useState, useEffect, useCallback } from "react";
import type { SliderItem } from "@/types";

interface SecondarySliderProps {
  sliders: SliderItem[];
  onEnquireClick: (source: string, detail: string) => void;
}

export default function SecondarySlider({
  sliders,
  onEnquireClick,
}: SecondarySliderProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % sliders.length);
  }, [sliders.length]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  if (sliders.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl h-80 md:h-105 shadow-2xl">
          {sliders.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ${
                index === current
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105 pointer-events-none"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-linear-to-r from-indigo-900/90 via-blue-900/70 to-purple-900/40" />
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-pink-500/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-cyan-400/20 blur-3xl" />

              <div className="relative h-full flex items-center px-8 md:px-16">
                <div className="flex items-center gap-8">
                  <div className="hidden md:flex shrink-0 w-32 h-32 rounded-2xl bg-white/10 backdrop-blur border border-white/20 items-center justify-center p-4 shadow-xl">
                    <img
                      src={slide.smallImage}
                      alt={slide.heading}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-white max-w-2xl">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur border border-white/20 text-xs font-semibold uppercase tracking-wider mb-3">
                      Featured
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
                      {slide.heading}
                    </h2>
                    <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                      {slide.subheading}
                    </p>
                    <button
                      type="button"
                      onClick={() =>
                        onEnquireClick("secondary-slider", slide.heading)
                      }
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold bg-linear-to-r from-orange-500 to-pink-500 shadow-lg hover:shadow-xl hover:brightness-110 transition-all"
                    >
                      {slide.linkText}
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {sliders.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all ${
                  index === current ? "w-8 bg-white" : "w-2 bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
