// Check if Array is Sorted:
//     Determine if the elements in an array are sorted in ascending order.

const arr = [1,2,6,3,4,5];




function isSorted(arr) {
    let isSorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            isSorted = false;
            break; // No need to check further, array is not sorted
        }
    }

    return isSorted;
}

console.log(isSorted(arr));
