import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { 
  FiPlus, FiLogOut, FiSearch, FiEdit2, FiTrash2, FiUploadCloud, 
  FiEye, FiTag, FiCalendar, FiUsers, FiBriefcase, FiBarChart2, 
  FiSettings, FiImage, FiGrid, FiCheckCircle, FiTool
} from "react-icons/fi";
import BlogService from "../services/blogService";
import TestimonialService from "../services/testimonialService";
import PartnerService from "../services/partnerService";
import SettingsService from "../services/settingsService";
import ProductService from "../services/productService";
import ServiceService from "../services/serviceService";
import RichTextEditor from "../components/RichTextEditor";
import SeoHelmet from "../components/SeoHelmet";

// --- Constants ---
const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "admin**Al#123",
};

const MAX_IMAGE_SIZE_BYTES = 1 * 1024 * 1024; // 1 MB
const MAX_IMAGE_SIZE_LABEL = "1 MB";

const CATEGORY_OPTIONS = [
  { id: "tech", en: "Tech", ar: "تطوير البرمجيات" },
  { id: "business", en: "Business", ar: "الأعمال" },
  { id: "design", en: "Design", ar: "تصميم" },
  { id: "marketing", en: "Marketing", ar: "التسويق" },
];

const packi18n = (en, ar) => ({ en: en || "", ar: ar || en || "" });

// --- Helper Components ---
const Alert = ({ alert }) => {
  if (!alert) return null;
  return (
    <div className={`mx-6 mt-4 p-4 rounded-lg shadow-md flex items-center gap-3 transition-all duration-500 ease-in-out ${
      alert.type === "success" ? "bg-[#22C55E] text-white border-r-4 border-[#22C55E]" : "bg-[#EF4444] text-white border-r-4 border-[#EF4444]"
    }`}>
      <span className="text-xl">{alert.type === "success" ? "✅" : "❌"}</span>
      <span>{alert.text}</span>
    </div>
  );
};

