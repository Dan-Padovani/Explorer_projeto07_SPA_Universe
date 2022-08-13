const mainContent = document.getElementById('app')

const routes = {
	"/": "/app/pages/home.html",
	"/explore": "/app/pages/explore.html",
	"/universe": "/app/pages/universe.html",
	404: "/app/pages/404.html"
}

function route(event) {
	event = event || window.event
	event.preventDefault()
	window.history.pushState({}, '', event.target.href)

	handle()
}

function handle() {
	const { pathname } = window.location
	const route = routes[pathname] || routes[404]
	
	fetch(route)
	.then(data => data.text())
	.then(html => {
		mainContent.innerHTML = html
	}) 

	changeBackgroundImage()
}

function changeBackgroundImage() {
	const { pathname } = window.location
	const { body } = document

	pathname == '/' ? body.className = 'home' : null
	pathname == '/universe' ? body.className = 'universe' : null
	pathname == '/explore' ? body.className = 'explore' : null
	pathname == 404 ? body.className = '404' : null
	
	console.log(pathname)
	console.log(body.className)
}

handle()
window.onpopstate = () => handle()
window.route = () => route()