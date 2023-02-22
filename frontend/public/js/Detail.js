
import { makeTag } from "./Creators.js"

export const Detail = async (params) =>{
	const {id} = params
	const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
	const resJson = await res.json()

	const SwElTree = {
		cardSwFormEl : {
			element : "div",
			classes : ["form-check", "form-switch"]
		},
		cardCheckEl : {
			element : "input",
			classes : ["form-check-input"],
			id : "completedLabel",
			attrs : {
				type : "checkbox",
				checked : resJson.completed,
			}
		},
		checkLabelEl : {
			element : "label",
			classes : ["form-check-label"],
			text : "completed",
			attrs : {
				for : "completedLabel"
			}
		}
	}

	const swTree = makeTag(SwElTree)
	swTree.cardSwForm.element.appendChild(swTree.cardCheck.element)
	swTree.cardSwForm.element.appendChild(swTree.checkLabel.element)

	const CardElTree = {
		rowEl : {
			element : "div",
			classes : ["row", "justify-content-md-center", "my-5"]
		},
		colEl : {
			element : "div",
			classes : ["col-md-6"]
		},
		cardEl : {
			element : "div",
			classes : ["card"]
		},
		cardHeaderEl : {
			element : "div",
			classes : ["card-header"],
			text : `Todo id : ${id}`
		},
		cardBodyEl : {
			element : "div",
			classes : ["card-body"]
		},
		cardTitleEl : {
			element : "h4",
			classes : ["card-title"],
			text : resJson.title,
		},

		cardTextEl : {
			element : "p",
			classes : ["card-text"],
			child : {
				append : swTree.cardSwForm
			},
		},
		cardBtnEl : {
			element : "a",
			classes : ["btn", "btn-primary", "spa-link"],
			text : "Close",
			attrs : {
				href : "/datas"
			}
		},
	}

	const todo = makeTag(CardElTree)



	todo.row.element
	.appendChild(todo.col.element)
	.appendChild(todo.card.element)
	.appendChild(todo.cardHeader.element)
	todo.card.element.appendChild(todo.cardBody.element)
	todo.cardBody.element.appendChild(todo.cardTitle.element)
	todo.cardBody.element.appendChild(todo.cardText.element)
	todo.cardBody.element.appendChild(todo.cardBtn.element)



	return todo
}






