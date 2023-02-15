import { makeTag } from "./Creators.js"
import Home from "./Home.js"

const searchBtnClick = (e) => {
	e.preventDefault()
	const msg = navbarTree.navSearchInput.element.value	
	//navbarTree.navbarBrand.element.innerText = msg
	Home.title.element.innerText = msg
	navbarTree.navSearchInput.element.value	= ""
}

const navbarElTree = {
	navbarEl : {
		element : "nav",
		classes : ["navbar", "bg-dark", "navbar-expand-lg", "bg-body-tertiary"],
		attrs : {
			"data-bs-theme" : "dark"
		}
	},
	navbarContainerEl : {
		element : "div",
		classes : ["container"],
	},
	navbarBrandEl : {
		element : "a",
		classes : ["navbar-brand"],
		text : "Logo",
		attrs : {
			href : "/"
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
		classes : ["navbar-toggler-icon"]
	},
	navbarCollapseEl : {
		element : "div",
		classes : ["collapse, navbar-collapse"],
		id : "navbarSupportedContent",
	},
	navbarNavEl : {
		element : "ul",
		classes : ["navbar-nav", "me-auto", "mb-2", "mb-lg-0"]
	},
	navItemAboutEl : {
		element : "li",
		classes : ["nav-item"]
	},
	navLinkAboutEl : {
		element : "a",
		classes : ["nav-link"],
		text : "ABOUT",
		attrs : {
			href : "/about"
		}
	},
	navItemUserEl : {
		element : "li",
		classes : ["nav-item"]
	},
	navLinkUserEl : {
		element : "a",
		classes : ["nav-link"],
		text : "USER",
		attrs : {
			href : "/users"
		}
	},
	navItemDataEl : {
		element : "li",
		classes : ["nav-item"]
	},
	navLinkDataEl : {
		element : "a",
		classes : ["nav-link"],
		text : "DATA",
		attrs : {
			href : "/datas"
		}
	},
	navSearchEl : {
		element : "form",
		classes : ["d-flex"],
		attrs : {
			role : "search"
		}
	},
	navSearchInputEl : {
		element : "input",
		classes : ["form-control", "me-2"],
		attrs : {
			type : "search",
			placeholder : "Search",
			"aria-label" : "Search"
		}
	},
	navSearchBtnEl : {
		element : "button",
		classes : ["btn", "btn-secondary"],
		text : "SEARCH",
		actions : {
			click : searchBtnClick,
		}
	}
}

let navbarTree = {}

makeTag(navbarElTree, navbarTree)


navbarTree.navbar.element.appendChild(navbarTree.navbarContainer.element)
navbarTree.navbarContainer.element.appendChild(navbarTree.navbarBrand.element)
navbarTree.navbarContainer.element.appendChild(navbarTree.navbarToggleBtn.element)
navbarTree.navbarToggleBtn.element.appendChild(navbarTree.navbarToggleIcon.element)
navbarTree.navbarContainer.element.appendChild(navbarTree.navbarCollapse.element)
navbarTree.navbarCollapse.element.appendChild(navbarTree.navbarNav.element)
navbarTree.navbarNav.element.appendChild(navbarTree.navItemAbout.element)
navbarTree.navItemAbout.element.appendChild(navbarTree.navLinkAbout.element)
navbarTree.navbarNav.element.appendChild(navbarTree.navItemUser.element)
navbarTree.navItemUser.element.appendChild(navbarTree.navLinkUser.element)
navbarTree.navbarNav.element.appendChild(navbarTree.navItemData.element)
navbarTree.navItemData.element.appendChild(navbarTree.navLinkData.element)
navbarTree.navbarCollapse.element.appendChild(navbarTree.navSearch.element)
navbarTree.navSearch.element.appendChild(navbarTree.navSearchInput.element)
navbarTree.navSearch.element.appendChild(navbarTree.navSearchBtn.element)


export default navbarTree.navbar


