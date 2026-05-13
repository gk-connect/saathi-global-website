import { useEffect } from "react";
import { openWhatsAppEnquiry } from "@/lib/whatsapp";

interface EnquiryFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  source: string;
  sourceDetail?: string;
}

/**
 * Enquiry CTA handler.
 *
 * All "Enquire Now" / "Apply Now" / "Book Consultation" CTAs now redirect to
 * WhatsApp with a prefilled message that includes the originating section,
 * instead of opening the previous in-app modal form.
 *
 * The component name and prop surface are kept identical so existing call
 * sites (Header, HeroSlider, page CTAs, etc.) continue to work unchanged:
 * setting `isOpen` to true triggers the WhatsApp redirect and immediately
 * invokes `onClose` so the parent's open-state stays consistent.
 */
export default function EnquiryFormModal({
  isOpen,
  onClose,
  source,
  sourceDetail,
}: EnquiryFormModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    openWhatsAppEnquiry(source, sourceDetail);
    onClose();
  }, [isOpen, source, sourceDetail, onClose]);

  return null;
}
