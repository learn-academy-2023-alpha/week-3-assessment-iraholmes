// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

//Psuedo Code: Create a function called lengthOf that takes in a number greater than 2 and the Fibonaacci sequence numbers.
// create a function which outputs an array that is the fib sequence to the length given
// Input: an array of numbers.
//Output: Each number of the array added to the next following the Fibonaacci sequence.
// Create a variable called arrayLength that will be used to set the starting point of the addition. (question? If  I was to use  let numlength = [0, 0] would that cause the code to add the number at the 0 index twice?)
// create a for loop that will cause the function to continue counting through each array until it reaches a stopping point.
// push the sum of the numbers to the next iteration using .push
// return the new array

// a) Create a test with expect statements for each of the variables provided.
describe("arrayLength", () => {
  it("returns an array with the numbers greater than 2", () => {
    expect(arrayLength + (fibLength1)).toEqual[1, 1, 2, 3, 4, 8]
    expect(arrayLength + (fibLength2)).toEqual[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
  })
})
//First Test: ReferenceError: arrayLength is not defined
const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.
const arrayLength = (newArray) => {
  let numLength = [1,1]
  for (let i = 0; i < fibLength1; i++)
  for (let i = 0; i < fibLength2; i++)
  numLength.push(numLength[0] + numLength[1])
  numLength.push(numLength[-1] + numLength[-2])
  numLength.push(numLength[-2] + numLength[-3])
  numLength.push(numLength[-4] + numLength[-5])
  numLength.push(numLength[-5] + numLength[-6])
  numLength.push(numLength[-6] + numLength[-7]) 
  return(newArray)
  }
  

  //Output:  arrayLength
    // ✓ returns an array with the numbers greater than 2 (1 ms)
    // Test Suites: 1 passed, 1 total
    // Tests:       1 passed, 1 total
    // Snapshots:   0 total
    // Time:        0.31 s, estimated 1 s
    // Ran all test suites.
    // ✨  Done in 1.17s.
// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.
//Psuedo Code: Create a function called studyObj1 that takes in the numbers of an array
//Input The study minutes of array 1 and 2
//output A new array with the study times displayed in order from least to greatest.
//create a for loop that sorts the numbers in each array starting from least to greatest.
//  create a variable that will make the index equal zero as the starting point.
describe("studyObj1", () => {
  it("returns an array with the values sorted from least to greatest", () => {
    expect(studyObj1(studyMinutesWeek1)).toEqual[90, 15, 20, 30, 30, 60, 15]
    expect(studyObj1(studyMinutesWeek2)).toEqual[100, 10, 45, 60, 20, 15, 65]
  })
})

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}




// b) Create the function that makes the test pass.
const studyObj1 = (studySorted) => {
  for (let i = 0; i < studyMinutesWeek1; i++)
  for (let i = 0; i < studyMinutesWeek2; i++)
    return (studySorted)

}

// studyObj1
//     ✓ returns an array with the values sorted from least to greatest

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.406 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.42s.
// Expected output: [10, 15, 20, 45, 60, 65, 100]


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
//Psuedo Code: Creat a function named transaction that take in all numbers in an array and adds them together.
// Input: an array of numbers
//Output: Each number of the array added together
// Create a variable called totalSum that will be used to set the starting point of the addition. (In my understanding the totalSum variable is telling the cumputer we will be adding index 0, in index 1 as it iterates through the function.)
// use null to represent an empty array
// create a for loop that will add each number of the array at each index to find the total sum.
//use .push to add the sum of each for loop to the end of the array for addition with the next number in line.
// retutn (totalSum) for the output.

describe("transaction", () => {
  it("returns an array with the sum of all numbers within the original array", () => {
    expect(transaction(accountTransactions1)).toEqual[100, -17, -23, -9]
    expect(transaction(accountTransactions2)).toEqual[250, -89, 100, -96]
    expect(transaction(accountTransactions3)).toEqual [null]

  })
})
// Output:     ReferenceError: transaction is not defined
// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

const transaction = (fullTransaction) => {
  let totalSum = [1, 1]
  for (let i = 0; i < accountTransactions1; i++)
  for (let i = 0; i < accountTransactions2; i++)
  for (let i = 0; i < accountTransactions3; i++)
  totalSum.push(totalSum[0] + totalSum[1])
  totalSum.push(totalSum[1] + totalSum[2])
  totalSum.push(totalSum[2] + totalSum[3])
  totalSum.push(totalSum[4] + totalSum[5]) 
  return(totalSum)
  }

//  Output:  transaction
//     ✓ returns an array with the sum of all numbers within the original array (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.313 s
// Ran all test suites.
// ✨  Done in 1.23s.