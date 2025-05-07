import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translation resources
const resources = {
  en: {
    translation: {
      welcome: "Welcome to Alawistars!",
      home: "Home",
      products: "Products",
      services: "Services",
      about: "About Us",
      news: "News",
      contact: "Contact Us",
      title: "alawistars",
      footertext:
        "To be a recognized world leader and authority  in the industry for design and creativity",
      Email: "Email",
      Fax: "Fax",
      QuickLinks: "Quick Links",
      HeadOfficeRiyadh: "Head Office – Riyadh",
      Jeddah_Branch: "Jeddah Branch",
      address_1: "Al-Malaz - Salah eddin Street ",
      address_2: " Western Baghdadia",
      FAQs: "FAQs",
      Privacy_Policy: "Privacy Policy",
      Terms_Conditions: "Terms & Conditions",
      Follow_us: "Follow us",
      time: "8:00 am - 12:30 pm 3:00 pm - 7:30 pm",
      Testimonial: "Testimonial",
      Stories: "Real Stories, Real Results",
     Testimonial_text:"  Read what our clients have to say about their journey with us. We’re proud to deliver value that speaks for itself.",
     Partners_Heading:" MEET OUR PARTNERS",
     Partners_text:"We’ve 10000+ Dedicated PARTNERS",
    },
  },
  ar: {
    translation: {
      welcome: "مرحباً بكم في ألاوي ستارز!",
      home: "الصفحة الرئيسية ",
      products: "المنتجات",
      services: "الخدمات",
      about: "معلومات عنا",
      news: "الأخبار",
      contact: "اتصل بنا",
      title: "نجوم العلاوي",
      footertext:
        "أن نكون رائدًا عالميًا معترفًا به وسلطة في مجال التصميم والإبداع.",
      Email: "البريد الالكتروني ",
      Fax: "فاكس",
      QuickLinks: "روابط سريعة",
      HeadOfficeRiyadh: "المركز الرئيسي -الرياض ",
      Jeddah_Branch: "فرع جدة ",
      address_1: "الملز - شارع صلاح الدين ",
      address_2: "البغدادية الغربية",
      FAQs: "الأسئلة الشائعة ",
      Privacy_Policy: "سياسة الخصوصية",
      Terms_Conditions: "الشروط والأحكام",
      Follow_us: "تابعنا ",
      time: " ص 8:00  - 12:30 م 3:00 م - 7:30 م",
      Testimonial: "ماذا قالوا عنا",
      Stories: "قصص واقعية، نتائج حقيقية",
      Testimonial_text:"اقرأ آراء عملائنا حول رحلتهم معنا. نفخر بتقديم قيمة حقيقية.",
      Partners_text:"We’ve 10000+ Dedicated PARTNERS",

    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
