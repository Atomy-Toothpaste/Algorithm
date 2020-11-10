function solution(s) {
    var answer = s;

    for (let i = 1;i <= s.length/2; i++) {
        let count = 0;
        let point = 0;
        let string = '';
        while (1) {

            if (point >= s.length && count === 0) {
                if(answer.length > string.length) answer = string;
                break;
            } else if(s.substring(point, point + i) === s.substring(point + i, point + i + i)) {
                count += 1;
                point += i;
            } else if (count !== 0) {
                point += i;
                string = string + (++count) + s.substring(point - i, point);
                count = 0;
            } else {
                string = string + s.substring(point, point+i);
                point += i;
            } 
        }   
    }
    
    return answer.length;
}

console.log(solution("abcabcdede"));