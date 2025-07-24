

import ofis from '../assets/ofis.jpg';
import logo from '../assets/logo.jpg';
import shaxmat from '../assets/shaxmat.png';
import { motion} from "framer-motion";
import { SiAboutdotme } from "react-icons/si";
import { BiPhoneCall } from "react-icons/bi";
import { useInView } from "react-intersection-observer";
import { FaPercent, FaGift, FaUserPlus, FaWallet } from "react-icons/fa";
import { useTranslation } from "react-i18next";




function About() {
  const { t } = useTranslation();
  
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });


  return (
   <div>
       <div ref={ref} className="container mx-auto mt-[80px] md:w-[960px] px-4 mb-14" id="bizhaqimizda-qismi">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-19">

        {/* LEFT - IMAGE */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 2 }}
          className="relative w-full max-w-[600px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[300px]"
        >
          <img
            src={ofis}
            alt="logo"
            className="w-full h-full object-cover rounded-[16px]"
          />

          {/* 2000+ BOX */}
          <motion.div
            className="absolute bg-white w-[140px] sm:w-[160px] h-[70px] sm:h-[74px] border border-yellow-400 flex flex-col justify-center items-center rounded-lg -left-[30px] -top-[35px]"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <b className="text-[22px] sm:text-[28px] text-yellow-500">2000+</b>
            <p className="text-[11px] sm:text-[12px] text-gray-400 font-semibold">
              Mamnun xaydovchilar
            </p>
          </motion.div>

          {/* YELLOW LINE */}
          <motion.div
            className="absolute w-[10px] sm:w-[14px] h-[120px] sm:h-[160px] rounded-lg bg-yellow-400 -left-[30px] bottom-[10px]"
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* RIGHT - TEXT */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="w-full max-w-[600px]"
        >
       
<div className="bg-white py-10 px-4 sm:px-6 lg:px-8" id="bizhaqimizda-qismi">
  <div className="max-w-4xl mx-auto">
    <div className="flex items-center gap-3 mb-3">
      <SiAboutdotme className="text-yellow-500 text-[28px] sm:text-[34px]" />
      <p className="text-[14px] sm:text-[16px] text-gray-700 font-semibold uppercase">{t("about")}</p>
    </div>

    <h3 className="text-[32px] sm:text-[42px] lg:text-[55px] text-yellow-500 font-bold leading-tight">
      Press Taxi
    </h3>

    <p className="text-[16px] sm:text-[18px] text-gray-600 mt-2">
      <span className="text-red-500 text-[20px] font-semibold">Y</span>
      <span className="text-gray-900">andex</span>{' '}
      <span className="bg-black rounded-[6px] text-white px-1">Go</span>  {t("officialPartner")}
    </p>

    <p className="text-[13px] sm:text-[14px] text-gray-500 mt-3 border-b border-gray-200 pb-3 leading-relaxed">
       {t("aboutDescription")}
    </p>

    {/* Bonuslar */}
    <div className="mt-5 space-y-3 text-[14px] sm:text-[15px] text-gray-700">
      <div className="flex items-center gap-2">
        <FaPercent className="text-yellow-500" />
        <p>{t("bonusCommission")} <span className="font-bold text-yellow-400 text-[18px] pl-3">2.9%</span></p>
      </div>

      <div className="flex items-center gap-2">
        <FaGift className="text-yellow-500" />
        <p>{t("bonusNewJoin")} <span className="font-bold text-yellow-400 text-[18px] pl-3">20 000 so'm bonus</span></p>
      </div>

      <div className="flex items-center gap-2">
        <FaUserPlus className="text-yellow-500" />
        <p>{t("bonusInviteFriend")} <span className="font-bold text-yellow-400 text-[18px] pl-3">20 000 so'm</span></p>
      </div>

      <div className="flex items-center gap-2">
        <FaWallet className="text-yellow-500" />
        <p>{t("bonusCashback")} <span className="font-bold text-yellow-400 text-[18px] pl-1">15% Cashback</span></p>
      </div>
    </div>
  </div>
</div>

          {/* CONTACT + BUTTON */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 items-center sm:items-start">
            <div className="flex items-center relative gap-3">
              <img src={logo} alt="aloqa" className="w-[45px] h-[45px] rounded-full" />
              <div>
                    <p className="text-[12px] sm:text-[13px] text-gray-500">{t("callCenter")}</p>
                <div className='flex items-center gap-2'>
                    <BiPhoneCall className='absolute left-8 -bottom- border p-1 bg-yellow-400 text-black border-white rounded-full text-[21px] ' />
                    <b className="text-[15px] sm:text-[16px] text-gray-800">+998 (71) 200-96-66</b>
                </div>
              </div>
            </div>

            <motion.div
              key="button"
              className="relative inline-block group mt-2 sm:mt-0 md:ml-9"
            >
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                className="absolute  w-full h-[34px] border-1 border-yellow-400 z-0 transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-in-out pointer-events-none"
              />
              <motion.a
                href='tel:+998712009666'
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.6, duration: 1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px -2px 10px rgba(255,255,255,0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 bg-yellow-400 text-gray-900 px-5 py-2 font-semibold text-sm sm:text-md"
              >
               {t("contactBtn")}
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  <div className="w-full overflow-hidden h-[38px] mb-4 relative">
  <motion.div
    className="flex"
    animate={{ x: ["0%", "-100%"] }}
    transition={{
      duration: 40,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    {[...Array(5)].map((_, i) => (
      <img
        key={i}
        src={shaxmat}
        alt="checker"
        className="min-w-[1400px] h-[32px] object-cover"
      />
    ))}
  </motion.div>
  </div>
</div>
  
  );
}

export default About;
