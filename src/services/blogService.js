const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

const normalize = (post) => {
  if (!post) return null;

  const clone = { ...post };

  // Fields that should be i18n objects { en: "...", ar: "..." }
  const i18nFields = ["title", "excerpt", "content", "metaTitle", "metaDescription"];

  i18nFields.forEach((key) => {
    if (clone[key] === undefined || clone[key] === null) {
      clone[key] = { en: "" };
    } else if (typeof clone[key] === "string") {
      // If it's a plain string, wrap it as i18n object
      clone[key] = { en: clone[key] };
    }
    // If it's already an object, leave it as-is (it's a proper i18n map)
  });

  // Ensure category is always a primitive string, never an object
  if (clone.category && typeof clone.category === "object") {
    clone.category = clone.category.en || clone.category.ar || Object.values(clone.category).find(v => typeof v === "string") || "";
  }
  if (clone.category === null || clone.category === undefined) {
    clone.category = "";
  }

  // Ensure date is always a string
  if (clone.date && typeof clone.date === "object") {
    clone.date = clone.date.en || clone.date.ar || String(clone.date) || "";
  }
  if (clone.date === null || clone.date === undefined) {
    clone.date = "";
  }

  // Ensure status is always a string
  if (clone.status && typeof clone.status === "object") {
    clone.status = clone.status.en || String(clone.status) || "published";
  }

  return clone;
};

const generateSlug = (title) =>
  title
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-_]/g, "")
    .replace(/-+/g, "-")
    .replace(/(^-|-$)/g, "");

const createId = () => `${Date.now()}-${Math.floor(Math.random() * 10000)}`;

const BlogService = {
  fetchPosts: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/blogs`);
      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }
      const data = await response.json();
      return data.map(normalize);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      // Fallback to localStorage if API fails
      const raw = localStorage.getItem('alawistars_blogs');
      if (raw) {
        return JSON.parse(raw).map(normalize);
      }
      return [];
    }
  },

  getPostBySlug: async (slug) => {
    try {
      const response = await fetch(`${API_BASE_URL}/blogs?slug=${slug}`);
      if (!response.ok) {
        throw new Error('Failed to fetch blog');
      }
      const post = await response.json();
      return normalize(post);
    } catch (error) {
      console.error('Error fetching blog:', error);
      // Fallback to localStorage
      const raw = localStorage.getItem('alawistars_blogs');
      if (raw) {
        const posts = JSON.parse(raw);
        const post = posts.find((item) => item.slug === slug);
        return normalize(post);
      }
      return null;
    }
  },

  createPost: async (fields) => {
    try {
      const slug = fields.slug ? fields.slug : generateSlug(fields.title.en || fields.title);
      const newPost = {
        id: createId(),
        slug,
        date: fields.date || new Date().toISOString().split("T")[0],
        image: fields.image || "",
        category: fields.category || "",
        title: { en: fields.title.en || fields.title || "Untitled" },
        excerpt: { en: fields.excerpt.en || fields.excerpt || "" },
        content: { en: fields.content?.en || fields.content || "" },
        metaTitle: { en: fields.metaTitle?.en || fields.metaTitle || "" },
        metaDescription: { en: fields.metaDescription?.en || fields.metaDescription || "" },
        status: fields.status || "published",
      };

      const response = await fetch(`${API_BASE_URL}/blogs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => null);
        throw new Error(errorBody?.error || 'Failed to create blog');
      }

      const createdPost = await response.json();
      return normalize(createdPost);
    } catch (error) {
      console.error('Error creating blog:', error);
      throw error;
    }
  },

  updatePost: async (id, fields) => {
    try {
      const response = await fetch(`${API_BASE_URL}/blogs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fields),
      });

      if (!response.ok) {
        throw new Error('Failed to update blog');
      }

      const updatedPost = await response.json();
      return normalize(updatedPost);
    } catch (error) {
      console.error('Error updating blog:', error);
      throw error;
    }
  },

  deletePost: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/blogs/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete blog');
      }

      return true;
    } catch (error) {
      console.error('Error deleting blog:', error);
      throw error;
    }
  },
};

export default BlogService;