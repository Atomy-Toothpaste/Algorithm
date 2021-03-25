const getAbleTriangle = (length) => {
  let result = new Set();
  for (let i = 1; i <= length; i++) {
    for (let j = 1; j <= length - i; j++) {
      if (
        max(i, j, length - i - j) < length - max(i, j, length - i - j) &&
        length - i - j > 0
      ) {
        const value = [i, j, length - i - j].sort();
        result.add(`${value[0]} ${value[1]} ${value[2]}`);
      }
    }
  }
  [...result.values()].map((value) => {
    console.log(value);
  });
  console.log(result.size);
};

const max = (...args) => {
  let max = 0;
  args.map((arg) => {
    if (max < arg) max = arg;
  });
  return max;
};

getAbleTriangle(10);
