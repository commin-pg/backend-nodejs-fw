process.env.UV_THREADPOOL_SIZE = 4; // default 4

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
