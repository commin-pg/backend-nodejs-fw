var express = require('express')

var app = express();

app.use(express.static('public'))

app.listen(3000, function () {
    console.log("start! express!!! server on 3000")
})

// Get Method
app.get('/', function (req, res) {
    res.send("<h1>Hello Nodes~</h1>")
})

app.get('/main', function (req, res) {
    res.sendFile(__dirname + "/public/main.html")
})

