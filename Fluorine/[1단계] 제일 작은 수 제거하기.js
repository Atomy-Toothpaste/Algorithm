// 81.3 점
function solution(arr) {
    if(arr.length === 1) return [-1];

    let copyArr = [], min;

    for(let i = 0; i < arr.length; i++) {
        copyArr.push(arr[i]);
    }

    min = copyArr.sort().reverse().pop();

    if(arr.filter((item) => item !== min).length === 0) return [-1];
    return arr.filter((item) => item !== min);
}

// solution([1, 2, 3, 4]);
console.log(solution([1, 4, 2, 1, 3, 41, 2]));

// 출처
// https://wooder2050.medium.com/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%A0%9C%EC%9D%BC-%EC%9E%91%EC%9D%80-%EC%88%98-%EC%A0%9C%EA%B1%B0%ED%95%98%EA%B8%B0-javascript-270068f29ded
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    return arr.length ? arr : [-1];
}
