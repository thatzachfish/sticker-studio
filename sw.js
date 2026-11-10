// Minimal service worker so Chrome treats Sticker Studio as an installable app.
// It does not cache anything: every load fetches the latest version from the site.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => { e.respondWith(fetch(e.request)); });
