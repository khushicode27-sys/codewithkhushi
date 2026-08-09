import "../styles/FloatingWhatsApp.css";
import { FaWhatsapp } from "react-icons/fa";

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/916367975699?text=Hi%20Khushi!%20I%20want%20to%20know%20about%20your%20coding%20courses."
      className="whatsapp-float"
      target="_blank"
      rel="noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
}

export default FloatingWhatsApp;