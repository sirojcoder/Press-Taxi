import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTelegram, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo va Tavsif */}
        <div>
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">PRESS TAXI</h3>
          <p className="text-sm text-gray-300">
            Press Taxi — bu ishonchli, tezkor va qulay xizmat ko'rsatish. 24/7 xizmat ko‘rsatamiz!
          </p>
        </div>

        {/* Aloqa */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Biz bilan bog'laning</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-400" /> +998 71 200 96 66
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400" /> info@presstaxi.uz
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-400" /> Toshkent, Chilonzor tumani, Cho'ponota 8
            </li>
          </ul>
        </div>

        {/* Ijtimoiy tarmoqlar */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Ijtimoiy tarmoqlar</h4>
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
            <a
              href="https://facebook.com/presstaxi"
              className="p-2 bg-yellow-400 text-gray-900 rounded-full hover:bg-yellow-300 transition"
              target="_blank" rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Ofislar */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Ofislar</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>📍 Chilonzor (24/7)</li>
            <li>📍 Yunusobod (24/7)</li>
            <li>📍 Samarqand (24/7)</li>
          </ul>
        </div>
      </div>

      {/* Poydevor */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Press Taxi. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
};

export default Footer;
