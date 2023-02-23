import { makeTag } from "./Creators.js"


const Photos = async () => {

	const res = await fetch("https://jsonplaceholder.typicode.com/photos")
	const resResult = await res.json()
	const resPhotos = resResult.slice(0, 30)

	const PhotoBodyEl = {
		containerEl : {
			element : "div",
			classes : ["container", "my-5", "py-5"],
		},
		rowEl : {
			element : "div",
			classes : ["row"]
		},
	}

	const PhotoCardEl = {
		colEl : {
			element : "div",
			classes : ["col-md-4", "my-3"]
		},
		cardEl : {
			element : "div",
			classes : ["card"]
		},
		cardImgTopEl : {
			element : "img",
			classes : ["card-img-top"],
			attrs : {
				src : "",
				alt : ""
			}
		},
		cardBodyEl : {
			element : "div",
			classes : ["card-body"]
		},
		cardTitleEl : {
			element : "h5",
			classes : ["card-title"],
			text : ""
		},
		cardTextEl : {
			element : "p",
			classes : ["card-text"],
			text : ""
		},
		cardBtnEl : {
			element : "a",
			classes : ["btn", "btn-primary"],
			text : "Go"
		}

	}


	const photoTree = makeTag(PhotoBodyEl)

	function* colsGen(){
		while(true){

			yield makeTag(PhotoCardEl)
		}

	}

	const cols = colsGen()

	let photoCols = []
	resPhotos.map((photo, i) => {
		photoCols.push(cols.next())
		photoCols[i].value.cardImgTop.element.setAttribute("src", photo.thumbnailUrl)
		photoCols[i].value.cardTitle.element.innerText = photo.id
		photoCols[i].value.cardText.element.innerText = photo.title

		photoCols[i].value.col.element.appendChild(photoCols[i].value.card.element)
		photoCols[i].value.card.element.appendChild(photoCols[i].value.cardImgTop.element)
		photoCols[i].value.card.element.appendChild(photoCols[i].value.cardBody.element)
		photoCols[i].value.cardBody.element.appendChild(photoCols[i].value.cardTitle.element)
		photoCols[i].value.cardBody.element.appendChild(photoCols[i].value.cardText.element)
		photoCols[i].value.cardBody.element.appendChild(photoCols[i].value.cardBtn.element)
	})

	photoTree.container.element.appendChild(photoTree.row.element)
	photoCols.map((photo) => {
		photoTree.row.element.appendChild(photo.value.col.element)
	})

	// userCol.map((col) => {
	// 	console.log(col[0].value)

	// 	col.value.cardImgTop.element.setAttribute("src", )
	// 	col.value.col.element.appendChild(col.value.card.element)
	// 	col.value.card.element.appendChild(col.value.cardImgTop.element)
	// 	col.value.card.element.appendChild(col.value.cardBody.element)
	// 	col.value.cardBody.element.appendChild(col.value.cardTitle.element)
	// 	col.value.cardBody.element.appendChild(col.value.cardText.element)
	// 	col.value.cardBody.element.appendChild(col.value.cardBtn.element)
	// })


	// userTree.container.element
	// 	.appendChild(userTree.row.element)

	// userCol.map((col) => {
	// 	userTree.row.element.appendChild(col.value.element)

	// })

	return photoTree



}


export default Photos






