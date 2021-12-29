const express = require('express');
const app = express();
const indexRouter = require('./routers/index');
const usersRouter = require('./routers/users');

const port = 3001;



// app.use(express.static('public'))

app.use('/', indexRouter)
app.use('/users', usersRouter)

app.listen(port, function () {
    console.log("start! express!!! server on ", port)
})
