function solution(s) {
  if (s[0] === ")") return false;
  let number1 = 0,
    number2 = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") number1++;
    if (s[i] === ")") number2++;
    if (number1 < number2) return false;
  }
  if (number1 !== number2) return false;
  return true;
}
