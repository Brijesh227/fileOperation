function sumOfAllNumber(arr){
    return arr.reduce((acc,curr) => {
        return acc + curr;
    },0)
}
const arr = [1,2,3];
console.log("sum of Array is:",sumOfAllNumber(arr));