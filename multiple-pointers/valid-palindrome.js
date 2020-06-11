/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // Negated character set [^...] matches anything that is not enclosed in the brackets
  let regExp = /[^a-z0-9]/g;
  let str = s.toLowerCase().replace(regExp, '');

  if (str.length < 2) return true;

  let left = 0;
  let right = str.length - 1;

  // Time: O(n)
  while (left < right) {
    if (str.charAt(left) !== str.charAt(right)) {
      return false;
    }

    left++;
    right--;
  }
  return true;
};
