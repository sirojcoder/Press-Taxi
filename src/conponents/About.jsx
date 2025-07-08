// import ofis from '../assets/ofis.jpg';
// import logo from '../assets/logo.jpg';
// import { motion } from "framer-motion";
// import { SiAboutdotme } from "react-icons/si";

// function About (){
//     return (
//        <div className='container mx-auto mt-[100px] mb-7 w-[860px]'>
//       <div className='flex justify-between items-center gap-14'>

//         {/* Rasm */}
//         <div className="relative w-[1200px] h-[300px]">
//           <img
//             src={ofis}
//             alt="logo"
//             className="w-full h-full rounded-[16px] object-cover"
//           />

//           {/* 2000+ animatsiyali box */}
//           <motion.div
//             className='absolute bg-white w-[160px] border border-yellow-400 flex flex-col justify-center items-center h-[74px] rounded-lg -left-[38px] -top-[39px]'
//             animate={{ scale: [1, 1.05, 1] }}
//             transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
//           >
//             <b className='text-[28px] text-yellow-500'>2000+</b>
//             <p className='text-[12px] text-gray-400 font-semibold'>Mamnun xaydovchilar</p>
//           </motion.div>

//           {/* Sariq harakatlanuvchi chiziq */}
//           <motion.div
//             className='w-[14px] h-[160px] rounded-lg bg-yellow-400 absolute -left-[35px] bottom-[14px]'
//             animate={{ y: [-4, 4, -4] }}
//             transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//           />
//         </div>

//         {/* Matn va aloqa qismi */}
//         <div className='w-[900px]'>
//           <div>
//             <div className='flex items-end gap-4'>
//                 <SiAboutdotme  className='text-[34px]'/>
//                 <p>BIZ HAQIMIZDA.</p>
//             </div>
//             <h3 className='text-[55px] text-yellow-500'>Press Taxi</h3>
//             <p className='text-[20px] text-gray-400'><span className='text-red-500 text-[24px] font-semibold'>Y</span><span className='text-gray-900'>andex</span> <span className='bg-black rounded-[9px]  text-white'>Go</span> ning rasmiy hamkori</p>
//             <p className='text-[12px] text-gray-500 mt-2'>
//               Hozirda Toshkent shaxrida va Viloyatlarida bir nechta ofislarimiz bor va haydovchilarga 24/7 xizmat ko'rsatib kelyabmiz
//             </p>
//           </div>

//           <div className='flex gap-5 mt-4 items-center'>
//             <img src={logo} alt="" className='w-[50px] h-[50px] rounded-full' />
//             <div>
//               <p>Aloqa markazi</p>
//               <b>+998(77)3171313</b>
//             </div>
             
//             <motion.div key={`button`} className="flex justify-center mb-8 md:justify-start relative inline-block group">
//               <motion.div
//                 initial={{ y: 10, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
//                 className="absolute top-1 left-1 w-full h-[47px] border-2 md:mt-8 border-yellow-400 z-0 transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-in-out pointer-events-none"
//               />
//               <motion.button
//                 initial={{ y: 50, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.6, duration: 0.8 }}
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0px -2px 10px rgba(255,255,255,0.5)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="relative z-10 bg-yellow-400 text-gray-900 px-2 py-2 md:mt-9 font-semibold text-md sm:text-lg"
//               >
//                 About more 
//               </motion.button>
//             </motion.div>
//           </div>

//         </div>
//       </div>
//     </div>
//     )
// }
// export default About;

import ofis from '../assets/ofis.jpg';
import logo from '../assets/logo.jpg';
import shaxmat from '../assets/shaxmat.png';
import { motion} from "framer-motion";
import { useEffect, useState } from "react";

import { SiAboutdotme } from "react-icons/si";
import { BiPhoneCall } from "react-icons/bi";

import { useInView } from "react-intersection-observer";



function About() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
   <div>
       <div ref={ref} className="container mx-auto mt-[80px] md:w-[960px] px-4 mb-14">
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
          <div>
            <div className="flex items-center gap-3 mb-2">
              <SiAboutdotme className="text-[28px] sm:text-[34px]" />
              <p className="text-[14px] sm:text-[16px] text-gray-700">BIZ HAQIMIZDA.</p>
            </div>

            <h3 className="text-[32px] sm:text-[42px] lg:text-[55px] text-yellow-500 font-bold leading-tight">
              Press Taxi
            </h3>

            <p className="text-[16px] sm:text-[18px] text-gray-400 mt-2">
              <span className="text-red-500 text-[20px] font-semibold">Y</span>
              <span className="text-gray-900">andex</span>{' '}
              <span className="bg-black rounded-[6px] text-white px-1">Go</span> ning rasmiy hamkori
            </p>

            <p className="text-[13px] sm:text-[14px] text-gray-500 mt-3 border-b border-gray-100 pb-2 leading-relaxed">
              Hozirda Toshkent shahrida va viloyatlarida bir nechta ofislarimiz bor va haydovchilarga 24/7 xizmat ko‘rsatib kelyapmiz...
            </p>
          </div>

          {/* CONTACT + BUTTON */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 items-center sm:items-start">
            <div className="flex items-center relative gap-3">
              <img src={logo} alt="aloqa" className="w-[45px] h-[45px] rounded-full" />
              <div>
                    <p className="text-[12px] sm:text-[13px] text-gray-500">Aloqa markazi</p>
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
                className="absolute top-1 left-1 w-full h-[34px] border-2 border-yellow-400 z-0 transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-in-out pointer-events-none"
              />
              <motion.button
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
                About more
              </motion.button>
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
