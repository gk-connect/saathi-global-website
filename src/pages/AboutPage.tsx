import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EnquiryFormModal from "@/components/forms/EnquiryFormModal";
import Button from "@/components/ui/Button";

const stats = [
  { label: "Hospital Partners", value: "150+" },
  { label: "Healthcare Placements", value: "5,000+" },
  { label: "Partner Institutions", value: "200+" },
  { label: "Countries Served", value: "15+" },
  { label: "Expert Counsellors", value: "50+" },
  { label: "Success Rate", value: "95%" },
];

const services = [
  {
    title: "Healthcare Recruitment",
    points: [
      "Placement of B.Sc Nursing, GNM Nursing, Dialysis Technicians, Lab Technicians, and Allied Healthcare Professionals",
      "Freshers and experienced candidate placements",
      "Hospital staffing solutions",
    ],
  },
  {
    title: "Career Counseling & Admissions",
    points: [
      "Guidance for higher education in India and abroad",
      "Admission support for nursing, paramedical, and professional courses",
      "Skill development and career planning",
    ],
  },
  {
    title: "Overseas Opportunities",
    points: [
      "Assistance for study abroad and international placements",
      "Documentation support",
      "Interview preparation and pre-departure guidance",
    ],
  },
  {
    title: "Internship & Training Support",
    points: [
      "Hospital internships for nursing and allied healthcare students",
      "Industry partnerships and academic collaborations",
      "Professional finishing programs",
    ],
  },
];

const whyChooseUs = [
  "Trusted industry network",
  "Personalized career guidance",
  "Transparent process",
  "Strong employer and institutional partnerships",
  "Dedicated support from application to placement",
];

const coreValues = ["Trust", "Commitment", "Integrity", "Excellence", "Growth"];

