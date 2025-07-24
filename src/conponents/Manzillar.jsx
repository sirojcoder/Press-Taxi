import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaTaxi } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Manzillar = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-50 py-16 px-4 " id="ofislar-qismi">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-yellow-400 mb-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaTaxi className="inline-block mr-2 text-yellow-400" /> {t("officeSectionTitle")}
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
         {t("officeSectionDescription")}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Chilonzor ofis */}
          <motion.div
            className="bg-white shadow-lg rounded-xl overflow-hidden"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4 text-left">
              <h3 className="text-xl font-bold text-gray-800 mb-2"> {t("officeChilonzorTitle")} <span className="text-green-600">(🔜24/7)</span></h3>
              <p className="text-sm text-gray-700 flex items-center gap-2">
                <FaMapMarkerAlt className="text-yellow-500" />{t("officeChilonzorAddress")}
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.925221054755!2d69.204193!3d41.285675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae61c0c6e5e45d%3A0x38a7808c80f49e8a!2sChilonzor!5e0!3m2!1sen!2s!4v1630498482993!5m2!1sen!2s"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="w-full"
            ></iframe>
          </motion.div>

          {/* Yunusobod ofis */}
          <motion.div
            className="bg-white shadow-lg rounded-xl overflow-hidden"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4 text-left">
              <h3 className="text-xl font-bold text-gray-800 mb-2"> {t("officeYunusobodTitle")}<span className="text-green-600">(🔜24/7)</span></h3>
              <p className="text-sm text-gray-700 flex items-center gap-2">
                <FaMapMarkerAlt className="text-yellow-500" /> {t("officeYunusobodAddress")}
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.316070329856!2d69.266375!3d41.334296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b33aaecb009%3A0xf59b7a66e82e1f9a!2sYunusabad!5e0!3m2!1sen!2s!4v1630498501411!5m2!1sen!2s"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="w-full"
            ></iframe>
          </motion.div>

     
        </div>
      </div>
    </div>
  );
};

export default Manzillar;