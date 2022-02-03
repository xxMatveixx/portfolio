// let mas = []

// // mas[5] = 0
// // mas[0] = 4
// // mas.length = 0
// // mas.push(12)
// // mas.unshift(13)
// for (let i=0; i< 10;i++) {
//     mas.push(i)
// }
// for (let i=0; i< mas.length; i++){
//     console.log(mas[i])
// }
// console.log('-----------------------')
// for (const iterator of mas) {
//     console.log(iterator)
// }

// console.log(mas)

// let mas = []
// for (let i=0;i<10;i++) {
//     let c = +prompt(Input ${i} number)
//     mas.push(c)
// }
// console.log(mas)
// let sum = 0
// for (let item of mas) {
//     sum += item
// }
// console.log(Sum = ${sum})




// let sum2 = 0
// for (let i=0;i < mas.length;i++) {
//     sum2 += mas[i]
// }
// console.log(Sum2 = ${sum2})

// let mas2 = []
// for (let i=0;i<10;i++) {
//     let c = Math.round(Math.random()*10)
//     mas2.push(c)
// }
// console.log(mas2)






let mas = []
for (let i=0;i<10;i++) {
    let c = +prompt(`Input ${i} number`)
    mas.push(c)
}
console.log(mas)
let sum = 0
for (let item of mas) {
    sum += item
}
let hus = (sum / 10).toFixed(1)
console.log('* = $[mas]')
