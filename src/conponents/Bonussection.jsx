// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// function Bonussection() {
//   const [scrollPercent, setScrollPercent] = useState(0);
//   const [showIndicator, setShowIndicator] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const docHeight = document.body.scrollHeight - window.innerHeight;
//       const scrolled = Math.round((scrollTop / docHeight) * 100);

//       setScrollPercent(scrolled);
//       setShowIndicator(scrollTop > 20); // scroll bo'lsa ko'rsatish
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const circleRadius = 28;
//   const circumference = 2 * Math.PI * circleRadius;
//   const progress = (scrollPercent / 100) * circumference;

//   return (
//     <AnimatePresence>
//       {showIndicator && (
//         <motion.div
//           className="fixed bottom-6 right-6 z-50"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 30 }}
//           transition={{ duration: 0.5 }}
//         >
//        <div className="relative w-[52px] h-[52px]">
//   {/* SVG Border - tashqarida ko‘rinadigan aylana */}
//   <svg
//     className="absolute -top-[3px] -left-[3px] w-[58px] h-[58px] z-0"
//     viewBox="0 0 64 64"
//   >
//     <circle
//       cx="32"
//       cy="32"
//       r={circleRadius}
//       stroke="black"
//       strokeWidth="4"
//       fill="none"
//       className="opacity-20"
//     />
//     <motion.circle
//       cx="32"
//       cy="32"
//       r={circleRadius}
//       stroke="black"
//       strokeWidth="4"
//       fill="none"
//       strokeDasharray={circumference}
//       strokeDashoffset={circumference - progress}
//       strokeLinecap="round"
//       initial={false}
//       animate={{ strokeDashoffset: circumference - progress }}
//       transition={{ duration: 0.2 }}
//     />
//   </svg>

//   {/* Ichki sariq tugma */}
//   <div className="w-[52px] h-[52px] bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-xs z-10 shadow-md relative">
//     {scrollPercent}%
//   </div>
// </div>

//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// export default Bonussection;
