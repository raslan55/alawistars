import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

/**
 * FloatingWhatsAppButton Component
 *
 * A fixed-position button that, when clicked, opens a WhatsApp chat
 * with a specified phone number and pre-filled message.
 *
 * @param {object} props - The component props.
 * @param {string} props.phoneNumber - The phone number for the WhatsApp chat (e.g., "1234567890").
 * @param {string} props.message - The pre-filled message for the WhatsApp chat.
 */

const FloatingWhatsAppButton = ({ phoneNumber, message }) => {
  // Construct the WhatsApp URL using the provided phone number and message.
  // encodeURIComponent is used to ensure the message is correctly formatted for a URL.
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    // The anchor tag creates the clickable button.
    // 'fixed' positions it relative to the viewport.
    // 'bottom-6 right-6' places it 6 units from the bottom and right edges.
    // Styling classes provide the green background, text color, padding, rounded shape,
    // shadow, transition effects for hover, flexbox for icon centering, and accessibility focus styles.
    
    <a
      href={whatsappUrl}
      target="_blank" // Opens the link in a new tab.
      rel="noopener noreferrer" // Security best practice for target="_blank" links.
      className="fixed bottom-25 right-6 bg-[#41c052] hover:bg-[#41c052c0] text-white p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 flex items-center justify-center z-250 focus:outline-none focus:ring-4 focus:ring-green-300"
      aria-label="Chat on WhatsApp" // Provides an accessible label for screen readers.
>
      {/* WhatsApp SVG Icon */}
      {/* This inline SVG provides the WhatsApp logo within the button. */}

     <FaWhatsapp className='w-8 h-8' />

    </a>
  );
};

// Export the component for use in other parts of your React application.
export default FloatingWhatsAppButton;