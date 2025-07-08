import { motion } from "framer-motion";
import { FaCertificate, FaShieldAlt, FaStamp } from "react-icons/fa";

const services = [
  {
    title: "Litsenziya qilish",
    price: "380 000 so'm",
    icon: <FaCertificate className="text-4xl text-yellow-500" />,
    color: "from-yellow-100 to-yellow-50",
  },
  {
    title: "Sug'urta",
    price: "100 000 so'm",
    icon: <FaShieldAlt className="text-4xl text-blue-500" />,
    color: "from-blue-100 to-blue-50",
  },
  {
    title: "Brending ruxsatnoma",
    price: "900 000 so'm",
    icon: <FaStamp className="text-4xl text-green-500" />,
    color: "from-green-100 to-green-50",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Xizmatlar = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-4xl font-bold text-yellow-400 mb-7"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          PRESS TAXI
        </motion.h2>
         <motion.h2
          className="text-3xl md:text-3xl font-bold text-gray-800 mb-7"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Xizmatlarimiz bo‘limi
        </motion.h2>

        {/* Cardlar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`rounded-2xl bg-gradient-to-br ${service.color} p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300`}
            >
              <div className="flex flex-col items-center gap-4">
                <div>{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-lg text-green-600 font-bold">
                  {service.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Xizmatlar;
