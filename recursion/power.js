// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent like Math.pow(). Do not worry about negative bases and exponents.

// E: f(2, 10) = 2^10 = 2 * 2^9 = 2 * f(2, 9) 
//    f(2,0) = 2^0 = 1

function power(base, exponent){
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}


// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16
