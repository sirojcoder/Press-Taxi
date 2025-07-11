

// import React, { useState } from "react";
// import logo from "../assets/logo1.jpg";
// import { IoLocationSharp, IoCarSport, IoCall } from "react-icons/io5";
// import { FaChevronDown, FaTelegram, FaInstagram, FaBars } from "react-icons/fa";
// import { BsSearch } from "react-icons/bs";
// import { MdExitToApp } from "react-icons/md";


// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       {/* TOP INFO BAR */}
//        <div className="bg-[#FED100] hidden md:flex py-[2px] overflow-hidden whitespace-nowrap">
//       <motion.div
//         className="flex items-center gap-8 w-max"
//         animate={{ x: ["100%", "-100%"] }}
//         transition={{
//           repeat: Infinity,
//           duration: 20,
//           ease: "linear",
//         }}
//       >
//         <span className="flex items-center ">
//           <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//             />
//           </svg>
//           PressTaxi@gmail.com
//         </span>

//         <div className="flex items-center gap-2">
//           <FaTelegram />
//           <span>@PressTaxi_chilonzor</span>
//         </div>

//         {["Chilonzor", "Samarqand", "Yunisobot", "Sergili"].map((loc, idx) => (
//           <div key={idx} className="flex items-center">
//             <div className="border rounded-full w-[22px] h-[22px] flex items-center justify-center">
//               <IoLocationSharp className="w-[15px] h-[15px]" />
//             </div>
//             <span>{loc}</span>
//           </div>
//         ))}

//         <div className="flex items-center gap-2">
//           <IoCall />
//           +998773171313
//         </div>
//       </motion.div>
//     </div>
//       {/* MAIN NAV */}
//       <div className="bg-gradient-to-r from-white from-66% to- py-1 mx-auto">
//         <div className="mx-auto w-10/12 flex justify-between items-center py-1">
//           <div className="flex items-center space-x-2">
//             <img src={logo} alt="" className="w-[100px] h-[80px]" />
//           </div>

//           {/* Desktop menu */}
//           <div className="hidden md:flex space-x-8">
//             <a href="#" className="font-medium text-yellow-400 hover:text-yellow-400">BIZ HAQIMIZDA</a>
//             <div className="relative group">
//               <div className="font-medium hover:text-yellow-400 flex items-center cursor-pointer">
//                 XIZMATLAR
//                 <FaChevronDown className="ml-1 group-hover:rotate-180 transition-transform" />
//               </div>
//               <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-600">
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-yellow-400">Litsenziya</a>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-yellow-400">Sug'urta</a>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-yellow-400">Ishonchnoma</a>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-yellow-400">Branding ruxsatnoma</a>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-yellow-400">Online ulanish</a>
//               </div>
//             </div>

//             <div className="relative group">
//               <div className="font-medium hover:text-yellow-400 flex items-center cursor-pointer">
//                 BONUSLAR
//                 <FaChevronDown className="ml-1 group-hover:rotate-180 transition-transform" />
//               </div>
//               <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-600">
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-yellow-400">Cobalt Bonus</a>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-yellow-400">Oylik Bonus</a>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-yellow-400">Brendlash Bonus</a>
//               </div>
//             </div>

//             <a href="#" className="font-medium hover:text-yellow-400">OFISLAR</a>
//             <a href="#" className="font-medium hover:text-yellow-400">CONTACT</a>
          

//           </div>

//           {/* BUTTONS */}
//           <div className="flex items-center space-x-4">
//            <div className="relative inline-block group">
//   {/* Pastki chiziqli "outline" effekt */}
//   <div className="absolute top-1 left-1 w-full h-full border-2 border-yellow-400 z-0 transform group-hover:translate-x-0 group-hover:translate-y-0 translate-x-1 translate-y-1 transition-all duration-300 ease-in-out" />

//   {/* Asosiy tugma */}
//   <button className="relative  bg-yellow-400 text-black font-semibold px-6 py-2   flex items-center gap-2 uppercase tracking-wide">
//     <IoCarSport className="w-[20px] h-[20px]" />
//      PRESS TAXI
//   </button>
// </div>



//             {/* Mobile Menu Button */}
//             <button className="md:hidden  text-yellow-400" onClick={() => setIsOpen(true)}>
//               <FaBars size={32} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* OVERLAY & SIDEBAR */}
  
// <AnimatePresence>
//   {isOpen && (
//     <>
//       {/* Overlay (opacity oshirildi 0.6 ga) */}
//       <motion.div
//         className="fixed inset-0 bg-white/40  z-40"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         onClick={() => setIsOpen(false)}
//       />

//       {/* Sidebar */}
//       <motion.div
//         className="fixed top-0 right-0 w-56 h-full  bg-gradient-to-r from-gray-900 to-gray-800 z-50 shadow-lg px-6 py-4 flex flex-col space-y-4"
//         initial={{ x: "100%" }}
//         animate={{ x: 0 }}
//         exit={{ x: "100%" }}
//         transition={{ type: "spring", stiffness: 300, damping: 30 }}
//       >
//         {/* X Close button */}
//         <div className="flex justify-end">
//           <button
//             className="text-yellow-500 text-4xl    font-bold"
//             onClick={() => setIsOpen(false)}
//           >
//             <MdExitToApp />

