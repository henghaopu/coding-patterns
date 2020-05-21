// Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Constraints:
// Time: O(n)
// Space: O(1)

// PECSR:

// P: a sorted array of integers -> f() -> true, if (a + b) / 2 = c
//                                         false, if x (a + b) / 2 = c

// E: [1,2,3,4,5]; 2.5 => true

// CSR:
function averagePair(arr, avg) {
  // CREATE two pointers left and right
  let left = 0;
  let right = arr.length - 1;
  // MOVE the two pointers
  while (left < right) {
    let avgPair = (arr[left] + arr[right]) / 2;
    // IF (a + b) / c > avg THEN move right back 1
    if (avgPair > avg) {
      right--;
    }
    // IF < THEN move left forward 1
    else if (avgPair < avg) {
      left++;
    }
    // IF = THEN return true
    else {
      return true;
    }
  }
}


averagePair([1,2,3,4,5], 2.5);  // true
averagePair([1,3,3,5,6,7,10,12,19], 8);  // true
averagePair([-1,0,3,4,5,6], 4.1);  // false
averagePair([], 4);  // false
