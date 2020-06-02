/**
 * Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.
 *
 * Input:nums = [1,1,1], k = 2
 * Output: 2
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  //  brute force O(n^3)
  //   let counter = 0

  //   for (let start = 0; start < nums.length; start++) {
  //       for (let end = start; end < nums.length; end++) {
  //           let tempSum = 0;
  //           for (let i = start; i <= end; i++) {
  //               tempSum += nums[i]
  //           }

  //           if (tempSum === k) {
  //               counter++;
  //           }
  //       }
  //   }

  //     return counter;

  //  runningSumI sum[i,j]
  // <----------><------->
  // |----------|--------|-------|
  // 0          i        j       length-1
  // <------------------->
  //      runningSumJ

  // running sum O(n^2)
  // let counter = 0;
  // let runningSumI = 0;
  // for (let i = -1; i < nums.length - 1; i++) {
  //     runningSumI = runningSumI + (nums[i] || 0)
  //     let runningSumJ = runningSumI;
  //     for (let j = i + 1; j < nums.length; j++) {
  //         runningSumJ += nums[j]
  //         if (runningSumJ - runningSumI === k) {
  //             counter++;
  //         }
  //     }
  // }
  // return counter;

  // hashmap O(n)
  let map = { 0: 1 };
  let counter = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    // currently summing up from index 0 to i
    sum += nums[i];

    // if (current sum - previous sum(s) = k) THEN add up all the possible subarrays
    if (map[sum - k]) counter += map[sum - k];

    // store all the previous sum e.g., i0 to i1, i0 to i2, i0 to i3, ...
    // map[sum] > 1 means there are at least two places that accumulates the same value of sum
    map[sum] = (map[sum] || 0) + 1;
  }

  return counter;
};
