// 너무 하드 코딩인 것 같아 포기
function solution(dartResult) {
    let arr = dartResult.split(""), answer = 0;

    for(let i = 0; i < arr.length; i++) {

        switch(arr[i]) {
            case "S":
                if(!isNaN(arr[i - 2])) {
                    answer += 10;
                    break;
                }

                answer += arr[i - 1] * 1;
                break;
            case "D":
                if(!isNaN(arr[i - 2])) {
                    answer += 100;
                    break;
                }

                answer += Math.pow((arr[i - 1] * 1), 2);
                break;
            case "T":
                if(!isNaN(arr[i - 2])) {
                    answer += 1000;
                    break;
                }

                answer += Math.pow((arr[i - 1] * 1), 3);
                break;
            
        }
    }

    return answer;
}

console.log(solution("1D2S#10S"));


// 출처
// https://jongbeom-dev.tistory.com/146
function solution(dartResult) {
    let answer = 0;
    let numArr = [];

    for (let i = 0; i < dartResult.length; i = i + 2) {
        let point;
        
        // 10인 경우와 아닌 경우로 분리
        if(i + 1 < dartResult.length && dartResult[i + 1] === '0') {
            point = 10;
            i++
        } else {
            point = parseInt(dartResult[i]); 
        }
        let bonus = dartResult[i + 1];

        // D면 제곱, T 면 세제곱
        if(bonus === 'D') {
            point *= point;   
        } else if (bonus === 'T') {
            point *= point * point;
        }

        // * 이면 현재 값과 이전값 2배, #이면 현재값 -1
        if(i + 2 < dartResult.length && dartResult[i + 2] === '*'){
            point *= 2;
            if(numArr.length !== 0) {
                numArr[numArr.length - 1] *= 2;
            }
            i++
        } else if (i + 2 < dartResult.length && dartResult[i + 2] === '#') {
            point *= -1;   
            i++;
        }
        numArr.push(point);
    }

    for (let i = 0; i < numArr.length; i++) {
        answer += numArr[i];
    }

    return answer;      
}