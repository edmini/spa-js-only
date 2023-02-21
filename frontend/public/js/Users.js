import {makeTag, Create} from "./Creators.js"


const Users = async () => {

	const res = await fetch("https://jsonplaceholder.typicode.com/users")
	const resUser = await res.json()

	const UsersBodyEl = {
		containerEl : {
			element : "div",
			classes : ["container", "my-5", "py-5"],
		},
		rowEl : {
			element : "div",
			classes : ["row"]
		},
	}

	const UserCardEl = {
		colEl : {
			element : "div",
			classes : ["col-mg-4"]
		},

	}


	const userTree = makeTag(UsersBodyEl)

	function* colsGen(){
		while(true){

			yield new Create(UserCardEl.colEl)
		}

	}

	const cols = colsGen()

	let userCol = []
	resUser.map((user, i) => {
		userCol.push(cols.next())
		userCol[i].value.element.innerText = user.id
	})


	console.log(userCol[0].value.element)


	userTree.container.element
		.appendChild(userTree.row.element)

	userCol.map((col) => {
		userTree.row.element.appendChild(col.value.element)

	})

	return userTree



}


export default Users






