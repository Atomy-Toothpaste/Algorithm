function solution(lines) {
  var answer = 0;

  let newLines = lines.map((line) => {
    let ms = Date.parse(line.split(" ")[0] + " " + line.split(" ")[1]);
    let minus = line.split(" ")[2].split("s")[0] * 1000;
    return [ms - minus + 1, ms];
  });

  for (let line of newLines) {
    let cnt = [0, 0];
    for (let l of newLines) {
      if (l[1] >= line[0] && l[0] <= line[0] + 999) cnt[0]++;
      if (l[1] >= line[1] && l[0] <= line[1] + 999) cnt[1]++;
    }
    console.log(cnt);
    answer = Math.max(...cnt, answer);
  }

  console.log(newLines);
  return answer;
}
