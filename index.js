const express = require('express')
const app = express();

app.listen(3002,()=>{
    console.log("listen port 3002")
})

app.get('/',function(req,res){
    console.log('input')
    res.send('good');
})