function solution(d, budget) {
    let cnt = 0;
    
    d.sort(function(a, b) {
        return a - b
    })

    for(let i = 0; i < d.length; i++) {
        if(budget < d[i]) break;
        budget -= d[i];
        cnt++;
    }
    
    return cnt;
}

console.log(solution([1, 3, 2, 5, 4], 9))

// 다른 풀이
function solution(d, budget) {
    d.sort((a, b) => a - b);

    while (d.reduce((a, b) => (a + b), 0) > budget) d.pop();

    return d.length;
}
