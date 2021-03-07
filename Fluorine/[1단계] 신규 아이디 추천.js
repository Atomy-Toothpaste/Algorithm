function solution(new_id) {
    let i = 0;

    // 1단계 대문자 소문자로 변환
    new_id = new_id.toLowerCase();

    // 2단계 (., -, _) 제외 특수문자 제거
    const regExp = /[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/gi;
    new_id = new_id.replace(regExp, "");

    // 3단계 마침표 여러개 -> 한 개
    new_id = new_id.split("");
    while(i !== new_id.length) {
        if(new_id[i] === "." && new_id[i + 1] === ".") {
            new_id.splice(i + 1, 1);
            i--;
        }

        i++;
    }
    new_id = new_id.join("");

    // 4단계 문자열 앞, 뒤 마침표 제거
    new_id = removeDot(new_id);

    // 5단계 빈 문자열이라면 a 대입
    if(new_id.length === 0) new_id = "a";

    // 6단계 15글자 초과 시 초과 범위 삭제 + 4단계
    if(new_id.length > 15) {
        new_id = new_id.split("").splice(0, 15).join("");
        new_id = removeDot(new_id);
    }

    // 7단계 2글자 이하라면 마지막 문자 3글자 이상까지 추가
    if(new_id.length < 3) {
        let lastChar = new_id[new_id.length - 1];

        while(new_id.length < 3) {
            new_id += lastChar;
        }
    }

    return new_id;
}

console.log(solution("=.="));

function removeDot(string) {
    if(string[0] === ".") string = string.replace(".", "");
    if(string[string.length - 1] === ".") {
        let copyArr = string.split("");
        copyArr.pop();
        string = copyArr.join("");
    }

    return string;
}

// 다른 풀이
function solution(new_id) {
    const answer = new_id
        .toLowerCase() // 1
        .replace(/[^\w-_.]/g, '') // 2
        .replace(/\.+/g, '.') // 3
        .replace(/^\.|\.$/g, '') // 4
        .replace(/^$/, 'a') // 5
        .slice(0, 15).replace(/\.$/, ''); // 6
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}