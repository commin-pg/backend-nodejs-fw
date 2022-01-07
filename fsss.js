
process.env.UV_THREADPOOL_SIZE = 5; // default 4

const fs = require('fs');
const start = Date.now();
fs.readFile('test1.txt','utf-8',function(err,data){
    console.log('1 - read complete',Date.now()-start);
});

fs.readFile('test1.txt','utf-8',function(err,data){
    console.log('2 - read complete',Date.now()-start);
});

fs.readFile('test1.txt','utf-8',function(err,data){
    console.log('3 - read complete',Date.now()-start);
});

fs.readFile('test2.txt','utf-8',function(err,data){
    console.log('4 - read complete',Date.now()-start);
});

fs.readFile('test2.txt','utf-8',function(err,data){
    console.log('5 - read complete',Date.now()-start);
});