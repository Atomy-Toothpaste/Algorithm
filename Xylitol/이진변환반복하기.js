function solution(s) {
  return cutZeroAndConvert(s);
}

function cutZeroAndConvert(string) {
  const zeroCount = string.split("").filter((char) => char !== "1").length;
  const nextString = string
    .split("")
    .filter((char) => char !== "0")
    .join("")
    .length.toString(2);
  if (string === "1") {
    return [0, zeroCount];
  }
  const [count, currentZeroCount] = cutZeroAndConvert(nextString);
  return [count + 1, zeroCount + currentZeroCount];
}

console.log(cutZeroAndConvert("1111111"));
