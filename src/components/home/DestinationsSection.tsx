import { Link } from "react-router-dom";
import type { DestinationItem } from "@/types";

interface DestinationsSectionProps {
  destinations: DestinationItem[];
}

const flagEmoji: Record<string, string> = {
  Canada: "🇨🇦",
  USA: "🇺🇸",
  "United Kingdom": "🇬🇧",
  Australia: "🇦🇺",
  Germany: "🇩🇪",
  "New Zealand": "🇳🇿",
};

export default function DestinationsSection({
  destinations,
}: DestinationsSectionProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute top-20 -left-32 w-72 h-72 rounded-full bg-linear-to-br from-blue-200 to-indigo-200 opacity-30 blur-3xl" />
      <div className="absolute bottom-20 -right-32 w-72 h-72 rounded-full bg-linear-to-br from-pink-200 to-orange-200 opacity-30 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold tracking-wider uppercase mb-4">
            Explore the World
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Study{" "}
            <span className="bg-linear-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              Destinations
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover top study destinations around the world and find the
            perfect country for your education goals.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {destinations.map((dest) => (
            <Link
              key={dest.id}
              to={`/destinations/${dest.slug}`}
              className="group relative bg-white rounded-2xl p-5 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 text-center overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-blue-500 via-indigo-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden ring-4 ring-gray-50 group-hover:ring-blue-100 group-hover:scale-110 transition-all duration-300 shadow-md bg-linear-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                <span
                  role="img"
                  aria-label={`${dest.country} flag`}
                  className="text-5xl leading-none"
                >
                  {flagEmoji[dest.country] ?? "🌐"}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">
                {dest.country}
              </h3>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                {dest.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
