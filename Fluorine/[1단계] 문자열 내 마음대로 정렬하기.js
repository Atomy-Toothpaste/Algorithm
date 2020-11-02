function solution(strings, n) {
  strings.sort(function (a, b) {
    var first = a[n];
    var second = b[n];
    if (first === second) {
      return (a > b) - (a < b);
    } else {
      return (first > second) - (first < second);
    }
  });
  return strings;
}

// return (first > second) - (first < second);
// 앞에 숫자가 크면 1을 반환하고 뒤에 숫자가 크면 -1을 반환하기 때문이다.

function solution(strings, n) {
  strings.sort(function (a, b) {
    if (a[n] > b[n]) return 1;
    if (b[n] > a[n]) return -1;

    if (a > b) return 1;
    if (b > a) return -1;

    return 0;
  });
  return strings;
}
