const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.PROD ? 'https://alawistars-production.up.railway.app/api' : '/api');

const TestimonialService = {
  fetchAll: async (includeInactive = false) => {
    try {
      const url = `${API_BASE_URL}/testimonials${includeInactive ? '?all=true' : ''}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch testimonials');
      return await res.json();
    } catch (err) {
      console.error('TestimonialService.fetchAll:', err);
      return null; // null = fallback to static
    }
  },

  create: async (data) => {
    const res = await fetch(`${API_BASE_URL}/testimonials`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error((await res.json()).error || 'Failed to create');
    return await res.json();
  },

  update: async (id, data) => {
    const res = await fetch(`${API_BASE_URL}/testimonials/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error((await res.json()).error || 'Failed to update');
    return await res.json();
  },

  delete: async (id) => {
    const res = await fetch(`${API_BASE_URL}/testimonials/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete');
    return true;
  },
};

export default TestimonialService;
