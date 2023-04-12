this.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("v1")
      .then((cache) =>
        cache.addAll([
		'/',
		'index.html',
		'images/wiederstands_blank.gif',
		'css/style.css',
		'js/script.js',
		'js/functions.js',
        ])
      )
  );
});