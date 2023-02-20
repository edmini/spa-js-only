import {makeTag} from "./Creators.js"



const Users = () => {


	const UsersEl = {
		containerEl : {
			element : "div",
			classes : ["container"],
		},
		rowEl : {
			element : "div",
			classes : ["row"]
		},
		colEl : {
			element : "div",
			classes : ["col"]
		},
	}


	const userTree = makeTag(UsersEl)


	return userTree



}


export default Users






