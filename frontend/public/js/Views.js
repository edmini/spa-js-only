import { Create } from "./Creators.js"

const h1El = {
	element : "h1",
	classes : ["h1"]
}
const title = new Create(h1El)

const views = {
	Home : async () => {
		const { default : home } = await import("./Home.js")
		return home
	},
	About : async () => {
		const { default : about } = await import("./About.js")
		return about
	},
	Users : async () => {
		title.element.innerText = "Users Page"
		return title
	},
	User : async (params) => {
		console.log(params)
		title.element.innerText = "User Page"
		return title
	},
	Datas : async () => {
		title.element.innerText = "Datas Page"
		return title
	}
}

export default views


