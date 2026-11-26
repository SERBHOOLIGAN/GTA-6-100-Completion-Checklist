/* Leonida Tracker v1.1: network-first updates, offline fallback; progress stays in localStorage. */
const CACHE='leonida-pwa-static-v1.1';
const FILES=['./','./index.html','./styles.css?v=1.1.0','./app.js?v=1.1.0','./data.json','./manifest.webmanifest','./icons/icon-180.png','./icons/icon-192.png','./icons/icon-512.png'];
const ROOT=new URL(self.registration.scope);
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('leonida-pwa-static-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 const request=event.request,url=new URL(request.url);
 if(request.method!=='GET'||url.origin!==ROOT.origin||!url.pathname.startsWith(ROOT.pathname))return;
 const isPage=request.mode==='navigate';
 const isAsset=isPage||/\/(?:index\.html|app\.js|styles\.css|data\.json|manifest\.webmanifest)$/.test(url.pathname);
 if(isAsset){
  event.respondWith(fetch(request).then(response=>{
   if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put(request,copy)));}
   return response;
  }).catch(async()=>{
   const cached=await caches.match(request);
   return cached||(isPage?await caches.match('./index.html'):Response.error());
  }));
 }else{
  event.respondWith(caches.match(request).then(cached=>cached||fetch(request)));
 }
});
