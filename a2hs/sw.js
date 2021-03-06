self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       '/mytest/a2hs/',
       '/mytest/a2hs/index.html',
       '/mytest/a2hs/index.js',
       '/mytest/a2hs/style.css',
       '/mytest/a2hs/images/fox1.jpg',
       '/mytest/a2hs/images/fox2.jpg',
       '/mytest/a2hs/images/fox3.jpg',
       '/mytest/a2hs/images/fox4.jpg'
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
