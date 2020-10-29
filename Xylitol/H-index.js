function solution(citations) {
  var answer = 0;
  citations = citations.sort((a, b) => b - a);
  for (let h = citations[0]; h >= 0; h--) {
    for (let j = 0; j <= citations.length; j++) {
      if (citations[j] >= h && j >= h - 1 && citations.length - j <= j + 1) {
        return h;
      }
    }
  }
}
