// Rullino 90: tiene l'app in memoria sul telefono, così funziona anche offline.
// Cambia il numero di versione quando aggiorni i file, per far scaricare la nuova versione.
const VERSIONE = "rullino90-v1";
const FILE = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "icone/icona-192.png",
  "icone/icona-512.png",
  "icone/icona-maskable-512.png",
  "icone/apple-touch-icon.png",
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSIONE).then(c => c.addAll(FILE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(chiavi => Promise.all(chiavi.filter(k => k !== VERSIONE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// prima la rete (così vedi subito gli aggiornamenti), poi la copia salvata se sei offline
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then(r => {
        const copia = r.clone();
        caches.open(VERSIONE).then(c => c.put(e.request, copia));
        return r;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match("index.html")))
  );
});
