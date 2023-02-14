
import views from './Views.js'
import NavBar from './NavBar.js'


const app = document.querySelector("#app")
const bodySection = document.createElement("div")
app.appendChild(NavBar.element)
app.appendChild(bodySection)

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

const navigateTo = (url) => {
	history.pushState(null, null, url)
	render()
}

const render = async () => {
	const routes = [
		{path : "/", view : views.Home},
		{path : "/about", view : views.About},
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
	console.log(match)

	const view = await match.route.view(getParams(match))



	console.log(view.element)
	//app.appendChild(view.element)
	bodySection.replaceChildren(view.element)
}


document.body.addEventListener("click", (e)=>{
	console.log("Body : ", e.target.tagName)
	if(e.target.tagName !== "A"){
		return
	}
	e.preventDefault()
	render()
})


window.addEventListener("popstate", ()=>{
	render()
})

document.addEventListener("DOMContentLoaded", ()=>{
	document.body.addEventListener("click", (e) => {
	console.log("DOM : ", e.target.tagName)
		if(e.target.tagName === "A"){
			e.preventDefault()
			navigateTo(e.target.href)
		}
	})
	render()
})





