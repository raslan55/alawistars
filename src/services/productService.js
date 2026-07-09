const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

const ProductService = {
  fetchAll: async (includeInactive = false) => {
    try {
      const url = `${API_BASE_URL}/products${includeInactive ? '?all=true' : ''}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch products');
      return await res.json();
    } catch (err) {
      console.error('ProductService.fetchAll:', err);
      return null; 
    }
  },

  fetchBySlug: async (slug) => {
    try {
      const res = await fetch(`${API_BASE_URL}/products?slug=${slug}`);
      if (!res.ok) throw new Error('Product not found');
      const data = await res.json();
      if (Array.isArray(data)) {
        return data.find(p => p.slug === slug) || null;
      }
      return data;
    } catch (err) {
      console.error('ProductService.fetchBySlug:', err);
      return null;
    }
  },

  create: async (data) => {
    const res = await fetch(`${API_BASE_URL}/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error((await res.json()).error || 'Failed to create');
    return await res.json();
  },

  update: async (id, data) => {
    const res = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error((await res.json()).error || 'Failed to update');
    return await res.json();
  },

  delete: async (id) => {
    const res = await fetch(`${API_BASE_URL}/products/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete');
    return true;
  },
};

export default ProductService;
