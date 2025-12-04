import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const CustomWhatsappButton = ({ phoneNumber = "https://chat.whatsapp.com/I4kcUtJ1uDq0T2XRKgeyNV" }) => {
  return (
    <a
      href={phoneNumber}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 sm:py-3 rounded-sm text-white font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-md bg-[#25D366] hover:bg-[#128C7E]"
    >
      <FaWhatsapp className="mr-2 text-lg sm:text-xl " />
      Join WhatsApp
    </a>
  );
};

export default CustomWhatsappButton;