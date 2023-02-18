
import { makeTag } from "./Creators.js"

export const Detail = async (params) =>{
	const {id} = params
	const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
	const resJson = await res.json()

	const CardElTree = {
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
			text : resJson.id,
		},
		cardTextEl : {
			element : "p",
			classes : ["card-text"],
			text : resJson.title,
		},
		cardBtnEl : {
			element : "a",
			classes : ["btn", "btn-primary"],
			text : "Close",
			attrs : {
				href : "/datas"
			}
		}
	}

	const todo = makeTag(CardElTree)



	todo.card.element.appendChild(todo.cardHeader.element)
	todo.card.element.appendChild(todo.cardBody.element)
	todo.cardBody.element.appendChild(todo.cardTitle.element)
	todo.cardBody.element.appendChild(todo.cardText.element)
	todo.cardBody.element.appendChild(todo.cardBtn.element)



	return todo
}






