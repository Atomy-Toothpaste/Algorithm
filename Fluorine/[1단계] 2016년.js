function solution(a, b) {
    var answer = b - 1;
    const monthDay = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
          returnArray = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

    for(let i = 0; i < a - 1; i++) {
        answer += monthDay[i];
    }

    return returnArray[answer % 7];
}
console.log(solution(2, 2));

// 다른 풀이
function getDayName(a,b){
  var date = new Date(2016, (a - 1), b);
    return date.toString().slice(0, 3).toUpperCase();
}

console.log(getDayName(5,24));