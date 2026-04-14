import React from 'react';
import { useTranslation } from "react-i18next";
import { FaClock } from 'react-icons/fa';

const newsData = [
  {
    id: 1,
    title: 'كلمة المدير الفني',
    date: '20 مايو 2021',
    image: '/images/tech-director.jpg',
    excerpt: 'اكتشف رؤية المدير الفني حول التطورات التقنية والابتكارات في الشركة.',
  },
  {
    id: 2,
    title: 'خبر او تقرير',
    date: '20 مايو 2021',
    image: '/images/riyadh.jpg',
    excerpt: 'تقرير شامل عن أحدث الأخبار والإنجازات في مجال التقنية والأعمال.',
  },
  {
    id: 3,
    title: 'كلمة المدير العام',
    date: '23 مايو 2021',
    image: '/images/mic.jpg',
    excerpt: 'كلمة المدير العام حول استراتيجية الشركة وخططها المستقبلية.',
  },
];

export default function News() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#F4F6F9] text-right" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="mb-10 rounded-xl bg-gradient-to-b from-[#EEF2F8] to-[#F4F6F9] p-8">
          <p className="inline-flex items-center justify-center gap-2 text-sm font-medium text-slate-500">
            <span className="text-[#0099CC]">{t("home")}</span>
            <span className="text-[#0099CC]">›</span>
            <span className="text-[#1A3C6E]">{t("news")}</span>
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold text-[#1A3C6E]">{t("news")}</h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600">أحدث المقالات والتقارير من فريقنا.</p>
          <div className="mx-auto mt-5 h-1 w-15 rounded-full" 
          style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #0099CC, #1A3C6E)' }} />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {newsData.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-[16px] bg-[#E8F3F8] shadow-[0_10px_20px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.12)] min-h-[430px]"
            >
              <div className="relative h-[45%] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <span className="absolute top-3 right-3 rounded-full bg-[#0F2D5E] px-3 py-1 text-[11px] font-bold text-white shadow-lg">
                  {item.date}
                </span>
              </div>

              <div className="bg-white p-6 h-[55%] flex flex-col">
                <h3 className="text-right text-[18px] font-bold text-slate-900 mb-3 min-h-[72px]">{item.title}</h3>
                <p className="text-right text-[14px] text-slate-600 flex-1 leading-relaxed">{item.excerpt}</p>
                <a
                  href="#"
                  className="mt-4 self-start text-[#00BCD4] text-sm font-semibold transition-colors duration-300 hover:text-[#0097A7]"
                >
                  {t("blog_read_more")} ←
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}









