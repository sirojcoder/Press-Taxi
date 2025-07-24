



import React, { useState } from "react";
import logo from "../assets/logo1.jpg";
import { IoLocationSharp, IoCarSport, IoCall } from "react-icons/io5";
import { FaChevronDown, FaTelegram, FaInstagram, FaBars } from "react-icons/fa";
import { MdExitToApp } from "react-icons/md";
import { Modal } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [offlineModalVisible, setOfflineModalVisible] = useState(false);
  const { t } = useTranslation();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-white from-66% to- py-1 mx-auto fixed top-0 left-0 right-0 z-50 shadow-md bg-white">
        <div className="mx-auto w-10/12 flex justify-between items-center py-1">
          <div className="flex items-center space-x-2">
            <a href="#home" className="block">
              <img src={logo} alt="Press Taxi Logo" className="w-[100px] h-[80px]" />
            </a>
          </div>

          <div className="hidden md:flex space-x-8">
            <a
              href="#"
              onClick={() => scrollToSection("bizhaqimizda-qismi")}
              className="font-medium text-yellow-400 hover:text-yellow-400"
            >
              {t("about")}
            </a>

            <div className="font-medium hover:text-yellow-400 cursor-pointer" onClick={() => scrollToSection("xizmatlar-qismi")}>{t("services")}</div>
            <div className="font-medium hover:text-yellow-400 cursor-pointer" onClick={() => scrollToSection("bonuses-qismi")}>{t("bonuses")}</div>
           
            <a
              href="#"
              onClick={() => scrollToSection("contact-qismi")}
              className="font-medium hover:text-yellow-400"
            >
              {t("contact")}
            </a>
            <LanguageSwitcher />
          </div>

          <div className="flex items-center space-x-4">
       <div className="relative inline-block group mr-7">
  {/* CHEGARA DIV */}
  <div className="hidden md:block absolute top-1 left-1 w-full h-full border-2 border-yellow-400 z-0 pointer-events-none transform group-hover:translate-x-0 group-hover:translate-y-0 translate-x-1 translate-y-1 transition-all duration-300 ease-in-out" />

  {/* TUGMA */}
  <button
    onClick={() => setModalVisible(true)}
    className="hidden md:flex bg-yellow-400 text-white hover:text-gray-200 font-semibold px-4 py-2 md:px-6 md:py-2 items-center gap-2 uppercase tracking-wide text-sm md:text-base hover:bg-yellow-500 transition duration-300"
  >
    <IoCarSport className="hidden md:inline-block w-4 h-4 md:w-5 md:h-5 hover:text-white" />
    {t("onlineConnect")}
  </button>
</div>

            <div className="md:hidden">
              <LanguageSwitcher />
            </div>
            <button className="md:hidden text-yellow-400" onClick={() => setIsOpen(true)}>
              <FaBars size={32} />
            </button>
          </div>
        </div>
      </div>

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
              <img src={logo} alt="logo" className="w-[90px] h-[60px] absolute top-2" />
              <div className="flex flex-col mt-9 gap-4">
                <a href="#" onClick={() => { scrollToSection("bizhaqimizda-qismi"); setIsOpen(false); }} className="text-yellow-500 font-semibold border-b">{t("about")}</a>
                <a href="#" onClick={() => { scrollToSection("xizmatlar-qismi"); setIsOpen(false); }} className="text-yellow-500 font-semibold border-b">{t("services")}</a>
                <a href="#" onClick={() => { scrollToSection("bonuses-qismi"); setIsOpen(false); }} className="text-yellow-500 font-semibold border-b">{t("bonuses")}</a>
                <a href="#" onClick={() => { scrollToSection("ofislar-qismi"); setIsOpen(false); }} className="text-yellow-500 font-semibold border-b">{t("offices")}</a>
                <a href="#" onClick={() => { scrollToSection("contact-qismi"); setIsOpen(false); }} className="text-yellow-500 font-semibold border-b">{t("contact")}</a>
              </div>
              <button onClick={() => setModalVisible(true)} className="font-medium text-yellow-400 hover:text-yellow-500 border border-yellow-400 mt-11 rounded px-4 py-1 transition duration-200">{t("onlineConnect")}</button>
              <button onClick={() => setOfflineModalVisible(true)} className="font-medium text-yellow-400 hover:text-yellow-500 border border-yellow-400 rounded px-4 py-1 transition duration-200">{t("offlineConnect")}</button>
              <div className="pt-4 mt-4 space-y-2">
                <a href="https://instagram.com/press.taxi" target="_blank" rel="noopener noreferrer" className="flex border p-2 rounded-full justify-center items-center gap-2 text-yellow-500 hover:bg-yellow-100 transition"><FaInstagram size={22} /> {t("instagram")}</a>
                <a href="https://t.me/Presstaxi_chilonzor" target="_blank" rel="noopener noreferrer" className="flex border p-2 rounded-full justify-center items-center gap-2 text-yellow-500 hover:bg-yellow-100 transition"><FaTelegram size={22} /> {t("telegram")}</a>
                <a href="tel:+998712009666" className="flex border p-2 rounded-full justify-center items-center gap-2 text-yellow-500 hover:bg-yellow-100 transition"><IoCall size={20} /> {t("callCenter")}</a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Modal
        title={<div className="flex items-center justify-center gap-2 text-xl font-semibold text-gray-800">{t("connectTitle")}</div>}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        centered
        bodyStyle={{ paddingTop: 16 }}
      >
        <div className="flex flex-col space-y-4 text-center">
          <a href="https://t.me/Presstaxi_chilonzor" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-[#229ED9] hover:bg-[#1b8fca] text-white px-4 py-3 rounded-lg shadow-md transition duration-300"><FaTelegram size={20} /> {t("telegramConnect")}</a>
          <a href="tel:+998712009666" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg shadow-md transition duration-300"><IoCall size={20} /> {t("phoneInfo")}</a>
        </div>
      </Modal>

      <Modal
        title={<div className="flex items-center gap-2 text-xl font-semibold text-gray-800"><IoLocationSharp className="text-yellow-500" /> {t("officeModalTitle")}</div>}
        open={offlineModalVisible}
        onCancel={() => setOfflineModalVisible(false)}
        footer={null}
        centered
      >
        <div className="space-y-4">
          {[
            { name: `Chilonzor ${t("branch")}`, address: "Chilonzor Cho'ponota 8" },
            { name: `Yunusobod ${t("branch")}`, address: "Yunusobod-6, 12-uy, Toshkent" },
           
           
          ].map((office, idx) => (
            <div key={idx} className="border border-yellow-400 p-4 rounded-lg shadow-sm hover:shadow-md transition">
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
