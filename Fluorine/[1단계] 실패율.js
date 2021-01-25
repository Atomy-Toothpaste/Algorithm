function solution(N, stages) {
    let failureRate = [], users, winUsers, answer = [];

    for(let i = 1; i <= N; i++) {
        users = 0, winUsers = 0;

        for(let j = 0; j < stages.length; j++) {
            if(stages[j] >= i) users += 1;
            if(stages[j] > i) winUsers += 1;
        }

        failureRate.push({
            stageNum: [i],
            rate: winUsers / users
        })
    }

    failureRate.sort(function (a, b) {
        return a.rate < b.rate ? -1 : a.rate > b.rate ? 1 : 0
    })

    for(let i = 0; i < failureRate.length; i++) {
        answer.push(failureRate[i].stageNum * 1);
    }

    return answer;
}

console.log(solution(4, [4, 4, 4, 4, 4]));
