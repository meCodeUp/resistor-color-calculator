const cacheName = 'cash-v1'
const resourcesToPrecache = [
	'/',
	'index.html',
	'images/wiederstands_blank.gif',
	'css/style.css',
	'js/script.js',
	'js/functions.js',
];


self.addEventListener ('install', event => {
	console.log('Service worker install event!');
		event.waitUntil(
			caches.open(cacheName)
			.then (cache => {
				return cache.addAll(resourcesToPrecache);
		})
	);
});