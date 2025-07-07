import { useEffect, useState } from "react";
import Navbar from "./conponents/Navbar";
import Header from "./conponents/Header";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./assets/logo1.jpg"; // ← Sizning logotipingiz
import About from "./conponents/About";
import Bonus from "./conponents/Bonus";
import Bonussection from "./conponents/Bonussection";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Sahifa yuklangandan so‘ng 2.5 soniyada loading tugaydi
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={logo}
              alt="Logo"
              className="w-62 h-62 mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.p
              className="text-gray-800 text-xl font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <div className="overflow-x-hidden">
          <Navbar />
          <Header />
          <About />
          <Bonus />
          <Bonussection />
        </div>
      )}
    </>
  );
}

export default App;
