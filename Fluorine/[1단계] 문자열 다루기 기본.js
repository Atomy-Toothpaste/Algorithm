function solution(s) {
    if(s.length !== 4) return false;
    for(let i = 0; i < s.length; i++) if(isNaN([...s][i])) return false;
    return true;
}

// 다른 풀이
function solution(s) {
    return /^\d{6}$|^\d{4}$/.test(s);
}