import {
  FaNetworkWired,
  FaServer,
  FaShieldAlt,
  FaLaptop,
  FaTools,
  FaCogs,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const solutions = [
  {
    id: 1,
    title: "pc",
    icon: <FaLaptop className="w-10 h-10 text-Main-color" />,
    description: "Pc_text",
  },
  {
    id: 2,
    title: "OS",
    icon: <FaCogs className="w-10 h-10 text-Main-color" />,
    description: "Os_text",
  },
  {
    id: 3,
    title: "PS",
    icon: <FaShieldAlt className="w-10 h-10 text-Main-color" />,
    description: "PS_text",
  },
  {
    id: 4,
    title: "Ha",
    icon: <FaTools className="w-10 h-10 text-Main-color" />,
    description: "Ha_text",
  },
  {
    id: 5,
    title: "LAN",
    icon: <FaNetworkWired className="w-10 h-10 text-Main-color" />,
    description: "LAN_text",
  },
  {
    id: 6,
    title: "WAN",
    icon: <FaServer className="w-10 h-10 text-Main-color" />,
    description: "WAN_text",
  },
];

export default function TechSolutions() {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-Main-color mb-4">
            {t("Tech_Solutions")}
          </h2>
          <p className="text-gray-600 text-lg">{t("Tech_Text")}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300 flex flex-col items-start text-right"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-Main-color">
                {t(item.title)}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed text-justify">
                {t(item.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
