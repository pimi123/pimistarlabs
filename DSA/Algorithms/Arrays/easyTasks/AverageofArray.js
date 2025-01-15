//Average of Array:
// Find the average of numbers in an array.

const arr = [1,23,4,12,3,4,1,2,3,4]

let sum = 0
let res = 0 ;

arr.forEach(input => {

    sum += input
})

res = sum / arr.length

console.log(res)