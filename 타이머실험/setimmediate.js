var i=0;
var start = Date.now();

function foo(){
    i ++;
    if(i<1000){
        setImmediate(foo);

    }else{
        var end = Date.now();
        console.log("Execuete time : " , (end - start), 'ms')
    }
}

foo()


/*
시간을 비교하고 편차를 알아내는 작업이 CPU를 집중적으로 사용하는 작업이기때문에
timer phase 에 등록하고 시간을 확인하고 하는 작업들을 1000번 반복하는 setTimeout 보다
이런 작업이 필요없는 setImmediate 의 작업이 훨씬 빠른것이다.
*/