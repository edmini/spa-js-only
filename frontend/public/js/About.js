import {Create} from "./Creators.js"

const AboutEl = {
	element : "div",
	classes : ["container", "my-5", "py-5"]
}

const AboutTitleEl = {
	element : "h1",
	classes : ["h1", "text-primary"],
	text : "ABOUT"
}

const about = new Create(AboutEl)
const aboutTitle = new Create(AboutTitleEl)

about.element.appendChild(aboutTitle.element)


export default about





