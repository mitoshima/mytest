self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       '/mypwa/a2hs/',
       '/mypwa/a2hs/index.html',
       '/mypwa/a2hs/index.js',
       '/mypwa/a2hs/style.css',
       '/mypwa/a2hs/images/fox1.jpg',
       '/mypwa/a2hs/images/fox2.jpg',
       '/mypwa/a2hs/images/fox3.jpg',
       '/mypwa/a2hs/images/fox4.jpg'
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
