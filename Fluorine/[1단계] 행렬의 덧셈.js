function solution(arr1, arr2) {
    var answer = [], arr;

    for(let i = 0; i < arr1.length; i++) {
        arr = [];

        for(let j = 0; j < arr1[0].length; j++) {
            arr.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push(arr);
    }

    return answer;
}

console.log(solution([[1,2],[2,3]], [[3,4],[5,6]]));

// 다른 풀이
function solution(A, B) {
    return A.map((a, i) => a.map((b, j) => b + B[i][j]));
}