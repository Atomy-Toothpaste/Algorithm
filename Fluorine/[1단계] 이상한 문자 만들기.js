function solution(s) {
    let answer = s.split(" ");
    return answer.map((item) => item.split("").map((innerItem, index) => index % 2 === 0 ? innerItem.toUpperCase() : innerItem.toLowerCase()).join("")).join(" ");
}

console.log(solution("try hello world"));

// 다른 풀이
function toWeirdCase(s) {
    return s.toUpperCase().replace(/(\w)(\w)/g, function(a) {
        return a[0].toUpperCase() + a[1].toLowerCase();
    })
}