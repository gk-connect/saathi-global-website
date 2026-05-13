// WhatsApp redirect helper for enquiry CTAs.
// Phone number is in international format without "+" or spaces.
export const WHATSAPP_PHONE = "917994776601";

/**
 * Build a wa.me URL with a prefilled message.
 * Source/detail are included so the receiving team knows which CTA was clicked.
 */
export function buildWhatsAppEnquiryUrl(source: string, sourceDetail?: string): string {
  const lines = [
    "Hi Saathi Global, I'd like to enquire about your services.",
    "",
    `Source: ${source}`,
  ];
  if (sourceDetail) {
    lines.push(`Details: ${sourceDetail}`);
  }
  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
}

/**
 * Open WhatsApp in a new tab with a prefilled enquiry message.
 * Safe to call from a click handler (uses noopener,noreferrer).
 */
export function openWhatsAppEnquiry(source: string, sourceDetail?: string): void {
  if (typeof window === "undefined") return;
  const url = buildWhatsAppEnquiryUrl(source, sourceDetail);
  window.open(url, "_blank", "noopener,noreferrer");
}
