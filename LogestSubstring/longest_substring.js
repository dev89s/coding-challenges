/**
 * * Given a string 's', find the length of the longest
 * * substring without repeating characters.
 *
 * * Example 1:
 *
 * * Input: s = "abcabcbb"
 * * Output: 3
 * * Explanation: The answer is "abc", with the length of 3.
 *
 * * Example 2:
 *
 * *  Input: s = "bbbbb"
 * *  Output: 1
 * *  Explanation: The answer is "b", with the length of 1.
 *
 *
 * * Example 3:
 *
 * *  Input: s = "pwwkew"
 * *  Output: 3
 * *  Explanation: The answer is "wke", with the length of 3.
 * *  Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxWord = '';

  for (let i = 0; i < s.length; i++) {
    let word = '';
    let hash = {};
    for (let j = i; j < s.length; j++) {
      if (hash[s[j]] === 1) {
        break;
      } else {
        hash[s[j]] = 1;
        word += s[j];
        if (word.length > maxWord.length) {
          maxWord = word;
        }
      }
    }
  }

  return maxWord;
};

console.log(lengthOfLongestSubstring('Sasan Mosh'));
