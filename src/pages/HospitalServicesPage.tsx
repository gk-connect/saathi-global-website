import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EnquiryFormModal from "@/components/forms/EnquiryFormModal";
import Button from "@/components/ui/Button";

const clinicalRoles = [
  "B.Sc Nurses",
  "GNM Nurses",
  "Dialysis Technicians",
  "Lab Technicians",
  "OT Technicians",
  "ICU & Critical Care Staff",
  "Allied Healthcare Professionals",
];

const supportServices = [
  {
    title: "Temporary & Permanent Recruitment",
    description:
      "We help hospitals meet both urgent staffing requirements and long-term workforce planning.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-5.13a4 4 0 11-8 0 4 4 0 018 0zm6 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Internship & Training Support",
    description:
      "We coordinate clinical internships, practical training, and skill enhancement programs for nursing and allied healthcare students.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: "Healthcare Operations Support",
    description:
      "We assist healthcare institutions in manpower planning, workforce management, and deployment support.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h0a4 4 0 014 4v2M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Emergency Staffing Solutions",
    description:
      "Quick deployment of healthcare professionals during sudden manpower shortages, expansion projects, or special healthcare programs.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const whyChoose = [
  "Access to qualified healthcare talent",
  "Faster recruitment turnaround",
  "Quality screening and verification",
  "Flexible staffing solutions",
  "Dedicated support and partnership approach",
];

export default function HospitalServicesPage() {
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
            <p className="text-sm md:text-base font-semibold uppercase tracking-wider text-blue-200 mb-3">
              For Hospitals &amp; Healthcare Institutions
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Hospital Support Services</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100">
              Trusted staffing, training, and operational support for hospitals across India.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="secondary" size="lg" onClick={() => setEnquiryOpen(true)}>
                Partner With Us
              </Button>
              <a
                href="tel:+917994776601"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white hover:text-blue-700 transition-colors"
              >
                Call +91 79947 76601
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-3">
                  Clinical Staffing Solutions
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Qualified healthcare professionals, ready when you need them
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We support hospitals with a wide pool of screened and verified healthcare
                  professionals across nursing, paramedical, and allied healthcare roles.
                </p>
                <Button onClick={() => setEnquiryOpen(true)}>Request Staff</Button>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">We provide:</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {clinicalRoles.map((role) => (
                    <li key={role} className="flex items-start text-gray-700">
                      <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="leading-snug">{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              Beyond Recruitment
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              End-to-end workforce and operations support tailored for healthcare institutions.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {supportServices.map((svc) => (
                <div
                  key={svc.title}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                    {svc.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{svc.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{svc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              Why Hospitals Choose Saathi Global Solutions
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              A reliable partner committed to your staffing and operational success.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {whyChoose.map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center"
                >
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

        <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Looking for reliable healthcare staffing?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Talk to our team to discuss your hospital&rsquo;s requirements and partnership options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" onClick={() => setEnquiryOpen(true)}>
                Request a Callback
              </Button>
              <a
                href="mailto:info@saathiglobal.com"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white hover:text-blue-700 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <EnquiryFormModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        source="hospital-services-page"
      />
    </>
  );
}
