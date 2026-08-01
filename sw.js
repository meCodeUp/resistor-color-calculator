/* SERVICE WORKER FOR RESISTOR COLOR CALCULATOR APP - VERSION 1.0.1 - GNU GENERAL PUBLIC LICENSE */
const CACHE_NAME = 'resistor-cache-v3';

/* Paths are relative to the service worker scope (/resistor-color-calculator/)
   so they resolve correctly both locally and on GitHub Pages. */
const ASSETS = [
  './',
  'index.html',
  'manifest.json',
  'css/style.css',
  'js/app.js',
  'js/l10n.js',
  'js/functions.js',
  'js/script.js',
  'locales/locales.ini',
  'locales/data.de.properties',
  'locales/data.en.properties',
  'locales/data.fr.properties',
  'locales/data.it.properties',
  'locales/data.es.properties',
  'locales/data.pt.properties',
  'icon.png',
  'images/96x96.png',
  'images/192x192.png'
];

/* Pre-cache the app shell on install. */
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(ASSETS);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

/* Remove old caches on activate so updated assets are picked up. */
self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (key) {
          return key !== CACHE_NAME;
        }).map(function (key) {
          return caches.delete(key);
        })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

/* Cache-first strategy: serve from cache, fall back to network,
   and cache newly fetched responses for next time. */
self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') {
    return;
  }
  event.respondWith(
    caches.match(event.request).then(function (cached) {
      if (cached) {
        return cached;
      }
      return fetch(event.request).then(function (response) {
        if (!response || response.status !== 200 || response.type === 'opaque') {
          return response;
        }
        const copy = response.clone();
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, copy);
        });
        return response;
      }).catch(function () {
        /* Offline fallback: serve the app shell for navigations. */
        if (event.request.mode === 'navigate') {
          return caches.match('index.html');
        }
      });
    })
  );
});
