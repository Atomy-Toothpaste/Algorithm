function solution(s) {
  if (s.length === 1) return 1;

  let answer = [],
    temp,
    isOkay = false,
    done = "";

  for (let i = 0; i < s.length; i++) {
    temp = 0;
    for (let j = i; j < s.length; j++) if (s[i] === s[j]) temp++;
    if (!isOkay && temp === 1) {
      answer.push(s[i]);
      isOkay = true;
    } else if (temp > 1) {
      if (done.indexOf(s[i]) !== -1) {
        break;
      }
      // 여기로 옴
      for (let l = 0; l < temp; l++) {
        console.log("nobreak");
        answer.push(s[i]);
        done += s[i];
      }
    }
  }

  if (answer.length % 2 === 0) return answer.length - 1;
  else return answer.length;
}
