const answer = (array, index = 0, value = 0) => {
  console.log(array);
  let result = [];
  if (!array[index] || array[index].length <= 0) {
    console.log(value);
    return value;
  }
  for (let i in array[index]) {
    let newArray = cutArray(array, i);
    let arrayValue = array[index][i];
    result.push(answer(newArray, index + 1, value + arrayValue));
  }
  return Math.min(...result);
};

const cutArray = (array, index, row) => {
  return array.map((arr, i) => {
    if (i <= row) return arr;
    return arr.filter((_, i) => index != i);
  });
};

console.log(
  answer([
    [1, 1, 1, 1],
    [4, 3, 6, 2],
    [5, 9, 1, 3],
    [2, 3, 1, 9],
  ])
);
