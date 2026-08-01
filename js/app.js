if('serviceWorker' in navigator){
	// Relative path resolves against the page URL, so it works regardless of
	// the hosting sub-path (GitHub Pages, custom domain, local server, ...).
	navigator.serviceWorker.register('sw.js')
	.then((reg) => console.log('service worker registered', reg))
	.catch((err) => console.log('service worker not registered', err))
}

// The manifest is the single source of truth for the app version.
// Read it once and show it in the footer.
fetch('manifest.json')
	.then((res) => res.json())
	.then((manifest) => {
		const el = document.getElementById('appVersion');
		if (el && manifest.version) el.textContent = manifest.version;
	})
	.catch(() => {});
