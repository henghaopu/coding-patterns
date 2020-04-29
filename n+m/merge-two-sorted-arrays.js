
/*       
  O(n+m)

          i=0...arr1.legnth-1
          ↓
      E: [2,4,6,8]  [1,3,5]
                     ↑
                     j=0...arr2.length-1
 */

function merge(arr1, arr2) {
  let output = [];
  let i = 0;
  let j = 0;
  // WHILE there are still values we haven't looked at in both arrays
  while(i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      output.push(arr1[i]);
      i++;
    } else {
      output.push(arr2[j]);
      j++;
    }
  } 
  // WHILE there are still values we haven't looked at in arr1
  // if (i < arr1.length) {
  //   output = [...output, ...arr1.slice(i)]
  // }
  while(i < arr1.length) {
    output.push(arr1[i]);
    i++;
  }
  // WHILE there are still values we haven't looked at in arr2
  // if (j < arr2.length) {
  //   output = [...output, ...arr2.slice(j)]
  // }
  while(j < arr2.length) {
    output.push(arr2[j]);
    j++;
  }

  return output;
}

console.log(merge([2,4,6,8], [1,3,5]))