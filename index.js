var express = require('express')
var app = express()

app.get('/', (req, res) => {
	res.send('welcome to to-do app!!!')
})

app.listen(process.env.PORT || 3000, () =>{
	console.log('start sever port:3000')
})