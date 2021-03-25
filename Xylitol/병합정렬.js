const splitArray = (array) => {
  return array
    .toString()
    .split(",")
    .map((number) => [parseInt(number)]);
};

const mergeSortArray = (...args) => {
  if (args.length <= 1) {
    return args[0];
  }
  const value = [];
  for (let i = 0; i < args.length; i += 2) {
    value.push(sortArray(args[i], args[i + 1]));
  }
  return mergeSortArray(...value);
};

const sortArray = (array1, array2) => {
  let result = [];
  if (!array1) {
    return array2;
  } else if (!array2) {
    return array1;
  }
  const length = array1.length + array2.length;
  while (result.length < length) {
    if (array1[0] > array2[0] || !array1[0]) {
      result.push(array2.shift());
    } else {
      result.push(array1.shift());
    }
  }
  return result;
};

console.log(mergeSortArray(...splitArray([4, 3, 2, 1, 5, 6, 1])));
