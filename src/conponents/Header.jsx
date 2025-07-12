

import { motion } from "framer-motion";
import { FaFirstOrder } from "react-icons/fa";
import moshina from "../assets/moshina.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [refresh, setRefresh] = useState(false);

  // Auto-refresh every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRefresh(prev => !prev);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative text-white overflow-hidden h-auto md:h-[500px] mt-24" id="home">
      {/* Diagonal lines background similar to Windows activation */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Yellow Bars - Dekor */}
      <div className="hidden md:flex absolute right-[20%] top-1/2 -translate-y-1/2 gap-[3px]">
        <motion.div 
          className="w-[20px] md:w-[40px] h-[300px] md:h-[500px] bg-yellow-400 opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div 
          className="w-[20px] md:w-[40px] h-[300px] md:h-[500px] bg-yellow-400 opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.7 }}
        />
      </div>

      <div className="container mx-auto w-10/12 py-8 md:py-12 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-4">
          {/* Text section */}
          <div className="flex-1 text-center md:text-left">
            <motion.p 
              key={`yandex-${refresh}`}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="flex justify-center md:justify-start items-center gap-2 text-lg mb-4"
            >
              <span className="text-3xl text-yellow-500">
                <FaFirstOrder />
              </span>
              Yandex Go <span className="text-[12px] pt-1">Rasmiy hamkori</span>
            </motion.p>
            
            <motion.h1 
              key={`press-${refresh}`}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-[64px] sm:text-5xl lg:text-[110px] font-bold leading-tight mb-4"
            >
              Press Taxi <br />
              <motion.span 
                key={`welcome-${refresh}`}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                whileHover={{ color: "#fbbf24" }}
                className="block text-yellow-400 text-3xl sm:text-5xl mt-2"
              >
                Xush kelibsiz!
              </motion.span>
            </motion.h1>
            
            <motion.div key={`button-${refresh}`} className="flex justify-center md:justify-start relative inline-block group">
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                className="absolute top-1 left-1 w-full h-[55px] border-2 md:mt-8 border-yellow-400 z-0 transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-in-out pointer-events-none"
              />
           <motion.a
              href="tel:+998712009666"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px -2px 10px rgba(255,255,255,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 bg-yellow-400 text-gray-900 px-6 py-3 md:mt-9 font-semibold text-md sm:text-lg inline-block"
            >
              BOG'LANISH
            </motion.a>

            </motion.div>
          </div>

          {/* Car image */}
          <motion.div 
            className="flex-1 flex justify-center md:justify-end relative h-[250px] md:h-[375px]"
          >
            <motion.img 
              src={moshina} 
              alt="moshina" 
              className="w-[400px] sm:w-[500px] md:w-[650px] h-auto object-contain"
              animate={{ 
                x: [0, 3, -3, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
