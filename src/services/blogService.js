const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://alawistars-backend.railway.app/api'  // Your Railway backend URL
  : 'http://localhost:5000/api';

const normalize = (post) => {
  if (!post) return null;

  const clone = { ...post };

  // Support old data object schema where title/excerpt/content are i18n objects, or string
  Object.keys(clone).forEach((key) => {
    if (typeof clone[key] === "string" && ["title", "excerpt", "content"].includes(key)) {
      clone[key] = { en: clone[key] };
    }
  });

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
      const response = await fetch(`${API_BASE_URL}/blogs/${slug}`);
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
        content: { en: fields.content.en || fields.content || "" },
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