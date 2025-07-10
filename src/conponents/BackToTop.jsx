import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 100); // 100px scroll bo‘lsa ko‘rsin
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-7 right-6 z-50"
    >
      <button
        onClick={scrollToTop}
        className="bg-yellow-400 hover:bg-yellow-700 text-white p-3 rounded-full shadow-lg transition-all duration-300"
        aria-label="Back to top"
      >
        <FaArrowUp size={20} />
      </button>
    </motion.div>
  );
};

export default BackToTop;
