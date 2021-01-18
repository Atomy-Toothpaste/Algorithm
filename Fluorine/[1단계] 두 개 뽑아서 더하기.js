function solution(numbers) {
  let val;
  var answer = [];

  for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      val = numbers[i] + numbers[j];
      if (answer.indexOf(val) === -1) answer.push(val);
    }
  }

  answer.sort(function (a, b) {
    return a - b;
  });

  return answer;
}

// 다른 답안
function solution(numbers) {
  var answer = [];
  //들어온 배열의 요소를 확인한다.
  //배열의 두개 요소를 뽑아 덧셈한 모든 경우의 수를 구한다.
  //중복된 값은 제거한다.
  //배열값을 리턴한다.
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (answer.indexOf(numbers[i] + numbers[j]) === -1) {
        answer.push(numbers[i] + numbers[j]);
      }
    }
  }

  return answer.sort((a, b) => a - b);
}
