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

//--------------------------------------------------------------------------

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
