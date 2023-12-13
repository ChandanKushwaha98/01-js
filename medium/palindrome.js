/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let str1 = str.replace(/[^a-zA-Z ]/g, "").split(" ").join("").toLowerCase()
  let n = str1.length;

  let flag = false;
  if (str1.length === 0 ) {
    flag = true;
  }
    for (let i = 0; i < n / 2; i++) {
      if (str1.charAt(i) == str1.charAt(n - i - 1)) {
        flag = true;
      }
      else {
        flag = false;
        break;
      }
    }
  return flag;
}

module.exports = isPalindrome;
