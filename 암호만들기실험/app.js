/*
 CPU intensive code example
*/

process.env.UV_THREADPOOL_SIZE = 26; // default 4

const crypto = require('crypto')

const start = Date.now();
crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
    console.log('1:',Date.now() -start)
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('2:', Date.now() - start)
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('3:', Date.now() - start)
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('4:', Date.now() - start)
})

// 위에 1번부터 4번이  os thread pool의 쓰레드 모두를 점유 하고 있으므로 위 작업들이 모두 완료 된 후에 작업이 시작되므로 2배정도 걸림.
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('5:', Date.now() - start)
})

crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
    console.log('6:',Date.now() -start)
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('7:', Date.now() - start)
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('8:', Date.now() - start)
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('9:', Date.now() - start)
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('10:', Date.now() - start)
})


crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
    console.log('11:',Date.now() -start)
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('12:', Date.now() - start)
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('13:', Date.now() - start)
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('14:', Date.now() - start)
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('15:', Date.now() - start)
})


crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('16:', Date.now() - start)
})



// 이 맥북의 코어 수는 8코어이며 1코어당 2개의 쓰레드를 동작시키므로 쓰레드풀이 16개 이상이어도 17번째는 16개의 작업이 끝난 후 처리될것이다.
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('17:', Date.now() - start)
})


crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('18:', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('19:', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('20:', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('21:', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('22:', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('23:', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('24:', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('25:', Date.now() - start)
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('26:', Date.now() - start)
})