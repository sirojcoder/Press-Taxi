

import { MdCheckCircle } from "react-icons/md";
import { motion } from "framer-motion";

import pul from "../assets/pul.png";
import moy from "../assets/moy.png";
import cobalt from "../assets/cobalt11.png";
import shaxmat from "../assets/shaxmat.png";

import {
  FaMoneyCheckAlt,
  FaMedal,
  FaOilCan,
  FaGift,
  FaPhoneAlt,
  FaInfoCircle,
  FaCalendarAlt,
  FaRegSmileBeam,
} from "react-icons/fa";


const giftCount = 15;
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};


const generateFlyingGifts = () => {
  return Array.from({ length: giftCount }).map((_, i) => {
    const randomLeft = Math.random() * 90 + "%";
    const randomDuration = 5 + Math.random() * 5;
    const randomDelay = Math.random() * 5;

    return (
      <motion.div
        key={i}
        className="absolute text-yellow-400 text-xl"
        initial={{ y: "100vh", opacity: 0 }}
        animate={{ y: "-10vh", opacity: 1 }}
        transition={{
          duration: randomDuration,
          repeat: Infinity,
          delay: randomDelay,
          ease: "linear",
        }}
        style={{ left: randomLeft }}
      >
        🎁
      </motion.div>
    );
  });
};

