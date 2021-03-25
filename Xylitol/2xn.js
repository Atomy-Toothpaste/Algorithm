const getBlockCount = (length) => {
  let count = 0;
  if (length === 1) return 1;
  else if (length === 2) return 3;
  count += getBlockCount(length - 2) * 2;
  count += getBlockCount(length - 1);
  return count;
};

console.log(getBlockCount(20));
