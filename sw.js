const C="nt-v3";const A=["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "vendor/leaflet.js", "vendor/leaflet.css", "fonts/dohyeon-korean.woff2", "fonts/dohyeon-latin.woff2", "fonts/pretendard-400.woff2", "fonts/pretendard-600.woff2", "fonts/pretendard-800.woff2"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting()));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET"||new URL(r.url).origin!==location.origin)return;
  e.respondWith(fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(C).then(c=>c.put(r,cp));}return res;}).catch(()=>caches.match(r).then(m=>m||caches.match("index.html"))));});
