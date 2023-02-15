import { makeTag } from "./Creators.js"

const HomeElTree = {
	homeEl : {
		element : "div",
		classes : ["container", "my-5"],
	},
	titleEl : {
		element : "h1",
		classes : ["h1"],
		text : "Hello World Home"
	}
}

let HomeTree = {}

makeTag(HomeElTree, HomeTree)

HomeTree.home.element.appendChild(HomeTree.title.element)



export default HomeTree


