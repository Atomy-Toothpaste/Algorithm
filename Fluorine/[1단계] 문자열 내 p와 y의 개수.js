function solution(s) {
  var answer = true;
  var yCount = 0;
  var pCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "p" || s[i] == "P") pCount++;
    if (s[i] == "y" || s[i] == "Y") yCount++;
  }
  if (pCount == yCount) return answer;
  if (pCount != yCount) return !answer;
}

function numPY(s) {
  return s.match(/p/gi || []).length == s.match(/y/gi || []).length;
}

/*  
    match는 String.prototype에 있는 메서드 
    형태는 str.match(regexp)
    regexp은 정규표현식
    /p/gi 에서 p는 찾을 문자열, gi는 g = 모든 전역(첫번째 일치하는 문자열을 찾아도 끝까지 찾는다.), i = 대소문자 구분 없이
*/
