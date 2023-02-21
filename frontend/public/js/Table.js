
import { Create, makeTable, tableBody } from "./Creators.js"



const Table = async (p) => {

	const res = await fetch('https://jsonplaceholder.typicode.com/todos')
	const todosTable = await res.json()

	const users = await fetch("https://jsonplaceholder.typicode.com/users")
	const resUser = await users.json()

	const page = p ? p : 1
	const width = 15
	const allPage = Math.ceil(todosTable.length / width)
	const start = page === 1 ? 0 : (page-1) * width
	const end = page === 1 ? width : page * width

	//userId === userName
	todosTable.map((todo) => {
		const {name} = resUser.find((user) => user.id === todo.userId)
		todo.userId = name
	})

	//actions function
	const testCheckClick = (e) =>{
		console.log(e.target.value)
	}

	const pagesElTree = {
		pageLinkEl : {
			element : "a",
			classes : ["spa-link", "mx-1"],
			attrs : {
				href : ''
			}
		}
	}

	const TableElTree = {
		tableContainerEl : {
			element : "div",
			classes : ["table-responsive"]
		},
		tableEl : {
			element : "table",
			classes : ["table", "table-sm"]
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

	table.table.tableContainer.element.appendChild(table.table.table.element)

	let pages = []

	for(let i = 0 ; i < allPage ; i++){
		pages[i] = new Create(pagesElTree.pageLinkEl)
		if(page === i){
			pages[i].element.removeAttribute("href")
		}
		pages[i].element.setAttribute("href", `/datas/${i+1}`)
		pages[i].element.innerText = i+1
		table.table.tableContainer.element.appendChild(pages[i].element)
	}

	const tbody = tableBody(todosTable.slice(start , end))
	tbody.dataTRs.map((tr)=>{
		table.table.tbody.element.appendChild(tr.element)
	})

	const hkey = Object.keys(tbody.headerKeys)
	hkey.map((key) => {
		table.table.tr.element.appendChild(tbody.headerKeys[key].element)
	})

	return table

}

export default Table


