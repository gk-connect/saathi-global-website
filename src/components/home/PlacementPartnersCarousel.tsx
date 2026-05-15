const placementPartners = [
  "Mythri Hospital",
  "Sigma Fortune",
  "Russh Hospital",
  "Alavi Hospital",
  "JR Reddy Lions Club Hospital",
  "Roma Hospital",
  "Jade Hospital with Robotic Surgery",
  "Nefroplus",
  "Agasthya",
  "Everest Hospital",
  "Touch Hospital",
];

export default function PlacementPartnersCarousel() {
  return (
    <section className="py-16 bg-linear-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold tracking-wider uppercase mb-3">
            Our Network
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our{" "}
            <span className="bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Placement Partners
            </span>
          </h2>
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="flex animate-scroll gap-6 py-2">
            {[...placementPartners, ...placementPartners].map((name, index) => (
              <div
                key={index}
                className="group shrink-0 w-48 h-24 bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 flex items-center justify-center p-4 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200"
              >
                <span className="text-sm font-semibold text-gray-600 text-center group-hover:text-emerald-600 transition-colors">
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
