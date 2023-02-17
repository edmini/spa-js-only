import { Create } from "./Creators.js"

const containerEl = {
	element : "div",
	classes : ["container", "my-5"]
}
const h1El = {
	element : "h1",
	classes : ["h1"]
}

const rowEl = {
	element : "div",
	classes : ["row", "justify-content-md-center"]
}
const colEl = {
	element : "div",
	classes : ["col-lg-8"]
}


const container = new Create(containerEl)
const title = new Create(h1El)
const row = new Create(rowEl)
const col = new Create(colEl)


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
		container.element.appendChild(row.element)
		row.element.appendChild(col.element)
		const { default : table } = await import("./Table.js")
		col.element.appendChild(table.table.table.element)
		return container
	},
	Data : async (params) => {
		title.element.innerText = `Data Page Params : ${params.id}`
		return container
	}
}

export default views


