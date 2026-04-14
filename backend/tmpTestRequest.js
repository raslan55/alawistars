const fetch = globalThis.fetch || require('node-fetch');

(async () => {
  try {
    const res = await fetch('http://localhost:5000/api/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: { en: 'Test' },
        excerpt: { en: 'Test' },
        content: { en: 'Test' },
      }),
    });
    console.log('status', res.status);
    console.log(await res.text());
  } catch (err) {
    console.error(err);
  }
})();
