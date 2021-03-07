function solution(numbers, target) {
  var answer = 0;
  return answer;
}

function addNumber(number, array, target) {
  console.log(number, array);
  if (array.length === 0 && number === target) return 1;
  else if (array.length === 0) return 0;
  else {
    const arrayCopy = [...array];
    const nowNumber = arrayCopy.shift();
    const a = addNumber(number + nowNumber, arrayCopy, target);
    const b = addNumber(number - nowNumber, arrayCopy, target);
    console.log(a + b);
    return a + b;
  }
}

addNumber(0, [1, 1, 1, 1, 1], 3);
