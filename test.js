/*
Question 2: Write a javascript function that takes an array of numbers and a target number.
The function should find two different numbers in the array that, when added together, give the target number.
For example: answer([1,2,3], 4)should return [1,3]
*/
                                                                              //      true                   true                true
const answer = (array, sum) => {                                             // 1       === 1 = (4  -   3) && 1     !== 1      && 3         !== 1
    return array.filter((elements, index) => array.find((elements2,index2) => elements2 === sum - elements && index !== index2 && elements2 !== elements))
}
answer([1,2,3,2], 4)