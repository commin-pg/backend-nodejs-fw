var i=0;
var start = Date.now();

function foo(){
    i ++;
    if(i<1000){
        setTimeout(foo,0);

    }else{
        var end = Date.now();
        console.log("Execuete time : " , (end - start), 'ms')
    }
}

foo()
