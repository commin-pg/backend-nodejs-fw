
function delay() {
    for (var i = 0; i < 1000000; i++) {
        continue;
    }
}

function delay2() {
    var total = 0;
    for (var i = 0; i < 10000000000; i++) {
        // total += i;
        continue;
    }

}
const start = Date.now();

function kim() {
    delay()
    console.log('kim- ', Date.now() - start)

}

function kim2() {
    delay()
    console.log('kim2- ', Date.now() - start)

}
function lee() {
    delay()
    console.log('lee- ', Date.now() - start)

}
function hong() {
    delay()
    console.log('hong- ', Date.now() - start)
}
function jung() {
    delay()
    console.log('jung- ', Date.now() - start)
}
function dev() {
    delay2()
    console.log('dev- ', Date.now() - start)
}

setTimeout(() => { kim() }, 100) // event queue 1 ==> event loop ==> libuv ==> thread pool ==> work thread (0.1초 후에 콜백 실행) ==> event loop ==> stack 으로
setTimeout(() => { kim2() }, 50) // event queue 2 ==> event loop ==> libuv ==> thread pool ==> work thread (0.05초 후에 콜백 실행) ==> event loop ==> stack 으로
lee(); // stack 1
hong(); //  stack 2
jung(); //  stack 3
dev(); //  stack 4 --> 싱글 쓰레드 에서 오래걸리는 작업을 수행하고 있어서 쓰레드를 점유하고 있음. 