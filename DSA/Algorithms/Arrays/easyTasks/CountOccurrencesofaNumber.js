

const arr = [1,2,3,4,4,4,1,1,2,3,1,2]

 const res =  arr.reduce((acc , item) => {

    acc[item] = acc[item] !== undefined ? acc[item] +1 : 1 ;

    return acc
},{})



const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const itemCount = {};

items.forEach(item => {
    itemCount[item] = (itemCount[item] || 0) + 1;
});

console.log(itemCount);
