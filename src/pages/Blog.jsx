import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SeoHelmet from "../components/SeoHelmet";
import { getRoutePath } from "../utils/i18nHelpers";
import BlogService from "../services/blogService";


export default function Blog() {
  const { t, i18n } = useTranslation();
  const base = getRoutePath("blog", t);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const postsPerPage = 4;
  const lang = i18n.language.split("-")[0] || "en";
  const select = React.useCallback((obj) => {
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    if (obj[lang]) return obj[lang];
    if (obj.en) return obj.en;
    // If object is a localized map, pick first string value
    const candidate = Object.values(obj).find((v) => typeof v === "string");
    return candidate || "";
  }, [lang]);

  const ensureString = React.useCallback((value) => {
    if (value === undefined || value === null) return "";
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      return String(value);
    }
    if (Array.isArray(value)) {
      return value.map((item) => ensureString(item)).join(", ");
    }

    if (typeof value === "object") {
      if (value[lang]) return value[lang];
      if (value.en) return value.en;
      const candidate = Object.values(value).find((v) => typeof v === "string");
      return candidate || JSON.stringify(value);
    }

    return String(value);
  }, [lang]);

  const CATEGORY_OPTIONS = React.useMemo(
    () => [
      { id: "tech", en: "Tech", ar: "تطوير البرمجيات" },
      { id: "business", en: "Business", ar: "الأعمال" },
      { id: "design", en: "Design", ar: "تصميم" },
      { id: "marketing", en: "Marketing", ar: "التسويق" },
    ],
    []
  );

  const normalizeCategoryId = React.useCallback(
    (value) => {
      const text = ensureString(value).trim().toLowerCase();
      if (!text) return "";
      const found = CATEGORY_OPTIONS.find(
        (c) =>
          c.id.toLowerCase() === text ||
          c.en.toLowerCase() === text ||
          c.ar.toLowerCase() === text
      );
      return found ? found.id : text;
    },
    [CATEGORY_OPTIONS, ensureString]
  );

  const getCategoryLabel = React.useCallback(
    (categoryId) => {
      const key = ensureString(categoryId);
      const found = CATEGORY_OPTIONS.find((c) => c.id === key);
      if (!found) return key;
      return i18n.language.startsWith("ar") ? found.ar : found.en;
    },
    [CATEGORY_OPTIONS, i18n.language, ensureString]
  );

  useEffect(() => {
    setLoading(true);
    BlogService.fetchPosts()
      .then((data) => {
        setPosts(data);
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredPosts = React.useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const activeCategory = (selectedCategory || "all").trim().toLowerCase();

    let result = posts;

    if (activeCategory && activeCategory !== "all") {
      result = result.filter((post) => {
        const category = normalizeCategoryId(select(post.category) || post.category);
        return category === activeCategory;
      });
    }

    if (!query) return result;

    return result.filter((post) => {
      const text = `${select(post.title) || ""} ${select(post.excerpt) || ""}`.toLowerCase();
      return text.includes(query);
    });
  }, [posts, searchQuery, selectedCategory, select, normalizeCategoryId]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / postsPerPage));

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  const currentPosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };


  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const availableCategories = React.useMemo(() => {
    const set = new Set(CATEGORY_OPTIONS.map((c) => c.id));
    posts.forEach((post) => {
      const rawCat = post.category || select(post.category);
      const normalized = normalizeCategoryId(rawCat);
      if (normalized) set.add(normalized);
    });
    return Array.from(set);
  }, [posts, select, normalizeCategoryId, CATEGORY_OPTIONS]);

  // Ensure fallback categories are always primitive strings to avoid rendering objects directly.
  const rawFallbackCategories = React.useMemo(() => {
    const raw = t("blog_categories", { returnObjects: true });
    return Array.isArray(raw) ? raw : [];
  }, [t]);

  const blogCategories = React.useMemo(() => {
    if (availableCategories.length > 0) return availableCategories;
    return Array.from(
      new Set(
        rawFallbackCategories
          .map((c) => normalizeCategoryId(c))
          .filter(Boolean)
      )
    );
  }, [availableCategories, rawFallbackCategories, normalizeCategoryId]);

  return (
    <section className="bg-[#F4F6F9] text-right" dir="rtl">
      <SeoHelmet pageKey="blog" />
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="mb-10 rounded-xl bg-gradient-to-b from-[#EEF2F8] to-[#F4F6F9] p-8">
          <p className="inline-flex items-center justify-center gap-2 text-sm font-medium text-slate-500">
            <span className="text-[#0099CC]">{t("home")}</span>
            <span className="text-[#0099CC]">›</span>
            <span className="text-[#1A3C6E]">{t("blog")}</span>
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold text-[#1A3C6E]">{t("blog")}</h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600">{t("blog_subtitle")}</p>
          <div className="mx-auto mt-5 h-1 w-15 rounded-full" style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #0099CC, #1A3C6E)' }} />
        </div>

        <div className="flex flex-col gap-6 lg:flex-row-reverse">
          <main className="lg:w-[70%]">
            {loading ? (
              <div className="text-center text-[#1A3C6E]">{t("blog_loading")}</div>
            ) : filteredPosts.length === 0 ? (
              <div className="text-center text-[#1A3C6E]">{t("blog_no_posts")}</div>
            ) : (
              <>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-6 lg:gap-6 xl:gap-6" style={{ gap: 24 }}>
                  {currentPosts.map((post) => (
                    <article
                      key={post.id}
                      className="group flex flex-col overflow-hidden rounded-[16px] bg-[#E8F3F8] shadow-[0_10px_20px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.12)] h-full"
                    >
                      <div className="relative h-56 w-full shrink-0 overflow-hidden">
                        {post.image ? (
                          <img
                            src={post.image}
                            alt={select(post.title)}
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <div className="h-full w-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                            <svg className="h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4a1 1 0 011-1h8a1 1 0 011 1v12m-5-4l-3 3m0 0l3 3m-3-3h12" />
                            </svg>
                          </div>
                        )}
                        <span className="absolute top-3 right-3 rounded-full bg-[#0F2D5E] px-3 py-1 text-[11px] font-bold text-white shadow-lg">
                          {post.date}
                        </span>
                      </div>

                      <div className="bg-white p-6 flex flex-1 flex-col justify-between">
                        <div>
                          <h2 className="text-right text-[18px] font-bold leading-tight text-slate-900 line-clamp-2">
                            {select(post.title)}
                          </h2>
                          <p className="mt-3 text-right text-[14px] text-slate-600 leading-relaxed line-clamp-4">
                            {select(post.excerpt) || select(post.content).replace(/<[^>]*>?/gm, '')}
                          </p>
                        </div>
                        <Link
                          to={`/${base}/${post.slug}`}
                          className="mt-6 self-start text-[#00BCD4] text-sm font-semibold transition-colors duration-300 hover:text-[#0097A7] inline-flex items-center gap-1"
                        >
                          {t("blog_read_more")} <span dir="ltr">←</span>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="mt-8 flex flex-wrap gap-2 justify-center">
                    <button
                      className="px-3 py-2 text-gray-600 hover:text-[#0F2D5E] hover:bg-[#E8F1FF] rounded-md disabled:opacity-40 disabled:cursor-not-allowed"
                      onClick={() => goToPage(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      {t("blog_pagination_previous")}
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                          pageNum === currentPage
                            ? "bg-[#0F2D5E] text-white"
                            : "text-gray-700 hover:bg-[#E8F1FF]"
                        }`}
                        onClick={() => goToPage(pageNum)}
                      >
                        {pageNum}
                      </button>
                    ))}
                    <button
                      className="px-3 py-2 text-gray-600 hover:text-[#0F2D5E] hover:bg-[#E8F1FF] rounded-md disabled:opacity-40 disabled:cursor-not-allowed"
                      onClick={() => goToPage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      {t("blog_pagination_next")}
                    </button>
                  </div>
                )}
              </>
            )}
          </main>

          <aside className="lg:w-[30%] space-y-6">
            <div className="rounded-[16px] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]">
              <label className="mb-2 block text-sm font-semibold text-[#1A3C6E]">{t("blog_search_label")}</label>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m1.699-5.65a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder={t("blog_search_placeholder")}
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full bg-white py-2 pr-10 pl-10 text-sm text-slate-700 outline-none transition focus:border-b-2 focus:border-[#0099CC] focus:ring-0"
                  style={{ border: 'none', borderBottom: '1px solid #E5E7EB' }}
                />
              </div>
            </div>

            <div className="rounded-[16px] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]">
              <h3 className="text-lg font-medium text-[#1A3C6E]">{t("blog_categories_label")}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setCurrentPage(1);
                  }}
                  className={`rounded-lg px-3 py-1 text-xs font-medium transition ${
                    selectedCategory.trim().toLowerCase() === "all"
                      ? "bg-[#0F2D5E] text-white"
                      : "bg-[#F3F4F6] text-[#1A3C6E] hover:bg-[#0F2D5E] hover:text-white"
                  }`}
                >
                  {t("admin_category_all")}
                </button>
                {blogCategories.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={String(cat)}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setCurrentPage(1);
                      }}
                      className={`rounded-lg px-3 py-1 text-xs font-medium transition ${
                        isActive
                          ? "bg-[#0F2D5E] text-white"
                          : "bg-[#F3F4F6] text-[#1A3C6E] hover:bg-[#0F2D5E] hover:text-white"
                      }`}
                    >
                      {getCategoryLabel(cat)}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[16px] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]">
              <h3 className="text-lg font-medium text-[#1A3C6E]">{t("blog_recent_posts")}</h3>
              <ul className="mt-3 space-y-3">
                {filteredPosts.slice(0, 4).map((post) => (
                  <li key={post.id} className="flex items-center gap-3 border-l-4 border-transparent hover:border-[#0099CC] transition-all">
                    <div className="h-14 w-14 overflow-hidden rounded-lg bg-slate-100">
                      {post.image ? <img src={post.image} alt={select(post.title)} className="h-full w-full object-cover" /> : null}
                    </div>
                    <div>
                      <Link to={`/${base}/${post.slug}`} className="text-sm font-semibold text-[#1A3C6E] hover:text-[#0099CC]">
                        {select(post.title).slice(0, 40)}{select(post.title).length > 40 ? '...' : ''}
                      </Link>
                      <p className="text-xs text-slate-500">{post.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[16px] bg-gradient-to-r from-[#0F2D5E] to-[#0099CC] p-6 text-white shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]">
              <h3 className="text-xl font-medium">{t("cta_help_title")}</h3>
              <p className="mt-2 text-sm text-white/90">{t("cta_help_subtitle")}</p>
              <div className="mt-4 flex flex-col gap-3">
            
                <Link
                  to={`/${getRoutePath("contact", t)}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#0F2D5E] hover:bg-slate-100 transition-colors"
                >
                  {t("cta_help_button")}
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