function Bonus() {
  return (
    <div className="relative">
      {/* Header */}
      <div className="my-14 text-center bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <h3 className="text-xl md:text-4xl font-bold mb-4 tracking-wide">
          Bonuslar bo‘limi
        </h3>
        <motion.p className="text-2xl md:text-3xl text-yellow-400 font-semibold px-6 py-4 rounded-lg inline-block">
          PRESS TAXI TOMONIDAN YIL SOVG'ASI
        </motion.p>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center gap-12 relative overflow-hidden">
        {/* Left Info */}
        <motion.div
          className="md:w-1/2 bg-white text-gray-900 rounded-xl p-8 space-y-5 shadow-lg md:shadow-none"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-2xl font-bold flex items-center gap-2 text-gray-800">
            <FaGift className="text-yellow-500" />
            Press Taxi tomonidan taqdim etilgan sovg‘a
          </h4>

          <h1 className="text-2xl md:text-4xl text-yellow-400 font-bold">
            Avtomobil sizni kutmoqda!
          </h1>

          <p className="flex items-center gap-2 text-gray-700">
            <FaInfoCircle className="text-blue-500" />
            Yutib olish shartlari juda oddiy:
          </p>

        <ul className="space-y-2 text-gray-700">
  <li className="flex items-start gap-2">
    <MdCheckCircle className="text-yellow-400 mt-1" />
    <span>Haydovchi sifatida ish boshlang</span>
  </li>
  <li className="flex items-start gap-2">
    <MdCheckCircle className="text-yellow-400 mt-1" />
    <span>
      <span className="font-bold text-yellow-400">300</span> ta buyurtma bajaring
    </span>
  </li>
  <li className="flex items-start gap-2">
    <MdCheckCircle className="text-yellow-400 mt-1" />
    <span>Chekni oling va lototronga tashlang</span>
  </li>
  <li className="flex items-start gap-2">
    <MdCheckCircle className="text-yellow-400 mt-1" />
    <span>
      <span className="text-yellow-400 font-bold">31-dekabr</span> kuni g‘olib aniqlanadi
    </span>
  </li>
</ul>
          <div className="pt-4">
            <p className="flex items-center gap-2">
              <FaCalendarAlt className="text-green-600" />
              Bonus muddati:
            </p>
            <b className="text-lg text-gray-800">
              <span className="text-3xl font-bold text-yellow-400">1</span>
              -Maydan{" "}
              
            </b>
            <b className="pl-4"><span className="text-3xl font-bold text-yellow-400">30</span>
              -Dekabrgacha</b>
                 <p className="text-gray-700 flex pt-6 items-center gap-2">
        <FaInfoCircle className="text-blue-500" />
        To‘liq ma’lumot olish uchun:
      </p>
       <p className="text-lg font-bold text-yellow-400 flex items-center gap-2">
        <FaPhoneAlt className="text-yellow-400" />
        Yordam xizmati: +998 71 200 96 66
      </p> <p className="text-sm text-gray-600 pt-2 flex items-center gap-2">
      <FaInfoCircle className="text-gray-500" />
      Har oyda yangilanadigan rag‘batlantiruvchi bonus tizimi.
    </p>
          </div>
          
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="md:w-1/2 w-full relative flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={cobalt}
            alt="Cobalt Car"
            className="w-[100%] sm:w-[90%] md:w-[620px] lg:w-[720px] h-auto rounded-xl z-10"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="absolute inset-0 pointer-events-none z-0">
            {generateFlyingGifts()}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-400 pb-8">
         
        <p className="flex justify-center items-center gap-2">
          <FaRegSmileBeam className="text-yellow-300 text-2xl" />
          Omadingizni sinab ko‘ring va g‘olib bo‘ling!
        </p>
      </div>

      {/* 🟨 RIGHT yellow triangle */}
      <motion.div
        className="absolute right-0 top-75 transform -translate-y-1/2 z-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative w-[60px] h-[60px] mr-[-28px]">
          {/* Shadow */}
          <div className="absolute top-2 left-2 w-0 h-0 border-l-[30px] border-l-transparent border-y-[30px] border-y-yellow-200 opacity-50"></div>
          {/* Main triangle */}
          <div className="absolute top-0 left-0 w-0 h-0 border-l-[30px] border-l-transparent border-y-[30px] border-y-yellow-400"></div>
        </div>
      </motion.div>

      {/* 🟨 LEFT yellow triangle */}
      <motion.div
        className="absolute -left-5 top-155 transform -translate-y-1/2 rotate-180 z-10"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative w-[60px] h-[60px] ml-[-30px]">
          {/* Shadow */}
          <div className="absolute top-2 left-2 w-0 h-0 border-l-[30px] border-l-transparent border-y-[30px] border-y-yellow-200 opacity-50"></div>
          {/* Main triangle */}
          <div className="absolute top-0 left-0 w-0 h-0 border-l-[30px] border-l-transparent border-y-[30px] border-y-yellow-400"></div>
        </div>
      </motion.div>

      <div className="bg-gradient-to-b from-white to-gray-100 py-14 px-4 border-t  border-yellow-400">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title */}
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-4xl font-bold text-yellow-400"
        >
          <span className="text-5xl">PRESS TAXI</span>  tomonidan xar oy o'tkaziladigan Bonus. 
        </motion.h2>

        {/* Pul Mukofotlari */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={pul}
            alt="Pul mukofoti"
            className="md:w-1/2 w-full object-cover"
          />
          <div className="p-6 space-y-4 flex-1">
            <div className="flex items-center gap-3 text-2xl text-yellow-500 font-semibold">
              <FaMoneyCheckAlt className="text-green-600" />
              <span>Pul Mukofotlari</span>
            </div>
            <p className="text-gray-700 text-sm md:text-base">
              Har oy eng ko‘p buyurtma bajargan haydovchilar quyidagi pul mukofotlarini qo‘lga kiritadi:
            </p>
           <ul className="text-gray-800 text-base space-y-1 pl-4 list-none">
              <li><FaMedal className="inline text-yellow-500 mr-1" /> 1-o‘rin — <b className="text-green-700">5 000 000 so‘m</b></li>
              <li><FaMedal className="inline text-gray-400 mr-1" /> 2-o‘rin — <b className="text-green-600">3 000 000 so‘m</b></li>
              <li><FaMedal className="inline text-yellow-400 mr-1" /> 3–10-o‘rin — <b className="text-green-500">1 000 000 so‘m</b></li>
            </ul>

            <p className="text-sm text-gray-600 pt-2">
              <span className="font-semibold text-gray-800">Bonus muddati:</span> <br />
              <span className="text-blue-600  text-2xl font-semibold">10-iyun – 10-iyul</span>
            </p>
             <p className="text-gray-700 flex items-center gap-2">
        <FaInfoCircle className="text-blue-500" />
        To‘liq ma’lumot olish uchun:
      </p>
      <p className="text-lg font-bold text-green-600 flex items-center gap-2">
        <FaPhoneAlt className="text-green-500" />
        Yordam xizmati: +998 71 200 96 66
      </p>
          </div>
        </motion.div>

        {/* Moy sovg'alari */}
       
<motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
  className="flex flex-col-reverse md:flex-row bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
>
  <div className="p-6 space-y-4 flex-1">
    {/* Title */}
    <div className="flex items-center gap-3 text-2xl text-yellow-500 font-semibold">
      <FaOilCan className="text-orange-500" />
      <span>Motor Moylari Sovg‘a</span>
    </div>

    {/* Description */}
    <p className="text-gray-700 text-sm md:text-base flex items-center gap-2">
      <FaGift className="text-green-500" />
      10–15-o‘rin haydovchilari uchun sovg‘alar:
    </p>

    {/* List */}
    <ul className="text-gray-800 text-base space-y-1 pl-5 list-disc">
      <li className="flex items-center gap-2">
        <FaOilCan className="text-orange-500" />
        Motor moylari taqdim etiladi
      </li>
      <li className="flex items-center gap-2">
        <FaGift className="text-yellow-400" />
        Siz istagan <span className="text-blue-600 font-semibold">brend moy</span> bilan
      </li>
    </ul>

    {/* Kontakt */}
    <div className="pt-3 space-y-1">
      <p className="text-gray-700 flex items-center gap-2">
        <FaInfoCircle className="text-blue-500" />
        To‘liq ma’lumot olish uchun:
      </p>
      <p className="text-lg font-bold text-green-600 flex items-center gap-2">
        <FaPhoneAlt className="text-green-500" />
        Yordam xizmati: +998 71 200 96 66
      </p>
    </div>

    {/* Qo‘shimcha eslatma */}
    <p className="text-sm text-gray-600 pt-2 flex items-center gap-2">
      <FaInfoCircle className="text-gray-500" />
      Har oyda yangilanadigan rag‘batlantiruvchi bonus tizimi.
    </p>
  </div>

  {/* Image */}
  <img
    src={moy}
    alt="Moy sovg‘asi"
    className="md:w-1/2 w-full object-cover"
  />
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

export default Bonus;
