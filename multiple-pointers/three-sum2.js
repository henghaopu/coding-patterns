/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // sort in place
  nums.sort((a, b) => a - b);
  let output = [];
  for (let first = 0; first < nums.length && nums[first] <= 0; first++) {
    if (first !== 0 && nums[first] === nums[first - 1]) continue;

    let second = first + 1;
    let third = nums.length - 1;

    while (second < third) {
      // for case: [-2,0,0,2,2]
      // but fail for case [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]
      // need to use sort property again for second and third
      // if (!set.has(`${nums[second]}-${nums[third]}`)) {
      //     set.add(`${nums[second]}-${nums[third]}`)
      // } else {
      //     second++;
      //     third--;
      //     continue;
      // }

      const sum = nums[first] + nums[second] + nums[third];

      // technique: move pointer by comparing with previous element
      // this can avoid using map
      if (
        sum > 0 ||
        (third < nums.length - 1 && nums[third] === nums[third + 1])
      ) {
        third--;
      } else if (
        sum < 0 ||
        (second > first + 1 && nums[second] === nums[second - 1])
      ) {
        second++;
      } else {
        output.push([nums[first], nums[second], nums[third]]);
        second++;
        third--;
        console.log(output);
      }
    }
  }
  return output;
};

threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]);
