//Find All Duplicates in an Array: Given an array of integers,
// find all the elements that appear more than once. Return them in any order.



const arr =  [1,2,3,142,123,41,4,1,4,12,12,4,123,1111,412,412]
let maxValue = 0


arr.forEach(item => {

    if(item > maxValue){

        maxValue = item
    }

})

console.log(maxValue)





