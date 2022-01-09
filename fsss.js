
process.env.UV_THREADPOOL_SIZE = 5; // default 4

const fs = require('fs');


function create_file(fileName,rows,callback) {
    var file = fileName;
    str =[];
    for (var i = 0; i < rows; i++) {
            str.push( 'abcdsfksjflksdajfklasdjfkladsjfkldsajfklsadjfkldasjfkljdsaklfjdsaklfjsadkfjdsklafjsdklafjdsalkfjdlskajfkldsjfkldsjflkdsjafkldsjfkldsjfkldsjfkldsjflksdjfkldsjfkldsjfkldsjfkldsj')
    }

    fs.appendFile(fileName,str.join(''),function(err){
        if(err) throw err;
        console.log('addFile success ', fileName)
    })
    console.log('File job complete ', str.join('').length)
    

    callback(fileName + ' complete')
}

create_file('test1.txt',1000000,(result)=>{
    console.log(result)
})

create_file('test2.txt',10000,(result)=>{
    console.log(result)
})

console.log('after create file')
const start = Date.now();

fs.readFile('test1.txt','utf-8',function(err,data){
    console.log('1 - read complete ',data.length,Date.now()-start);
});

fs.readFile('test1.txt','utf-8',function(err,data){
    console.log('2 - read complete ',data.length,Date.now()-start);
});

fs.readFile('test1.txt','utf-8',function(err,data){
    console.log('3 - read complete ',data.length,Date.now()-start);
});

fs.readFile('test2.txt','utf-8',function(err,data){
    console.log('4 - read complete ',data.length,Date.now()-start);
});

fs.readFile('test2.txt','utf-8',function(err,data){
    console.log('5 - read complete ',data.length,Date.now()-start);
});