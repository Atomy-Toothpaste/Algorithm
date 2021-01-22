function solution(s, n) {
    let answer = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90) {
            if(s[i].charCodeAt() + n >= 91) answer.push(String.fromCharCode(s[i].charCodeAt() + n - 26));
            else answer.push(String.fromCharCode(s[i].charCodeAt() + n));
        } else if (s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122) {
            if(s[i].charCodeAt() + n >= 123) answer.push(String.fromCharCode(s[i].charCodeAt() + n - 26));
            else answer.push(String.fromCharCode(s[i].charCodeAt() + n));
        } else answer.push(s[i]);
    }

    return (answer.length === 1 ? String(answer) : answer.join(""));
}

console.log(solution("AB", 1));

// 다른 풀이
function caesar(s, n) {
    var result = s.replace(/[a-z]/ig, c => [ c = c.charCodeAt(0), String.fromCharCode((c & 96) + (c % 32 + n - 1) % 26 + 1) ][1]);

    return result;
}