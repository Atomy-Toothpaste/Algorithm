// function solution(n, k) {
//   var answer = [];
//   const firstArray = setFirstArray(n);
//   function getAllList(now, remainList) {
//     if (remainList.length === 0) {
//       answer.push(now);
//     }
//     remainList.map((remainNumber, index) => {
//       let buffer = [...remainList];
//       let nowBuffer = [...now];
//       nowBuffer.push(remainNumber);
//       buffer.splice(index, 1);
//       return getAllList(nowBuffer, buffer);
//     });
//     return;
//   }
//   getAllList([], firstArray);
//   console.log(answer);
//   return answer
//     .map((array) => {
//       return array.join("");
//     })
//     .sort()
//     [k - 1].split("")
//     .map((string) => parseInt(string));
// }

// function setFirstArray(n) {
//   let array = [];
//   for (let i = 1; i <= n; i++) {
//     array.push(i);
//   }
//   return array;
// }

// console.log(solution(5, 5));

function solution(n, k) {
  var answer = [];
  let arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);
  let fac = arr.reduce((acc, val) => acc * val, 1);
  k--;
  while (answer.length !== n) {
    fac = fac / arr.length;
    // console.log(fac);
    let temp = arr[Math.floor(k / fac)];
    answer.push(temp);
    k = k % fac;
    arr = arr.filter((e) => e !== temp);
  }
  return answer;
}
