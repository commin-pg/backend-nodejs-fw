const mysql = require('mysql');
const dbConfig = require('./db_config.json')

var pool = mysql.createPool(dbConfig);

pool.getConnection((err,conn)=>{
    if(!err){
        conn.query('select * from dept_emp', (err, rows) => {
            if (err) throw err;
            console.log('End1 : ', Date.now())
            console.log('dept_emp info : ', rows.length);
        })
    }
    conn.release();
})


pool.getConnection((err, conn) => {
    if (!err) {
        conn.query('select * from dept_emp', (err, rows) => {
            if (err) throw err;
            console.log('End2 : ', Date.now())
            console.log('dept_emp info : ', rows.length);
        })
    }
    conn.release();
})


pool.getConnection((err, conn) => {
    if (!err) {
        conn.query('select * from dept_emp', (err, rows) => {
            if (err) throw err;
            console.log('End3 : ', Date.now())
            console.log('dept_emp info : ', rows.length);
        })
    }
    conn.release();
})


pool.getConnection((err, conn) => {
    if (!err) {
        conn.query('select * from dept_emp', (err, rows) => {
            if (err) throw err;
            console.log('End4 : ', Date.now())
            console.log('dept_emp info : ', rows.length);
        })
    }
    conn.release();
})


pool.getConnection((err, conn) => {
    if (!err) {
        conn.query('select * from dept_emp', (err, rows) => {
            if (err) throw err;
            console.log('End5 : ', Date.now())
            console.log('dept_emp info : ', rows.length);
        })
    }else{
        throw err;
    }
    conn.release();
})



pool.getConnection((err, conn) => {
    if (!err) {
        conn.query('select * from dept_emp', (err, rows) => {
            if (err) throw err;
            console.log('End11 : ', Date.now())
            console.log('dept_emp info : ', rows.length);
        })
    }
    conn.release();
})


pool.getConnection((err, conn) => {
    if (!err) {
        conn.query('select * from dept_emp', (err, rows) => {
            if (err) throw err;
            console.log('End12 : ', Date.now())
            console.log('dept_emp info : ', rows.length);
        })
    }
    conn.release();
})


pool.getConnection((err, conn) => {
    if (!err) {
        conn.query('select * from dept_emp', (err, rows) => {
            if (err) throw err;
            console.log('End13 : ', Date.now())
            console.log('dept_emp info : ', rows.length);
        })
    }
    conn.release();
})


pool.getConnection((err, conn) => {
    if (!err) {
        conn.query('select * from dept_emp', (err, rows) => {
            if (err) throw err;
            console.log('End14 : ', Date.now())
            console.log('dept_emp info : ', rows.length);
        })
    }
    conn.release();
})


pool.getConnection((err, conn) => {
    if (!err) {
        conn.query('select * from dept_emp', (err, rows) => {
            if (err) throw err;
            console.log('End15 : ', Date.now())
            console.log('dept_emp info : ', rows.length);
        })
    } else {
        throw err;
    }
    conn.release();
})