export default function AboutPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <>
      <Header onEnquireClick={() => setEnquiryOpen(true)} />
      <main className="flex-1">
        <section
          className="relative bg-blue-800 text-white py-20 md:py-28 bg-cover bg-center"
          style={{ backgroundImage: "linear-gradient(to right, rgba(29,78,216,0.85), rgba(30,64,175,0.85)), url('/images/hero/slide2.png')" }}
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm md:text-base font-semibold uppercase tracking-wider text-blue-200 mb-3">Who We Are</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Saathi Global Solutions</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100">
              Your Trusted Partner in Careers, Healthcare &amp; Global Opportunities.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">About Us</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Saathi Global Solutions is a professional consultancy and workforce solutions
                  company dedicated to empowering individuals and organizations through quality
                  recruitment, education support, career guidance, and international opportunities.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  With a commitment to excellence, integrity, and long-term partnerships, we
                  connect talent with the right opportunities across healthcare, education, and
                  allied sectors.
                </p>
                <Button onClick={() => setEnquiryOpen(true)}>Talk to Our Team</Button>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <div className="text-6xl font-bold text-blue-600 mb-2">SG</div>
                  <p className="text-blue-700 font-medium">Saathi Global Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm md:text-base font-semibold uppercase tracking-wider text-blue-600 mb-3">A Personal Note</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Message from the CEO</h2>
            </div>
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
              <div className="grid md:grid-cols-3 gap-0">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 md:p-10 flex flex-col items-center justify-center text-center">
                  <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white/10 border-4 border-white/30 flex items-center justify-center mb-5">
                    <span className="text-4xl md:text-5xl font-bold">RV</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-1">Rahul Venugopal</h3>
                  <p className="text-blue-100 text-sm md:text-base font-medium">Founder &amp; CEO</p>
                  <p className="text-blue-200 text-xs md:text-sm mt-1">Saathi Global Solutions</p>
                </div>
                <div className="md:col-span-2 p-8 md:p-10 relative">
                  <svg className="w-12 h-12 text-blue-100 absolute top-6 left-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7.17 6C4.32 6 2 8.32 2 11.17V18h6.83v-6.83H5.17C5.17 9.42 6.59 8 8.34 8V6H7.17zm10 0c-2.85 0-5.17 2.32-5.17 5.17V18H18.83v-6.83h-3.66c0-1.75 1.42-3.17 3.17-3.17V6h-1.17z" />
                  </svg>
                  <div className="relative space-y-4 text-gray-700 leading-relaxed pl-4 md:pl-8">
                    <p className="text-lg font-semibold text-gray-900">Welcome to Saathi Global Solutions.</p>
                    <p>
                      At Saathi Global Solutions, we believe that every individual deserves the right
                      opportunity to grow, succeed, and build a meaningful future. Our journey began
                      with a simple vision&mdash;to become a trusted partner for students, professionals,
                      and organizations by connecting talent with opportunity.
                    </p>
                    <p>
                      In today&rsquo;s fast-changing world, quality guidance, skill development, and the
                      right career platform can transform lives. Our commitment is to support aspiring
                      professionals through recruitment, education guidance, training, and global
                      career opportunities with integrity, transparency, and excellence.
                    </p>
                    <p>
                      We take pride in building strong relationships with our clients, candidates,
                      educational institutions, and healthcare organizations. Every success story of
                      our candidates inspires us to continue creating pathways for professional growth
                      and global opportunities.
                    </p>
                    <p>
                      As we move forward, our mission remains clear: to empower individuals, support
                      organizations, and create lasting impact through trusted solutions.
                    </p>
                    <p>
                      Thank you for your trust and confidence in Saathi Global Solutions. We look
                      forward to being part of your success journey.
                    </p>
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600 italic">With warm regards,</p>
                      <p className="text-gray-900 font-semibold mt-1">Rahul Venugopal</p>
                      <p className="text-gray-500 text-sm">Founder &amp; CEO, Saathi Global Solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm md:text-base font-semibold uppercase tracking-wider text-blue-600 mb-3">Operational Leadership</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Meet Our COO</h2>
            </div>
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
              <div className="grid md:grid-cols-3 gap-0">
                <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-8 md:p-10 flex flex-col items-center justify-center text-center">
                  <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white/10 border-4 border-white/30 flex items-center justify-center mb-5">
                    <span className="text-4xl md:text-5xl font-bold">BA</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-1">Bini Susan Abraham</h3>
                  <p className="text-emerald-100 text-sm md:text-base font-medium">Chief Operating Officer (COO)</p>
                  <p className="text-emerald-200 text-xs md:text-sm mt-1">Saathi Global Solutions</p>
                </div>
                <div className="md:col-span-2 p-8 md:p-10">
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Bini Susan Abraham is a dynamic healthcare and operations professional serving
                      as the Chief Operating Officer of Saathi Global Solutions. With an academic
                      background in a bachelor&rsquo;s degree and B.Sc Nursing, she brings a strong
                      combination of clinical expertise, healthcare knowledge, and operational
                      leadership.
                    </p>
                    <p>
                      With deep understanding of hospital systems, patient care standards, workforce
                      management, and healthcare recruitment, she plays a key role in driving the
                      company&rsquo;s operational excellence and strategic growth.
                    </p>
                    <p>
                      She has built an extensive professional network with hospitals and healthcare
                      institutions across India, enabling strong partnerships in recruitment,
                      staffing, internship collaborations, and healthcare manpower solutions. Her
                      ability to build lasting relationships with hospital management teams, nursing
                      leadership, and healthcare administrators has contributed significantly to the
                      growth and credibility of Saathi Global Solutions.
                    </p>
                    <p>
                      Under her operational leadership, the company continues to support hospitals
                      with skilled healthcare professionals while creating career opportunities for
                      aspiring nurses and allied healthcare candidates.
                    </p>
                    <p>
                      Her commitment to quality, integrity, and service excellence makes her a
                      driving force behind the organization&rsquo;s mission to strengthen healthcare
                      services across India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">Our Services</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              End-to-end solutions across healthcare recruitment, education, overseas opportunities, and training.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((svc, idx) => (
                <div key={svc.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <span className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold mr-3">{idx + 1}</span>
                    <h3 className="text-xl font-bold text-gray-900">{svc.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {svc.points.map((point) => (
                      <li key={point} className="flex items-start text-gray-600 leading-relaxed">
                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Us?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {whyChooseUs.map((item) => (
                <div key={item} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become a trusted global bridge connecting talent, education, and career opportunities.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower students, professionals, and organizations with reliable solutions
                  that create growth, success, and global opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">Core Values</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              The principles that guide everything we do.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {coreValues.map((value) => (
                <div key={value} className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-6 text-center">
                  <div className="text-xl md:text-2xl font-bold">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
              Saathi Global in Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Talk to our team today and take the first step towards your career, education, or global opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" onClick={() => setEnquiryOpen(true)}>
                Book Free Consultation
              </Button>
              <a href="tel:+917994776601" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white hover:text-blue-700 transition-colors">
                Call +91 79947 76601
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <EnquiryFormModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} source="about-page" />
    </>
  );
}
