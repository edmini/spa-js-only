


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
	setClass(tagClass){
		this.element.setAttribute("class", tagClass)
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










