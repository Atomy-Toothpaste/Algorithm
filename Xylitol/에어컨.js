const answer = (nowTemp, targetTemp, count) => {
  let answer1 = 100,
    answer2 = 100,
    answer3 = 100;
  if (nowTemp === targetTemp) return count;
  if (nowTemp <= -20 || nowTemp >= 40) return count;
  if (nowTemp > targetTemp) {
    if (nowTemp - 10 >= targetTemp) {
      answer1 = answer(nowTemp - 10, targetTemp, count + 1);
    } else if (nowTemp - 5 >= targetTemp) {
      answer2 = answer(nowTemp - 5, targetTemp, count + 1);
    } else if (nowTemp > targetTemp) {
      answer3 = answer(nowTemp - 1, targetTemp, count + 1);
    }
    return min(answer1, answer2, answer3);
  } else {
    if (nowTemp + 10 <= targetTemp) {
      answer1 = answer(nowTemp + 10, targetTemp, count + 1);
    } else if (nowTemp + 5 <= targetTemp) {
      answer2 = answer(nowTemp + 5, targetTemp, count + 1);
    } else if (nowTemp < targetTemp) {
      answer3 = answer(nowTemp + 1, targetTemp, count + 1);
    }
    return min(answer1, answer2, answer3);
  }
};

const min = (...args) => {
  return Math.min(...args);
};

console.log(answer(1, 100000, 0));
