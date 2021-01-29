// 내 풀이
// 입출력 예시에서 1번째는 성공, 2번째는 시간 초과
// 앞에서부터 shift() 해가면서 지워나갔으면 좋았을 텐데 ㅜㅜ
function solution(progresses, speeds) {
    let cnt = 0, done = [], cntArr = [], original = JSON.parse(JSON.stringify(progresses));
    let answer = [];

    // 배열 추가
    while (true) {
        cnt += 1;
        for (let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i];
            if (progresses[i] >= 100 && done.indexOf(original[i]) === -1) {
                done.push(original[i]);
                cntArr.push(cnt);
            }
        }

        if (done.length === progresses.length) break;
    }

    for (let i = 0; i < done.length; i++) {
        cnt = 0;

        if (cntArr[done.indexOf(original[i])] !== 0) {
            for (let j = 0; j <= cntArr.lastIndexOf((cntArr[done.indexOf(original[i])])); j++) {
                if (cntArr[j] !== 0) {
                    cnt += 1;
                    cntArr[j] = 0;
                }
            }

            answer.push(cnt);
        }
    }

    return answer;
}

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));

// 출처
// https://velog.io/@kimtaeeeny/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EA%B8%B0%EB%8A%A5%EA%B0%9C%EB%B0%9C-javascript
function solution(progresses, speeds) {
    let answer = [];


    while (speeds.length > 0) { // 스피드 배열을 기준으로 0이되면 종료
        for (let i = 0; i < speeds.length; i++) { // 각 스피드에 맞게 기능을 하나씩 추가
            if (progresses[i] < 100) {
                progresses[i] += speeds[i];
            }
        }
        let deploy_count = 0;
        while (progresses[0] >= 100) { // 100이넘으면 shift, 다음 기능이 100이 되어도 shift
            progresses.shift();
            speeds.shift();
            deploy_count++;
        }
        if (deploy_count > 0) { // 결과 배열에 넣어주기
            answer.push(deploy_count);
        }
    }
    return answer;
}