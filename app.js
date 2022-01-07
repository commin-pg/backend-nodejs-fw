var express = require('express');
var app = express(); // 1. express app
var bodyParser = require('body-parser');
var mysql = require('mysql');
const { json } = require('express/lib/response');



// static 폴더 지정
app.use(express.static('public'));

// body-parser 연결
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// mysql 연결
const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 13306,
    user: 'danal',
    password: 'khm0813',
    database: 'my_db',
})


app.set('view engine', 'ejs');

// 서버 포트 열기
app.listen(3001, function () {
    console.log('start node js express server port on 3001')
})

// 서버 포트 다른 포트로 열기
app.listen(3002, function () {
    console.log('start node js express server port on 3002')
})

app.get('/', function (req, res) {
    console.log("hello node", __dirname);
    // res.send("Hello Node")
    // res.sendFile(__dirname + '/public/main.html')
    res.render('index', { title: 'this is title', message: 'Hello EJS!!' })
})

app.post('/search_result', function (req, res) {
    // console.log('search_result' , req.body)
    console.log(JSON.stringify(req.body))
    var requestData = JSON.stringify(req.body);



    var responseData = {};

    console.log(req.body.search_input)

    var query = connection.query('select name,email from users where email like "%' + req.body.search_input + '%" or name like "%' + req.body.search_input + '%"   ', function (err, rows) {
        if (err) throw err;
        if (rows) {
            console.log(rows)
            responseData.result = 'success';
            responseData.datas = [];
            for (var i = 0; i < rows.length; i++)
                responseData.datas.push({ 'name': rows[i].name, 'email': rows[i].email })

            console.log("result ", responseData)
            res.json(responseData)

        } else {
            console.log('None')
            responseData.result = 'fail';
            responseData.datas = undefined;

            res.json(responseData)
        }
    })
})
