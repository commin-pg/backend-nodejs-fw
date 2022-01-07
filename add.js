process.env.UV_THREADPOOL_SIZE = 26; // default 4

function add(a,b,callback){
    var total = 0;
    for(var i =0; i < b;i++){
        total += a;
    }

    callback(total);
}
// question..! node js 가 분명 이벤트큐로 보냈고 이벤트 루프가 워크 Thread pool로 잡을 보냈을텐데..
// 왜 순서대로 처리를 하지?

// First In First Out 처리로 먼저 이벤트 큐에 들어간놈이 처리되므로 
// setTimeout 에서 n 초후 이벤트 큐에 넣으니까 가장 먼저 들어가는 놈들이 먼저 나온다?

// 알았다! 
// node 에서 쓰레드 풀로 관리하고 이벤트 루프를 태우는 놈들은 정해져있다.
// 파일 입출력, 암호만들기 는 libuv 에서 가지고있는 쓰레드풀을 이용하고 (default 4)
// 네트워크 관련 I/O 작업들은 OS를 통해서 프로세스 자원을 활용하여 처리한다.

// 아래 코드는 순차적으로 스택에 쌓이고 순차적으로 결과를 리턴하므로 먼저 스택에 쌓인 놈들부터 실행되는건 당연하다.

const start = Date.now();
setTimeout(()=>{add(10,100000000,(tot)=>{
    console.log('1 : ',tot,Date.now() - start)
})},100);
setTimeout(()=>{add(10,100000000,(tot)=>{
    console.log('2 : ',tot,Date.now() - start)
})},100);
setTimeout(()=>{add(10,10000000000,(tot)=>{
    console.log('3 : ',tot,Date.now() - start)
})},1000);
setTimeout(()=>{add(10,100000000,(tot)=>{
    console.log('4 : ',tot,Date.now() - start)
})},10);
setTimeout(()=>{add(10,100000000,(tot)=>{
    console.log('5 : ',tot,Date.now() - start)
})},10);
setTimeout(()=>{add(10,100000000,(tot)=>{
    console.log('6 : ',tot,Date.now() - start)
})},10);

setTimeout(()=>{add(10,100000000,(tot)=>{
    console.log('7 : ',tot,Date.now() - start)
})},1000);