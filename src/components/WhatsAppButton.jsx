import { FaWhatsapp } from "react-icons/fa";
import { trackEvent } from "../utils/analytics";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/254101709129"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      onClick={() =>
        trackEvent(
          "whatsapp_click",
          "Lead Generation",
          "WhatsApp Contact"
        )
      }
    >
      <FaWhatsapp />
    </a>
  );
}