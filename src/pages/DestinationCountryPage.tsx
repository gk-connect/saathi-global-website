import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EnquiryFormModal from "@/components/forms/EnquiryFormModal";
import Button from "@/components/ui/Button";

interface Destination {
  id: string;
  country: string;
  slug: string;
  flagImage: string;
  coverImage: string;
  shortDescription: string;
  featured: boolean;
}

const countryDetails: Record<string, { highlights: string[]; facts: { label: string; value: string }[]; whyStudy: string }> = {
  "study-in-canada": {
    highlights: [
      "Post-graduation work permit (PGWP) up to 3 years",
      "Pathway to permanent residency through Express Entry",
      "Affordable tuition compared to USA and UK",
      "Multicultural and welcoming environment",
      "High standard of living and safety",
    ],
    facts: [
      { label: "Official Languages", value: "English, French" },
      { label: "Top Cities", value: "Toronto, Vancouver, Montreal" },
      { label: "Avg. Tuition", value: "CAD 20,000–30,000/yr" },
      { label: "Intakes", value: "September, January, May" },
    ],
    whyStudy: "Canada is one of the most popular destinations for international students, known for its world-class universities, inclusive society, and excellent post-study work opportunities. With a straightforward immigration process, Canada offers a clear pathway from student to permanent resident.",
  },
  "study-in-usa": {
    highlights: [
      "Home to 8 of the world's top 10 universities",
      "OPT (Optional Practical Training) for up to 3 years in STEM",
      "Diverse range of programs and specializations",
      "Cutting-edge research facilities and innovation hubs",
      "Extensive scholarship opportunities",
    ],
    facts: [
      { label: "Official Language", value: "English" },
      { label: "Top Cities", value: "New York, Boston, San Francisco" },
      { label: "Avg. Tuition", value: "USD 25,000–55,000/yr" },
      { label: "Intakes", value: "Fall (Aug), Spring (Jan)" },
    ],
    whyStudy: "The USA is the world's leading destination for higher education, hosting over a million international students. American universities consistently top global rankings and offer unparalleled research opportunities, diverse campus life, and strong alumni networks.",
  },
  "study-in-uk": {
    highlights: [
      "Shorter course durations (1-year Master's)",
      "Graduate Route visa for 2 years post-study work",
      "Globally respected degrees from historic institutions",
      "Rich cultural experience in a diverse society",
      "Scholarship opportunities including Chevening",
    ],
    facts: [
      { label: "Official Language", value: "English" },
      { label: "Top Cities", value: "London, Manchester, Edinburgh" },
      { label: "Avg. Tuition", value: "GBP 12,000–25,000/yr" },
      { label: "Intakes", value: "September, January" },
    ],
    whyStudy: "The United Kingdom boasts some of the oldest and most prestigious universities in the world. With shorter course durations and the Graduate Route visa, the UK offers excellent value and work opportunities for international students.",
  },
  "study-in-australia": {
    highlights: [
      "Post-study work visa up to 4 years",
      "7 of the world's top 100 universities",
      "Part-time work rights during study (48 hrs/fortnight)",
      "High quality of life and vibrant student cities",
      "Pathway to permanent residency",
    ],
    facts: [
      { label: "Official Language", value: "English" },
      { label: "Top Cities", value: "Sydney, Melbourne, Brisbane" },
      { label: "Avg. Tuition", value: "AUD 20,000–45,000/yr" },
      { label: "Intakes", value: "February, July" },
    ],
    whyStudy: "Australia is a top choice for students seeking quality education, a relaxed lifestyle, and strong career prospects. Australian qualifications are recognized worldwide, and the country offers generous work rights during and after study.",
  },
  "study-in-germany": {
    highlights: [
      "Tuition-free education at public universities",
      "Strong focus on engineering, technology, and research",
      "18-month post-study job-seeking visa",
      "Central European location for travel and networking",
      "Growing number of English-taught programs",
    ],
    facts: [
      { label: "Official Language", value: "German (English programs available)" },
      { label: "Top Cities", value: "Berlin, Munich, Frankfurt" },
      { label: "Avg. Tuition", value: "€0–1,500/semester (public)" },
      { label: "Intakes", value: "October, April" },
    ],
    whyStudy: "Germany is an ideal destination for students looking for affordable, high-quality education. With tuition-free public universities and Europe's strongest economy, Germany offers exceptional value and career opportunities, especially in STEM fields.",
  },
  "study-in-new-zealand": {
    highlights: [
      "Post-study work visa up to 3 years",
      "Safe and welcoming environment for students",
      "Globally recognized qualifications",
      "Stunning natural landscapes and outdoor lifestyle",
      "Affordable compared to Australia and UK",
    ],
    facts: [
      { label: "Official Languages", value: "English, Māori" },
      { label: "Top Cities", value: "Auckland, Wellington, Christchurch" },
      { label: "Avg. Tuition", value: "NZD 22,000–35,000/yr" },
      { label: "Intakes", value: "February, July" },
    ],
    whyStudy: "New Zealand offers a unique blend of quality education, safety, and stunning natural beauty. With a welcoming culture and practical degree programs, it is an excellent choice for students seeking a balanced and enriching study experience.",
  },
};

