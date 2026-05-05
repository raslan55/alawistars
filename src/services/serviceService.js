const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.PROD ? 'https://alawistars-production.up.railway.app/api' : '/api');

const ServiceService = {
  fetchAll: async (includeInactive = false) => {
    try {
      const url = `${API_BASE_URL}/services${includeInactive ? '?all=true' : ''}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch services');
      return await res.json();
    } catch (err) {
      console.error('ServiceService.fetchAll:', err);
      return null;
    }
  },

  create: async (data) => {
    const res = await fetch(`${API_BASE_URL}/services`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error((await res.json()).error || 'Failed to create');
    return await res.json();
  },

  update: async (id, data) => {
    const res = await fetch(`${API_BASE_URL}/services/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error((await res.json()).error || 'Failed to update');
    return await res.json();
  },

  delete: async (id) => {
    const res = await fetch(`${API_BASE_URL}/services/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete');
    return true;
  },
};

export default ServiceService;
