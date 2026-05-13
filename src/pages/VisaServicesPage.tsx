import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EnquiryFormModal from "@/components/forms/EnquiryFormModal";
import Button from "@/components/ui/Button";

const visaTypes = [
  { title: "Student Visa", emoji: "🎓", description: "Complete visa assistance for studying in any country including documentation, SOPs, financial proofs, and interview preparation." },
  { title: "Tourist Visa", emoji: "✈️", description: "Quick and hassle-free tourist visa processing for all major countries with high approval rates." },
  { title: "Work Visa", emoji: "💼", description: "Professional guidance for work permit and employment visa applications across multiple countries." },
  { title: "Dependent Visa", emoji: "👨‍👩‍👧‍👦", description: "Help your family join you abroad with our dependent visa application support and guidance." },
  { title: "PR / Immigration", emoji: "🏠", description: "Permanent residency and immigration support for countries like Canada, Australia, and New Zealand." },
  { title: "Business Visa", emoji: "🤝", description: "Business visa processing for entrepreneurs and professionals attending conferences, meetings, or exploring opportunities abroad." },
];

const flightServices = [
  { title: "Student Flight Deals", description: "Exclusive discounted airfares for students traveling to study destinations worldwide." },
  { title: "Group Bookings", description: "Special rates for group travel — perfect for students joining the same intake or university." },
  { title: "Flexible Rebooking", description: "Flexible booking options with easy rescheduling for changing travel plans." },
];

const processSteps = [
  { step: "1", title: "Document Collection", desc: "We help you gather and organize all required documents for your visa application." },
  { step: "2", title: "Application Filing", desc: "Expert filing of your visa application with attention to every detail." },
  { step: "3", title: "Interview Prep", desc: "Mock interviews and coaching to ensure you're confident and well-prepared." },
  { step: "4", title: "Visa Approval", desc: "Track your application and receive your visa with our follow-up support." },
];

export default function VisaServicesPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <>
      <Header onEnquireClick={() => setEnquiryOpen(true)} />
      <main className="flex-1">
        <section
          className="relative bg-blue-800 text-white py-20 md:py-28 bg-cover bg-center"
          style={{ backgroundImage: "linear-gradient(to right, rgba(29,78,216,0.85), rgba(30,64,175,0.85)), url('/images/services/visa.jpg')" }}
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Visa & Flight Services</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100 mb-8">Hassle-free visa processing and affordable flight booking services for students and travelers.</p>
            <Button variant="secondary" size="lg" onClick={() => setEnquiryOpen(true)}>Get Visa Assistance</Button>
          </div>
        </section>
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">Visa Services</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Expert visa guidance with a 98% success rate across all visa categories.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visaTypes.map((visa) => (
                <div key={visa.title} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="text-4xl mb-4">{visa.emoji}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{visa.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{visa.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">Our Visa Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {processSteps.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{item.step}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">Flight Booking Services</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Save on flights with our exclusive student travel deals and group booking options.</p>
            <div className="grid md:grid-cols-3 gap-8">
              {flightServices.map((service) => (
                <div key={service.title} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Visa or Flight Assistance?</h2>
            <p className="text-blue-100 mb-8 text-lg">Talk to our visa experts and get the best flight deals for your journey.</p>
            <Button variant="secondary" size="lg" onClick={() => setEnquiryOpen(true)}>Contact Us Now</Button>
          </div>
        </section>
      </main>
      <Footer />
      <EnquiryFormModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} source="visa-services" />
    </>
  );
}
