import { Router } from "./router.js"

const router = new Router()
router.add('/', '/app/pages/home.html')
router.add('/explore', '/app/pages/explore.html')
router.add('/universe', '/app/pages/universe.html')
router.add(404, '/app/pages/404.html')

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()



/*button mobile*/

const buttomMobile = document.querySelector('.btn-mobile')
const menuMobile = document.querySelector('#menu')
const menuBarsMobile = document.querySelector('#three-bars')

function toggleMenu() {
	menuMobile.classList.toggle('active')
	menuBarsMobile.classList.toggle('active')
}

buttomMobile.addEventListener('click', toggleMenu)