//           </button>
//         </div>

//         <img src={logo} alt="logo" className="w-[100px] h-[100px] " />

//         <a href="#" className="text-yellow-500 font-semibold border-b">ABOUT US</a>

//         {/* SERVICES dropdown in mobile */}
//         <details className="text-yellow-500 font-semibold">
//           <summary className="cursor-pointer border-b py-1">SERVICES</summary>
//           <div className="pl-4 space-y-1 text-sm">
//             <a href="#" className="block ">Online ulanish</a>
//             <a href="#" className="block">Ofline ulaning</a>
//             <a href="#" className="block">Press Taxi</a>
//           </div>
//         </details>

//         {/* BONUSLAR dropdown in mobile */}
//         <details className="text-yellow-500 font-semibold">
//           <summary className="cursor-pointer border-b py-1">BONUSLAR</summary>
//           <div className="pl-4 space-y-1 text-sm">
//             <a href="#" className="block">Oylik Bonus</a>
//             <a href="#" className="block">Brendlash Bonus</a>
//             <a href="#" className="block">Cobalt Bonus</a>
//           </div>
//         </details>

//         <a href="#" className="text-yellow-500 font-semibold border-b">BLOG</a>
//         <a href="#" className="text-yellow-500 font-semibold border-b">CONTACT</a>

//         <div className=" pt-4 mt-4 space-y-2">
//           <div className="flex border p-2 rounded-full justify-center items-center  items-center gap-2 text-yellow-500">
//             <FaInstagram  className="" /> PressTaxi
//           </div>
//           <div className="flex border p-2 rounded-full justify-center items-center gap-2 text-yellow-500">
//             <FaTelegram /> PressTaxi
//           </div>
//           <div className="flex border p-2 rounded-full justify-center items-center gap-2 text-yellow-500">
//             <IoCall /> 773171313
//           </div>
//         </div>
//       </motion.div>
//     </>
//   )}
// </AnimatePresence>

//     </div>
//   );
// };

// export default Navbar;






