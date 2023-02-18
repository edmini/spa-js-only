
import { Create, makeTable, tableBody } from "./Creators.js"

const res = await fetch('https://jsonplaceholder.typicode.com/todos')
const todosTable = await res.json()

const users = await fetch("https://jsonplaceholder.typicode.com/users")
const resUser = await users.json()

//userId === userName
todosTable.map((todo) => {
	const {name} = resUser.find((user) => user.id === todo.userId)
	todo.userId = name
})

//actions function
const testCheckClick = (e) =>{
	console.log(e.target.value)
}

const TableElTree = {
	tableEl : {
		element : "table",
		classes : ["table"]
	},
	theadEl : {
		element : "thead",
	},
	tbodyEl : {
		element : "tbody",
	},
	trEl : {
		element : "tr",
	},
	thEl : {
		element : "th",
	},
	tdEl : {
		element : "td",
	},
}

const editBtnEl = {
	element : "a",
	classes : ["spa-link", "btn-primary", "btn", "btn-sm"],
	text : "EDIT",
	attrs : {
		href : "",
	},
}
const swFormEl = {
	element : "form",
	classes : ["form-check", "form-switch"]
}
const chkboxEl = {
	element : "input",
	classes : ["form-check-input"],
	attrs : {
		value : null,
		role : "switch",
		type : "checkbox"
	},
	actions : {
		click : testCheckClick,
	}
}

//button and sw insert on table
todosTable.map((tableData) => {
	tableData.edit = (new Create(editBtnEl)).element
	tableData.edit.setAttribute("href", `/data/${tableData.id}`)

	const completState = tableData.completed
	tableData.completed = (new Create(swFormEl)).element
	const swBox = (new Create(chkboxEl)).element
	completState ? swBox.setAttribute("checked", true) : null
	swBox.setAttribute("value", tableData.id)
	tableData.completed.appendChild(swBox)
})

const table = makeTable(TableElTree)


const tbody = tableBody(todosTable.slice(0 , 15))
tbody.dataTRs.map((tr)=>{
	table.table.tbody.element.appendChild(tr.element)
})

const hkey = Object.keys(tbody.headerKeys)
hkey.map((key) => {
	table.table.tr.element.appendChild(tbody.headerKeys[key].element)
})



export default table


