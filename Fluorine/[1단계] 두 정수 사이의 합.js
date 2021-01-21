function solution(a, b) {
    if(a === b) return a;
    
    let answer = 0;

    if(a > b) {
        for(let i = b; i <= a; i++) answer += i;
        return answer;
    } else {
        for(let i = a; i <= b; i++) answer += i;
        return answer;
    }
}

// 다른 풀이
function solution(a, b){
    var result = (a<b)?a:b;
    while(a!=b){
      result += (a<b)?++a:++b;
    }    
    return result;
}