import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EnquiryFormModal from "@/components/forms/EnquiryFormModal";
import Button from "@/components/ui/Button";

const cities = [
  "Mumbai",
  "Delhi",
  "Bengaluru",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
];

const specializations = [
  { title: "B.Sc Nursing", icon: "🩺" },
  { title: "GNM Nursing", icon: "💉" },
  { title: "Paramedical", icon: "🚑" },
  { title: "Allied Healthcare", icon: "🏥" },
  { title: "Technical Healthcare", icon: "🔬" },
];

const highlights = [
  { title: "Trusted Recruitment Partner", desc: "A trusted healthcare recruitment and career support organization committed to connecting talented professionals with leading hospitals across India." },
  { title: "Pan-India Network", desc: "Established professional relationships with major healthcare institutions across metro cities and beyond." },
  { title: "Specialized Healthcare Focus", desc: "Dedicated placement support for nursing, paramedical, allied healthcare and technical healthcare candidates." },
  { title: "Career-First Approach", desc: "We help students build successful careers while supporting hospitals with skilled and qualified professionals." },
];

export default function PlacementDomesticPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <>
      <Header onEnquireClick={() => setEnquiryOpen(true)} />
      <main className="flex-1">
        <section
          className="relative bg-blue-800 text-white py-20 md:py-28 bg-cover bg-center"
          style={{ backgroundImage: "linear-gradient(to right, rgba(29,78,216,0.85), rgba(30,64,175,0.85)), url('/images/services/application.jpg')" }}
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Placement Domestic</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100 mb-8">
              Connecting healthcare talent with leading hospitals across India.
            </p>
            <Button variant="secondary" size="lg" onClick={() => setEnquiryOpen(true)}>
              Enquire Now
            </Button>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">About Saathi Global Solutions</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Saathi Global Solutions is a trusted healthcare recruitment and career support organization committed to connecting talented healthcare professionals with leading hospitals across India. With a strong network and established professional relationships with major healthcare institutions in metro cities including Mumbai, Delhi, Bengaluru, Hyderabad, Chennai, Kolkata, and Pune, we provide placement opportunities for students and healthcare professionals across India.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We specialize in placing B.Sc Nursing, GNM Nursing, paramedical, allied healthcare, and technical healthcare candidates in reputed hospitals, clinics, and healthcare institutions. Through our industry connections, recruitment expertise, and commitment to quality, we help students build successful careers while supporting hospitals with skilled and qualified professionals.
              </p>
              <p className="text-gray-600 leading-relaxed">
                At Saathi Global Solutions, our mission is to bridge talent with opportunity and strengthen healthcare services across India.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {highlights.map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">Who We Place</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              We specialize in placing healthcare candidates across the following streams.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {specializations.map((spec) => (
                <div key={spec.title} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-center">
                  <div className="text-4xl mb-3">{spec.icon}</div>
                  <h3 className="text-base font-semibold text-gray-900">{spec.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">Cities We Cover</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Strong professional relationships with healthcare institutions across India&apos;s major metro cities.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {cities.map((city) => (
                <div key={city} className="bg-white rounded-lg p-4 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-center">
                  <h3 className="text-base font-semibold text-gray-900">{city}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Looking for the Right Placement?</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Connect with our recruitment experts and take the next step in your healthcare career.
            </p>
            <Button variant="secondary" size="lg" onClick={() => setEnquiryOpen(true)}>
              Book Free Consultation
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <EnquiryFormModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} source="placement-domestic" />
    </>
  );
}
