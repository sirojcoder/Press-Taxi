import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTelegram, FaInstagram, FaFacebookF } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation(); 
  return (
    <footer className="bg-gray-900 text-white py-12 px-4" id="contact-qismi">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo va Tavsif */}
        <div>
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">PRESS TAXI</h3>
          <p className="text-sm text-gray-300">
            {t("footerDescription")}
          </p>
        </div>

        {/* Aloqa */}
        <div>
          <h4 className="text-xl font-semibold mb-4">{t("contactUs")}</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-400" /> +998 71 200 96 66
            </li>
            
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-400" />  {t("footerAddressChilonzor")}
            </li>
             <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-400" /> {t("footerAddressYunusobod")}
            </li>
            
          </ul>
        </div>

        {/* Ijtimoiy tarmoqlar */}
        <div>
          <h4 className="text-xl font-semibold mb-4">{t("socialMedia")}</h4>
          <div className="flex space-x-4">
            <a
              href="https://t.me/Presstaxi_chilonzor"
              className="p-2 bg-yellow-400 text-gray-900 rounded-full hover:bg-yellow-300 transition"
              target="_blank" rel="noopener noreferrer"
            >
              <FaTelegram />
            </a>
            <a
              href="https://instagram.com/press.taxi"
              className="p-2 bg-yellow-400 text-gray-900 rounded-full hover:bg-yellow-300 transition"
              target="_blank" rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          
          </div>
        </div>

        {/* Ofislar */}
        <div>
          <h4 className="text-xl font-semibold mb-4">{t("offices")}</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li> {t("officeChilonzor")}</li>
            <li> {t("officeYunusobod")}</li>
          </ul>
        </div>
      </div>

      {/* Poydevor */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()}  {t("footerCopyright")}
      </div>
    </footer>
  );
};

export default Footer;
