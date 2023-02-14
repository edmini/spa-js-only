


export class Create {
	element = null
	constructor(element){
		this.element = document.createElement(element.element)

		element.classes && this.setClasses(element.classes)
		element.id && this.setId(element.id)
		element.text && this.setText(element.text)
		element.attrs && this.setAttrs(element.attrs)
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

	async getHTML(){

		return this.element
	}
}










