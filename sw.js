this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('cashe-v1').then(function(cache) {
      return cache.addAll([
        '/',
        'index.html'
      ]);
    })
  );
});