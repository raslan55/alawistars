import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiPlus, FiLogOut, FiSearch, FiEdit2, FiTrash2, FiUploadCloud } from "react-icons/fi";
import BlogService from "../services/blogService";
import RichTextEditor from "../components/RichTextEditor";
import SeoHelmet from "../components/SeoHelmet";

const initialForm = {
  id: null,
  titleEn: "",
  titleAr: "",
  slug: "",
  category: "",
  excerptEn: "",
  excerptAr: "",
  contentEn: "",
  contentAr: "",
  date: new Date().toISOString().split("T")[0],
  image: "",
};

const MAX_IMAGE_SIZE_BYTES = 1 * 1024 * 1024; // 1 MB
const MAX_IMAGE_SIZE_LABEL = "1 MB";

const packi18n = (en, ar) => ({ en: en || "", ar: ar || en || "" });

const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "admin**Al#123",
};

const CATEGORY_OPTIONS = [
  { id: "tech", en: "Tech", ar: "تطوير البرمجيات" },
  { id: "business", en: "Business", ar: "الأعمال" },
  { id: "design", en: "Design", ar: "تصميم" },
  { id: "marketing", en: "Marketing", ar: "التسويق" },
];

export default function AdminBlog() {
  const { t, i18n } = useTranslation();
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editing, setEditing] = useState(false);
  const [alert, setAlert] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [categories, setCategories] = useState(CATEGORY_OPTIONS);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [loginError, setLoginError] = useState("");

  const findCategoryByLabel = React.useCallback((label) => {
    if (!label) return null;
    const normalized = label.toString().trim().toLowerCase();
    return CATEGORY_OPTIONS.find(
      (c) =>
        c.id.toLowerCase() === normalized ||
        c.en.toLowerCase() === normalized ||
        c.ar.toLowerCase() === normalized
    );
  }, []);

  const getCategoryLabel = React.useCallback(
    (id) => {
      const cat = categories.find((c) => c.id === id) || CATEGORY_OPTIONS.find((c) => c.id === id);
      if (!cat) return id || "";
      return i18n.language.startsWith("ar") ? cat.ar : cat.en;
    },
    [categories, i18n.language]
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
  const isRTL = i18n.language === "ar";

  const normalizeCategoryValue = React.useCallback(
    (rawCategory) => {
      if (!rawCategory) return null;
      const parsed = findCategoryByLabel(rawCategory);
      if (parsed) return parsed;

      const cleanId = rawCategory.toString().trim().toLowerCase().replace(/\s+/g, "-");
      return { id: cleanId, en: rawCategory.toString().trim(), ar: rawCategory.toString().trim() };
    },
    [findCategoryByLabel]
  );

  const loadPosts = React.useCallback(async () => {
    const data = await BlogService.fetchPosts();
    setPosts(data);

    const updated = [...CATEGORY_OPTIONS];
    data.forEach((p) => {
      const normalized = normalizeCategoryValue(p.category);
      if (normalized && !updated.some((item) => item.id === normalized.id)) {
        updated.push(normalized);
      }
    });

    setCategories(updated);
  }, [normalizeCategoryValue]);


  // Restore login state from localStorage on mount
  useEffect(() => {
    const savedLogin = localStorage.getItem("adminBlogLoggedIn");
    if (savedLogin === "true") {
      setLoggedIn(true);
    }
  }, []);

  // Save login state to localStorage
  useEffect(() => {
    if (loggedIn) {
      localStorage.setItem("adminBlogLoggedIn", "true");
      loadPosts();
    } else {
      localStorage.removeItem("adminBlogLoggedIn");
    }
  }, [loggedIn, loadPosts]);

  const filteredPosts = React.useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return posts.filter((post) => {
      const postCategoryId = (findCategoryByLabel(post.category)?.id || post.category || "").toString().trim().toLowerCase();
      const activeCategory = selectedCategory.toString().trim().toLowerCase();

      if (activeCategory && activeCategory !== "" && postCategoryId !== activeCategory) return false;

      const text = `${post.title?.en || ""} ${post.title?.ar || ""} ${post.excerpt?.en || ""} ${post.excerpt?.ar || ""}`.toLowerCase();
      if (!query) return true;
      return text.includes(query);
    });
  }, [posts, searchQuery, selectedCategory, findCategoryByLabel]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / postsPerPage));

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  // Auto-dismiss success alerts after 4 seconds
  useEffect(() => {
    if (alert && alert.type === 'success') {
      const timer = setTimeout(() => setAlert(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

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

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      loginForm.username === ADMIN_CREDENTIALS.username &&
      loginForm.password === ADMIN_CREDENTIALS.password
    ) {
      setLoggedIn(true);
      setLoginError("");
      setAlert({ type: "success", text: t("admin_login_success") });
      return;
    }

    setLoginError(t("admin_login_error"));

  };


  const reset = () => {
    setForm(initialForm);
    setEditing(false);
  };


  const onImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > MAX_IMAGE_SIZE_BYTES) {
      setAlert({
        type: "error",
        text: `Image is too large. Maximum upload size is ${MAX_IMAGE_SIZE_LABEL}.`,
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (ev) => setForm((f) => ({ ...f, image: ev.target.result }));
    reader.readAsDataURL(file);
  };

  
  const onSubmit = async (e) => {
    e.preventDefault();

    if (!form.titleEn.trim() || !form.contentEn.trim()) {
      setAlert({ type: "error", text: t("admin_error_required") });
      return;
    }

    const payload = {
      title: packi18n(form.titleEn, form.titleAr),
      excerpt: packi18n(form.excerptEn, form.excerptAr),
      content: packi18n(form.contentEn, form.contentAr),
      category: form.category,
      date: form.date,
      image: form.image,
      slug: form.slug || form.titleEn.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
    };


    try {
      if (editing && form.id) {
        await BlogService.updatePost(form.id, payload);
        setAlert({ type: "success", text: t("admin_update_success") });
      } else {
        await BlogService.createPost(payload);
        setAlert({ type: "success", text: t("admin_create_success") });
      }
      reset();
      loadPosts();
    } catch (err) {
      setAlert({ type: "error", text: err.message || t("admin_error_save") });
    }
  };

  const onEdit = (post) => {
    setForm({
      id: post.id,
      titleEn: post.title?.en || "",
      titleAr: post.title?.ar || "",
      slug: post.slug,
      category: post.category || "",
      excerptEn: post.excerpt?.en || "",
      excerptAr: post.excerpt?.ar || "",
      contentEn: post.content?.en || "",
      contentAr: post.content?.ar || "",
      date: post.date || new Date().toISOString().split("T")[0],
      image: post.image || "",
    });
    setEditing(true);
    setAlert(null);
  };

  const onDelete = async (id) => {
    if (!window.confirm(t("admin_delete_confirm"))) return;
    await BlogService.deletePost(id);
    setAlert({ type: "success", text: t("admin_delete_success") });
    loadPosts();
    if (form.id === id) reset();
  };

  if (!loggedIn) {
    return (
      <div dir={isRTL ? "rtl" : "ltr"} className="min-h-[69vh] bg-[#F0F4F8] flex items-center justify-center ">
        <SeoHelmet pageKey="blog" />
        <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-6 w-full max-w-md">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-[#1A3C6E] mb-2">{t("admin_login")}</h1>
            <p className="text-gray-600">{t("admin_panel")}</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <input
                type="text"
                value={loginForm.username}
                onChange={(e) => setLoginForm((f) => ({ ...f, username: e.target.value }))}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0099CC] focus:outline-none transition-colors peer"
                placeholder=" "
                required
              />
              <label className={`absolute ${isRTL ? "right-4" : "left-4"} top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#0099CC]`}>
                {t("admin_username")}
              </label>
            </div>
            <div className="relative">
              <input
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm((f) => ({ ...f, password: e.target.value }))}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0099CC] focus:outline-none transition-colors peer"
                placeholder=" "
                required
              />
              <label className={`absolute ${isRTL ? "right-4" : "left-4"} top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#0099CC]`}>
                {t("admin_password")}
              </label>
            </div>
            {loginError && (
              <div className="flex items-center gap-2 text-[#EF4444] bg-red-50 p-3 rounded-lg">
                <span>⚠️</span>
                <span>{loginError}</span>
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-[#1A3C6E] text-white py-3 rounded-lg hover:bg-[#152c4a] transition-colors font-semibold shadow-md hover:shadow-lg"
            >
              {t("admin_login_btn")}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="min-h-screen bg-[#F4F6F9] font-['Cairo',sans-serif]">
      <SeoHelmet pageKey="blog" />

      {/* Sticky Header */}
      <header className="sticky top-0 bg-white shadow-sm z-10">
        <div className="mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-[#1A3C6E]">{t("admin_dashboard_title")}</h1>
            <div className="flex gap-3 mt-2">
              <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">{t("admin_stats_total")}: {posts.length}</span>
              <span className="bg-[#ECFDF5] text-[#16A34A] text-xs px-3 py-1 rounded-full">{t("admin_stats_published")}: {posts.length}</span>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => {
                setLoggedIn(false);
                setAlert(null);
              }}
              className="border border-[#EF4444] text-[#EF4444] px-4 py-2 rounded-lg hover:bg-[#EF4444] hover:text-white transition-colors flex items-center gap-2"
              title={t("admin_logout_btn")}
            >
              <FiLogOut className="w-5 h-5" />
              <span>{t("admin_logout_btn")}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Alert Banner */}
      {alert && (
        <div className={`mx-6 mt-4 p-4 rounded-lg shadow-md flex items-center gap-3 transition-all duration-500 ease-in-out ${
          alert.type === "success" ? "bg-[#22C55E] text-white border-r-4 border-[#22C55E]" : "bg-[#EF4444] text-white border-r-4 border-[#EF4444]"
        }`}>
          <span className="text-xl">{alert.type === "success" ? "✅" : "❌"}</span>
          <span>{alert.text}</span>
        </div>
      )}

      {/* Main Content */}
      <main className="mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form Panel - Left (40%) */}
          <div className="lg:w-[40%]">
            <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#0099CC]"></span>
                <h2 className="text-xl font-medium text-[#1A3C6E]">
                  {editing ? t("admin_form_title_edit") : t("admin_form_title")}
                </h2>
              </div>

              <form onSubmit={onSubmit} className="space-y-6">
                {/* Titles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      value={form.titleEn}
                      onChange={(e) => setForm((s) => ({ ...s, titleEn: e.target.value }))}
                      className="w-full px-4 py-3 border-b border-gray-300 bg-transparent focus:border-[#0099CC] focus:outline-none transition-colors peer"
                      placeholder=" "
                      required
                    />
                    <label className={`absolute ${isRTL ? "right-4" : "left-4"} top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#0099CC]`}>
                      {t("admin_form_title_en_label")}
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      value={form.titleAr}
                      onChange={(e) => setForm((s) => ({ ...s, titleAr: e.target.value }))}
                      className="w-full px-4 py-3 border-b border-gray-300 bg-transparent focus:border-[#0099CC] focus:outline-none transition-colors peer"
                      placeholder=" "
                    />
                    <label className={`absolute ${isRTL ? "right-4" : "left-4"} top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#0099CC]`}>
                      {t("admin_form_title_ar_label")}
                    </label>
                  </div>
                </div>

                {/* Slug */}
                <div className="relative">
                  <input
                    type="text"
                    value={form.slug}
                    onChange={(e) => setForm((s) => ({ ...s, slug: e.target.value }))}
                    className="w-full px-4 py-3 border-b border-gray-300 bg-transparent focus:border-[#0099CC] focus:outline-none transition-colors peer"
                    placeholder=" "
                  />
                  <label className={`absolute ${isRTL ? "right-4" : "left-4"} top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#0099CC]`}>
                    {t("admin_form_slug_label")}
                  </label>
                  <p className="text-xs text-gray-400 mt-1">{t("admin_form_slug_hint")}</p>
                </div>

                {/* Category */}
                <div className="relative">
                  <select
                    value={form.category}
                    onChange={(e) => setForm((s) => ({ ...s, category: e.target.value }))}
                    className="w-full px-4 py-3 border-b border-gray-300 bg-transparent focus:border-[#0099CC] focus:outline-none transition-colors"
                    required
                  >
                    <option value="">{t("admin_form_category_placeholder")}</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {i18n.language.startsWith("ar") ? cat.ar : cat.en}
                      </option>
                    ))}
                  </select>
                  <label className={`absolute ${isRTL ? "right-4" : "left-4"} top-1 text-sm text-[#0099CC] bg-white px-1`}>
                    {t("admin_form_category_label")}
                  </label>
                </div>

                {/* Add new category */}
                <div className="mt-2 flex gap-2">
                  <input
                    type="text"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    placeholder={t("admin_form_category_add_placeholder")}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:border-[#0099CC] focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const trimmed = newCategory.trim();
                      if (!trimmed) return;
                      const id = trimmed.toLowerCase().replace(/\s+/g, "-");
                      const newCat = { id, en: trimmed, ar: trimmed };
                      setCategories((prev) => {
                        if (prev.some((c) => c.id === id)) return prev;
                        return [newCat, ...prev];
                      });
                      setForm((s) => ({ ...s, category: id }));
                      setNewCategory("");
                    }}
                    className="px-4 py-2 bg-[#0F2D5E] text-white rounded-lg hover:bg-[#153d7f] transition-colors"
                  >
                    {t("admin_form_category_add_button")}
                  </button>
                  
                </div>

                {/* Date */}
                <div className="relative">
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm((s) => ({ ...s, date: e.target.value }))}
                    className="w-full px-4 py-3 border-b border-gray-300 bg-transparent focus:border-[#0099CC] focus:outline-none transition-colors"
                    required
                  />
                  <label className={`absolute ${isRTL ? "right-4" : "left-4"} top-1 text-sm text-[#0099CC] bg-white px-1`}>
                    {t("admin_form_date_label")}
                  </label>
                </div>

                {/* Excerpts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <textarea
                      rows="3"
                      value={form.excerptEn}
                      onChange={(e) => setForm((s) => ({ ...s, excerptEn: e.target.value }))}
                      className="w-full px-4 py-3 border-b border-gray-300 bg-transparent focus:border-[#0099CC] focus:outline-none transition-colors peer resize-none"
                      placeholder=" "
                    />
                    <label className={`absolute ${isRTL ? "right-4" : "left-4"} top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#0099CC]`}>
                      {t("admin_form_excerpt_en_label")}
                    </label>
                  </div>
                  <div className="relative">
                    <textarea
                      rows="3"
                      value={form.excerptAr}
                      onChange={(e) => setForm((s) => ({ ...s, excerptAr: e.target.value }))}
                      className="w-full px-4 py-3 border-b border-gray-300 bg-transparent focus:border-[#0099CC] focus:outline-none transition-colors peer resize-none"
                      placeholder=" "
                    />
                    <label className={`absolute ${isRTL ? "right-4" : "left-4"} top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#0099CC]`}>
                      {t("admin_form_excerpt_ar_label")}
                    </label>
                  </div>
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t("admin_form_image_label")}</label>
                  <div className="border-2 border-dashed border-[#E2E8F0] rounded-2xl p-6 text-center hover:border-[#0099CC] hover:bg-[#F0F9FF] transition-colors cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={onImageChange}
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer">
                      <div className="mx-auto mb-2 w-10 h-10 text-[#94A3B8] flex items-center justify-center">
                        <FiUploadCloud className="w-6 h-6" />
                      </div>
                      <p className="text-gray-600">{t("admin_form_image_drag_hint")}</p>
                      <p className="text-xs text-gray-400 mt-2">Maximum upload size: {MAX_IMAGE_SIZE_LABEL}.</p>
                    </label>
                  </div>
                  {form.image && (
                    <div className="mt-4">
                      <img
                        src={form.image}
                        alt="preview"
                        className="w-full h-32 object-cover rounded-lg shadow-md"
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("admin_form_content_en_label")}</label>
                    <RichTextEditor
                      value={form.contentEn}
                      onChange={(html) => setForm((s) => ({ ...s, contentEn: html }))}
                      placeholder={t("admin_content_hint")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("admin_form_content_ar_label")}</label>
                    <RichTextEditor
                      value={form.contentAr}
                      onChange={(html) => setForm((s) => ({ ...s, contentAr: html }))}
                      placeholder={t("admin_content_hint")}
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-[#1A3C6E] text-white py-3 rounded-lg hover:bg-[#152c4a] transition-all font-semibold shadow-md hover:shadow-lg hover:scale-105"
                  >
                    {editing ? t("admin_form_submit_update") : t("admin_form_submit_create")}
                  </button>
                  <button
                    type="button"
                    onClick={reset}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {t("admin_form_reset_btn")}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Posts List Panel - Right (60%) */}
          <div className="lg:w-[60%]">
            <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#0099CC]"></span>
                <h2 className="text-xl font-medium text-[#1A3C6E]">{t("admin_posts_list_title")}</h2>
              </div>

              {/* Category filter */}
              <div className="mb-4 flex flex-wrap gap-2">
                <button
                  className={`px-3 py-1 rounded-full text-xs ${selectedCategory === "" ? "bg-[#0F2D5E] text-white" : "bg-gray-100 text-gray-700 hover:bg-[#EFF6FF]"}`}
                  onClick={() => setSelectedCategory("")}
                >
                  {t("admin_category_all")}
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    className={`px-3 py-1 rounded-full text-xs transition-colors ${selectedCategory === cat.id ? "bg-[#0F2D5E] text-white" : "bg-gray-100 text-gray-700 hover:bg-[#EFF6FF]"}`}
                    onClick={() => setSelectedCategory(cat.id)}
                  >
                    {i18n.language.startsWith("ar") ? cat.ar : cat.en}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="mb-6 relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder={t("admin_search_posts")}
                  className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-lg focus:border-[#0099CC] focus:outline-none transition-colors"
                />
                <div className={`absolute ${isRTL ? "right-4" : "left-4"} top-1/2 transform -translate-y-1/2 text-gray-400`}>
                  <FiSearch className="w-4 h-4" />
                </div>
                <div className="text-sm text-gray-600 mt-2">
                  {filteredPosts.length} {t("admin_search_results_count")}
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-[#F1F3F5]">
                      <th className="py-3 px-4 text-right uppercase tracking-widest text-xs text-[#9CA3AF]">{t("admin_table_title")}</th>
                      <th className="py-3 px-4 text-right uppercase tracking-widest text-xs text-[#9CA3AF]">{t("admin_table_date")}</th>
                      <th className="py-3 px-4 text-right uppercase tracking-widest text-xs text-[#9CA3AF]">{t("admin_table_slug")}</th>
                      <th className="py-3 px-4 text-right uppercase tracking-widest text-xs text-[#9CA3AF]">{t("admin_table_category")}</th>
                      <th className="py-3 px-4 text-right uppercase tracking-widest text-xs text-[#9CA3AF]">{t("admin_table_actions")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPosts.length === 0 ? (
                      <tr>
                        <td colSpan="4" className="py-8 text-center text-gray-500">
                          {t("admin_no_posts_msg")}
                        </td>
                      </tr>
                    ) : (
                      currentPosts.map((post, index) => (
                        <tr
                          key={post.id}
                          className={`border-b border-[#F1F3F5] transition-colors ${
                            index % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"
                          } hover:bg-[#F8FAFF]`}
                        >
                          <td className="py-4 px-4 text-right">{post.title?.en || post.title}</td>
                          <td className="py-4 px-4 text-right text-gray-600">{post.date}</td>
                          <td className="py-4 px-4 text-right text-gray-600">{getCategoryLabel(post.category)}</td>
                          <td className="py-4 px-4 text-right text-gray-600 truncate" title={post.slug}>{post.slug}</td>
                          <td className="py-4 px-4 text-right">
                            <div className="flex gap-2 justify-end">
                              <button
                                onClick={() => onEdit(post)}
                                className="w-8 h-8 rounded-lg bg-[#F3F4F6] text-gray-600 flex items-center justify-center hover:bg-[#EFF6FF] hover:text-[#0F57A2] transition-colors"
                                title={t("admin_edit_btn")}
                              >
                                <FiEdit2 className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => onDelete(post.id)}
                                className="w-8 h-8 rounded-lg bg-[#F3F4F6] text-gray-600 flex items-center justify-center hover:bg-[#FEF2F2] hover:text-[#DC2626] transition-colors"
                                title={t("admin_delete_btn")}
                              >
                                <FiTrash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-6 flex flex-wrap gap-2 justify-center items-center text-sm">
                  <button
                    className="px-3 py-1 text-gray-600 hover:underline disabled:opacity-40 disabled:cursor-not-allowed"
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    {t("admin_pagination_previous")}
                  </button>
                  {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      className={`px-3 py-1 rounded-md ${
                        pageNum === currentPage
                          ? "bg-[#0F2D5E] text-white"
                          : "text-gray-700 hover:underline"
                      }`}
                      onClick={() => goToPage(pageNum)}
                    >
                      {pageNum}
                    </button>
                  ))}
                  <button
                    className="px-3 py-1 text-gray-600 hover:underline disabled:opacity-40 disabled:cursor-not-allowed"
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    {t("admin_pagination_next")}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
