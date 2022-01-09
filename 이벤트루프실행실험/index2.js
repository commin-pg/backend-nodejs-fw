
// setTimeout을 발견하고 timer 큐에 넣는다.
// setImmediate를 발견하고 check 큐에 넣는다.
// 이벤트큐의 현시점에 따라 다르게 찍힌다. timer 큐를 실행할 단계에 setTimeout이 넣어져있으면 poll큐에 콜백을 넣는다. 그러면 poll을 실핼 할때 콘솔에 'A'를 찍을거고
// 아님 넘어가서 check를 실행할때 setImmediate가 있으니까 바로 'B'를 찍은다.
// 'A' 'B' or 'B' 'A' 가 찍힌다.

setTimeout(()=>{
    console.log('A')
})
setImmediate(()=>{
    console.log('B')
})