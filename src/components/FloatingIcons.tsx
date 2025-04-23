import React from 'react';
import { Phone } from 'lucide-react';
import { BsWhatsapp } from 'react-icons/bs';

const FloatingIcons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <a
        href="tel:+919876543210"
        className="bg-darkBlue hover:bg-darkBlue/90 text-yellow p-3 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6" />
      </a>
      <a
        href="https://wa.me/918977217554"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <BsWhatsapp className="h-6 w-6" />
      </a>
    </div>
  );
};

export default FloatingIcons; 