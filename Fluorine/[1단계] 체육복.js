// 출처 : https://velog.io/@michael00987/javascript%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%B2%B4%EC%9C%A1%EB%B3%B5-8605q509
// 그리디라는 알고리즘을 처음 접해서 아직 익숙하지 않은 듯 하다.

function solution(n, lost, reserve) {
  var answer = 0;
  let setArr =[];

  for(let i = 1; i <= n; i++) {
    setArr.push(1);
    if (reserve.includes(i)) {
      setArr[i-1]++;
    } 
    if (lost.includes(i)) {
      setArr[i - 1]--;
    }       
  }

  for(let i = 0; i < n; i++) {
    if (!setArr[i]) {
      if (setArr[i - 1] === 2) { 
        setArr[i]++;
        setArr[i - 1]--;
      } else if (setArr[i + 1] === 2) {
        setArr[i]++;
        setArr[i + 1]--;
      }
    }
  }

  for(let i = 0; i< n; i++) {
    if (setArr[i] >= 1) {
      answer++;
    }
  }

  return answer;
}
