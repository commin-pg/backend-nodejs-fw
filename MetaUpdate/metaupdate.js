const mysql = require("mysql");
const dbConfig = require("./dbconfig.json");

var pool = mysql.createPool(dbConfig);

pool.getConnection((err, conn) => {
  if (!err) {
    conn.query("select * from artist", (err, rows) => {
      if (err) throw err;
      console.log("End1 : ", Date.now());
      console.log("dept_emp info : ", rows.length);
    });
  }
  conn.release();
});