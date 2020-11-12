function solution(n) {
    let answer = Array.from(Array(n+1), () => Array(n+1));
    let num = 0;
    let x = 0;
    let y = 0
    let z = 0;
    let pointi = 0;
    let pointj = 0;
    if(n == 1) return [1];

    while (1) {
        ++x;
        while (pointj < n - y) {
            answer[pointj++][pointi] = ++num;
        }
        --pointj;
        ++pointi;
        if (answer[pointj][pointi]) break;
        ++y;
        while (pointi < n - z) {
            answer[pointj][pointi++] = ++num;
        } 
        --pointi;
        if (answer[pointj - 1][pointi - 1]) break;
        z += 2;
        while (pointi > x) {
            answer[--pointj][--pointi] = ++num;
        }
        ++pointj;
        if (answer[pointj][pointi]) break;
    }
   
    let arr = [];
    let a = 0;
    for(let i=0;i<=n;i++){
        for(let j=0;j<i;j++){
            arr[a++] = answer[i-1][j];
        }
    }


    return arr;
}

console.log(solution(5));