import React, { useState } from "react";
import logo from "../assets/logo1.jpg";
import { IoLocationSharp, IoCarSport, IoCall } from "react-icons/io5";
import { FaChevronDown, FaTelegram, FaInstagram, FaBars } from "react-icons/fa";
// import { BsSearch } from "react-icons/bs";
import { MdExitToApp } from "react-icons/md";
import { Modal, Button } from "antd";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);

  const [modalVisible, setModalVisible] = useState(false); // online modal
  const [offlineModalVisible, setOfflineModalVisible] = useState(false); // offline modal

  return (
    <div>
  

      {/* MAIN NAV */}
      <div className="bg-gradient-to-r from-white from-66% to- py-1 mx-auto">
        <div className="mx-auto w-10/12 flex justify-between items-center py-1">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="" className="w-[100px] h-[80px]" />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="font-medium text-yellow-400 hover:text-yellow-400">BIZ HAQIMIZDA</a>
            <div className="relative group">
              <div className="font-medium hover:text-yellow-400 flex items-center cursor-pointer">
                XIZMATLAR
                <FaChevronDown className="ml-1 group-hover:rotate-180 transition-transform" />
              </div>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-600">
                <button onClick={() => setModalVisible(true)} className="block w-full text-left px-4 py-2 hover:bg-gray-100 hover:text-yellow-400">Online ulanish</button>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-yellow-400">Litsenziya</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-yellow-400">Sug'urta</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-yellow-400">Ishonchnoma</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-yellow-400">Branding ruxsatnoma</a>
              </div>
            </div>

            <div className="relative group">
              <div className="font-medium hover:text-yellow-400 flex items-center cursor-pointer">
                BONUSLAR
                <FaChevronDown className="ml-1 group-hover:rotate-180 transition-transform" />
              </div>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-600">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-yellow-400">Cobalt Bonus</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-yellow-400">Oylik Bonus</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-yellow-400">Brendlash Bonus</a>
              </div>
            </div>
     
            <a href="#" className="font-medium hover:text-yellow-400">OFISLAR</a>
            <a href="#" className="font-medium hover:text-yellow-400">CONTACT</a>   
                

          </div>

          {/* BUTTONS */}
          <div className="flex items-center space-x-4">
            <div className="relative inline-block group">
              <div className="absolute top-1 left-1 w-full h-full  border-2 border-yellow-400 z-0 transform group-hover:translate-x-0 group-hover:translate-y-0 translate-x-1 translate-y-1 transition-all duration-300 ease-in-out" />
             <button
                onClick={() => setModalVisible(true)}
                className="relative bg-yellow-400 text-white hover:text-gray-200   font-semibold px-4 py-2 md:px-6 md:py-2 flex items-center gap-2 uppercase tracking-wide text-sm md:text-base hover:bg-yellow-500 transition duration-300"
              >
                <IoCarSport className="w-4 h-4 md:w-5 md:h-5 hover:text-white" />
                ONLINE ULANISH
              </button>

            </div>
            <button className="md:hidden text-yellow-400" onClick={() => setIsOpen(true)}>
              <FaBars size={32} />
            </button>
          </div>
        </div>
      </div>

      {/* OVERLAY & SIDEBAR */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-white/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 w-56 h-full bg-gradient-to-r from-gray-900 to-gray-800 z-50 shadow-lg px-6 py-4 flex flex-col space-y-4"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex justify-end">
                <button className="text-yellow-500 text-4xl font-bold" onClick={() => setIsOpen(false)}>
                  <MdExitToApp />
                </button>
              </div>
              <img src={logo} alt="logo" className="w-[100px] h-[100px]" />
              <a href="#" className="text-yellow-500 font-semibold border-b">ABOUT US</a>
              <details className="text-yellow-500 font-semibold">
                <summary className="cursor-pointer border-b py-1">SERVICES</summary>
                <div className="pl-4 space-y-1 text-sm">
                 <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-yellow-400">Litsenziya</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-yellow-400">Sug'urta</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-yellow-400">Ishonchnoma</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-yellow-400">Branding ruxsatnoma</a>

                </div>
              </details>
              <details className="text-yellow-500 font-semibold">
                <summary className="cursor-pointer border-b py-1">BONUSLAR</summary>
                <div className="pl-4 space-y-1 text-sm">
                  <a href="#" className="block">Oylik Bonus</a>
                  <a href="#" className="block">Brendlash Bonus</a>
                  <a href="#" className="block">Cobalt Bonus</a>
                </div>
              </details>
              <a href="#" className="text-yellow-500 font-semibold border-b">OFISLAR</a>
              <a href="#" className="text-yellow-500 font-semibold border-b">CONTACT</a>
                  <button
                  onClick={() => setModalVisible(true)}
                  className="font-medium text-yellow-400 hover:text-yellow-500 border border-yellow-400 mt-11 rounded px-4 py-1 transition duration-200"
                >
                  ONLINE ULANISH
                </button>
                <button onClick={() => setOfflineModalVisible(true)} className="font-medium text-yellow-400 hover:text-yellow-500 border border-yellow-400 rounded px-4 py-1 transition duration-200">
                OFLINE ULANISH
              </button>

              <div className="pt-4 mt-4 space-y-2">
                <div className="flex border p-2 rounded-full justify-center items-center gap-2 text-yellow-500">
                  <FaInstagram /> PressTaxi
                </div>
                <div className="flex border p-2 rounded-full justify-center items-center gap-2 text-yellow-500">
                  <FaTelegram /> PressTaxi
                </div>
                <div className="flex border p-2 rounded-full justify-center items-center gap-2 text-yellow-500">
                  <IoCall /> 712009666
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* MODAL */}
   <Modal
  title={
    <div className="flex items-center justify-center gap-2 text-xl font-semibold text-gray-800">
      
      O'zingizga qulayni tanlang
    </div>
  }
  open={modalVisible}
  onCancel={() => setModalVisible(false)}
  footer={null}
  centered
  bodyStyle={{ paddingTop: 16 }}
>
  <div className="flex flex-col space-y-4 text-center">

    <a
      href="https://t.me/Presstaxi_chilonzor"
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-center gap-2 bg-[#229ED9] hover:bg-[#1b8fca] text-white px-4 py-3 rounded-lg shadow-md transition duration-300"
    >
      <FaTelegram size={20} />
      Telegram orqali ulanish
    </a>

    <a
      href="tel:+998712009666"
      className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg shadow-md transition duration-300"
    >
      <IoCall size={20} />
      Telefon orqali ulanish
    </a>

  </div>
</Modal>
<Modal
  title={
    <div className="flex items-center gap-2 text-xl font-semibold text-gray-800">
      <IoLocationSharp className="text-yellow-500" />
      Ofislar manzili
    </div>
  }
  open={offlineModalVisible}
  onCancel={() => setOfflineModalVisible(false)}
  footer={null}
  centered
>
  <div className="space-y-4">
    {[
      { name: "Chilonzor filiali", address: "Chilonzor Cho'ponota 8" },
      { name: "Yunusobod filiali", address: "Yunusobod-6, 12-uy, Toshkent" },
      { name: "Sergeli filiali", address: "Sergeli-7A, PressTaxi ofisi" },
      { name: "Samarqand filiali", address: "Samarqand sh., Registon ko'chasi 45" },
    ].map((office, idx) => (
      <div
        key={idx}
        className="border border-yellow-400 p-4 rounded-lg shadow-sm hover:shadow-md transition"
      >
        <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <IoLocationSharp className="text-yellow-400" /> {office.name}
        </h4>
        <p className="text-gray-600 text-sm ml-6">{office.address}</p>
      </div>
    ))}
  </div>
</Modal>


    </div>
  );
};

export default Navbar;
