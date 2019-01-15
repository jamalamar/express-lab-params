
let express = require('express')
let app = express()


app.get('/greeting/:name/', (req, res) => {
  res.send(`Hello/${req.params.name} it's great to see you!`)
});


// app.get('/', (req, res) => {
// 	res.send('hello world')
// })

app.listen(9000)

