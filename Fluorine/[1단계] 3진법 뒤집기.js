function solution(n) {
    return parseInt([...n.toString(3)].reverse().join(''), 3);
}

console.log(solution(45));

// 출처
// https://velog.io/@gytlr01/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-3%EC%A7%84%EB%B2%95-%EB%92%A4%EC%A7%91%EA%B8%B0-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8
// Number.toString(n) 코드는 Number 값을 n 진수로 변환함

// 다른 풀이
function solution(n) {
    const answer = [];

    while(n !== 0) {
        answer.unshift(n % 3);
        n = Math.floor(n/3);
    }
    
    return answer.reduce((acc,v,i) => acc + (v * 3 ** i),0);   
}
