


export class Create {
	element = null
	constructor(element){
		this.element = document.createElement(element.element)

		element.classes && this.setClasses(element.classes)
		element.id && this.setId(element.id)
		element.text && this.setText(element.text)
		element.attrs && this.setAttrs(element.attrs)
		element.actions && this.setActions(element.actions)
	}

	setClasses(classes){
		const tagClass = classes.join(" ")
		this.element.setAttribute("class", tagClass)
	}
	setClass(...tagClass){
		const classList = tagClass.join(tagClass)
		this.element.setAttribute("class", classList)
	}
	setId(tagId){
		this.element.setAttribute("id", tagId)
	}
	setText(text){
		this.element.innerText = text
	}
	setAttrs(attrs){
		const keys = Object.keys(attrs)
		keys.map((attr) => {
			this.element.setAttribute(attr, attrs[attr])
		})
	}
	setActions(actions){
		const actionKeys = Object.keys(actions)
		actionKeys.map((actionName) => {
			this.element.addEventListener(actionName, (e) => {
				if(e){
					actions[actionName](e)
				}else{
					actions[actionName]()
				}
			})
		})
	}
}


export const makeTag = (treeEl, tree) => {
	const elKeys = Object.keys(treeEl)
	elKeys.map((elName) => {
		tree[elName.slice(0,-2)] = new Create(treeEl[elName])
	})
}

export const tableBody = (datas) => {

	const TableBodyElTree = {
		trEl : {
			element : "tr"
		},
		thEl : {
			element : "th",
		},
		tdEl : {
			element : "td"
		}
	}

	let headerKeys = {}
	let dataTDs = {}
	let dataTRs = []
	if(datas){
		const dataKeys = Object.keys(datas[0])

		dataKeys.map((key) => {
			headerKeys[key] = new Create(TableBodyElTree.thEl)
			headerKeys[key].element.innerText = key
		})
		datas.map((data, i) => {
			dataTRs.push(new Create(TableBodyElTree.trEl))
			dataTDs[i] = {}
			dataKeys.map((key) => {
				dataTDs[i][key] = new Create(TableBodyElTree.tdEl)
				dataTDs[i][key].element.innerText = data[key]
			})
		})
//	dataKeys.map((key) => {
//		TableTree.tr.element.appendChild(headerKeys[key].element)
//	})
		dataTRs.map((tr, i) => {
			dataKeys.map((key) => {
				tr.element.appendChild(dataTDs[i][key].element)
			})
		})


	}
	return {headerKeys, dataTRs, dataTDs}
}

export const makeTable = (tableElTree, datas) => {

	let TableTree = {}

	makeTag(tableElTree, TableTree)

	TableTree.table.element.appendChild(TableTree.thead.element)
	TableTree.table.element.appendChild(TableTree.tbody.element)
	TableTree.thead.element.appendChild(TableTree.tr.element)

	const tableDataBody = tableBody(datas)

	const header = datas && Object.keys(datas[0])
	datas && header.map((key) => {
		TableTree.tr.element.appendChild(tableDataBody.headerKeys[key].element)
	})


	tableDataBody.dataTRs.map((tr) => {
		TableTree.tbody.element.appendChild(tr.element)
	})

/*
	if(datas){
		const dataKeys = Object.keys(datas[0])

		dataKeys.map((key) => {
			headerKeys[key] = new Create(tableElTree.thEl)
			headerKeys[key].element.innerText = key
		})
		datas.map((data, i) => {
			dataTRs.push(new Create(tableElTree.trEl))
			dataTDs[i] = {}
			dataKeys.map((key) => {
				dataTDs[i][key] = new Create(tableElTree.tdEl)
				dataTDs[i][key].element.innerText = data[key]
			})
		})
		dataKeys.map((key) => {
			TableTree.tr.element.appendChild(headerKeys[key].element)
		})
		dataTRs.map((tr, i) => {
			TableTree.tbody.element.appendChild(tr.element)
			dataKeys.map((key) => {
				tr.element.appendChild(dataTDs[i][key].element)
			})
		})
	}
	*/

	return {table : TableTree, headers : tableDataBody.headerKeys, bodys : tableDataBody.dataTDs}
}






