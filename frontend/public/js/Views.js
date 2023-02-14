


const views = {
	Home : async () => {
		const { default : home } = await import("./Home.js")
		return home
	},
	About : async () => {
		const { default : about } = await import("./About.js")
		console.log(about.element)
		return about
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






