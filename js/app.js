if('serviceWorker' in navigator){
	// Relative path resolves against the page URL, so it works regardless of
	// the hosting sub-path (GitHub Pages, custom domain, local server, ...).
	navigator.serviceWorker.register('sw.js')
	.then((reg) => console.log('service worker registered', reg))
	.catch((err) => console.log('service worker not registered', err))
}
