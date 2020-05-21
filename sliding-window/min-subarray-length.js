/**
 * 209. Minimum Size Subarray Sum
 * Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.
 * 
 * @param {Array} nums - an array of positive integers
 * @param {number} sum - a positive integer
 */


function minSubArrayLen(nums, sum) {
  let currentSum = 0;
  // key: keep tracking the shortest length
  let len = Infinity;
  // CREATE a sliding window
  let tail = 0;
  let head = 0;
  
  // SLIDE/EAT 
  while(head < nums.length) {
    currentSum += nums[head];
    
    // IF currentSum < sum THEN wait for the next slide
    
    // IF currentSum > sum KEEP pooping out until the currentSum is almost < sum 
    while (currentSum - nums[tail] >= sum) {
        currentSum -= nums[tail];
        tail++;
        len = Math.min(len, head - tail + 1);
    }
    
    head++;
  }
  
  // edge case: no greater then sum
  if (currentSum < sum) return 0;
   
  return len;
}


minSubArrayLen([2,3,1,2,4,3], 7); // 2 <- [4,3]
minSubArrayLen([2,1,6,5,4], 9); // 2 <- [5,4]
minSubArrayLen([1,4,16,22,5,7,8,9,10], 39); // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10], 55); // 5
minSubArrayLen([4,3,3,8,1,2,3], 11); // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10], 95); // 0