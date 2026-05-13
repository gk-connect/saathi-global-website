import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EnquiryFormModal from "@/components/forms/EnquiryFormModal";
import Loader from "@/components/ui/Loader";
import type { EventItem } from "@/types";

export default function EventsPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch(() => setEvents([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Header onEnquireClick={() => setEnquiryOpen(true)} />
      <main className="flex-1">
        <section
          className="relative bg-blue-800 text-white py-20 md:py-28 bg-cover bg-center"
          style={{ backgroundImage: "linear-gradient(to right, rgba(29,78,216,0.85), rgba(30,64,175,0.85)), url('/images/events/europe-fair.jpg')" }}
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Events</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100">Stay updated with our upcoming education fairs, webinars, and counselling sessions.</p>
          </div>
        </section>
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            {loading ? (
              <Loader />
            ) : events.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No events found at the moment. Check back soon!</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                    {event.image && (
                      <div className="aspect-video bg-gray-100 overflow-hidden">
                        <img src={event.image} alt={event.heading} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.heading}</h3>
                      {event.date && <p className="text-sm text-blue-600 font-medium mb-2">{event.date}</p>}
                      {event.time && <p className="text-sm text-gray-500 mb-3">{event.time}</p>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <EnquiryFormModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} source="events" />
    </>
  );
}
