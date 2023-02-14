const express = require('express')
const path = require('path')

const app = express()

const PORT = 8080

app.use("/public", express.static(path.resolve(__dirname, 'frontend', 'public')))

app.get("/*", (req, res)=>{
	res.sendFile(path.join(__dirname, 'frontend', "index.html"))
})

app.listen(PORT, ()=>{
	console.log(`${PORT} : SERVER IS RUNNING!`)
})
