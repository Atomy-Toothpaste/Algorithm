function solution(num) {
    let cnt = 0;

    while(num !== 1) {
        if(num % 2 === 0) {
            num /= 2;
        } else {
            num *= 3;
            num += 1;
        }
        cnt++;
        if(cnt > 500) return -1;
    }

    return cnt;
}

console.log(solution(6));

// 다른 풀이
function collatz(num,count = 0) {
    return num == 1 ? (count >= 500 ? -1 : count) : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1,++count);
}