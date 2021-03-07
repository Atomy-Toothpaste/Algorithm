function solution(n, arr1, arr2) {
    let arr1ToBinary = [], arr2ToBinary = [], answerArr = [], temp;

    // 2진수 변환
    for(let i = 0; i < n; i++) {
        temp = arr2[i].toString(2);

        if(temp.length !== n) {
            temp = temp.split("");

            while(temp.length !== n) temp.unshift("0");

            temp = temp.join("");
        }

        arr2ToBinary.push(temp);
    }

    // 비밀지도 만들기
    for(let i = 0; i < n; i++) {
        temp = [];

        for(let j = 0; j < n; j++) {
            if(arr1ToBinary[i][j] !== "0" || arr2ToBinary[i][j] !== "0") {
                temp.push("#");
            } else {
                temp.push(" ");
            }
        }

        answerArr.push(temp.join(""));
    }

    return answerArr;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));

// 다른 풀이
function solution(n, arr1, arr2) {
    return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}

const addZero = (n, s) => {
    return '0'.repeat(n - s.length) + s;
}
