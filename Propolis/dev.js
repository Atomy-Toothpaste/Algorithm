function solution(progresses, speeds) {
  var answer = new Array(100).fill(0);
  let arr = new Array(progresses.length).fill(0);
  for (let i = 0; i < progresses.length; i++) {
    while (1) {
      progresses[i] += speeds[i];
      arr[i]++;
      if (progresses[i] >= 100) {
        answer[arr[i]]++;
        break;
      }
    }
  }
  return answer.filter((e) => e != 0);
}

console.log(solution([93, 30, 55], [1, 30, 5]));
