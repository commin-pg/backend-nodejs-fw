/*
 CPU Itensive Case ..
 이렇게 코딩하면 시스템이 느려지거나 뻗는다.
*/

const express = require('express')
const app = express();
const fs = require('fs');

app.listen(3002,()=>{
    console.log("listen port 3002")
})


function delay_create_file(callback) {
    var file = 'test2.txt';
    fs.open(file,'w',function(err,fd){
        if (err) throw err;
        console.log('File open success')
    })
    str =[];
    for (var i = 0; i < 10000; i++) {
            str.push( 'abcdsfksjflksdajfklasdjfkladsjfkldsajfklsadjfkldasjfkljdsaklfjdsaklfjsadkfjdsklafjsdklafjdsalkfjdlskajfkldsjfkldsjflkdsjafkldsjfkldsjfkldsjfkldsjflksdjfkldsjfkldsjfkldsjfkldsj')
    }

    fs.appendFile('test1.txt',str.join(''),function(err){
        if(err) throw err;
    })
    console.log('File job complete')
    

    callback('total')
}

function delay2(callback) {
    var total = 0;
    for (var i = 0; i < 1000000000000; i++) {
        total +=i;
    }
    callback(total)
}


app.get('/',function(req,res){
    console.log('input')
    delay2((tot)=>{
        console.log(tot)
    });
    console.log('success~~')
    res.send('good');
})

app.get('/sample',(req,res)=>{
    console.log('sample!!')
    res.send('sample end');
})