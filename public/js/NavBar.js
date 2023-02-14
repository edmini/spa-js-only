import {Create} from "./Creators.js"

const elNameChange = (elName) => {
	return elName.slice(0, -2)
}

const treeMaker = (treeEl) => {
	const elKeys = Object.keys(treeEl)
	elKeys.map((elname) => {
		console.log(elname)	
		navbarTree[elNameChange(elname)] = new Create(navbarElTree[elname])
	})
}

const navbarElTree = {
	navbarEl : {
		element : "nav",
		classes : ["navbar", "navbar-expand-lg", "bg-body-tertiary"],
	},
	navbarContainerEl : {
		element : "div",
		classes : ["container-fluid"],
	},
	navbarBrandEl : {
		element : "a",
		text : "Logo",
		attrs : {
			href : "#"
		}
	},
	navbarToggleBtnEl : {
		element : "button",
		classes : ["navbar-toggler"],
		attrs : {
			"data-bs-toggle" : "collapse",
			"data-bs-target" : "#navbarSupportedContent",
			"aria-controls" : "navbarSupportedContent",
			"aria-expanded" : "false",
			"aria-label" : "Toggle navigation"
		}
	},
	navbarToggleIconEl : {
		element : "span",
		classes : ["navbar-toggle-icon"]
	},
	navbarCollapseEl : {
		element : "div",
		classes : ["collapse, navbar-collapse"],
		id : "navbarSupportedContent",
	},
}

let navbarTree = {}

treeMaker(navbarElTree)

console.log(navbarTree)

export default navbarTree





