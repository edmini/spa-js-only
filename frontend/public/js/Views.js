import { Create } from "./Creators.js"

const containerEl = {
	element : "div",
	classes : ["container", "my-5", "py-5"]
}
const h1El = {
	element : "h1",
	classes : ["h1"]
}

const rowEl = {
	element : "div",
	classes : ["row", "justify-content-lg-center"]
}
const colEl = {
	element : "div",
	classes : ["col-lg-10"]
}

const container = new Create(containerEl)
const title = new Create(h1El)
const row = new Create(rowEl)
const col = new Create(colEl)

const views = {

	Home : async () => {
		const { default : Home } = await import("./Home.js")
		return Home.home
	},
	About : async () => {
		const { default : about } = await import("./About.js")
		return about
	},
	Photos : async () => {
		container.element.replaceChildren(title.element)
		title.element.innerText = "Photos Page"
		const { default : Photos } = await import("./Photos.js")
		const photoCards = await Photos()
		return photoCards.container
	},
	User : async (params) => {
		container.element.replaceChildren(title.element)
		title.element.innerText = `User Page Params : ${params}`
		return container
	},
	Datas : async (params) => {
		const p = params.page ? params.page : null
		container.element.replaceChildren(title.element)
		title.element.innerText = "Todos"
		container.element.appendChild(row.element)
		row.element.appendChild(col.element)
		const { default : Table } = await import("./Table.js")
		const todos = await Table(p)
		col.element.replaceChildren(todos.table.tableContainer.element)
		return container
	},
	Data : async (params) => {
		container.element.replaceChildren(title.element)
		title.element.innerText = `Data Page Params : ${params.id}`
		const { Detail } = await import("./Detail.js")
		const todo = await Detail(params)
		container.element.appendChild(todo.row.element)
		return container
	},
	Albums : async () => {
		container.element.replaceChildren(title.element)
		title.element.innerText = `Albums`
		return container
	}

}

export default views


