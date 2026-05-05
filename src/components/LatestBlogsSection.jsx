import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getRoutePath } from "../utils/i18nHelpers";
import BlogService from "../services/blogService";

const selectContent = (obj, lang) => {
  if (!obj) return "";
  if (typeof obj === "string") return obj;
  if (obj[lang]) return obj[lang];
  if (obj.en) return obj.en;
  const candidate = Object.values(obj).find((value) => typeof value === "string");
  return candidate || "";
};

export default function LatestBlogsSection() {
  const { t, i18n } = useTranslation();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const lang = i18n.language.split("-")[0] || "en";
  const base = getRoutePath("blog", t);

  useEffect(() => {
    setLoading(true);
    BlogService.fetchPosts()
      .then((data) => setPosts(data))
      .finally(() => setLoading(false));
  }, []);

  const latestPosts = posts.slice(0, 3);

  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-Main-color mb-3">
            {t("blog_recent_posts")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-color mb-3">
            {t("home_blog_section_title")}
          </h2>
          <p className="max-w-2xl mx-auto text-base text-slate-600">
            {t("home_blog_section_subtitle")}
          </p>
        </div>

        {loading ? (
          <div className="text-center text-text-color">{t("blog_loading")}</div>
        ) : latestPosts.length === 0 ? (
          <div className="text-center text-text-color">{t("blog_no_posts")}</div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col overflow-hidden rounded-[24px] bg-[#E8F3F8] shadow-[0_10px_20px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.12)] h-full min-h-[460px]"
              >
                <div className="relative h-64 w-full shrink-0 overflow-hidden">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={selectContent(post.title, lang)}
                      loading="lazy"
                      decoding="async"
                      width="560"
                      height="315"
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                    
                  ) : (
                    <div className="flex h-full items-center justify-center bg-slate-100 text-slate-400">
                      <span>{t("view_all_blog_posts")}</span>
                    </div>
                  )}
                  <span className="absolute top-4 right-4 rounded-full bg-[#0F2D5E] px-3 py-1 text-[11px] font-bold text-white shadow-lg">
                    {post.date}
                  </span>
                </div>

                <div className="bg-white p-6 flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="text-right text-[18px] font-bold text-text-color mb-3 line-clamp-2">
                      {selectContent(post.title, lang)}
                    </h3>
                    <p className="text-right text-[14px] text-slate-600 mb-5 leading-relaxed line-clamp-4">
                      {selectContent(post.excerpt, lang) || selectContent(post.content, lang)?.replace(/<[^>]*>?/gm, '')?.slice(0, 150) + "..." || ""}
                    </p>
                  </div>
                  <Link
                    to={`/${base}/${post.slug}`}
                    className="self-start text-[#00BCD4] text-sm font-semibold transition-colors duration-300 hover:text-[#0097A7] inline-flex items-center gap-1"
                  >
                    {t("blog_read_more")} <span dir="ltr">←</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <Link
            to={`/${base}`}
            className="inline-flex items-center justify-center rounded-full border border-Main-color px-6 py-3 text-sm font-semibold text-Main-color transition hover:bg-Main-color hover:text-white"
          >
            {t("view_all_blog_posts")}
          </Link>
          
        </div>
      </div>
    </section>
  );
}
