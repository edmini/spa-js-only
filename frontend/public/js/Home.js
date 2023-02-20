import { makeTag } from "./Creators.js"


const HomeElTree = {
	homeEl : {
		element : "div",
	},
	carouselEl : {
		element : "div",
		classes : ["carousel", "slide"],
		id : "carouselExampleCaptions"
	},
	carouselIndiEl : {
		element : "div",
		classes : ["carousel-indicators"]
	},
	carouselBtn0El : {
		element : "button",
		classes : ["active"],
		attrs : {
			"data-bs-target" : "#carouselExampleCaptions",
			"data-bs-slide-to" : 0,
			"aria-label" : "Slide 1",
			"aria-current" : true
		}
	},
	carouselBtn1El : {
		element : "button",
		attrs : {
			"data-bs-target" : "#carouselExampleCaptions",
			"data-bs-slide-to" : 1,
			"aria-label" : "Slide 2",
		}
	},
	carouselBtn2El : {
		element : "button",
		attrs : {
			"data-bs-target" : "#carouselExampleCaptions",
			"data-bs-slide-to" : 2,
			"aria-label" : "Slide 3",
		}
	},
	carouselInnerEl : {
		element : "div",
		classes : ["carousel-inner"]
	},
	carouselItem1El : {
		element : "div",
		classes : ["carousel-item", "active"]
	},
	carouselImg1El : {
		element : "img",
		classes : ["d-block", "w-100"],
		attrs : {
			alt : "",
			src : "" 
		}
	},
	carouselCaption1El : {
		element : "div",
		classes : ["carousel-caption", "d-none", "d-md-block"]
	},
	title1El : {
		element : "h1",
		classes : ["display-2"],
		text : ""
	},
	content1El : {
		element : "h1",
		text : ""
	},
	carouselItem2El : {
		element : "div",
		classes : ["carousel-item"]
	},
	carouselImg2El : {
		element : "img",
		classes : ["d-block", "w-100"],
		attrs : {
			alt : "",
			src : ""
		}
	},
	carouselCaption2El : {
		element : "div",
		classes : ["carousel-caption", "d-none", "d-md-block"]
	},
	title2El : {
		element : "h1",
		classes : ["display-2"],
		text : ""
	},
	content2El : {
		element : "h1",
		text : ""
	},
	carouselItem3El : {
		element : "div",
		classes : ["carousel-item"]
	},
	carouselImg3El : {
		element : "img",
		classes : ["d-block", "w-100"],
		attrs : {
			alt : "",
			src : ""
		}
	},
	carouselCaption3El : {
		element : "div",
		classes : ["carousel-caption", "d-none", "d-md-block"]
	},
	title3El : {
		element : "h1",
		classes : ["display-2"],
		text : ""
	},
	content3El : {
		element : "h1",
		text : ""
	},
	prevBtnEl : {
		element : "button",
		classes : ["carousel-control-prev"],
		attrs : {
			"data-bs-target" : "#carouselExampleCaptions",
			"data-bs-slide" : "prev",
		}
	},
	prevBtnIconEl : {
		element : "span",
		classes : ["carouse-control-prev-icon"],
		attrs : {
			"aria-hidden" : true
		}
	},
	prevBtnTextEl : {
		element : "span",
		classes : ["visually-hidden"],
		text : "Previous"
	},
	nextBtnEl : {
		element : "button",
		classes : ["carousel-control-next"],
		attrs : {
			"data-bs-target" : "#carouselExampleCaptions",
			"data-bs-slide" : "next",
		}
	},
	nextBtnIconEl : {
		element : "span",
		classes : ["carouse-control-next-icon"],
		attrs : {
			"aria-hidden" : true
		}
	},
	nextBtnTextEl : {
		element : "span",
		classes : ["visually-hidden"],
		text : "Next"
	}

}

const HomeTree = makeTag(HomeElTree)

HomeTree.carouselImg1.element.setAttribute("src", "https://www.splitshire.com/wp-content/uploads/2021/10/SplitShire-21-7926-uai-1440x960.jpg")
HomeTree.carouselImg2.element.setAttribute("src", "https://www.splitshire.com/wp-content/uploads/2021/10/SplitShire-21-Woods-Collection-2-10.jpg")
HomeTree.carouselImg3.element.setAttribute("src", "https://www.splitshire.com/wp-content/uploads/2021/10/SplitShire-20-4896-uai-1440x960.jpg")
HomeTree.carouselImg1.element.setAttribute("alt", "first image")
HomeTree.carouselImg2.element.setAttribute("alt", "second image")
HomeTree.carouselImg3.element.setAttribute("alt", "third image")


HomeTree.title1.element.innerText = "First Image"
HomeTree.title2.element.innerText = "Scond Image"
HomeTree.title3.element.innerText = "Third Image"

HomeTree.content1.element.innerText = "First content Hello World"
HomeTree.content2.element.innerText = "Scond content Hello World"
HomeTree.content3.element.innerText = "Third content Hello World"


HomeTree.home.element.appendChild(HomeTree.carousel.element)
HomeTree.carousel.element.appendChild(HomeTree.carouselIndi.element)
HomeTree.carouselIndi.element.appendChild(HomeTree.carouselBtn0.element)
HomeTree.carouselIndi.element.appendChild(HomeTree.carouselBtn1.element)
HomeTree.carouselIndi.element.appendChild(HomeTree.carouselBtn2.element)

HomeTree.carousel.element.appendChild(HomeTree.carouselInner.element)
HomeTree.carouselInner.element.appendChild(HomeTree.carouselItem1.element)
HomeTree.carouselItem1.element.appendChild(HomeTree.carouselImg1.element)
HomeTree.carouselItem1.element.appendChild(HomeTree.carouselCaption1.element)
HomeTree.carouselCaption1.element.appendChild(HomeTree.title1.element)
HomeTree.carouselCaption1.element.appendChild(HomeTree.content1.element)

HomeTree.carousel.element.appendChild(HomeTree.carouselInner.element)
HomeTree.carouselInner.element.appendChild(HomeTree.carouselItem2.element)
HomeTree.carouselItem2.element.appendChild(HomeTree.carouselImg2.element)
HomeTree.carouselItem2.element.appendChild(HomeTree.carouselCaption2.element)
HomeTree.carouselCaption2.element.appendChild(HomeTree.title2.element)
HomeTree.carouselCaption2.element.appendChild(HomeTree.content2.element)

HomeTree.carousel.element.appendChild(HomeTree.carouselInner.element)
HomeTree.carouselInner.element.appendChild(HomeTree.carouselItem3.element)
HomeTree.carouselItem3.element.appendChild(HomeTree.carouselImg3.element)
HomeTree.carouselItem3.element.appendChild(HomeTree.carouselCaption3.element)
HomeTree.carouselCaption3.element.appendChild(HomeTree.title3.element)
HomeTree.carouselCaption3.element.appendChild(HomeTree.content3.element)

HomeTree.carousel.element.appendChild(HomeTree.prevBtn.element)
HomeTree.prevBtn.element.appendChild(HomeTree.prevBtnIcon.element)
HomeTree.prevBtn.element.appendChild(HomeTree.prevBtnText.element)
HomeTree.carousel.element.appendChild(HomeTree.nextBtn.element)
HomeTree.nextBtn.element.appendChild(HomeTree.nextBtnIcon.element)
HomeTree.nextBtn.element.appendChild(HomeTree.nextBtnText.element)


export default HomeTree


