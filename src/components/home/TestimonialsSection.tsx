import { useState, useEffect, useCallback } from "react";
import type { TestimonialItem } from "@/types";

interface TestimonialsSectionProps {
  testimonials: TestimonialItem[];
}

export default function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  if (testimonials.length === 0) return null;

  return (
    <section className="py-20 relative overflow-hidden bg-linear-to-br from-indigo-700 via-blue-700 to-purple-800">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-pink-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_60%)]" />

      <div className="max-w-4xl mx-auto px-4 text-center relative">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur text-white text-xs font-semibold tracking-wider uppercase mb-4 border border-white/20">
          Success Stories
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
          What Our{" "}
          <span className="bg-linear-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
            Students Say
          </span>
        </h2>

        <div className="relative min-h-[340px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-all duration-700 ${
                index === current
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
              }`}
            >
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl">
                <svg
                  className="w-12 h-12 text-yellow-300/80 mb-4 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                </svg>
                <blockquote className="text-xl md:text-2xl text-white/95 italic mb-8 max-w-2xl mx-auto leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-blue-500 mb-3 ring-4 ring-white/40 shadow-xl">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                  <p className="text-white font-bold text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-blue-200 text-sm">{testimonial.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all ${
                index === current ? "w-8 bg-white" : "w-2 bg-white/40"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
