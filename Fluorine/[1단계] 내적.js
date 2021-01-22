function solution(a, b) {
    let answer = 0;
    a.map((item, index) => answer += item * b[index]);
    return answer;
}

// 다른 풀이
function solution(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}
