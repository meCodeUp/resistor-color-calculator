if('serviceWorker' in navigator){
	navigator.serviceWorker.register('/resistor-color-calculator/sw.js') 
	.then((reg) => console.log('service worker registerd', reg))
	.catch((err) => console.log('service worker not registerd', err))
}
