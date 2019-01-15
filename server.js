
let express = require('express')
let app = express()


app.get('/tip/:total/:tipPercentage', (req, res) => {
		let total = `.${req.params.tipPercentage}` * `${req.params.total}`
 		 res.send(total)
});



app.listen(9000)

