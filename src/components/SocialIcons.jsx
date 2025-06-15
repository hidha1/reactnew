import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex justify-center items-center gap-6 mt-6">
      <a href="#" className="text-indigo-600 hover:text-pink-500 text-2xl transition">
        <FaInstagram />
      </a>
      <a href="#" className="text-indigo-600 hover:text-green-500 text-2xl transition">
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default SocialIcons;
