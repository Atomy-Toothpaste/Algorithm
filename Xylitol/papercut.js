let count = 0;
let num = 0;
let array = [];

const min = (i, j) => {
  return i > j ? j : i;
};

const solve = (n, k) => {
  let i = 0;
  if (n == 0) {
    console.log(...array);
    count++;
  }
  for (i = min(n, k); i >= 1; i--) {
    array[num++] = i;
    solve(n - i, i);
    num--;
  }
};

solve(4, 4);
console.log(count);