export default function DestinationCountryPage() {
  const { country: slug } = useParams<{ country: string }>();
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [destination, setDestination] = useState<Destination | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/destinations.json")
      .then((res) => res.json())
      .then((data: Destination[]) => {
        const found = data.find((d) => d.slug === slug);
        setDestination(found || null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  const details = slug ? countryDetails[slug] : undefined;

  if (loading) {
    return (
      <>
        <Header onEnquireClick={() => setEnquiryOpen(true)} />
        <main className="flex-1 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-500">Loading destination...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!destination) {
    return (
      <>
        <Header onEnquireClick={() => setEnquiryOpen(true)} />
        <main className="flex-1 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Destination Not Found</h1>
            <p className="text-gray-600 mb-6">The destination you are looking for does not exist or has been moved.</p>
            <Link to="/"><Button>Go to Home</Button></Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header onEnquireClick={() => setEnquiryOpen(true)} />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white py-20 md:py-28" style={destination.coverImage ? { backgroundImage: `linear-gradient(to right, rgba(29,78,216,0.82), rgba(67,56,202,0.82)), url('${destination.coverImage}')`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}>
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Study in {destination.country}</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100 mb-8">{destination.shortDescription}</p>
            <Button variant="secondary" size="lg" onClick={() => setEnquiryOpen(true)}>Apply Now</Button>
          </div>
        </section>

        {details && (
          <>
            <section className="py-16 md:py-20">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why Study in {destination.country}?</h2>
                    <p className="text-gray-600 leading-relaxed mb-8">{details.whyStudy}</p>
                    <Button onClick={() => setEnquiryOpen(true)}>Get Free Counselling</Button>
                  </div>
                  <div className="space-y-4">
                    {details.facts.map((fact) => (
                      <div key={fact.label} className="flex items-center justify-between bg-gray-50 rounded-lg px-5 py-4 border border-gray-100">
                        <span className="text-gray-500 text-sm">{fact.label}</span>
                        <span className="font-medium text-gray-900 text-sm">{fact.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-gray-50 py-16 md:py-20">
              <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">Key Highlights</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {details.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">✓</span>
                      <p className="text-gray-700 text-sm">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">How Saathi Global Helps You Study in {destination.country}</h2>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: "01", title: "Counselling" },
                { step: "02", title: "University Selection" },
                { step: "03", title: "Application" },
                { step: "04", title: "Visa Processing" },
                { step: "05", title: "Pre-Departure" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">{item.step}</div>
                  <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Study in {destination.country}?</h2>
            <p className="text-blue-100 mb-8 text-lg">Speak with our {destination.country} education experts today and start your application.</p>
            <Button variant="secondary" size="lg" onClick={() => setEnquiryOpen(true)}>Book Free Consultation</Button>
          </div>
        </section>
      </main>
      <Footer />
      <EnquiryFormModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} source={`destination-${slug}`} />
    </>
  );
}
