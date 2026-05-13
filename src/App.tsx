import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import StudyAbroadPage from "@/pages/StudyAbroadPage";
import StudyDomesticPage from "@/pages/StudyDomesticPage";
import PlacementDomesticPage from "@/pages/PlacementDomesticPage";
import TestPreparationPage from "@/pages/TestPreparationPage";
import VisaServicesPage from "@/pages/VisaServicesPage";
import EventsPage from "@/pages/EventsPage";
import ServicesPage from "@/pages/ServicesPage";
import HospitalServicesPage from "@/pages/HospitalServicesPage";
import DestinationCountryPage from "@/pages/DestinationCountryPage";
import NotFoundPage from "@/pages/NotFoundPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/study-abroad" element={<StudyAbroadPage />} />
        <Route path="/study-domestic" element={<StudyDomesticPage />} />
        <Route path="/placement-domestic" element={<PlacementDomesticPage />} />
        <Route path="/test-preparation" element={<TestPreparationPage />} />
        <Route path="/visa-services" element={<VisaServicesPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/hospital-services" element={<HospitalServicesPage />} />
        <Route path="/destinations/:country" element={<DestinationCountryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster position="top-right" />
    </>
  );
}
