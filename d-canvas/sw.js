self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('d-canvas-store').then(function(cache) {
     return cache.addAll([
       '/mytest/d-canvas/',
       '/mytest/d-canvas/index.html',
       '/mytest/d-canvas/index.js',
       '/mytest/d-canvas/2d.js',
       '/mytest/d-canvas/webgl.js',
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
