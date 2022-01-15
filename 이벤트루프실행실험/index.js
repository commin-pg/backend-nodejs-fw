const fs = require('fs');

/*
1. readFile이 블로킹 작업이므로, 이벤트루프는 이 작업을 만나자마자 libuv의 워킹 스레드로 작업을 넘긴다.
2. 워킹스레드는 작업이 완료되면 이벤트 루프에 I/O callbacks 큐로 등록한다.
3. 이벤트루프는 돌다가 I/O Callbacks 영역을 확인하고 콜백을 poll 큐에 넣는다.
4. poll 큐에서 실행하려고 보니 내부 로직에 setTimeout이 있어서 이를 timer 큐에 넣는다.
5. 다음 줄에서 setImmediate가 있으니 이걸 check 큐에 넣는다.
6. poll 큐 다음이 check큐 이므로 setImmediate가 반드시 먼저 실행되며 콘솔에 'B'를 찍는다.
7. 이벤트루프가 다시 처음부터 돌면서 timer 큐를 실행하고 poll큐에 콜백을 등록한다.
8. poll 큐를 다시 실행할때 콘솔에 'A'를 찍는다.
9. 노드가 메모리를 반납하고 종료한다.

*/

fs.readFile('test.txt',()=>{
    setTimeout(()=>{
        console.log('A')
    },0)
    setImmediate(()=>{
        console.log('B')
    })
})
