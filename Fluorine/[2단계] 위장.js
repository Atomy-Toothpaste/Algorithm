// 출처
// https://velog.io/@fastpace04/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4JavaScript-%EC%9C%84%EC%9E%A5
function solution(clothes) {
    let clothesTypes = {}, answer = 1;

    for (let i = 0; i < clothes.length; i++) clothesTypes[clothes[i][1]] = (clothesTypes[clothes[i][1]] || 1) + 1;

    for (let key in clothesTypes) answer *= clothesTypes[key];

    return answer - 1;
}

console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]));