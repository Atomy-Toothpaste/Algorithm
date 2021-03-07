function solution(n) {
    return n.toString().split("").map((item) => item * 1).reverse();
}

// 다른 풀이
function solution(n) {
    return (n + '').split('').reverse().map(n => parseInt(n));
}