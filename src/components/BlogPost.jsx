import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SeoHelmet from "./SeoHelmet";
import BlogService from "../services/blogService";

export default function BlogPost() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const lang = i18n.language.split("-")[0] || "en";
  const select = (obj) => {
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    if (obj[lang]) return obj[lang];
    if (obj.en) return obj.en;
    const candidate = Object.values(obj).find((v) => typeof v === "string");
    return candidate || "";
  };

  
  useEffect(() => {
    setLoading(true);
    BlogService.getPostBySlug(slug)
      .then((data) => setPost(data))
      .finally(() => setLoading(false));
  }, [slug]);


  if (loading) {
    return <div className="text-center py-16">Loading post...</div>;
  }

  if (!post) {
    return (
      <div className="text-center py-16 text-red-600 text-xl font-semibold">
        {t("post_not_found")}
      </div>
    );
  }

  return (
    <section className="px-4 py-12 max-w-5xl mx-auto">
      <SeoHelmet pageKey="blog" />
      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        {post.image && (
          <img
            src={post.image}
            alt={select(post.title)}
            className="w-full h-80 object-cover rounded-xl mb-6"
          />
        )}

        <div className="mb-4 text-slate-500">
          <span className="inline-block bg-slate-100 text-xs px-3 py-1 rounded-full">{post.date}</span>
        </div>

        <h1 className="text-4xl font-bold text-slate-900 mb-4">{select(post.title)}</h1>

        <div className="prose prose-slate max-w-none" dir={i18n.language === "ar" ? "rtl" : "ltr"}>
          <div
            dangerouslySetInnerHTML={{
              __html: select(post.content),
            }}
          />
        </div>
      </article>
    </section>
  );
}
