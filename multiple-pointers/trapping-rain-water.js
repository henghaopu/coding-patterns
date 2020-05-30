/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // Initialize/Build two walls/grounds
  let left = 0;
  let right = height.length - 1;
  let leftWall = height[left];
  let rightWall = height[right];
  let water = 0;

  // Move two pointers
  while (left < right) {
    if (height[left] < height[right]) {
      // Move left pointer
      left++;
      if (height[left] >= leftWall) {
        // Rebuild the shorter wall
        leftWall = height[left];
      } else {
        // Store water
        water += leftWall - height[left];
      }
    } else {
      right--;
      if (height[right] >= rightWall) {
        rightWall = height[right];
      } else {
        water += rightWall - height[right];
      }
    }
  }

  return water;
};

/*
  Build two walls
  Move two pointers
      EITHER  Rebuild the shorter wall
      OR      Store water
*/

// Example:
// [0,0,0,0,1] = _ _ _ _ |
//              ->              move the ground

// [1,0,0,0,1] = | _ _ _ |
//              ->      <-      (can pick either to move)

//               |
// [2,0,0,0,1] = | _ _ _ |
//                      <-      move the shorter wall

// like
//               |
// [2,0,0,0,1] = | _ _|_|
//                    <-        move the shorter wall
