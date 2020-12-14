function solution(priorities, location) {
  let answer = 0;
  while (priorities.length > 0) {
    let tmp = priorities.shift();
    let max = Math.max(...priorities);
    if (max > tmp) {
      priorities.push(tmp);
    } else {
      answer++;
      if (location === 0) break;
    }
    if (location === 0) location = priorities.length - 1;
    else location--;
  }
  return answer;
}
