function solution(w, h) {
    let wYaksu = [1], hYaksu = [1], answer;

    for (let i = 2; i <= w / 2; i++) if (w % i === 0) wYaksu.push(i);
    wYaksu.push(w);
    for (let i = 2; i <= h / 2; i++) if (h % i === 0) hYaksu.push(i);
    hYaksu.push(h);

    for (let i = wYaksu.length - 1; i >= 0; i--) {
        if (hYaksu.indexOf(wYaksu[i]) !== -1) {
            answer = wYaksu[i];
            break;
        }
    }

    return w * h - (w + h - answer);
}