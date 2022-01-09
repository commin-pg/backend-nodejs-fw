const mysql = require('mysql');
var dbConfig = require('./db_config.json')

const connector = mysql.createConnection(dbConfig)

connector.connect();

const start = Date.now();
console.log('start : ',start)



connector.query('select * from dept_emp',(err,rows)=>{
    if(err) throw err;
    console.log('End1 : ',Date.now())
    console.log( 'dept_emp info : ', rows.length);
})


connector.query('select * from dept_emp', (err, rows) => {
    if (err) throw err;
    console.log('End2 : ', Date.now())
    console.log('dept_emp info : ', rows.length);
})


connector.query('select * from dept_emp', (err, rows) => {
    if (err) throw err;
    console.log('End3 : ', Date.now())
    console.log('dept_emp info : ', rows.length);
})

connector.query('select * from dept_emp', (err, rows) => {
    if (err) throw err;
    console.log('End4 : ', Date.now())
    console.log('dept_emp info : ', rows.length);
})

connector.query('select * from dept_emp', (err, rows) => {
    if (err) throw err;
    console.log('End5 : ', Date.now())
    console.log('dept_emp info : ', rows.length);
})



connector.query('select * from dept_emp', (err, rows) => {
    if (err) throw err;
    console.log('End11 : ', Date.now())
    console.log('dept_emp info : ', rows.length);
})

connector.query('select * from dept_emp', (err, rows) => {
    if (err) throw err;
    console.log('End12 : ', Date.now())
    console.log('dept_emp info : ', rows.length);
})

connector.query('select * from dept_emp', (err, rows) => {
    if (err) throw err;
    console.log('End13 : ', Date.now())
    console.log('dept_emp info : ', rows.length);
})


connector.query('select * from dept_emp', (err, rows) => {
    if (err) throw err;
    console.log('End14 : ', Date.now())
    console.log('dept_emp info : ', rows.length);
})

connector.query('select * from dept_emp', (err, rows) => {
    if (err) throw err;
    console.log('End15 : ', Date.now())
    console.log('dept_emp info : ', rows.length);
})


connector.query('select * from dept_emp', (err, rows) => {
    if (err) throw err;
    console.log('End21 : ', Date.now())
    console.log('dept_emp info : ', rows.length);
})

connector.query('select * from dept_emp', (err, rows) => {
    if (err) throw err;
    console.log('End22 : ', Date.now())
    console.log('dept_emp info : ', rows.length);
})

connector.query('select * from dept_emp', (err, rows) => {
    if (err) throw err;
    console.log('End23 : ', Date.now())
    console.log('dept_emp info : ', rows.length);
})


connector.query('select * from dept_emp', (err, rows) => {
    if (err) throw err;
    console.log('End24 : ', Date.now())
    console.log('dept_emp info : ', rows.length);
})

connector.query('select * from dept_emp', (err, rows) => {
    if (err) throw err;
    console.log('End25 : ', Date.now())
    console.log('dept_emp info : ', rows.length);
})



connector.end();
