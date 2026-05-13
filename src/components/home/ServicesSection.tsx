import type { ServiceItem } from "@/types";

interface ServicesSectionProps {
  services: ServiceItem[];
  onEnquireClick: (source: string, detail: string) => void;
}

const gradients = [
  "from-blue-500 via-indigo-500 to-purple-600",
  "from-emerald-400 via-teal-500 to-cyan-600",
  "from-orange-400 via-amber-500 to-pink-500",
  "from-fuchsia-500 via-pink-500 to-rose-500",
  "from-sky-400 via-blue-500 to-indigo-600",
  "from-lime-400 via-green-500 to-emerald-600",
];

export default function ServicesSection({
  services,
  onEnquireClick,
}: ServicesSectionProps) {
  return (
    <section className="py-20 bg-linear-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold tracking-wider uppercase mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Our{" "}
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive services to support your education journey from
            counselling to pre-departure guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const gradient = gradients[idx % gradients.length];
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div
                  className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-linear-to-br ${gradient} opacity-10 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500`}
                />
                <div
                  className={`relative w-16 h-16 rounded-2xl bg-linear-to-br ${gradient} p-3 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-10 h-10 object-contain brightness-0 invert"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.parentElement!.innerHTML = `<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`;
                    }}
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-500 text-sm mb-5 line-clamp-3 leading-relaxed">
                  {service.description}
                </p>
                <button
                  type="button"
                  onClick={() => onEnquireClick("services", service.name)}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors group/btn"
                >
                  {service.linkText}
                  <svg
                    className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
