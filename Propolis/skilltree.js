function solution(skill, skill_trees) {
  var answer = 0;
  skill_trees.forEach((e) => {
    var arr = skill.split("");
    var skill_arr = e.split("");
    for (var i of skill_arr) {
      if (arr.includes(i)) {
        if (i !== arr[0]) break;
        else arr.shift();
      }
      if (i === skill_arr[skill_arr.length - 1]) answer++;
    }
  });
  return answer;
}

// filter : 말 그대로 필터. 콜백 안의 조건을 만족하는 애들만 필터링해서 갖고옴
// indexOf : 배열 내 특정 요소의 인덱스 가져옴
// split : 문자열을 배열로 분리
// join : 배열을 문자열로 합침
// length : 배열 or 문자열의 길이

// function solution(skill, skill_trees) {
//   return skill_trees.filter(
//     (tree) =>
//       skill.indexOf(
//         tree
//           .split("")
//           .filter((s) => skill.split("").includes(s))
//           .join("")
//       ) === 0
//   ).length;
// }
