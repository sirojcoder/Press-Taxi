

import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFileAlt, FaRegIdCard } from "react-icons/fa";

import litsenziya from "../assets/mygov.png";
import sugurta from "../assets/sugurta.jpg";
import brending from "../assets/brending.jpeg";
import ishonchnoma from "../assets/ishonchnoma.jpg";
import logo from "../assets/logo1.jpg";
import { useTranslation } from "react-i18next";


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 768,
      settings: "unslick"
    }
  ],
};

const Xizmatlar = () => {
  const { t } = useTranslation();

  const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  {
    image: litsenziya,
    title: t("serviceLicenseTitle"),
    desc: t("serviceLicenseDesc"),
    docs: t("serviceDocs"),
    info: t("serviceInfo"),
  },
  {
    image: sugurta,
    title: t("serviceInsuranceTitle"),
    desc: t("serviceInsuranceDesc"),
    docs: t("serviceDocs"),
    info: t("serviceInfo"),
  },
  {
    image: brending,
    title: t("serviceBrandingTitle"),
    desc: t("serviceBrandingDesc"),
    docs: t("serviceDocs"),
    info: t("serviceInfo"),
  },
  {
    image: ishonchnoma,
    title: t("servicePowerOfAttorneyTitle"),
    desc: t("servicePowerOfAttorneyDesc"),
    docs: t("serviceDocs"),
    info: t("serviceInfo"),
  },
  {
    image: logo,
    title: t("serviceDriverTitle"),
    desc: t("serviceDriverDesc"),
    docs: t("serviceDocs"),
    info: t("serviceInfo"),
  },
];

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 py-20 px-4" id="xizmatlar-qismi">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold text-yellow-400 mb-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          PRESS TAXI
        </motion.h2>
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t("servicesTitle")}
        </motion.h2>
    <div className="pb-7">
      <p>{t("servicesDescription")}</p>
    </div>
        <div className="hidden md:block">
          <Slider {...settings}>
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-4"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 transform h-[400px] flex flex-col group hover:bg-yellow-400 hover:shadow-xl hover:-translate-y-2">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 text-left flex-1 flex flex-col justify-between text-gray-800 group-hover:text-white">
                    <div>
                      <h3 className="text-xl font-bold mb-2 uppercase">
                        {service.title}
                      </h3>
                      <p className="text-base mb-3 flex items-start gap-2">
                        <FaFileAlt className="text-yellow-300 mt-1" /> {service.desc}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold flex items-center gap-2">
                        <FaRegIdCard className="text-yellow-300" /> {service.docs}
                      </h4>
                      <p className="text-base mt-1">{service.info}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>

        <div className="grid grid-cols-1 gap-8 md:hidden">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 transform h-[400px] flex flex-col group hover:bg-blue-400 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-left flex-1 flex flex-col justify-between text-gray-800 group-hover:text-white">
                <div>
                  <h3 className="text-xl font-bold mb-2 uppercase">
                    {service.title}
                  </h3>
                  <p className="text-base mb-3 flex items-start gap-2">
                    <FaFileAlt className="text-yellow-300 mt-1" /> {service.desc}
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-semibold flex items-center gap-2">
                    <FaRegIdCard className="text-yellow-300" /> {service.docs}
                  </h4>
                  <p className="text-base mt-1">{service.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Xizmatlar;