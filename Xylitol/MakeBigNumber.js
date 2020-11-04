// function solution(number, k) {
//     const numberArray = number.split('');
//     const numberLength = number.length;
//     const ableNumber = numberLength - k;
//     let splitedString = number.substring(k-1, numberLength);
//     let max = 0;
//     let maxIndex = 0;
//     for(let i = 0;i < numberLength;i++){
//         if(max <= numberArray[i] && numberLength - i >= ableNumber) {
//             max = numberArray[i];
//         }
//     }
//     for(let i = 0;i < numberLength;i++){
//         if(numberArray[i] === max){
//             maxIndex = i;
//             break;
//         }
//     }
//     if(k - maxIndex <= 0){
//         return max + number.substring(maxIndex + 1, numberLength);
//     }
//     return max + solution(number.substring(maxIndex + 1, numberLength), k - maxIndex);
// }

function solution(number, k) {
  var stack = [];
  for (var i = 0; i < number.length; i++) {
    var now = number[i];
    console.log(stack);
    while (k > 0 && stack[stack.length - 1] < now) {
      stack.pop();
      k--;
    }
    stack.push(now);
  }
  stack.splice(stack.length - k, k);
  var answer = stack.join("");

  return answer;
}
