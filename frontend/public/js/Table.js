import { Create, makeTable, tableBody } from "./Creators.js"

const testCheckClick = (e) =>{
	console.log(e.target.value)
}

const res = await fetch('https://jsonplaceholder.typicode.com/todos')
const testTable = await res.json()

const testBtn = {
	element : "a",
	classes : ["spa-link", "btn-primary", "btn", "btn-sm"],
	text : "EDIT",
	attrs : {
		href : "",
	},
}
const switchForm = {
	element : "form",
	classes : ["form-check", "form-switch"]
}
const testCheck = {
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

testTable.map((tableData) => {
	tableData.edit = (new Create(testBtn)).element
	tableData.edit.setAttribute("href", `/data/${tableData.id}`)

	const completState = tableData.completed
	tableData.completed = (new Create(testCheck)).element
	completState ? tableData.completed.setAttribute("checked", true) : null
	tableData.completed.setAttribute("value", tableData.id)
})

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

const table = makeTable(TableElTree)

const tbody = tableBody(testTable)
tbody.dataTRs.map((tr)=>{
	table.table.tbody.element.appendChild(tr.element)
})

const hkey = Object.keys(tbody.headerKeys)
hkey.map((key) => {
	table.table.tr.element.appendChild(tbody.headerKeys[key].element)
})



export default table






//const table1= makeTable(TableElTree, testTable)


/*
const testTable = [
	{
		id : 1,
		name : "hosang",
		age : 45,
		complete : true,
	},
	{
		id : 2,
		name : "jihye",
		age : 44,
		complete : false,
	},
	{
		id : 3,
		name : "yaeeun",
		age : 24,
		complete : false,
	},
	{
		id : 4,
		name : "hyang",
		age : 37,
		complete : true,
	},
]
*/

