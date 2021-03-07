function solution(n) {
    let answer = 0;

    for(let i = 1; i <= n / 2; i++) {
        if(n % i === 0) {
            answer += i;
        }
    }

    return answer += n;;
}

console.log(solution(12));

// 다른 풀이
function solution(n, a=0, b=0) {
    return n <= a / 2 ? b : solution(n, a+1, b += n % a ? 0 : a);
}