const fetch = globalThis.fetch || require('node-fetch');

(async () => {
  try {
    console.log('GET /blogs');
    const res = await fetch('http://localhost:5000/api/blogs');
    console.log('GET status', res.status);
    console.log(await res.text());
  } catch (e) {
    console.error('GET ERR', e);
  }

  try {
    console.log('POST /blogs');
    const res = await fetch('http://localhost:5000/api/blogs', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        id: 'test-123',
        slug: 'test-blog',
        date: '2026-04-06',
        image: '',
        category: 'test',
        title: { en: 'Test', ar: 'Test' },
        excerpt: { en: 'Intro', ar: 'Intro' },
        content: { en: 'Body', ar: 'Body' },
      }),
    });
    console.log('POST status', res.status);
    console.log(await res.text());
  } catch (e) {
    console.error('POST ERR', e);
  }
})();
