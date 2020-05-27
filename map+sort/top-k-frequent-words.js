/**
 * Given a non-empty list of words, return the k most frequent elements.
 *
 * Example1:
 * Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
 * Output: ["i", "love"]
 * Explanation: "i" and "love" are the two most frequent words.
 * Note that "i" comes before "love" due to a lower alphabetical order.
 *
 * Example2:
 * Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
 * Output: ["the", "is", "sunny", "day"]
 * Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.
 *
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  // 1.MAP - O(n)
  const map = {};
  words.forEach((word) =>
    !map.hasOwnProperty(word) ? (map[word] = 1) : map[word]++
  );

  // 2.SORT array (by two fields) - O(n long n)
  // ascending based on number
  // descending based on string (because I use pop to take out later which reverse the order)
  // https://stackoverflow.com/questions/13211709/javascript-sort-array-by-multiple-number-fields
  const sorted = Object.entries(map).sort(
    (a, b) => a[1] - b[1] || (b[0] < a[0] ? -1 : b[0] > a[0] ? 1 : 0)
  );

  // 3.RETURN
  const output = [];
  for (let i = 0; i < k; i++) {
    output.push(sorted.pop()[0]);
  }
  return output;
};
