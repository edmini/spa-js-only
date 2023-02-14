
import views from './Views.js'

const app = document.querySelector("#app")

const pathToRegex = (path) => {
	new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g,"(.+)") | "$")
}

const getParams = (match) => {
	const values = match.result.slice(1)
	const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1])

	return Object.fromEntries(keys.map((key, i) => {
		return [key, values[i]]
	}))
}

const navigaTo = (url) => {
	history.pushState(null, null, url)
	render()
}

const render = async () => {
	const routes = [
		{path : "/", view : views.Home},
		{path : "/users", view : views.Users},
		{path : "/users/:id", view : views.User},
	]

	const potentialMatchs = routes.map((route) => {
		return {
			route : route,
			result : location.pathname.match(pathToRegex(route.path))
		}
	})

	let match = potentialMatchs.find((potentialMatch) => {potentialMatch.result !== null})

	if(!match){
		match = {
			route : routes[0],
			result : [location.pathname]
		}
	}

	const view = await match.route.view(getParams(match))

	app.replaceChildren(await view.element)
}

window.addEventListener("popstate", render)

document.addEventListener("click", (e)=>{
	if(e.target.tagName !== "A"){
		return
	}
	render()
})



document.addEventListener("DOMContentLoaded", ()=>{
	document.body.addEventListener("click", (e) => {
		if(e.target.tagName === "A"){
			e.preventDefault()
			navigaTo(e.target.href)
		}
	})
	render()
})





