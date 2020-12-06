function solution(n, computers) {
  let answer = 0;
  computers.map((computer, computerNumber) => {
    computer.map((connect, index) => {
      if (index === computerNumber) {
        return 0;
      } else if (connect === 1) {
        deleteConnect(computerNumber, computerNumber, computers);
        answer++;
      }
    });
  });
  computers.map((computer, index) => {
    if (isSingleNetwork(computer, index)) {
      answer++;
    }
  });
  return answer;
}

function deleteConnect(toIndex, fromIndex, array) {
  console.log(array, toIndex, fromIndex, "\n");
  array[fromIndex].map((connect, nowIndex) => {
    if (connect === 1 && nowIndex !== fromIndex) {
      array[fromIndex][fromIndex] = 0;
      array[fromIndex][nowIndex] = 0;
      deleteConnect(fromIndex, nowIndex, array);
    }
  });
}

function isSingleNetwork(computer, computerIndex) {
  return computer[computerIndex] === 1;
}

console.log(
  solution(0, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
