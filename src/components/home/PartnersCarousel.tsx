const partners = [
  "R R Institutions",
  "Acharya College",
  "Sapthagiri Medical College",
  "BGS Global Medical College",
  "BGS MCH Medical College",
  "PES University",
  "Akash Medical College",
  "M S Ramaiah",
  "Christ",
  "Jain",
  "Dayananda Sagar Medical College",
  "Sri Siddhartha Medical College",
  "Krupanidhi College",
  "Sambhram College",
];

export default function PartnersCarousel() {
  return (
    <section className="py-16 bg-linear-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-xs font-semibold tracking-wider uppercase mb-3">
            Our Network
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our{" "}
            <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Partner Colleges
            </span>
          </h2>
        </div>
        <div className="relative overflow-hidden">
          {/* Edge fade gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="flex animate-scroll gap-6 py-2">
            {[...partners, ...partners].map((name, index) => (
              <div
                key={index}
                className="group shrink-0 w-48 h-24 bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 flex items-center justify-center p-4 transition-all duration-300 hover:-translate-y-1 hover:border-purple-200"
              >
                <span className="text-sm font-semibold text-gray-600 text-center group-hover:text-purple-600 transition-colors">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
