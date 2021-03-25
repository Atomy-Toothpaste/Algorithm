const topics = [
  "선택정렬",
  "삽입정렬", //
  "버블정렬", //
  "퀵정렬", //
  "병합정렬", //
  "해시", //
  "스택", //
  "큐", //
  "힙", //
  "그리디", //
  "그래프", //
  "동적계획법", //
  "이분탐색", //
  "완전탐색", //
  "너비우선탐색",
  "깊이우선탐색", //
];

const getPresentationSequence = (people, week) => {
  const result = [[], [], [], []];
  for (let i = 0; i < week; i++) {
    const result1 = new Set();
    const result2 = new Set();
    while (result1.size + result2.size <= people) {
      const randomTopics = getRandomTopics();
      const isNotPushAble = isHaveSameTopics(
        result1.size + result2.size,
        randomTopics,
        result
      );
      if (isNotPushAble) continue;
      else {
        if (result1.size >= 16) result2.add(randomTopics);
        else result1.add(randomTopics);
      }
    }
    result[i] = [...result1.values(), ...result2.values()];
  }
  printResult(result, people);
  return result;
};

const printResult = (result, people) => {
  for (let i = 0; i < people; i++) {
    console.log(
      `${i + 1} : ${result[0][i]} ${result[1][i]} ${result[2][i]} ${
        result[3][i]
      }`
    );
  }
};

const isHaveSameTopics = (index, topic, results) => {
  for (let i = 0; i < results.length - 1; i++) {
    for (let j = 0; j < results[i].length - 1; j++) {
      if (index === j && topic === results[i][j]) {
        return true;
      }
    }
  }
  return false;
};

const getRandomTopics = () => {
  const randomIndex = Math.floor(Math.random() * 16);
  return topics[randomIndex];
};

getPresentationSequence(20, 4);
