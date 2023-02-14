


const views = {
	Home : async () => {
		const { default : home } = await import("./Home.js")
		return home
	},
	Users : async () => {
		const users = null
		return users
	},
	User : async () => {
		const user = null
		
		return user
	}
}

export default views






