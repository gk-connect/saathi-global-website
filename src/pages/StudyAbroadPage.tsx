import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EnquiryFormModal from "@/components/forms/EnquiryFormModal";
import Button from "@/components/ui/Button";

const countries = [
  { name: "Canada", emoji: "🇨🇦", highlights: "Post-study work permit, immigration-friendly policies" },
  { name: "USA", emoji: "🇺🇸", highlights: "Top-ranked universities, OPT opportunities" },
  { name: "United Kingdom", emoji: "🇬🇧", highlights: "1-year master's programs, Graduate Route visa" },
  { name: "Australia", emoji: "🇦🇺", highlights: "High quality of life, post-study work rights" },
  { name: "Germany", emoji: "🇩🇪", highlights: "Tuition-free public universities, strong economy" },
  { name: "New Zealand", emoji: "🇳🇿", highlights: "Safe environment, quality education system" },
];

const processSteps = [
  { step: "01", title: "Counselling", description: "Understand your profile, academic goals, and preferences to recommend the best study options." },
  { step: "02", title: "University Selection", description: "Shortlist universities and programs that match your academic profile and career aspirations." },
  { step: "03", title: "Application", description: "Prepare and submit applications with compelling SOPs, LORs, and all required documents." },
  { step: "04", title: "Visa Assistance", description: "Complete visa documentation, mock interviews, and application filing for maximum success." },
  { step: "05", title: "Pre-Departure", description: "Accommodation guidance, travel tips, and orientation to prepare you for life abroad." },
];

const benefits = [
  "Access to globally recognized degrees and qualifications",
  "Exposure to diverse cultures and international networking",
  "Higher earning potential and career growth",
  "Post-study work opportunities in many countries",
  "Personal growth and independence",
  "Scholarship and financial aid opportunities",
];

export default function StudyAbroadPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <>
      <Header onEnquireClick={() => setEnquiryOpen(true)} />
      <main className="flex-1">
        <section
          className="relative bg-blue-800 text-white py-20 md:py-28 bg-cover bg-center"
          style={{ backgroundImage: "linear-gradient(to right, rgba(29,78,216,0.85), rgba(67,56,202,0.85)), url('/images/destinations/uk.jpg')" }}
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Study Abroad</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100 mb-8">Explore world-class education opportunities across 30+ countries with expert guidance from Saathi Global.</p>
            <Button variant="secondary" size="lg" onClick={() => setEnquiryOpen(true)}>Get Started Today</Button>
          </div>
        </section>
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Your Gateway to Global Education</h2>
              <p className="text-gray-600 leading-relaxed">Studying abroad is a life-changing experience that opens doors to world-class education, diverse cultures, and global career opportunities. At Saathi Global, we have helped over 10,000 students realize their dream of studying at top universities across the globe.</p>
            </div>
          </div>
        </section>
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">Why Study Abroad?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">✓</span>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">Popular Study Destinations</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Choose from our top study destinations with over 700+ partner universities worldwide.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {countries.map((country) => (
                <div key={country.name} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="text-4xl mb-3">{country.emoji}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{country.name}</h3>
                  <p className="text-gray-600 text-sm">{country.highlights}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">Our Study Abroad Process</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">A streamlined 5-step process to take you from dream to destination.</p>
            <div className="grid md:grid-cols-5 gap-6">
              {processSteps.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{item.step}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Your Study Abroad Journey Today</h2>
            <p className="text-blue-100 mb-8 text-lg">Get a free counselling session with our experts and find the perfect university for you.</p>
            <Button variant="secondary" size="lg" onClick={() => setEnquiryOpen(true)}>Book Free Consultation</Button>
          </div>
        </section>
      </main>
      <Footer />
      <EnquiryFormModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} source="study-abroad" />
    </>
  );
}
