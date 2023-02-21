import { makeTag } from "./Creators.js"

const searchBtnClick = async (e) => {
	e.preventDefault()
	const msg = navbarTree.navSearchInput.element.value	
	const { default : Home } = await import("./Home.js")
	Home.title1.element.innerText = msg
	navbarTree.navSearchInput.element.value	= ""
}

const navbarElTree = {
	navbarEl : {
		element : "nav",
		classes : ["navbar", "bg-dark", "navbar-expand-lg", "bg-body-tertiary", "fixed-top", "nav-shadow"],
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
		classes : ["navbar-brand", "spa-link"],
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
		classes : ["nav-link", "spa-link"],
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
		classes : ["nav-link", "spa-link"],
		text : "USER",
		attrs : {
			href : "/users"
		}
	},
	navItemAlbumEl : {
		element : "li",
		classes : ["nav-item"]
	},
	navLinkAlbumEl : {
		element : "a",
		classes : ["nav-link", "spa-link"],
		text : "ALBUM",
		attrs : {
			href : "/albums"
		}
	},
	navItemDataEl : {
		element : "li",
		classes : ["nav-item"]
	},
	navLinkDataEl : {
		element : "a",
		classes : ["nav-link", "spa-link"],
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

const navbarTree = makeTag(navbarElTree)


navbarTree.navbar.element
	.appendChild(navbarTree.navbarContainer.element)
	.appendChild(navbarTree.navbarBrand.element)
navbarTree.navbarContainer.element
	.appendChild(navbarTree.navbarToggleBtn.element)
	.appendChild(navbarTree.navbarToggleIcon.element)
navbarTree.navbarContainer.element
	.appendChild(navbarTree.navbarCollapse.element)
	.appendChild(navbarTree.navbarNav.element)
	.appendChild(navbarTree.navItemAbout.element)
	.appendChild(navbarTree.navLinkAbout.element)
navbarTree.navbarNav.element
	.appendChild(navbarTree.navItemUser.element)
	.appendChild(navbarTree.navLinkUser.element)
navbarTree.navbarNav.element
	.appendChild(navbarTree.navItemData.element)
	.appendChild(navbarTree.navLinkData.element)
navbarTree.navbarNav.element
	.appendChild(navbarTree.navItemAlbum.element)
	.appendChild(navbarTree.navLinkAlbum.element)
navbarTree.navbarCollapse.element
	.appendChild(navbarTree.navSearch.element)
	.appendChild(navbarTree.navSearchInput.element)
	.after(navbarTree.navSearchBtn.element)


export default navbarTree.navbar


