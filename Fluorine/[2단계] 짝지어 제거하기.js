// 13개 중 6개 통과 7개 시간초과
// function solution(s) {
//     let array = s.split(""),
//       previousArray,
//       index;
//     while (true) {
//       previousArray = array;
//       for (let i = 0; i < s.length; i++) {
//         if (array[i] === array[i + 1]) {
//           index = i + 1;
//           break;
//         }
//       }
//       array = array.filter((item, idx) => idx !== index && idx + 1 !== index);
//       if (array.length === 0) return 1;
//       if (previousArray.length === array.length) return 0;
//     }
//   }

function solution(s) {
  let array = s.split(""),
    previousArray,
    index;
  while (true) {
    previousArray = array;
    for (let i = 0; i < s.length; i++) {
      if (array[i] === array[i + 1]) {
        index = i + 1;
        break;
      }
    }
    array = array.filter((item, idx) => idx !== index && idx + 1 !== index);
    if (array.length === 0) return 1;
    if (previousArray === array) return 0;
  }
}
