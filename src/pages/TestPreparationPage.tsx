import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EnquiryFormModal from "@/components/forms/EnquiryFormModal";
import Button from "@/components/ui/Button";

const tests = [
  {
    name: "IELTS",
    fullName: "International English Language Testing System",
    description: "The most widely accepted English proficiency test for study, work, and migration to English-speaking countries.",
    sections: ["Listening", "Reading", "Writing", "Speaking"],
    duration: "2 hours 45 minutes",
    scoring: "Band score 0–9",
  },
  {
    name: "PTE",
    fullName: "Pearson Test of English Academic",
    description: "A computer-based English proficiency test known for fast results and AI-powered scoring.",
    sections: ["Speaking & Writing", "Reading", "Listening"],
    duration: "2 hours",
    scoring: "Score 10–90",
  },
  {
    name: "TOEFL",
    fullName: "Test of English as a Foreign Language",
    description: "Widely accepted by universities in the US, Canada, and other countries for academic admissions.",
    sections: ["Reading", "Listening", "Speaking", "Writing"],
    duration: "3 hours",
    scoring: "Score 0–120",
  },
  {
    name: "Duolingo",
    fullName: "Duolingo English Test",
    description: "An affordable, convenient online English proficiency test accepted by thousands of institutions worldwide.",
    sections: ["Literacy", "Comprehension", "Conversation", "Production"],
    duration: "1 hour",
    scoring: "Score 10–160",
  },
  {
    name: "GRE",
    fullName: "Graduate Record Examination",
    description: "Required for admission to many graduate programs in the US and other countries.",
    sections: ["Verbal Reasoning", "Quantitative Reasoning", "Analytical Writing"],
    duration: "3 hours 45 minutes",
    scoring: "Score 260–340",
  },
  {
    name: "GMAT",
    fullName: "Graduate Management Admission Test",
    description: "Required for admission to top MBA and business programs worldwide.",
    sections: ["Quantitative", "Verbal", "Integrated Reasoning", "Analytical Writing"],
    duration: "3 hours 7 minutes",
    scoring: "Score 200–800",
  },
];

const whyChoose = [
  "Expert trainers with proven track records",
  "Personalized study plans based on diagnostic tests",
  "Comprehensive study material and practice tests",
  "Flexible batch timings — weekday and weekend options",
  "Regular mock tests with detailed performance analysis",
  "Small batch sizes for individual attention",
];

export default function TestPreparationPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <>
      <Header onEnquireClick={() => setEnquiryOpen(true)} />
      <main className="flex-1">
        <section
          className="relative bg-blue-800 text-white py-20 md:py-28 bg-cover bg-center"
          style={{ backgroundImage: "linear-gradient(to right, rgba(29,78,216,0.85), rgba(67,56,202,0.85)), url('/images/services/course-advice.jpg')" }}
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Test Preparation</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100 mb-8">Ace your English proficiency and aptitude tests with expert coaching from Saathi Global.</p>
            <Button variant="secondary" size="lg" onClick={() => setEnquiryOpen(true)}>Enroll Now</Button>
          </div>
        </section>
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">Tests We Prepare You For</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Comprehensive coaching for all major international tests.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tests.map((test) => (
                <div key={test.name} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center font-bold text-lg">{test.name[0]}</div>
                    <div><h3 className="font-semibold text-gray-900">{test.name}</h3><p className="text-xs text-gray-500">{test.fullName}</p></div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{test.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-gray-500">Duration:</span><span className="font-medium text-gray-900">{test.duration}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Scoring:</span><span className="font-medium text-gray-900">{test.scoring}</span></div>
                    <div><span className="text-gray-500">Sections: </span><span className="text-gray-700">{test.sections.join(", ")}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Our Coaching?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChoose.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-sm">✓</span>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Ace Your Test?</h2>
            <p className="text-blue-100 mb-8 text-lg">Join our next batch and get the score you need for your dream university.</p>
            <Button variant="secondary" size="lg" onClick={() => setEnquiryOpen(true)}>Book Free Demo Class</Button>
          </div>
        </section>
      </main>
      <Footer />
      <EnquiryFormModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} source="test-preparation" />
    </>
  );
}
