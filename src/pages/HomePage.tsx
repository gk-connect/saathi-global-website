import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSlider from "@/components/home/HeroSlider";
import CategoryCards from "@/components/home/CategoryCards";
import SecondarySlider from "@/components/home/SecondarySlider";
import DestinationsSection from "@/components/home/DestinationsSection";
import EventsSection from "@/components/home/EventsSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import StatsCounter from "@/components/home/StatsCounter";
import PartnersCarousel from "@/components/home/PartnersCarousel";
import EnquiryFormModal from "@/components/forms/EnquiryFormModal";

import slidersData from "../../public/data/sliders.json";
import eventsData from "../../public/data/events.json";
import servicesData from "../../public/data/services.json";
import destinationsData from "../../public/data/destinations.json";
import testimonialsData from "../../public/data/testimonials.json";

export default function HomePage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquirySource, setEnquirySource] = useState("navbar");
  const [enquiryDetail, setEnquiryDetail] = useState<string | undefined>();

  const openEnquiry = (source?: string, detail?: string) => {
    setEnquirySource(source || "navbar");
    setEnquiryDetail(detail);
    setEnquiryOpen(true);
  };

  return (
    <>
      <Header onEnquireClick={() => openEnquiry("navbar")} />
      <main className="flex-1">
        <HeroSlider onEnquireClick={() => openEnquiry("hero-slider")} />
        <CategoryCards onEnquireClick={openEnquiry} />
        <SecondarySlider sliders={slidersData} onEnquireClick={openEnquiry} />
        <DestinationsSection destinations={destinationsData} />
        <EventsSection events={eventsData} onEnquireClick={openEnquiry} />
        <ServicesSection services={servicesData} onEnquireClick={openEnquiry} />
        <TestimonialsSection testimonials={testimonialsData} />
        <StatsCounter />
        <PartnersCarousel />
      </main>
      <Footer />
      <EnquiryFormModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        source={enquirySource}
        sourceDetail={enquiryDetail}
      />
    </>
  );
}
