// Given two positive integers, find out if the two numbers have the same frequency of digits
// Restriction: Time: O(n)

// P: n1. n2 ∊ ℕ+ -> f() -> true/false
//                       if f1,digits = f2,digits / if f1,digits ≠ f2,digits
// E:  22, 222 => false (edge case)
//    182, 281 => true 
//     43, 24  => false        

// CSR:
function sameFrequency(n1, n2){
  let s1 = n1.toString();
  let s2 = n2.toString();
  // edge case
  if (s1.length !== s2.length) {
      return false;
  }
  
  // create frequency counter 1, Time: O(n) Space: O(n)
  let fc1 = {};
  for (let i = 0; i < s1.length; i++) {
      fc1[s1[i]] ? fc1[s1[i]]++ : fc1[s1[i]] = 1;
  }
  
  // create frequency counter 2, Time: O(n) Space: O(n)
  let fc2 = {};
  for (let i = 0; i < s2.length; i++) {
      fc2[s2[i]] ? fc2[s2[i]]++ : fc2[s2[i]] = 1;
  }
  // compare frequency, Time: O(n)
  for (let key of Object.keys(fc1)) {
      if (fc1[key] !== fc2[key]) {
          return false;
      }
  }
  return true;
}