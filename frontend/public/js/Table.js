import { Create, makeTable, tableBody } from "./Creators.js"

const testBtnClick = (e) =>{
	console.log(e.target.value)
}

const testTable = [
	{
		id : 1,
		name : "hosang",
		age : 45,
	},
	{
		id : 2,
		name : "jihye",
		age : 44,
	},
	{
		id : 3,
		name : "yaeeun",
		age : 24,
	},
	{
		id : 4,
		name : "hyang",
		age : 37,
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

for(let i = 0 ; i < testTable.length ; i++){
	testBtn.attrs.value = testTable[i].id
	testTable[i].edit = (new Create(testBtn)).element
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








