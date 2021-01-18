function solution(board, moves) {
  var answer = 0,
    basket = [],
    column,
    doll;

  // 뽑기
  for (let i = 0; i < moves.length; i++) {
    column = moves[i] - 1;

    // board에서 삭제
    for (let j = 0; j < board.length; j++) {
      if (board[j][column] !== 0) {
        basket.push(board[j][column]);
        board[j][column] = 0;
        break;
      }
    }

    // 터뜨리기
    for (let j = 0; j < basket.length; j++) {
      if (basket[j] === basket[j + 1]) {
        answer = answer + 2;
        basket.splice(j, j + 1);
      }
    }
  }

  return answer;
}

// 다른 정답
function solution(board, moves) {
  var answer = 0;
  var arr = [];
  for (var i = 0; i < moves.length; i++) {
    for (var j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        arr.push(board[j][moves[i] - 1]);
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
    if (arr.length >= 2) {
      if (arr[arr.length - 1] === arr[arr.length - 2]) {
        answer += 2;
        arr.splice(arr.length - 2, 2);
      }
    }
  }
  return answer;
}
