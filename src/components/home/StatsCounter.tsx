import { useState, useEffect, useRef } from "react";

const stats = [
  {
    label: "Partner Universities",
    value: 100,
    suffix: "+",
    gradient: "from-blue-500 to-indigo-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
        <path d="M22 10L12 4 2 10l10 6 10-6z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    label: "Countries",
    value: 30,
    suffix: "+",
    gradient: "from-emerald-500 to-teal-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" />
      </svg>
    ),
  },
  {
    label: "Branches",
    value: 10,
    suffix: "+",
    gradient: "from-fuchsia-500 to-purple-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
  },
  {
    label: "Admissions",
    value: 10000,
    suffix: "+",
    gradient: "from-orange-500 to-pink-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 11l-3-3m3 3l-3 3m3-3h-7" />
      </svg>
    ),
  },
];

function useCountUp(target: number, duration: number = 2000, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, start]);

  return count;
}

function StatItem({
  label,
  value,
  suffix,
  gradient,
  icon,
}: (typeof stats)[number]) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const count = useCountUp(value, 2000, visible);

  return (
    <div
      ref={ref}
      className="group relative bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 overflow-hidden"
    >
      <div
        className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-linear-to-br ${gradient} opacity-10 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500`}
      />
      <div
        className={`relative w-12 h-12 rounded-xl bg-linear-to-br ${gradient} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
      >
        {icon}
      </div>
      <div
        className={`text-4xl md:text-5xl font-extrabold mb-2 bg-linear-to-r ${gradient} bg-clip-text text-transparent`}
      >
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-gray-600 font-medium text-sm uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="py-20 bg-linear-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold tracking-wider uppercase mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by{" "}
            <span className="bg-linear-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
