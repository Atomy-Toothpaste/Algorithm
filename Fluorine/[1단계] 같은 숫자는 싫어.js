// 정확성 테스트 100점, 효율성 테스트 0점
function solution(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === arr[i + 1]) {
            arr.splice(i, 1);
            i -= 1;
        }
    }

    return arr;
}

console.log(solution([4, 4, 4, 3, 3]));

// 바꾼 코드
function solution(arr) {
    let answer = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== arr[i + 1]) {
            answer.push(arr[i]);
        }
    }

    return answer;
}

// 다른 풀이
function solution(arr) {
    return arr.filter((val,index) => val != arr[index+1]);
}