export class Router {

	routes = {}

	add(routeName, page) {
		this.routes[routeName] = page
	}

	route(event) {
		event = event || window.event
		event.preventDefault()
		window.history.pushState({}, '', event.target.href)
	
		this.handle()
	}
	
	handle() {
		const mainContent = document.getElementById('app')
		const { pathname } = window.location
		const route = this.routes[pathname] || this.routes[404]
		
		fetch(route)
		.then(data => data.text())
		.then(html => {
			mainContent.innerHTML = html
		}) 
	
		this.changeBackgroundImage()
	}
	
	changeBackgroundImage() {
		const { pathname } = window.location
		const { body } = document
	
		pathname == '/' ? body.className = 'home' : null
		pathname == '/universe' ? body.className = 'universe' : null
		pathname == '/explore' ? body.className = 'explore' : null
		pathname == 404 ? body.className = '404' : null
	}
	
}