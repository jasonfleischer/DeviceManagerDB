// $ npm run devStart
// http://127.0.0.1:3000/ or http://127.0.0.1:3000/devices

const express = require('express')
const app = express()
const port = 52511

app.use(express.static("public"))

app.use(log)

app.get("/", (req, res) => {
	res.send("Device manager DB Root")
})

const userRouter = require('./routes/devices')
app.use("/devices", userRouter)


function log(req, res, next) {
	console.log(req.originalUrl)
	next()
}

app.listen(port)