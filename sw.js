const CACHE_NAME = 'ts-malla-cache-v1.5.0';
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './sw.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './assets/bg-default.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_URLS))
    .then(()=>self.skipWaiting())
    ||
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_URLS))
    .then(()=>self.skipWaiting())
    ||
    caches.keys().then(keys => Promise.all(keys.map(k => { if (k !== CACHE_NAME) return caches.delete(k)})))
    .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  // Navigation fallback to index.html for SPA-like behaviour offline
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).catch(() => caches.match('./index.html'))
    );
    return;
  }
  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(resp => {
      const copy = resp.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
      return resp;
    }).catch(() => cached))
  );
});
