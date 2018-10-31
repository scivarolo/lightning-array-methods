// 1) Make an array from the one below called fave_demo that contains only ages from 18 - 49
let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102]

let fave_demo = ages.filter((age) => age <= 49 && age >= 18)
console.log("1. fave_demo:", fave_demo)

// 2) Choose a loop method of your choice to get this result from this array:
let nums = [1, 2, 3, 4, "5", 6, "7"]
//expected result:
//`[3, 5, 7, 9, 11, 13]`

let numSums = nums.map((a, b) => +a + +b).filter(a => a > 1)
console.log("2.", numSums);

//let numSums = []
// nums.forEach((num, i) => {
//   if(nums[i+1])
//     numSums.push(parseInt(num) + parseInt(nums[i + 1]))
// })
// numSums


//3) Capitalize 'the', insert a comma after 'teacher' and output "Yoda says, "The greatest teacher, failure is"

let yoda_quote = ["the", "greatest", "teacher", "failure", "is"]
yoda_quote[0] = "The"
yoda_quote[2] = "teacher,"
console.log(`Yoda says, "${yoda_quote.join(" ")}"`)

//4)  * Sort the following numbers in descending order
//   * Remove any integers greater than 19.
  //  * Multiply each remaining number by 1.5 and then substract 1.
  //  * Then output (either in the DOM or the console) the sum of all the resulting numbers.

const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8]

let sum = integers.sort((a, b) => b - a).filter(a => a <= 19).map(num => (num * 1.5) - 1).reduce((total, a) => total + a)
console.log("4. Sum of resulting numbers:", sum)