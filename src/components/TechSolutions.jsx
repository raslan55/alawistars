import {
  FaNetworkWired,
  FaServer,
  FaShieldAlt,
  FaLaptop,
  FaTools,
  FaCogs,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const solutions = [
  {
    id: 1,
    title: "pc",
    icon: <FaLaptop className="w-7 h-7" />,
    description: "Pc_text",
  },
  {
    id: 2,
    title: "OS",
    icon: <FaCogs className="w-7 h-7" />,
    description: "Os_text",
  },
  {
    id: 3,
    title: "PS",
    icon: <FaShieldAlt className="w-7 h-7" />,
    description: "PS_text",
  },
  {
    id: 4,
    title: "Ha",
    icon: <FaTools className="w-7 h-7" />,
    description: "Ha_text",
  },
  {
    id: 5,
    title: "LAN",
    icon: <FaNetworkWired className="w-7 h-7" />,
    description: "LAN_text",
  },
  {
    id: 6,
    title: "WAN",
    icon: <FaServer className="w-7 h-7" />,
    description: "WAN_text",
  },
];

export default function TechSolutions() {
  const { t } = useTranslation();

  return (
    <>
      {/* Premium Hero Banner */}
      <section className="bg-gradient-to-b from-[#F0F4FA] to-white pt-16 pb-20 px-6 md:px-16 overflow-hidden border-b border-gray-100 font-['Cairo',sans-serif]">
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#1b6ba9]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-48 h-48 bg-[#1b6ba9]/5 rounded-full blur-3xl"></div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-white text-text-color font-bold text-sm mb-6 border border-[#1b6ba9]/20 shadow-sm">
              {t("SERVICES_WE_PROVIDE")}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-Main-color mb-4 leading-tight">
              {t("Tech_Solutions")}
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
              {t("Tech_Text")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl premium-shadow premium-shadow-hover border border-slate-100 p-8 transition-all duration-300 flex flex-col items-start group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#F0F4FA] text-Main-color flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-Main-color group-hover:text-white transition-all shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 leading-snug">
                  {t(item.title)}
                </h3>
                <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
                  {t(item.description)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
