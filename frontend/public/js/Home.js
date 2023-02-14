import { Create } from "./Creators.js"

const HomeEl = {
	element : "div",
	classes : ["container", "my-5"],
}
const TitleEl = {
	element : "h1",
	classes : ["h1"],
	text : "Hello World Home"
}

const home = new Create(HomeEl)
const title = new Create(TitleEl)
home.element.appendChild(title.element)




export default home


