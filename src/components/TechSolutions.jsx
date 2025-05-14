import {
  FaNetworkWired,
  FaServer,
  FaShieldAlt,
  FaLaptop,
  FaTools,
  FaCogs,
} from "react-icons/fa";

const solutions = [
  {
    id: 1,
    title: "أجهزة الكمبيوتر",
    icon: <FaLaptop className="w-10 h-10 text-Main-color" />,
    description:
      "لدينا فريق عمل استثنائي يلبي حاجة عملائنا ويوفر لهم أجهزة الكمبيوتر من سيرفرات أو وحدات طرفية من أفضل وأقوى العلامات التجارية، وكذلك الأجهزة ذات المواصفات الخاصة لنمكنهم من الإبداع والإنجاز.",
  },
  {
    id: 2,
    title: "البرامج التشغيلية",
    icon: <FaCogs className="w-10 h-10 text-Main-color" />,
    description:
      "نوفر حاجة عملائنا من برامج التشغيل المختلفة مثل برامج الويندوز الأصلية، برامج الأوفيس، وأنظمة تشغيل السيرفرات والوحدات الطرفية المناسبة.",
  },
  {
    id: 3,
    title: "أنظمة الحماية",
    icon: <FaShieldAlt className="w-10 h-10 text-Main-color" />,
    description:
      "نقوم بتوريد أنظمة مكافحة الفيروسات، ومكافحة الهكر والاختراق لتعزيز الأمن السيبراني وحماية الأجهزة والبيانات.",
  },
  {
    id: 4,
    title: "ملحقات الأجهزة",
    icon: <FaTools className="w-10 h-10 text-Main-color" />,
    description:
      "نوفر طابعات، ماسحات ضوئية، ونقاط بيع وغيرهم من الملحقات عالية الجودة ذات العمر الطويل والسعر المميز.",
  },
  {
    id: 5,
    title: "الشبكات المحلية (LAN)",
    icon: <FaNetworkWired className="w-10 h-10 text-Main-color" />,
    description:
      "نبني شبكات اتصال محلية للمنازل والمكاتب والمنشآت الصغيرة، ونوفر المعدات وخدمات الصيانة والدعم الفني الكامل.",
  },
  {
    id: 6,
    title: "الشبكات واسعة النطاق (WAN)",
    icon: <FaServer className="w-10 h-10 text-Main-color" />,
    description:
      "نوفر الشبكات الواسعة بمعدات وبنية تحتية متقدمة، لربط المستخدمين بمناطق جغرافية كبيرة بفعالية وبتكلفة مناسبة.",
  },
];

export default function TechSolutions() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            حلولنا التقنية
          </h2>
          <p className="text-gray-600 text-lg">
            نعزز تميز عملائنا ونمنحهم كفاءة تشغيلية دائمة من خلال تقديم أفضل
            الحلول التقنية.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300 flex flex-col items-start text-right"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-Main-color">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