// --- Main AdminDashboard Component ---
export default function AdminDashboard() {
  const { t, i18n } = useTranslation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState("blog");
  const [alert, setAlert] = useState(null);
  const isRTL = i18n.language === "ar";

  // Auth Effects
  useEffect(() => {
    const savedLogin = localStorage.getItem("adminBlogLoggedIn");
    if (savedLogin === "true") setLoggedIn(true);
  }, []);

  useEffect(() => {
    if (loggedIn) localStorage.setItem("adminBlogLoggedIn", "true");
    else localStorage.removeItem("adminBlogLoggedIn");
  }, [loggedIn]);

  // Auto-dismiss alerts
  useEffect(() => {
    if (alert && alert.type === 'success') {
      const timer = setTimeout(() => setAlert(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginForm.username === ADMIN_CREDENTIALS.username && loginForm.password === ADMIN_CREDENTIALS.password) {
      setLoggedIn(true);
      setLoginError("");
      setAlert({ type: "success", text: t("admin_login_success") });
    } else {
      setLoginError(t("admin_login_error"));
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setAlert(null);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  if (!loggedIn) {
    return (
      <div dir={isRTL ? "rtl" : "ltr"} className="min-h-[69vh] bg-[#F0F4F8] flex items-center justify-center ">
        <SeoHelmet pageKey="blog" />
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#1A3C6E] mb-2">{t("admin_login")}</h1>
            <p className="text-gray-600">{t("admin_panel")}</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                value={loginForm.username}
                onChange={(e) => setLoginForm((f) => ({ ...f, username: e.target.value }))}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#1A3C6E] focus:outline-none transition-colors peer"
                placeholder=" "
                required
              />
              <label className={`absolute ${isRTL ? "right-4" : "left-4"} top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#1A3C6E]`}>
                {t("admin_username")}
              </label>
            </div>
            <div className="relative">
              <input
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm((f) => ({ ...f, password: e.target.value }))}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#1A3C6E] focus:outline-none transition-colors peer"
                placeholder=" "
                required
              />
              <label className={`absolute ${isRTL ? "right-4" : "left-4"} top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#1A3C6E]`}>
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
              className="w-full bg-[#1A3C6E] text-white py-3 rounded-lg hover:bg-[#152c4a] transition-all font-semibold shadow-md hover:shadow-lg active:scale-95"
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

      {/* Header */}
      <header className="sticky top-0 bg-white shadow-sm z-30">
        <div className="mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-[#1A3C6E]">{t("admin_dashboard")}</h1>
            <div className="hidden md:flex gap-2">
              <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full border border-blue-100">Live Editor</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => changeLanguage("en")}
                className={`px-2 py-1 rounded ${!isRTL ? "bg-gray-100 ring-2 ring-[#1A3C6E]" : "hover:bg-gray-50"}`}
              >
                <img src="https://flagcdn.com/w40/us.png" alt="English" className="w-6 h-4 object-cover" />
              </button>
              <button
                onClick={() => changeLanguage("ar")}
                className={`px-2 py-1 rounded ${isRTL ? "bg-gray-100 ring-2 ring-[#1A3C6E]" : "hover:bg-gray-50"}`}
              >
                <img src="https://flagcdn.com/w40/sa.png" alt="Arabic" className="w-6 h-4 object-cover" />
              </button>
            </div>
            <button
              onClick={handleLogout}
              className="border border-[#EF4444] text-[#EF4444] px-4 py-2 rounded-lg hover:bg-[#EF4444] hover:text-white transition-all flex items-center gap-2 font-medium"
            >
              <FiLogOut className="w-5 h-5" />
              <span className="hidden sm:inline">{t("admin_logout")}</span>
            </button>
          </div>
        </div>
      </header>

      <Alert alert={alert} />

      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
        {/* Sidebar Navigation */}
        <aside className="lg:w-64 bg-white border-r border-gray-100 p-4 shrink-0">
          <nav className="space-y-2 sticky top-24">
            <TabButton active={activeTab === "blog"} onClick={() => setActiveTab("blog")} icon={<FiGrid />} label={t("admin_blog")} />
            <TabButton active={activeTab === "products"} onClick={() => setActiveTab("products")} icon={<FiBriefcase />} label={t("admin_products")} />
            <TabButton active={activeTab === "services"} onClick={() => setActiveTab("services")} icon={<FiTool />} label={t("admin_services")} />
            <TabButton active={activeTab === "testimonials"} onClick={() => setActiveTab("testimonials")} icon={<FiUsers />} label={t("admin_testimonials")} />
            <TabButton active={activeTab === "partners"} onClick={() => setActiveTab("partners")} icon={<FiImage />} label={t("admin_partners")} />
            <TabButton active={activeTab === "stats"} onClick={() => setActiveTab("stats")} icon={<FiBarChart2 />} label={t("admin_stats")} />
            <TabButton active={activeTab === "settings"} onClick={() => setActiveTab("settings")} icon={<FiSettings />} label={t("admin_settings")} />
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-6 md:p-8 overflow-x-hidden">
          {activeTab === "blog" && <BlogTab t={t} isRTL={isRTL} setAlert={setAlert} />}
          {activeTab === "products" && <ProductsTab t={t} isRTL={isRTL} setAlert={setAlert} />}
          {activeTab === "services" && <ServicesTab t={t} isRTL={isRTL} setAlert={setAlert} />}
          {activeTab === "testimonials" && <TestimonialsTab t={t} isRTL={isRTL} setAlert={setAlert} />}
          {activeTab === "partners" && <PartnersTab t={t} isRTL={isRTL} setAlert={setAlert} />}
          {activeTab === "stats" && <StatsTab t={t} isRTL={isRTL} setAlert={setAlert} />}
          {activeTab === "settings" && <SettingsTab t={t} isRTL={isRTL} setAlert={setAlert} />}
        </main>
      </div>
    </div>
  );
}

const TabButton = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
      active 
        ? "bg-[#1A3C6E] text-white shadow-lg shadow-blue-900/20" 
        : "text-gray-600 hover:bg-gray-50 hover:text-[#1A3C6E]"
    }`}
  >
    <span className="text-xl">{icon}</span>
    <span>{label}</span>
  </button>
);

// --- TAB COMPONENTS ---

// 1. BLOG TAB (Consolidated from AdminBlog.jsx)
function BlogTab({ t, isRTL, setAlert }) {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ id: null, titleEn: "", titleAr: "", slug: "", category: "", excerptEn: "", excerptAr: "", contentEn: "", contentAr: "", metaTitleEn: "", metaTitleAr: "", metaDescriptionEn: "", metaDescriptionAr: "", status: "published", date: new Date().toISOString().split("T")[0], image: "" });
  const [editing, setEditing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState(CATEGORY_OPTIONS);

  const loadPosts = useCallback(async () => {
    const data = await BlogService.fetchPosts();
    setPosts(data);
    // Dynamic categories from posts
    const updated = [...CATEGORY_OPTIONS];
    data.forEach(p => {
      const cat = p.category;
      if (cat && !updated.some(c => c.id === cat || c.en === cat)) {
        updated.push({ id: cat, en: cat, ar: cat });
      }
    });
    setCategories(updated);
  }, []);

  useEffect(() => { loadPosts(); }, [loadPosts]);

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesCat = !selectedCategory || post.category === selectedCategory;
      const text = `${post.title?.en || ""} ${post.title?.ar || ""}`.toLowerCase();
      const matchesSearch = !searchQuery || text.includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [posts, searchQuery, selectedCategory]);

  const onImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > MAX_IMAGE_SIZE_BYTES) {
      setAlert({ type: "error", text: `Image too large (Max ${MAX_IMAGE_SIZE_LABEL})` });
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => setForm(f => ({ ...f, image: ev.target.result }));
    reader.readAsDataURL(file);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.titleEn.trim()) return setAlert({ type: "error", text: "English Title is required" });
    
    const payload = {
      title: packi18n(form.titleEn, form.titleAr),
      excerpt: packi18n(form.excerptEn, form.excerptAr),
      content: packi18n(form.contentEn, form.contentAr),
      metaTitle: packi18n(form.metaTitleEn, form.metaTitleAr),
      metaDescription: packi18n(form.metaDescriptionEn, form.metaDescriptionAr),
      category: form.category,
      date: form.date,
      image: form.image,
      status: form.status,
      slug: form.slug || form.titleEn.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
    };

    try {
      if (editing && form.id) {
        await BlogService.updatePost(form.id, payload);
        setAlert({ type: "success", text: "Post updated successfully" });
      } else {
        await BlogService.createPost(payload);
        setAlert({ type: "success", text: "Post created successfully" });
      }
      reset();
      loadPosts();
    } catch (err) {
      setAlert({ type: "error", text: err.message });
    }
  };

  const reset = () => {
    setForm({ id: null, titleEn: "", titleAr: "", slug: "", category: "", excerptEn: "", excerptAr: "", contentEn: "", contentAr: "", metaTitleEn: "", metaTitleAr: "", metaDescriptionEn: "", metaDescriptionAr: "", status: "published", date: new Date().toISOString().split("T")[0], image: "" });
    setEditing(false);
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
      metaTitleEn: post.metaTitle?.en || "",
      metaTitleAr: post.metaTitle?.ar || "",
      metaDescriptionEn: post.metaDescription?.en || "",
      metaDescriptionAr: post.metaDescription?.ar || "",
      status: post.status || "published",
      date: post.date || "",
      image: post.image || "",
    });
    setEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onDelete = async (id) => {
    if (!window.confirm("Delete this post?")) return;
    await BlogService.deletePost(id);
    setAlert({ type: "success", text: "Post deleted" });
    loadPosts();
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <h2 className="text-xl font-bold text-[#1A3C6E] mb-6 flex items-center gap-2">
          <FiEdit2 /> {editing ? "Edit Post" : "Create New Post"}
        </h2>
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Title (English)</label>
              <input type="text" value={form.titleEn} onChange={e => setForm({...form, titleEn: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 outline-none" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Title (Arabic)</label>
              <input type="text" value={form.titleAr} onChange={e => setForm({...form, titleAr: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 outline-none" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Slug</label>
              <input type="text" value={form.slug} onChange={e => setForm({...form, slug: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-lg" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Category</label>
              <select value={form.category} onChange={e => setForm({...form, category: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-lg">
                <option value="">Select Category</option>
                {categories.map(c => <option key={c.id} value={c.id}>{isRTL ? c.ar : c.en}</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">{t("admin_date")}</label>
              <input type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-lg" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Cover Image</label>
            <div className="flex items-center gap-4">
              {form.image && <img src={form.image} alt="Preview" className="w-20 h-20 object-cover rounded-lg" />}
              <label className="flex-1 border-2 border-dashed border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                <FiUploadCloud className="text-2xl text-gray-400 mb-1" />
                <span className="text-xs text-gray-500">Click to upload image</span>
                <input type="file" className="hidden" accept="image/*" onChange={onImageChange} />
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Content (English)</label>
              <RichTextEditor value={form.contentEn} onChange={v => setForm({...form, contentEn: v})} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Content (Arabic)</label>
              <RichTextEditor value={form.contentAr} onChange={v => setForm({...form, contentAr: v})} />
            </div>
          </div>

          <div className="flex gap-4 pt-4 border-t border-gray-100">
            <button type="submit" className="px-8 py-3 bg-[#1A3C6E] text-white rounded-xl font-bold shadow-lg hover:shadow-blue-900/20 active:scale-95 transition-all">
              {editing ? t("admin_update") : t("admin_add")}
            </button>
            {editing && <button type="button" onClick={reset} className="px-8 py-3 bg-gray-100 text-gray-600 rounded-xl font-bold hover:bg-gray-200 transition-all">{t("admin_cancel")}</button>}
          </div>
        </form>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <h3 className="text-lg font-bold text-[#1A3C6E]">Existing Posts</h3>
          <div className="relative w-full md:w-64">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search posts..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-lg focus:ring-2 focus:ring-blue-100 outline-none text-sm" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 text-left">Post</th>
                <th className="px-6 py-4 text-left">Category</th>
                <th className="px-6 py-4 text-left">Date</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredPosts.map(post => (
                <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={post.image || "/placeholder.png"} alt={post.title?.en || "Post image"} className="w-10 h-10 rounded object-cover" />
                      <span className="font-medium text-gray-900">{post.title?.en || "Untitled"}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{post.category}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{post.date}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => onEdit(post)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"><FiEdit2 /></button>
                      <button onClick={() => onDelete(post.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"><FiTrash2 /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// 2. TESTIMONIALS TAB
function TestimonialsTab({ t, isRTL, setAlert }) {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ id: null, name_en: "", name_ar: "", location_en: "", location_ar: "", text_en: "", text_ar: "", image: "", active: true });
  const [editing, setEditing] = useState(false);

  const load = useCallback(async () => {
    const data = await TestimonialService.fetchAll(true);
    if (data) setItems(data);
  }, []);

  useEffect(() => { load(); }, [load]);

  const onImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setForm(f => ({ ...f, image: ev.target.result }));
    reader.readAsDataURL(file);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing && form.id) {
        await TestimonialService.update(form.id, form);
        setAlert({ type: "success", text: "Testimonial updated" });
      } else {
        await TestimonialService.create(form);
        setAlert({ type: "success", text: "Testimonial created" });
      }
      reset();
      load();
    } catch (err) { setAlert({ type: "error", text: err.message }); }
  };

  const reset = () => {
    setForm({ id: null, name_en: "", name_ar: "", location_en: "", location_ar: "", text_en: "", text_ar: "", image: "", active: true });
    setEditing(false);
  };

  const onDelete = async (id) => {
    if (!window.confirm("Delete testimonial?")) return;
    await TestimonialService.delete(id);
    setAlert({ type: "success", text: "Deleted" });
    load();
  };

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <h2 className="text-xl font-bold text-[#1A3C6E] mb-6 flex items-center gap-2"><FiUsers /> {editing ? "Edit Testimonial" : "Add Testimonial"}</h2>
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Name (EN)" value={form.name_en} onChange={e => setForm({...form, name_en: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-lg" required />
            <input type="text" placeholder="Name (AR)" value={form.name_ar} onChange={e => setForm({...form, name_ar: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-lg" />
            <input type="text" placeholder="Location (EN)" value={form.location_en} onChange={e => setForm({...form, location_en: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-lg" />
            <input type="text" placeholder="Location (AR)" value={form.location_ar} onChange={e => setForm({...form, location_ar: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-lg" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <textarea placeholder="Text (EN)" value={form.text_en} onChange={e => setForm({...form, text_en: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-lg h-32" required />
            <textarea placeholder="Text (AR)" value={form.text_ar} onChange={e => setForm({...form, text_ar: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-lg h-32" />
          </div>
          <div className="flex items-center gap-4">
            {form.image && <img src={form.image} alt="Preview" className="w-16 h-16 rounded-full object-cover" />}
            <label className="flex-1 border-2 border-dashed border-gray-200 p-4 rounded-xl text-center cursor-pointer hover:bg-gray-50">
              <span className="text-sm text-gray-500">Logo/Avatar</span>
              <input type="file" className="hidden" onChange={onImageChange} />
            </label>
            <div className="flex items-center gap-2">
               <input type="checkbox" checked={form.active} onChange={e => setForm({...form, active: e.target.checked})} id="active-test" />
               <label htmlFor="active-test" className="text-sm font-medium">Active</label>
            </div>
          </div>
          <div className="flex gap-4">
            <button type="submit" className="px-8 py-3 bg-[#1A3C6E] text-white rounded-xl font-bold">{editing ? t("admin_update") : t("admin_add")}</button>
            {editing && <button type="button" onClick={reset} className="px-8 py-3 bg-gray-100 text-gray-600 rounded-xl font-bold">{t("admin_cancel")}</button>}
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map(item => (
          <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <img src={item.image || "/placeholder.png"} alt={item.name_en || "Item image"} className="w-12 h-12 rounded-full object-contain bg-gray-50" />
                  <div>
                    <h4 className="font-bold text-gray-900">{item.name_en}</h4>
                    <p className="text-xs text-gray-500">{item.location_en}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${item.active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                  {item.active ? "Active" : "Inactive"}
                </span>
              </div>
              <p className="text-sm text-gray-600 italic line-clamp-3">"{item.text_en}"</p>
            </div>
            <div className="flex justify-end gap-2 mt-4 pt-4 border-t border-gray-50">
              <button onClick={() => { setForm(item); setEditing(true); window.scrollTo(0,0); }} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"><FiEdit2 /></button>
              <button onClick={() => onDelete(item.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg"><FiTrash2 /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 3. PARTNERS TAB
function PartnersTab({ t, setAlert }) {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ id: null, name: "", image: "", active: true, sort_order: 0 });
  const [editing, setEditing] = useState(false);

  const load = useCallback(async () => {
    const data = await PartnerService.fetchAll(true);
    if (data) setItems(data);
  }, []);

  useEffect(() => { load(); }, [load]);

  const onImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setForm(f => ({ ...f, image: ev.target.result }));
    reader.readAsDataURL(file);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing && form.id) {
        await PartnerService.update(form.id, form);
        setAlert({ type: "success", text: "Partner updated" });
      } else {
        await PartnerService.create(form);
        setAlert({ type: "success", text: "Partner added" });
      }
      reset();
      load();
    } catch (err) { setAlert({ type: "error", text: err.message }); }
  };

  const reset = () => {
    setForm({ id: null, name: "", image: "", active: true, sort_order: 0 });
    setEditing(false);
  };

  const onDelete = async (id) => {
    if (!window.confirm("Remove partner?")) return;
    await PartnerService.delete(id);
    setAlert({ type: "success", text: "Removed" });
    load();
  };

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <h2 className="text-xl font-bold text-[#1A3C6E] mb-6 flex items-center gap-2"><FiImage /> {editing ? "Edit Partner" : "Add Partner Logo"}</h2>
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Partner Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-lg" required />
            <input type="number" placeholder="Sort Order" value={form.sort_order} onChange={e => setForm({...form, sort_order: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-lg" />
          </div>
          <div className="flex items-center gap-4">
            {form.image && <img src={form.image} alt="Preview" className="w-24 h-12 object-contain bg-gray-50 p-2 rounded border" />}
            <label className="flex-1 border-2 border-dashed border-gray-200 p-4 rounded-xl text-center cursor-pointer hover:bg-gray-50">
              <span className="text-sm text-gray-500">Upload Logo</span>
              <input type="file" className="hidden" onChange={onImageChange} />
            </label>
            <div className="flex items-center gap-2">
               <input type="checkbox" checked={form.active} onChange={e => setForm({...form, active: e.target.checked})} id="active-part" />
               <label htmlFor="active-part" className="text-sm font-medium">Active</label>
            </div>
          </div>
          <div className="flex gap-4 pt-4 border-t border-gray-100">
            <button type="submit" className="px-8 py-3 bg-[#1A3C6E] text-white rounded-xl font-bold">{editing ? t("admin_update") : t("admin_add")}</button>
            {editing && <button type="button" onClick={reset} className="px-8 py-3 bg-gray-100 text-gray-600 rounded-xl font-bold">{t("admin_cancel")}</button>}
          </div>
        </form>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {items.map(item => (
          <div key={item.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm relative group">
            <img src={item.image} alt={item.name || "Item image"} className="w-full h-16 object-contain mb-2" />
            <p className="text-[10px] text-center font-bold text-gray-500 truncate">{item.name}</p>
            <div className="absolute inset-0 bg-white/90 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
              <button onClick={() => { setForm(item); setEditing(true); }} className="p-1.5 bg-blue-50 text-blue-600 rounded"><FiEdit2 /></button>
              <button onClick={() => onDelete(item.id)} className="p-1.5 bg-red-50 text-red-600 rounded"><FiTrash2 /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 4. STATS TAB
function StatsTab({ t, setAlert, isRTL }) {
  const [stats, setStats] = useState([]);

  const load = useCallback(async () => {
    const data = await SettingsService.fetchStats();
    if (data) setStats(data);
  }, []);

  useEffect(() => { load(); }, [load]);

  const onUpdate = async (id, field, value) => {
    try {
      const updated = stats.map(s => s.id === id ? { ...s, [field]: value } : s);
      setStats(updated);
      const target = updated.find(s => s.id === id);
      await SettingsService.updateStat(id, target);
    } catch (err) { setAlert({ type: "error", text: err.message }); }
  };

  return (
    <div className="space-y-8 animate-in zoom-in-95 duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(stat => (
          <div key={stat.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full ${stat.icon_color} opacity-20`} />
              <h4 className="font-bold text-[#1A3C6E] uppercase tracking-wider text-xs">Stat Group: {stat.stat_key}</h4>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-[10px] text-gray-400 uppercase font-bold">Value (e.g. 500+)</label>
                <input type="text" value={stat.value} onChange={e => onUpdate(stat.id, 'value', e.target.value)} className="w-full px-3 py-1.5 bg-gray-50 border-none rounded-lg text-lg font-black text-[#1A3C6E]" />
              </div>
              <div>
                <label className="text-[10px] text-gray-400 uppercase font-bold">Label (English)</label>
                <input type="text" value={stat.label_en} onChange={e => onUpdate(stat.id, 'label_en', e.target.value)} className="w-full px-3 py-1 bg-gray-50 border-none rounded-lg text-sm" />
              </div>
              <div>
                <label className="text-[10px] text-gray-400 uppercase font-bold">Label (Arabic)</label>
                <input type="text" value={stat.label_ar} onChange={e => onUpdate(stat.id, 'label_ar', e.target.value)} className="w-full px-3 py-1 bg-gray-50 border-none rounded-lg text-sm" dir="rtl" />
              </div>
            </div>
            <div className="pt-4 flex items-center justify-between">
              <FiCheckCircle className="text-green-500" />
              <span className="text-[10px] text-gray-400 font-medium">Auto-saving...</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 5. SETTINGS TAB (Hero & Team)
function SettingsTab({ t, setAlert, isRTL }) {
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    SettingsService.fetchAll().then(data => {
      if (data) setSettings(data);
      setLoading(false);
    });
  }, []);

  const handleChange = (key, field, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: { ...prev[key], [field]: value }
    }));
  };

  const handleImage = (key, e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => handleChange(key, 'value_en', ev.target.result);
    reader.readAsDataURL(file);
  };

  const onSave = async () => {
    try {
      await SettingsService.save(settings);
      setAlert({ type: "success", text: "All settings saved successfully" });
    } catch (err) { setAlert({ type: "error", text: err.message }); }
  };

  if (loading) return <div className="p-10 text-center">Loading settings...</div>;

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      <div className="flex justify-between items-center bg-[#1A3C6E] p-6 rounded-2xl text-white shadow-xl shadow-blue-900/20">
        <div>
          <h2 className="text-2xl font-bold">Site Content Editor</h2>
          <p className="text-blue-200 text-sm">Directly manage text and images across your homepage and about page</p>
        </div>
        <button onClick={onSave} className="px-8 py-3 bg-white text-[#1A3C6E] rounded-xl font-black shadow-lg hover:bg-blue-50 active:scale-95 transition-all">
          SAVE ALL CHANGES
        </button>
      </div>

      {/* Hero Section */}
      <section className="space-y-6">
        <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2 border-b pb-2"><FiGrid /> Hero Section Content</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <SettingGroup label="Hero Heading" sKey="hero_heading" settings={settings} onChange={handleChange} />
           <SettingGroup label="Hero Sub-title (Bold)" sKey="hero_text" settings={settings} onChange={handleChange} />
           <SettingGroup label="Hero Paragraph" sKey="hero_p" settings={settings} onChange={handleChange} isTextArea />
        </div>
      </section>

      {/* Team Members */}
      <section className="space-y-6">
        <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2 border-b pb-2"><FiUsers /> Team Members (About Page)</h3>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          {/* Member 1 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h4 className="font-black text-blue-600 uppercase tracking-tighter">Manager 1</h4>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-32 h-32 shrink-0 group relative cursor-pointer overflow-hidden rounded-xl bg-gray-100">
                <img src={settings.team1_image?.value_en || "/placeholder-user.png"} alt="Team member 1" className="w-full h-full object-cover" />
                <label className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <FiUploadCloud className="text-white text-2xl" />
                  <input type="file" className="hidden" onChange={e => handleImage('team1_image', e)} />
                </label>
              </div>
              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <SettingGroup label="Name" sKey="team1_name" settings={settings} onChange={handleChange} simple />
                  <SettingGroup label="Title" sKey="team1_title" settings={settings} onChange={handleChange} simple />
                </div>
                <SettingGroup label="Joined Date / Award" sKey="team1_date" settings={settings} onChange={handleChange} simple />
                <SettingGroup label="Bio/Paragraph" sKey="team1_bio" settings={settings} onChange={handleChange} isTextArea simple />
              </div>
            </div>
          </div>

          {/* Member 2 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h4 className="font-black text-blue-600 uppercase tracking-tighter">Manager 2</h4>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-32 h-32 shrink-0 group relative cursor-pointer overflow-hidden rounded-xl bg-gray-100">
                <img src={settings.team2_image?.value_en || "/placeholder-user.png"} alt="Team member 2" className="w-full h-full object-cover" />
                <label className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <FiUploadCloud className="text-white text-2xl" />
                  <input type="file" className="hidden" onChange={e => handleImage('team2_image', e)} />
                </label>
              </div>
              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <SettingGroup label="Name" sKey="team2_name" settings={settings} onChange={handleChange} simple />
                  <SettingGroup label="Title" sKey="team2_title" settings={settings} onChange={handleChange} simple />
                </div>
                <SettingGroup label="Joined Date / Award" sKey="team2_date" settings={settings} onChange={handleChange} simple />
                <SettingGroup label="Bio/Paragraph" sKey="team2_bio" settings={settings} onChange={handleChange} isTextArea simple />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="sticky bottom-6 flex justify-center z-10">
        <button onClick={onSave} className="px-12 py-4 bg-[#22C55E] text-white rounded-2xl font-black shadow-2xl hover:bg-[#16a34a] active:scale-95 transition-all flex items-center gap-3">
          <FiCheckCircle className="text-2xl" /> {t("admin_save_all")}
        </button>
      </div>
    </div>
  );
}

const SettingGroup = ({ label, sKey, settings, onChange, isTextArea = false, simple = false }) => {
  const data = settings[sKey] || { value_en: "", value_ar: "" };
  const InputTag = isTextArea ? "textarea" : "input";
  
  return (
    <div className={`space-y-4 ${simple ? "" : "bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"}`}>
      {!simple && <h4 className="font-bold text-gray-700 text-sm uppercase tracking-wider">{label}</h4>}
      <div className="space-y-3">
        <div className="relative">
          <label className="text-[10px] text-blue-500 font-bold absolute -top-2 left-3 bg-white px-1 z-10">{label} (EN)</label>
          <InputTag 
            value={data.value_en} 
            onChange={e => onChange(sKey, 'value_en', e.target.value)} 
            className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-blue-100 outline-none"
            rows={isTextArea ? 3 : undefined}
          />
        </div>
        <div className="relative">
          <label className="text-[10px] text-blue-500 font-bold absolute -top-2 right-3 bg-white px-1 z-10">{label} (AR)</label>
          <InputTag 
            value={data.value_ar} 
            onChange={e => onChange(sKey, 'value_ar', e.target.value)} 
            className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-blue-100 outline-none text-right"
            rows={isTextArea ? 3 : undefined}
            dir="rtl"
          />
        </div>
      </div>
    </div>
  );
};

// 6. PRODUCTS TAB
function ProductsTab({ t, isRTL, setAlert }) {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ id: null, title_en: "", title_ar: "", slug: "", image: "", description_en: "", description_ar: "", features: [{en: "", ar: ""}], active: true, sort_order: 0 });
  const [editing, setEditing] = useState(false);

  const load = useCallback(async () => {
    const data = await ProductService.fetchAll(true);
    if (data) setItems(data);
  }, []);

  useEffect(() => { load(); }, [load]);

  const onImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setForm(f => ({ ...f, image: ev.target.result }));
    reader.readAsDataURL(file);
  };

  const addFeature = () => setForm(f => ({ ...f, features: [...f.features, {en: "", ar: ""}] }));
  const removeFeature = (idx) => setForm(f => ({ ...f, features: f.features.filter((_, i) => i !== idx) }));
  const updateFeature = (idx, lang, val) => {
    const updated = [...form.features];
    updated[idx][lang] = val;
    setForm({...form, features: updated});
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing && form.id) {
        await ProductService.update(form.id, form);
        setAlert({ type: "success", text: "Product updated" });
      } else {
        await ProductService.create(form);
        setAlert({ type: "success", text: "Product created" });
      }
      reset();
      load();
    } catch (err) { setAlert({ type: "error", text: err.message }); }
  };

  const reset = () => {
    setForm({ id: null, title_en: "", title_ar: "", slug: "", image: "", description_en: "", description_ar: "", features: [{en: "", ar: ""}], active: true, sort_order: 0 });
    setEditing(false);
  };

  const onDelete = async (id) => {
    if (!window.confirm("Delete product?")) return;
    await ProductService.delete(id);
    setAlert({ type: "success", text: "Deleted" });
    load();
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <h2 className="text-xl font-bold text-[#1A3C6E] mb-6 flex items-center gap-2"><FiBriefcase /> {editing ? "Edit Product" : "Add Product"}</h2>
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Title (EN)" value={form.title_en} onChange={e => setForm({...form, title_en: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-lg" required />
            <input type="text" placeholder="Title (AR)" value={form.title_ar} onChange={e => setForm({...form, title_ar: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-lg text-right" dir="rtl" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Slug (URL identifier)" value={form.slug} onChange={e => setForm({...form, slug: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-lg" required />
            <input type="number" placeholder="Sort Order" value={form.sort_order} onChange={e => setForm({...form, sort_order: parseInt(e.target.value) || 0})} className="w-full px-4 py-2 border border-gray-200 rounded-lg" />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-semibold">Image</label>
            <div className="flex items-center gap-4">
              {form.image && <img src={form.image} alt="Preview" className="w-20 h-20 object-cover rounded" />}
              <label className="flex-1 border-2 border-dashed p-4 rounded text-center cursor-pointer hover:bg-gray-50">
                <span className="text-xs text-gray-400">Click to upload product image</span>
                <input type="file" className="hidden" onChange={onImageChange} />
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <textarea placeholder="Description (EN)" value={form.description_en} onChange={e => setForm({...form, description_en: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-lg h-32" />
            <textarea placeholder="Description (AR)" value={form.description_ar} onChange={e => setForm({...form, description_ar: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-lg h-32 text-right" dir="rtl" />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-sm">Features / Checklist</h4>
              <button type="button" onClick={addFeature} className="text-blue-600 text-xs flex items-center gap-1 font-bold"><FiPlus /> Add Feature</button>
            </div>
            <div className="space-y-3">
              {form.features.map((feat, idx) => (
                <div key={idx} className="flex gap-2 items-start bg-gray-50 p-3 rounded-lg">
                  <div className="flex-1 space-y-2">
                    <input type="text" placeholder="Feature EN" value={feat.en} onChange={e => updateFeature(idx, 'en', e.target.value)} className="w-full px-3 py-1 text-sm border-none bg-white rounded" />
                    <input type="text" placeholder="Feature AR" value={feat.ar} onChange={e => updateFeature(idx, 'ar', e.target.value)} className="w-full px-3 py-1 text-sm border-none bg-white rounded text-right" dir="rtl" />
                  </div>
                  <button type="button" onClick={() => removeFeature(idx)} className="p-1 text-red-500 hover:bg-red-50 rounded"><FiTrash2 /></button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-6 border-t">
            <button type="submit" className="px-8 py-3 bg-[#1A3C6E] text-white rounded-xl font-bold">{editing ? t("admin_update") : t("admin_add")}</button>
            {editing && <button type="button" onClick={reset} className="px-8 py-3 bg-gray-100 rounded-xl font-bold">{t("admin_cancel")}</button>}
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(item => (
          <div key={item.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
            <div className="flex gap-4">
              <img src={item.image || "/placeholder.png"} alt={item.title_en || "Item image"} className="w-16 h-16 object-cover rounded-lg bg-gray-50" />
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 truncate">{item.title_en}</h4>
                <p className="text-[10px] text-gray-500 font-mono">/{item.slug}</p>
                <div className="mt-2 flex gap-1 flex-wrap">
                   <span className="text-[10px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded font-bold">{item.features?.length || 0} Features</span>
                   {!item.active && <span className="text-[10px] bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded font-bold">Draft</span>}
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-4 pt-4 border-t">
              <button onClick={() => { setForm(item); setEditing(true); window.scrollTo(0,0); }} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"><FiEdit2 /></button>
              <button onClick={() => onDelete(item.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg"><FiTrash2 /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 7. SERVICES TAB
function ServicesTab({ t, isRTL, setAlert }) {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ id: null, title_en: "", title_ar: "", description_en: "", description_ar: "", icon_name: "FaTools", sort_order: 0, active: true });
  const [editing, setEditing] = useState(false);

  const load = useCallback(async () => {
    const data = await ServiceService.fetchAll(true);
    if (data) setItems(data);
  }, []);

  useEffect(() => { load(); }, [load]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing && form.id) {
        await ServiceService.update(form.id, form);
        setAlert({ type: "success", text: "Service updated" });
      } else {
        await ServiceService.create(form);
        setAlert({ type: "success", text: "Service created" });
      }
      reset();
      load();
    } catch (err) { setAlert({ type: "error", text: err.message }); }
  };

  const reset = () => {
    setForm({ id: null, title_en: "", title_ar: "", description_en: "", description_ar: "", icon_name: "FaTools", sort_order: 0, active: true });
    setEditing(false);
  };

  const onDelete = async (id) => {
    if (!window.confirm("Delete service?")) return;
    await ServiceService.delete(id);
    setAlert({ type: "success", text: "Deleted" });
    load();
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <h2 className="text-xl font-bold text-[#1A3C6E] mb-6 flex items-center gap-2"><FiTool /> {editing ? "Edit Service" : "Add Service"}</h2>
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Title (EN)" value={form.title_en} onChange={e => setForm({...form, title_en: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-lg" required />
            <input type="text" placeholder="Title (AR)" value={form.title_ar} onChange={e => setForm({...form, title_ar: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-lg text-right" dir="rtl" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Icon Name (e.g. FaTools, FaLaptop)" value={form.icon_name} onChange={e => setForm({...form, icon_name: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-lg" />
            <input type="number" placeholder="Sort Order" value={form.sort_order} onChange={e => setForm({...form, sort_order: parseInt(e.target.value) || 0})} className="w-full px-4 py-2 border border-gray-200 rounded-lg" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <textarea placeholder="Description (EN)" value={form.description_en} onChange={e => setForm({...form, description_en: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-lg h-24" />
            <textarea placeholder="Description (AR)" value={form.description_ar} onChange={e => setForm({...form, description_ar: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-lg h-24 text-right" dir="rtl" />
          </div>
          <div className="flex gap-4 pt-4">
            <button type="submit" className="px-8 py-3 bg-[#1A3C6E] text-white rounded-xl font-bold">{editing ? t("admin_update") : t("admin_add")}</button>
            {editing && <button type="button" onClick={reset} className="px-8 py-3 bg-gray-100 rounded-xl font-bold">{t("admin_cancel")}</button>}
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(item => (
          <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-gray-900">{item.title_en}</h4>
                <p className="text-xs text-gray-500 mt-1">{item.icon_name}</p>
              </div>
              <div className="flex gap-1">
                <button onClick={() => { setForm(item); setEditing(true); window.scrollTo(0,0); }} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"><FiEdit2 /></button>
                <button onClick={() => onDelete(item.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg"><FiTrash2 /></button>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4 line-clamp-2">{item.description_en}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
