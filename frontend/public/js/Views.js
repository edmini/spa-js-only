import { Create } from "./Creators.js"

const containerEl = {
	element : "div",
	classes : ["container", "my-5"]
}
const h1El = {
	element : "h1",
	classes : ["h1"]
}
const container = new Create(containerEl)
const title = new Create(h1El)

container.element.appendChild(title.element)

const views = {
	Home : async () => {
		const { default : Home } = await import("./Home.js")
		return Home.home
	},
	About : async () => {
		const { default : about } = await import("./About.js")
		return about
	},
	Users : async () => {
		title.element.innerText = "Users Page"
		return container
	},
	User : async (params) => {
		title.element.innerText = `User Page Params : ${params}`
		return container
	},
	Datas : async () => {
		title.element.innerText = "User Data"
		const { default : table } = await import("./Table.js")
		container.element.appendChild(table.table.table.element)
		console.log(table.bodys)
		return container
	}
}

export default views


