const express = require('express')

const app = express()

const PORT = 8080

app.use(express.static(__dirname + '/public'))

app.get("/", (req, res)=>{
	res.sendFile(static.join(__dirname + "index.html"))
})

app.listen(PORT, ()=>{
	console.log(`${PORT} : SERVER IS RUNNING!`)
})
