// Reverse an Array:
//     Reverse the elements in an array.

function reverseArray(array) {

    let left = 0 ;
    let right  = array.length -1 ;

    while (left < right)
    {
        let per = array[left];
        array[left] = array[right];
        array[right] = per

        left ++
        right --
    }

return array

}


let arr = [1, 2, 3, 4, 5];
let reversedArr = reverseArray(arr);
console.log(reversedArr); // Output: [5, 4, 3, 2, 1]

