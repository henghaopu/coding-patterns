/**
 * 200. Number of Islands
 *
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 *
 * Example 1:
 *
 * Input:
 *    11110
 *    11010
 *    11000
 *    00000
 *
 * Output: 1
 *
 * Example 2:
 *
 * Input:
 *    11000
 *    11000
 *    00100
 *    00011
 *
 * Output: 3
 *
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid.length) return 0;

  let numOfLands = 0;
  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const R = grid.length;
  const C = grid[0].length;

  // loop through the grid
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      // find the root vertex land
      if (grid[r][c] === '1') {
        numOfLands++;
        grid[r][c] = '0';

        // use bfs to find a whole land starting from the root vertex [r][c]
        let queue = [];
        queue.push([r, c]);
        while (queue.length) {
          let [r, c] = queue.shift();
          // check all four neighbors
          directions.forEach(([dr, dc]) => {
            let [nabr_r, nabr_c] = [r + dr, c + dc];
            // is it inside of grid && is it a land
            if (
              nabr_r >= 0 &&
              nabr_c >= 0 &&
              nabr_r < R &&
              nabr_c < C &&
              grid[nabr_r][nabr_c] === '1'
            ) {
              grid[nabr_r][nabr_c] = '0';
              queue.push([nabr_r, nabr_c]);
            }
          });
        }
      }
    }
  }

  return numOfLands;
};
