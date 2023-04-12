this.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("caches-v1")
      .then((cache) =>
        cache.addAll([
		'/resistor-color-calculator/',
		'/resistor-color-calculator/index.html',
		'/resistor-color-calculator/images/wiederstands_blank.gif',
		'/resistor-color-calculator/css/style.css',
		'/resistor-color-calculator/js/script.js',
		'/resistor-color-calculator/js/functions.js',
        ])
      )
  );
});