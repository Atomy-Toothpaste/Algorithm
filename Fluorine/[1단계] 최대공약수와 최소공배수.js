function solution(n, m) {
    if(n > m) {
        [n, m] = [m, n]  
    }

    let answer = [], nYaksu = [1], mYaksu = [1], baesu = 1;

    // 최대공약수 구하기
    for(let i = 2; i <= n / 2; i++) {
        if(n % i === 0) nYaksu.push(i);
    }
    nYaksu.push(n);
    for(let i = 2; i <= m / 2; i++) {
        if(m % i === 0) mYaksu.push(i);
    }
    mYaksu.push(m);
    for(let i = mYaksu.length - 1; i >= 0; i--) {
        if(nYaksu.indexOf(mYaksu[i]) !== -1) {
            answer.push(mYaksu[i]);
            break;
        }
    }

    // 최소공배수 구하기
    while(true) {
        if(baesu % n === 0 && baesu % m === 0) {
            answer.push(baesu);
            break;
        }
        baesu++;
    }

    return answer;
}

console.log(solution(5, 4))

// 다른 풀이
function greatestCommonDivisor(a, b) {return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);}
function leastCommonMultipleOfTwo(a, b) {return (a * b) / greatestCommonDivisor(a, b);}
function solution(a, b) {
    return [greatestCommonDivisor(a, b),leastCommonMultipleOfTwo(a, b)];
}