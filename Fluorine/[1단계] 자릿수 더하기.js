function solution(n)
{
    let array = n.toString().split(""), answer = 0;

    for(let i = 0; i < array.length; i++) {
        answer += array[i] * 1;
    }
    
    return answer;
}

console.log(solution(123));

// 다른 풀이
function solution(n) {
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}
