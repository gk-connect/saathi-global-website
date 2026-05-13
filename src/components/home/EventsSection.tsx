import type { EventItem } from "@/types";

interface EventsSectionProps {
  events: EventItem[];
  onEnquireClick: (source: string, detail: string) => void;
}

export default function EventsSection({
  events,
  onEnquireClick,
}: EventsSectionProps) {
  return (
    <section className="py-20 bg-linear-to-br from-slate-50 via-blue-50/30 to-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-linear-to-br from-blue-200/30 to-purple-200/30 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 text-xs font-semibold tracking-wider uppercase mb-4">
            Don't Miss Out
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Upcoming{" "}
            <span className="bg-linear-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
              Events
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Join our education fairs, admit days, and information sessions to
            learn more about studying abroad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <div className="h-52 bg-linear-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                  <img
                    src={event.image}
                    alt={event.heading}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute top-3 right-3 bg-linear-to-r from-orange-500 to-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  {event.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                  {event.heading}
                </h3>
                <p className="text-sm text-gray-500 mb-5 flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {event.time}
                </p>
                <button
                  type="button"
                  onClick={() => onEnquireClick("events", event.heading)}
                  className="w-full py-2.5 px-4 rounded-lg text-white text-sm font-semibold bg-linear-to-r from-orange-500 to-pink-500 shadow-md hover:shadow-lg hover:brightness-110 transition-all"
                >
                  {event.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
