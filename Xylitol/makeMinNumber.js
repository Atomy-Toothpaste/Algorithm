function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.map((number, index) => {
    return number * B[index];
  }).reduce((a, b) => a + b);
}
