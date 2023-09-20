/* Problem Statement: Given an integer N, print the following pattern.

Example 1:
Input: N = 3
Output: 
* * *
* * *
* * * 

*/

const pattern1 = (n) => {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
};

console.log(pattern1(3));
