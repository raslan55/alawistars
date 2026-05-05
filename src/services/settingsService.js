const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.PROD ? 'https://alawistars-production.up.railway.app/api' : '/api');

const SettingsService = {
  /** Returns { key: { value_en, value_ar } } map or null on failure */
  fetchAll: async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/settings`);
      if (!res.ok) throw new Error('Failed to fetch settings');
      return await res.json();
    } catch (err) {
      console.error('SettingsService.fetchAll:', err);
      return null;
    }
  },

  /** Bulk upsert: pass { key: { value_en, value_ar } } */
  save: async (entries) => {
    const res = await fetch(`${API_BASE_URL}/settings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entries),
    });
    if (!res.ok) throw new Error((await res.json()).error || 'Failed to save settings');
    return await res.json();
  },

  /** Fetch stats array */
  fetchStats: async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/stats`);
      if (!res.ok) throw new Error('Failed to fetch stats');
      return await res.json();
    } catch (err) {
      console.error('SettingsService.fetchStats:', err);
      return null;
    }
  },

  /** Update a single stat by id */
  updateStat: async (id, data) => {
    const res = await fetch(`${API_BASE_URL}/stats/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error((await res.json()).error || 'Failed to update stat');
    return await res.json();
  },
};

export default SettingsService;
