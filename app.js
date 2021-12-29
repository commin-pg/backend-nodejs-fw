const express = require('express');
const app = express();

const routes = require('./routers')
const port = 3001;



app.use(express.static('public'))
app.use('/', routes);

app.listen(port, function () {
    console.log("start! express!!! server on ", port)
})
