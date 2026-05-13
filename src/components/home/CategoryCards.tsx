import { Link } from "react-router-dom";
import type { JSX } from "react";

type Category = {
  title: string;
  description: string;
  href: string;
  gradient: string;
  ring: string;
  icon: JSX.Element;
};

const iconClass = "w-8 h-8 text-white";

const categories: Category[] = [
  {
    title: "Study Domestic",
    description:
      "Top colleges and universities across India for quality education.",
    href: "/study-domestic",
    gradient: "from-emerald-400 via-emerald-500 to-teal-600",
    ring: "shadow-emerald-500/30",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10L12 4 2 10l10 6 10-6z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    title: "Study Abroad",
    description:
      "World-class education opportunities across 30+ countries worldwide.",
    href: "/study-abroad",
    gradient: "from-sky-400 via-blue-500 to-indigo-600",
    ring: "shadow-blue-500/30",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" />
      </svg>
    ),
  },
  {
    title: "Test Preparation",
    description:
      "Expert coaching for IELTS, PTE, TOEFL and other standardized tests.",
    href: "/test-preparation",
    gradient: "from-fuchsia-400 via-purple-500 to-violet-600",
    ring: "shadow-purple-500/30",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M9 13h6M9 17h6" />
      </svg>
    ),
  },
  {
    title: "Placement Abroad",
    description:
      "Career placement support and global job opportunities for graduates.",
    href: "/services",
    gradient: "from-orange-400 via-amber-500 to-orange-600",
    ring: "shadow-orange-500/30",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 11l-3-3m3 3l-3 3m3-3h-7" />
      </svg>
    ),
  },
  {
    title: "Placement Domestic",
    description:
      "Connect with leading Indian companies for rewarding career opportunities.",
    href: "/placement-domestic",
    gradient: "from-rose-400 via-pink-500 to-red-500",
    ring: "shadow-pink-500/30",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
];

export default function CategoryCards({
  onEnquireClick,
}: {
  onEnquireClick: (source: string, detail: string) => void;
}) {
  return (
    <section className="py-16 -mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Decorative gradient blob */}
              <div
                className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-linear-to-br ${cat.gradient} opacity-10 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500`}
              />

              {/* Icon */}
              <div
                className={`relative w-16 h-16 rounded-2xl bg-linear-to-br ${cat.gradient} flex items-center justify-center mb-5 shadow-lg ${cat.ring} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
              >
                {cat.icon}
              </div>

              {/* Text */}
              <h3 className="font-bold text-gray-900 text-lg mb-2 leading-tight">
                {cat.title}
              </h3>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed min-h-15">
                {cat.description}
              </p>

              {/* Actions */}
              <div className="flex flex-col gap-2 relative">
                <button
                  type="button"
                  onClick={() => onEnquireClick("category-cards", cat.title)}
                  className={`w-full py-2.5 px-4 rounded-lg text-white text-sm font-semibold bg-linear-to-r ${cat.gradient} shadow-md hover:shadow-lg hover:brightness-110 transition-all`}
                >
                  Enquire Now
                </button>
                <Link
                  to={cat.href}
                  className="w-full py-2 px-4 rounded-lg text-sm font-semibold text-gray-700 hover:text-gray-900 inline-flex items-center justify-center gap-1 group/link"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
