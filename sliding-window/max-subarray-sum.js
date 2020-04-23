/* Given an array of integers and a number, finds the maximum sum of a subarray with the length of the number passed to the function
    
    Note: a subarray must consist of consecutive elements from the original array
    
    Time: O(n)
    Space: O(1)

*/


// P:  an array of integers, a number -> f() ->  maximum sum of a subarray with length number 

// E: [1,2,3,4,5,6,7], 3 => 18 

function maxSubarraySum(arr, num){
  // EDGE CASE
  if (num > arr.length) return null;
  
  // CREATE a sliding window
  let sum = 0;
  for (let i = 0; i < num; i++) {
      sum += arr[i];
  }
  // SLIDE the window
  let currentSum = sum;
  for (let i = num; i < arr.length; i++) {
      // CALCULATE the current sum
      currentSum += (arr[i] - arr[i - num]);
      // UPDATE the sum
      if (currentSum > sum) sum = currentSum;
  }
  // RETURN sum
  return sum;
}


maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) // 39
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2) // 5
maxSubarraySum([2,3], 3) // null