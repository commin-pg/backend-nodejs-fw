/*
    CPU intensive code example for network io
*/



const http = require('http')
const start = Date.now();
const option = {
    host : '127.0.0.1',
    port : 3002,
    path : '/',
    method : 'GET'
}
console.log(option)
http.request(option, (err,res) =>{
    if (err) throw err;

    res.on('date', () =>{});
    res.on('end', ()=>{
        console.log('Output 1 : ',Date.now() -start)
    })
})

// https.request('https://www.google.com', res =>{
//     res.on('date', () =>{});
//     res.on('end', ()=>{
//         console.log('Output 2 : ',Date.now() -start)
//     })
// })

// https.request('https://www.google.com', res =>{
//     res.on('date', () =>{});
//     res.on('end', ()=>{
//         console.log('Output 3 : ',Date.now() -start)
//     })
// })

// https.request('https://www.google.com', res =>{
//     res.on('date', () =>{});
//     res.on('end', ()=>{
//         console.log('Output 4 : ',Date.now() -start)
//     })
// })

// https.request('https://www.google.com', res =>{
//     res.on('date', () =>{});
//     res.on('end', ()=>{
//         console.log('Output 5 : ',Date.now() -start)
//     })
// })

