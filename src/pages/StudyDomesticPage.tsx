import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EnquiryFormModal from "@/components/forms/EnquiryFormModal";
import Button from "@/components/ui/Button";

const programs = [
  { title: "Engineering", description: "Top engineering colleges across India offering B.Tech, M.Tech, and diploma programs in various specializations.", icon: "⚙️" },
  { title: "Pharmacy", description: "B.Pharm, M.Pharm, and Pharm.D programs at leading pharmacy institutions across India.", icon: "💊" },
  { title: "Nursing", description: "B.Sc Nursing, GNM, ANM, and post-graduate nursing programs at reputed medical colleges.", icon: "🩺" },
  { title: "Allied Health Sciences", description: "BPT, BMLT, B.Sc in Radiology, Optometry, and other allied health science programs.", icon: "🏥" },
  { title: "Management", description: "MBA, BBA, PGDM, and specialized management programs at top B-schools and universities in India.", icon: "📊" },
  { title: "Law", description: "BA LLB, BBA LLB, LLB, and LLM programs at premier national and private law schools.", icon: "⚖️" },
  { title: "Arts", description: "BA, MA, and research programs in humanities, social sciences, languages, and liberal arts.", icon: "📚" },
];

const partnerColleges = [
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

const benefits = [
  { title: "Affordable Education", desc: "Quality education at a fraction of the cost compared to studying abroad, with various scholarship options." },
  { title: "Diverse Opportunities", desc: "India has thousands of colleges and universities offering programs across every discipline imaginable." },
  { title: "Cultural Familiarity", desc: "Study close to home while enjoying the comfort of familiar food, language, and cultural environment." },
  { title: "Growing Job Market", desc: "India's booming economy offers excellent placement opportunities right after graduation." },
];

export default function StudyDomesticPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <>
      <Header onEnquireClick={() => setEnquiryOpen(true)} />
      <main className="flex-1">
        <section
          className="relative bg-blue-800 text-white py-20 md:py-28 bg-cover bg-center"
          style={{ backgroundImage: "linear-gradient(to right, rgba(29,78,216,0.85), rgba(30,64,175,0.85)), url('/images/hero/slide1.png')" }}
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Study in India</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100 mb-8">Explore top-quality domestic education opportunities across India&apos;s premier institutions.</p>
            <Button variant="secondary" size="lg" onClick={() => setEnquiryOpen(true)}>Explore Programs</Button>
          </div>
        </section>
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4"><div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Quality Education, Closer to Home</h2>
            <p className="text-gray-600 leading-relaxed">India is home to some of the finest educational institutions in the world, including IITs, IIMs, AIIMS, NITs, and many prestigious private universities. At Saathi Global, we help students navigate the domestic education landscape to find the best-fit programs.</p>
          </div></div>
        </section>
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">Why Study in India?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((item) => (
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">Programs We Cover</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">We provide counselling and admission assistance for a wide range of domestic programs.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program) => (
                <div key={program.title} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="text-4xl mb-4">{program.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{program.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">Our Partner Colleges</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">We have strong partnerships with leading institutions across India to ensure the best opportunities for our students.</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {partnerColleges.map((college) => (
                <div key={college} className="bg-white rounded-lg p-5 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-center">
                  <h3 className="text-base font-semibold text-gray-900">{college}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">How Saathi Global Helps</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Profile Assessment", desc: "Evaluate your academic background and career goals." },
                { step: "2", title: "College Shortlisting", desc: "Identify best-fit colleges based on your profile and preferences." },
                { step: "3", title: "Application Support", desc: "Help with applications, entrance exam guidance, and documentation." },
                { step: "4", title: "Admission & Beyond", desc: "Secure admission and provide ongoing academic support." },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{item.step}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Find the Right College in India</h2>
            <p className="text-blue-100 mb-8 text-lg">Get personalized guidance from our experts to secure admission at your dream institution.</p>
            <Button variant="secondary" size="lg" onClick={() => setEnquiryOpen(true)}>Book Free Consultation</Button>
          </div>
        </section>
      </main>
      <Footer />
      <EnquiryFormModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} source="study-domestic" />
    </>
  );
}
