const cashName = 'cash-v1'
const resourcesToPrecash = [
	'/',
	'index.html',
	'images/wiederstands_blank.gif',
	'js/script.js'
	'js/functions.js',
];


self.addEventListener ('install'. event => {
	console. log('Service worker install event!');
		event.waitUntil(
			caches.open (cacheName)
			.then (cache => {
				return cache.addAll (resourcesToPrecache);
		})
	);
});