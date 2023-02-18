import { makeTag } from "./Creators.js"


let number = 0

const upBtnClick = () => {
	number += 1
	HomeTree.title.element.innerText = number
}

const downBtnClick = () => {
	number -= 1
	HomeTree.title.element.innerText = number

}

const HomeElTree = {
	homeEl : {
		element : "div",
		classes : ["container", "my-5"],
	},
	titleEl : {
		element : "h1",
		classes : ["h1"],
		text : "Hello World Home"
	},
	upBtnEl : {
		element : "button",
		classes : ["btn btn-primary"],
		text : "up",
		actions : {
			click : upBtnClick,
		}
	},
	downBtnEl : {
		element : "button",
		classes : ["btn btn-danger"],
		text : "down",
		actions : {
			click : downBtnClick,
		}
	},

}

const HomeTree = makeTag(HomeElTree)

HomeTree.home.element.appendChild(HomeTree.title.element)
HomeTree.home.element.appendChild(HomeTree.upBtn.element)
HomeTree.home.element.appendChild(HomeTree.downBtn.element)



export default HomeTree


