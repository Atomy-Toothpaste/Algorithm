function solution(numbers) {
  let answer = 0;
  let sosuList = [];
  numbers
    .split("")
    .map((number, index) =>
      getNumbers(number, deleteIndexArray(numbers.split(""), index), sosuList)
    );
  answer = Array.from(new Set(sosuList.map((number) => parseInt(number))))
    .length;
  return answer;
}

function getNumbers(currentNumber, numberList, array) {
  if (issosu(currentNumber)) {
    array.push(currentNumber);
  }
  if (numberList.length === 0) {
    return false;
  }
  numberList.map((number, index) => {
    getNumbers(
      currentNumber + number,
      deleteIndexArray(numberList, index),
      array
    );
  });
}

function issosu(number) {
  if (number == 1 || number == 0) {
    return false;
  }
  for (let i = 2; number >= i * i; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function deleteIndexArray(array, index) {
  return array.filter((_, anotherIndex) => index !== anotherIndex);
}
