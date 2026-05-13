import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EnquiryFormModal from "@/components/forms/EnquiryFormModal";
import Loader from "@/components/ui/Loader";
import type { ServiceItem } from "@/types";

export default function ServicesPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    fetch("/data/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch(() => setServices([]))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (loading || !location.hash) return;
    const id = location.hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      // Defer to allow layout/images to settle
      requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
  }, [loading, location.hash]);

  return (
    <>
      <Header onEnquireClick={() => setEnquiryOpen(true)} />
      <main className="flex-1">
        <section
          className="relative bg-blue-800 text-white py-20 md:py-28 bg-cover bg-center"
          style={{ backgroundImage: "linear-gradient(to right, rgba(29,78,216,0.85), rgba(30,64,175,0.85)), url('/images/services/counselling.jpg')" }}
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100">Comprehensive education and immigration services tailored to your needs.</p>
          </div>
        </section>
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            {loading ? (
              <Loader />
            ) : services.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No services found. Please check back later.</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, idx) => {
                  const slug = service.name
                    .toLowerCase()
                    .replace(/&/g, "and")
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "");
                  return (
                    <div
                      key={idx}
                      id={slug}
                      className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow scroll-mt-24"
                    >
                      {service.image && (
                        <div className="aspect-video bg-gray-100 overflow-hidden">
                          <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                        {service.description && <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <EnquiryFormModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} source="services" />
    </>
  );
}
