var express = require('express')
var express_json5 = require('express-json5')
var port = process.env.PORT || 8080

var app = express()
app.use(express_json5())

app.post('/clean', function (req, res) {
  if (!req.body) return res.sendStatus(400)

  res.send(req.body)
})

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port)
})
