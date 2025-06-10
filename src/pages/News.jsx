import React from 'react';
import { useTranslation } from "react-i18next";
import { FaClock } from 'react-icons/fa';

export default function News() {
const { t } = useTranslation();
const newsData = [
  {
    id: 1,
    title: 'كلمة المدير الفني',
    date: '20 مايو 2021',
    image: '/images/tech-director.jpg',
  },
  {
    id: 2,
    title: 'خبر او تقرير',
    date: '20 مايو 2021',
    image: '/images/riyadh.jpg',
  },
  {
    id: 3,
    title: 'كلمة المدير العام',
    date: '23 مايو 2021',
    image: '/images/mic.jpg',
  },
];


  return (
    <div>
       <section className="py-10 px-4 md:px-10 bg-white">
      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch flex-wrap">
        {newsData.map((item) => (
          <div key={item.id} className="max-w-sm w-full bg-white shadow-md rounded-md overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <p className="text-gray-500 text-sm flex justify-center items-center gap-1">
                <FaClock className="text-xs" />
                {item.date}
              </p>
              <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
              <a href="#" className="text-sm text-blue-600 hover:underline mt-2 inline-block">قراءة المزيد »</a>
            </div>
          </div>
        ))}
      </div>
    </section>

    </div>
  )
}









