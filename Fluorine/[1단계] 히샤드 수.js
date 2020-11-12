function solution(x) {
  let sum = 0;
  const numX = x.toString();
  for (let i = 0; i < numX.length; i++) {
    sum += parseInt(numX[i]);
  }
  if (x % sum == 0) return true;
  return false;
}

console.log(solution(10));
