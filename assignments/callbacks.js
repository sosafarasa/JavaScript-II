// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

// getLength passes the length of the array into the callback.
function getLength(arr, cb) {
  return cb(arr);
}

function returnGetLength(arr){
  console.log(arr.length);
 }

 getLength(items, returnGetLength)




// last passes the last item of the array into the callback.
function lastItem(arr, cb) {
  return cb(arr);
 }
 
 function returnLastItem(arr){
  console.log(arr[arr.length -1]);
 }
 
 lastItem(items, returnLastItem);



 // sumNums adds two numbers (x, y) and passes the result to the callback.
function sumNums(x, y, cb) {
  return cb(x, y);
}

function returnSumNums(num1, num2) {
  return num1 + num2;
}

console.log(sumNums(x= 5, y= 2, returnSumNums))



// multiplyNums multiplies two numbers and passes the result to the callback.


function multiplyNums(x, y, cb) {
  return cb(x, y);
}

function returnMultiplyNums(num1, num2) {
  return num1 * num2;
}

console.log(multiplyNums(x= 5, y= 2, returnMultiplyNums))



  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.

function contains(item, list, cb) {
  for (let i= 0; i < list.length; i++){
    if(list[i] === item){
      return cb(true);
    }
  }
  return cb(false);
}

contains("backpack", items, function(flag){
  console.log(flag);
});

contains("Pencil", items, function(flag){
  console.log(flag);
});





/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
