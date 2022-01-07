const mysql = require('mysql');


const connector = mysql.createConnection({
    host : '127.0.0.1',
    port : '13306',
    user : 'danal',
    password : 'khm0813',
    database : 'employees',
})

connector.connect();

const start = Date.now();
console.log('start : ',start)



connector.query('select * from salaries',(err,rows)=>{
    if(err) throw err;
    console.log('End1 : ',Date.now())
    console.log( 'salaries info : ', rows.length);
})


connector.query('select * from salaries', (err, rows) => {
    if (err) throw err;
    console.log('End2 : ', Date.now())
    console.log('salaries info : ', rows.length);
})


connector.query('select * from salaries', (err, rows) => {
    if (err) throw err;
    console.log('End3 : ', Date.now())
    console.log('salaries info : ', rows.length);
})

connector.query('select * from salaries', (err, rows) => {
    if (err) throw err;
    console.log('End4 : ', Date.now())
    console.log('salaries info : ', rows.length);
})

connector.query('select * from salaries', (err, rows) => {
    if (err) throw err;
    console.log('End5 : ', Date.now())
    console.log('salaries info : ', rows.length);
})



connector.query('select * from salaries', (err, rows) => {
    if (err) throw err;
    console.log('End11 : ', Date.now())
    console.log('salaries info : ', rows.length);
})

connector.query('select * from salaries', (err, rows) => {
    if (err) throw err;
    console.log('End12 : ', Date.now())
    console.log('salaries info : ', rows.length);
})

connector.query('select * from salaries', (err, rows) => {
    if (err) throw err;
    console.log('End13 : ', Date.now())
    console.log('salaries info : ', rows.length);
})


connector.query('select * from salaries', (err, rows) => {
    if (err) throw err;
    console.log('End14 : ', Date.now())
    console.log('salaries info : ', rows.length);
})

connector.query('select * from salaries', (err, rows) => {
    if (err) throw err;
    console.log('End15 : ', Date.now())
    console.log('salaries info : ', rows.length);
})


connector.query('select * from salaries', (err, rows) => {
    if (err) throw err;
    console.log('End21 : ', Date.now())
    console.log('salaries info : ', rows.length);
})

connector.query('select * from salaries', (err, rows) => {
    if (err) throw err;
    console.log('End22 : ', Date.now())
    console.log('salaries info : ', rows.length);
})

connector.query('select * from salaries', (err, rows) => {
    if (err) throw err;
    console.log('End23 : ', Date.now())
    console.log('salaries info : ', rows.length);
})


connector.query('select * from salaries', (err, rows) => {
    if (err) throw err;
    console.log('End24 : ', Date.now())
    console.log('salaries info : ', rows.length);
})

connector.query('select * from salaries', (err, rows) => {
    if (err) throw err;
    console.log('End25 : ', Date.now())
    console.log('salaries info : ', rows.length);
})



connector.end();
