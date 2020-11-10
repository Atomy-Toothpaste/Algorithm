// 첫 도전
// function solution(s) {
//     if(s.length % 2 == 1) {
//         return s[parseInt(s.length/2)];
//     } else {
//         return s[parseInt(s.length/2)-1]+s[parseInt(s.length/2)];
//     }
// }

// 코드 간략화
function solution(s) {
    console.log((s.length/2));
    return s.length % 2 === 0 ? s.substr((s.length / 2) - 1, 2) : s.substr((s.length / 2), 1);
}
solution("abcde")