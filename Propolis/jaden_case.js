function solution(s) {
  return s
    .split(" ")
    .map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
    .join(" ");
}
