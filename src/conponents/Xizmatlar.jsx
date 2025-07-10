// import { motion } from "framer-motion";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FaFileAlt, FaRegIdCard } from "react-icons/fa";

// import litsenziya from "../assets/mygov.png";
// import sugurta from "../assets/sugurta.jpg";
// import brending from "../assets/brending.jpeg";
// import ishonchnoma from "../assets/ishonchnoma.jpg";
// import logo from "../assets/logo1.jpg";

// const services = [
//   {
//     image: litsenziya,
//     title: "LITSENZIYA",
//     desc: "Avtomobil transportida yo‘lovchilarni va yuklarni tashishga litsenziya olish",
//     docs: "Kerak bo'ladigan hujjatlar",
//     info: "Texpasport va haydovchilik guvohnomasi",
//   },
//   {
//     image: sugurta,
//     title: "SUG'URTA",
//     desc: "Avtomobil transporti uchun sug'urta polislarini olish",
//     docs: "Kerak bo'ladigan hujjatlar",
//     info: "Texpasport va haydovchilik guvohnomasi",
//   },
//   {
//     image: brending,
//     title: "BRENDING RUXSATNOMA",
//     desc: "Avtomobil transportini brending qilish uchun ruxsatnoma olish",
//     docs: "Kerak bo'ladigan hujjatlar",
//     info: "Texpasport va haydovchilik guvohnomasi",
//   },
//   {
//     image: ishonchnoma,
//     title: "ISHONCHNOMA",
//     desc: "Avtomobil transportini boshqarish uchun ishonchnoma olish",
//     docs: "Kerak bo'ladigan hujjatlar",
//     info: "Texpasport va haydovchilik guvohnomasi",
//   },
//   {
//     image: logo,
//     title: "Press taxi haydovchisi bo'lish",
//     desc: "Press taxi hamkori sifatida ishlash uchun ariza berish",
//     docs: "Kerak bo'ladigan hujjatlar",
//     info: "Texpasport va haydovchilik guvohnomasi",
//   },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0 },
// };

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 5000,
//   pauseOnHover: false,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: "unslick"
//     }
//   ],
// };

// const Xizmatlar = () => {
//   return (
//     <div className="bg-gradient-to-b from-white to-gray-100 py-20 px-4">
//       <div className="max-w-7xl mx-auto text-center">
//         <motion.h2
//           className="text-5xl font-bold text-yellow-400 mb-3"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           PRESS TAXI
//         </motion.h2>
//         <motion.h2
//           className="text-3xl font-bold text-gray-800 mb-12"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           Xizmatlar bo‘limi
//         </motion.h2>

//         <div className="hidden md:block">
//           <Slider {...settings}>
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 variants={cardVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="p-4"
//               >
//                 <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-[400px] flex flex-col">
//                   <div className="h-48 overflow-hidden">
//                     <img
//                       src={service.image}
//                       alt={service.title}
//                       className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                     />
//                   </div>
//                   <div className="p-5 text-left flex-1 flex flex-col justify-between">
//                     <div>
//                       <h3 className="text-xl font-bold text-gray-800 mb-2 uppercase">
//                         {service.title}
//                       </h3>
//                       <p className="text-base text-gray-600 mb-3 flex items-start gap-2">
//                         <FaFileAlt className="text-yellow-500 mt-1" /> {service.desc}
//                       </p>
//                     </div>
//                     <div>
//                       <h4 className="text-base font-semibold text-gray-700 flex items-center gap-2">
//                         <FaRegIdCard className="text-yellow-500" /> {service.docs}
//                       </h4>
//                       <p className="text-base text-gray-600 mt-1">{service.info}</p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </Slider>
//         </div>

//         <div className="grid grid-cols-1 gap-8 md:hidden">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-[400px] flex flex-col"
//             >
//               <div className="h-48 overflow-hidden">
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                 />
//               </div>
//               <div className="p-5 text-left flex-1 flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-800 mb-2 uppercase">
//                     {service.title}
//                   </h3>
//                   <p className="text-base text-gray-600 mb-3 flex items-start gap-2">
//                     <FaFileAlt className="text-yellow-500 mt-1" /> {service.desc}
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="text-base font-semibold text-gray-700 flex items-center gap-2">
//                     <FaRegIdCard className="text-yellow-500" /> {service.docs}
//                   </h4>
//                   <p className="text-base text-gray-600 mt-1">{service.info}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Xizmatlar;



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

const services = [
  {
    image: litsenziya,
    title: "LITSENZIYA",
    desc: "Avtomobil transportida yo‘lovchilarni va yuklarni tashishga litsenziya olish",
    docs: "Kerak bo'ladigan hujjatlar",
    info: "Texpasport va haydovchilik guvohnomasi",
  },
  {
    image: sugurta,
    title: "SUG'URTA",
    desc: "Avtomobil transporti uchun sug'urta polislarini olish",
    docs: "Kerak bo'ladigan hujjatlar",
    info: "Texpasport va haydovchilik guvohnomasi",
  },
  {
    image: brending,
    title: "BRENDING RUXSATNOMA",
    desc: "Avtomobil transportini brending qilish uchun ruxsatnoma olish",
    docs: "Kerak bo'ladigan hujjatlar",
    info: "Texpasport va haydovchilik guvohnomasi",
  },
  {
    image: ishonchnoma,
    title: "ISHONCHNOMA",
    desc: "Avtomobil transportini boshqarish uchun ishonchnoma olish",
    docs: "Kerak bo'ladigan hujjatlar",
    info: "Texpasport va haydovchilik guvohnomasi",
  },
  {
    image: logo,
    title: "Press taxi haydovchisi bo'lish",
    desc: "Press taxi hamkori sifatida ishlash uchun ariza berish",
    docs: "Kerak bo'ladigan hujjatlar",
    info: "Texpasport va haydovchilik guvohnomasi",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

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
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 py-20 px-4">
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
          Xizmatlar bo‘limi
        </motion.h2>

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
                <div className="bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 transform h-[400px] flex flex-col group hover:bg-blue-500 hover:shadow-xl hover:-translate-y-2">
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