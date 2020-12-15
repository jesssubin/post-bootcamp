const sumLargestNumbers = function (arr) {
  let max = arr[0]; 
  let index = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i]
      index = i; 
    }
  }

  arr.splice(index, 1); 

  let max2 = arr[0]; 
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > max2) {
      max2 = arr[i]
    }
  }

  let sum = max + max2; 
  return sum; 
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));