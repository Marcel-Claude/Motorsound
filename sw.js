// Minimaler Service Worker: nur damit die Seite als App installierbar ist.
// Cacht nichts Großes, holt die Seite immer frisch, damit Updates sofort ankommen.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
