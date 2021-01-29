// 출처
// https://after-newmoon.tistory.com/59
function solution(n) {
    const number124 = [4, 1, 2];
    let answer = "";

    while (n) {
        answer = number124[n % 3] + answer;
        n = (n % 3 === 0) ? n / 3 - 1 : Math.floor(n / 3);
    }

    return answer;
}

console.log(solution(4));

// 다른 풀이
function change124(n) {
    return n === 0 ? '' : change124(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
}