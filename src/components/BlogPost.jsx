import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SeoHelmet from "./SeoHelmet";
import BlogService from "../services/blogService";
import { getRoutePath } from "../utils/i18nHelpers";
import { FiArrowRight, FiArrowLeft, FiCalendar, FiTag, FiClock } from "react-icons/fi";

const CATEGORY_OPTIONS = [
  { id: "tech", en: "Tech", ar: "تطوير البرمجيات" },
  { id: "business", en: "Business", ar: "الأعمال" },
  { id: "design", en: "Design", ar: "تصميم" },
  { id: "marketing", en: "Marketing", ar: "التسويق" },
];

export default function BlogPost() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const lang = i18n.language.split("-")[0] || "en";
  const isRTL = i18n.language.startsWith("ar");

  
  const select = (obj) => {
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    if (obj[lang]) return obj[lang];
    if (obj.en) return obj.en;
    const candidate = Object.values(obj).find((v) => typeof v === "string");
    return candidate || "";
  };

  const getCategoryLabel = (id) => {
    const found = CATEGORY_OPTIONS.find((c) => c.id === id);
    if (!found) return id;
    return isRTL ? found.ar : found.en;
  };

  const base = getRoutePath("blog", t);

  useEffect(() => {
    setLoading(true);
    BlogService.getPostBySlug(slug)
      .then((data) => setPost(data))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh] bg-[#F4F6F9]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-Main-color border-t-transparent rounded-full animate-spin"></div>
          <p className="text-Main-color font-semibold text-lg">{t("blog_loading") || "Loading post..."}</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center bg-[#F4F6F9]">
        <div className="text-center bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("post_not_found")}</h2>
          <Link to={`/${base}`} className="text-Main-color hover:underline font-semibold">
           {isRTL ? "العودة إلى المدونة" : "Return to Blog"}
          </Link>
        </div>
      </div>
    );
  }

  const estimatedReadingTime = Math.max(1, Math.ceil((select(post.content).length || 0) / 1000));

  return (
    <div className="bg-[#F4F6F9] min-h-screen py-12 lg:py-20 font-['Cairo',sans-serif]" dir={isRTL ? "rtl" : "ltr"}>
      <SeoHelmet pageKey="blog" />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Top Navigation */}
        <div className="mb-8 flex items-center justify-between">
          <Link 
            to={`/${base}`} 
            className="inline-flex items-center gap-2 text-Main-color hover:text-text-color font-bold transition-all hover:-translate-x-1"
          >
            {isRTL ? <FiArrowRight className="w-5 h-5" /> : <FiArrowLeft className="w-5 h-5" />}
            {t("blog")}
          </Link>
        </div>

        {/* Article Container */}
        <article className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 transition-all">
          
          {/* Header Section */}
          <header className="px-6 py-10 sm:px-12 sm:pt-16 sm:pb-12 text-center">
            
            {/* Meta Tags */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              {post.category && (
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-Main-color text-sm font-bold px-4 py-1.5 rounded-full shadow-sm border border-blue-100">
                  <FiTag className="w-4 h-4" />
                  {getCategoryLabel(post.category)}
                </span>
              )}
              <span className="inline-flex items-center gap-1.5 text-gray-500 text-sm font-medium bg-gray-50 px-4 py-1.5 rounded-full border border-gray-100">
                <FiCalendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5 text-gray-500 text-sm font-medium bg-gray-50 px-4 py-1.5 rounded-full border border-gray-100">
                <FiClock className="w-4 h-4" />
                {estimatedReadingTime} {isRTL ? "دقائق للقراءة" : "min read"}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-color leading-tight mb-8 max-w-3xl mx-auto">
              {select(post.title)}
            </h1>

          </header>

          {/* Cover Image Feature */}
          {post.image && (
             <div className="w-[92%] sm:w-[88%] mx-auto mb-10">
               <div className="relative rounded-2xl overflow-hidden shadow-md group">
                 <img
                   src={post.image}
                   alt={select(post.title)}                   loading="lazy"
                   decoding="async"
                   width="1200"
                   height="700"                   className="w-full max-h-[500px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.02]"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
               </div>
             </div>
          )}

          {/* Main Content Body */}
          <div className="w-[92%] sm:w-[88%] mx-auto pb-16 overflow-hidden">
            <div className={`prose prose-lg sm:prose-xl max-w-none break-words
              prose-headings:text-text-color prose-headings:font-bold prose-headings:mb-6
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-Main-color prose-a:font-semibold prose-a:no-underline hover:prose-a:text-text-color hover:prose-a:underline
              prose-img:rounded-2xl prose-img:shadow-md prose-img:mx-auto prose-img:my-8
              prose-blockquote:border-l-4 prose-blockquote:border-Main-color prose-blockquote:bg-gray-50 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg prose-blockquote:italic prose-blockquote:text-gray-600
              prose-li:text-gray-700 prose-ul:my-6 prose-ol:my-6
              prose-strong:text-text-color 
            `}>
              <div
                dangerouslySetInnerHTML={{
                  __html: select(post.content),
                }}
              />
            </div>
            
            {/* Share / Footer of Article */}
            <hr className="my-10 border-gray-100" />
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
               <div className="text-gray-500 font-medium">
                 {isRTL ? "شكراً لقراءتك هذا المقال." : "Thanks for reading."}
               </div>
               
               <div className="flex gap-3">
                 <Link to={`/${base}`} className="px-6 py-2 bg-gray-50 text-Main-color rounded-full font-bold hover:bg-Main-color hover:text-white transition-colors border border-gray-200">
                    {t("blog")}
                 </Link>
               </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
