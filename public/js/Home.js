import { Create } from "./Creators.js"

const HomeEl = {
	element : "div",
	classes : ["container"],
}
const TitleEl = {
	element : "h1",
	classes : ["h1"],
	text : "Hello World"
}

const home = new Create(HomeEl)
const title = new Create(TitleEl)
home.element.appendChild(title.element)




export default home


