import { Create, makeTable, tableBody } from "./Creators.js"

const testBtnClick = (e) =>{
	console.log(e.target.value)
}
const testCheckClick = (e) =>{
	console.log(e.target.checked)
}

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

const testBtn = {
	element : "button",
	classes : ["btn", "btn-primary"],
	text : "EDIT",
	attrs : {
		value : null,
	},
	actions : {
		click : testBtnClick,
	}
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

for(let i = 0 ; i < testTable.length ; i++){
	testBtn.attrs.value = testTable[i].id
	testTable[i].edit = (new Create(testBtn)).element
	const checkVal = testTable[i].complete
	testTable[i].complete = (new Create(switchForm)).element
	const checkEl = (new Create(testCheck)).element
	checkVal ? checkEl.setAttribute("checked", true) : null
	testTable[i].complete.appendChild(checkEl)
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

const table1= makeTable(TableElTree, testTable)


const table = makeTable(TableElTree)

const tbody = tableBody(testTable)
tbody.dataTRs.map((tr)=>{
	table.table.tbody.element.appendChild(tr.element)
})



export default table








