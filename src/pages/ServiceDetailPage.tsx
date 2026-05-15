import { useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useEffect, useState } from "react";
import type { ServiceItem } from "@/types";

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<ServiceItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/services.json")
      .then((res) => res.json())
      .then((data: ServiceItem[]) => {
        const found = data.find((svc) =>
          svc.name
            .toLowerCase()
            .replace(/&/g, "and")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "") === slug
        );
        setService(found || null);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  return (
    <>
      <Header onEnquireClick={() => {}} />
      <main className="flex-1 min-h-[60vh]">
        {loading ? (
          <div className="py-32 text-center text-gray-500">Loading...</div>
        ) : !service ? (
          <div className="py-32 text-center text-gray-500">Service not found.</div>
        ) : (
          <section className="max-w-3xl mx-auto px-4 py-16">
            <div className="mb-8">
              <img src={service.image} alt={service.name} className="w-full max-h-64 object-cover rounded-xl mb-6" />
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{service.name}</h1>
              <p className="text-gray-700 text-lg leading-relaxed">{service.description}</p>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
