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
  while (head < nums.length) {
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

minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 <- [4,3]
minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 <- [5,4]
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 3
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // 0

// Brute force O(n^3)
//     if (!nums.length) return 0;

//     let minLength = Infinity;

//     for (let start = 0; start < nums.length; start++) {
//         for (let end = start; end < nums.length; end++) {
//             let sum = 0;
//             for (let i = start; i <= end; i++) {
//                 sum += nums[i]
//             }
//             if (sum >= s) minLength = Math.min(minLength, end - start + 1)

//         }
//     }
//     return minLength !== Infinity ? minLength : 0

// O(n^2)
//     if (!nums.length) return 0;

//     let minLength = Infinity;

//     let sumI = 0;
//     for (let i = 0; i < nums.length; i++) {
//         sumI += nums[i]
//         let sumJ = sumI;
//         for (let j = i; j < nums.length; j++) {
//             sumJ += nums[j]

//             if (sumJ - sumI >= s) minLength = Math.min(minLength, j - i + 1)
//         }
//     }
//     return minLength !== Infinity ? minLength : 0

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSizeSubArraySum = function (s, nums) {
  let minLength;

  // simple solution for the edge case of no element
  if (!nums.length) return 0;

  // 1.CREATE/initialize a sliding window
  let window = [];
  let windowSum = 0;
  let i = 0;
  for (i; i < nums.length && windowSum < s; i++) {
    window.push(nums[i]);
    windowSum += nums[i];
  }
  minLength = windowSum >= s ? window.length : 0;

  // 2.SLIDE
  // case: no more item to eat e.g., nums = [1,2,3,4,5], s = 15
  if (i >= nums.length) {
    // out/poop
    while (windowSum - window[0] >= s) {
      windowSum -= window.shift();
    }
    minLength = Math.min(minLength, window.length);
  }
  // case: still has something to eat e.g., nums = [2,3,1,2,4,3], s = 7
  else {
    for (i; i < nums.length; i++) {
      // in/eat
      window.push(nums[i]);
      windowSum += nums[i];
      // out/poop
      while (windowSum - window[0] >= s) {
        windowSum -= window.shift();
      }
      minLength = Math.min(minLength, window.length);
    }
  }

  return minLength;
};
