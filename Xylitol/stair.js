const getWayOfUpStair = (n, string) => {
  if (n <= 1) {
    console.log(string);
    return 1;
  }
  let count = 0;
  for (let i = 1; n >= 3 ? i <= 3 : i <= n; i++) {
    count += getWayOfUpStair(n - i, `${string} ${i}`);
  }
  return count;
};

console.log(getWayOfUpStair(10, ""));
