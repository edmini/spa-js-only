
import { Create, makeTable, makeTag, tableBody } from "./Creators.js"


const Table = async (p) => {

	const res = await fetch('https://jsonplaceholder.typicode.com/todos')
	let todosTable = await res.json()

	const filterItem = (search) => {
		console.log(search)
		console.log(todosTable)
		return todosTable.filter((todos) => {
			return todos.title.toLowerCase().indexOf(search.toLowerCase()) > -1
		})
	}

	const searchTodo = (e) =>{
		e.preventDefault()

		const search = table.table.search.element.value
		console.log(search)
	}

	//actions function
	const testCheckClick = (e) =>{
		console.log(e.target.value)
	}

	const pagesElTree = {

		pageItemEl : {
			element : "li",
			classes : ["page-item"]
		},
		pageLinkEl : {
			element : "a",
			classes : ["page-link", "spa-link"],
			attrs : {
				href : ''
			}
		}
	}

	const TableElTree = {
		tableContainerEl : {
			element : "div",
			// classes : ["table-responsive"]
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
		pageRowEl : {
			element : "div",
			classes : ["row", "justify-content-lg-center"],
		},
		pageColEl : {
			element : "div",
			classes : ["col-lg-6"],
		},
		pageEl : {
			element : "nav",
			classes : ["page", "navigation"]
		},
		paginationEl : {
			element : "ul",
			classes : ["pagination", "pagination-sm"]
		},
		searchRowEl : {
			element : "div",
			classes : ["row", "justify-content-lg-center"],
		},
		searchColEl : {
			element : "div",
			classes : ["col-md-4"],
		},
		inputGroupEl : {
			element : "from",
			classes : ["input-group"],
			attrs : {
				method : "post",
			},

		},
		searchEl : {
			element : "input",
			classes : ["form-control"],
			attrs : {
				placeholder : "SEARCH",
				type : "text",
			}
		},
		searchBtnEl : {
			element : "button",
			classes : ["btn", "btn-primary"],
			text : "SEARCH",
			attrs : {
				type : "submit"
			},
			actions : {
				click : searchTodo
			}
		}
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

	const page = p ? p : 1
	const width = 10
	const allPage = Math.ceil(todosTable.length / width)
	const start = page === 1 ? 0 : (page-1) * width
	const end = page === 1 ? todosTable.length > width ? width : todosTable.length : page * width
	
	// const users = await fetch("https://jsonplaceholder.typicode.com/users")
	// const resUser = await users.json()
	// //userId === userName
	// todosTable.map((todo) => {
	// 	const {name} = resUser.find((user) => user.id === todo.userId)
	// 	todo.userId = name
	// })

	const table = makeTable(TableElTree)

	//button and sw insert on table
	todosTable.map((tableData) => {
		tableData.edit = (new Create(editBtnEl)).element
		tableData.edit.setAttribute("href", `/data/${tableData.id}?page=${page}`)

		const completState = tableData.completed
		tableData.completed = (new Create(swFormEl)).element
		const swBox = (new Create(chkboxEl)).element
		completState ? swBox.setAttribute("checked", true) : null
		swBox.setAttribute("value", tableData.id)
		tableData.completed.appendChild(swBox)
	})

	

	table.table.tableContainer.element.appendChild(table.table.table.element)

	table.table.tableContainer.element.appendChild(table.table.pageRow.element)
	table.table.pageRow.element
		.appendChild(table.table.pageCol.element)
		.appendChild(table.table.page.element)
		.appendChild(table.table.pagination.element)
	
	table.table.inputGroup.element.appendChild(table.table.search.element)
	table.table.inputGroup.element.appendChild(table.table.searchBtn.element)
	table.table.tableContainer.element
		.appendChild(table.table.searchRow.element)
		.appendChild(table.table.searchCol.element)
		.appendChild(table.table.inputGroup.element)

	let pages = []

	for(let i = 0 ; i < allPage ; i++){
		pages[i] = makeTag(pagesElTree)
		if(parseInt(page) === (i+1)){
			pages[i].pageItem.element.classList.add("active")
			pages[i].pageItem.element.setAttribute("aria-current", "page")
		}
		pages[i].pageLink.element.setAttribute("href", `/datas/${i+1}`)
		pages[i].pageLink.element.innerText = i+1
		pages[i].pageItem.element.appendChild(pages[i].pageLink.element)
		table.table.pagination.element.appendChild(pages[i].pageItem.element)
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


