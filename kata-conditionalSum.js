const conditionalSum = function (arr, condition) {
  let sum = 0; 

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && condition === "even") {
      sum += arr[i]; 
    } else if (arr[i] % 2 === 1 && condition === "odd") {
      sum += arr[i]; 
    }
  }
  return sum; 
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
