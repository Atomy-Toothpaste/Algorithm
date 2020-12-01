function solution(cacheSize, cities) {
  if (cacheSize === 0) return 5 * cities.length;

  let cacheSizeArray = new Array(cacheSize),
    sum = 0,
    remove;
  for (let i = 0; i < cities.length; i++) cities[i] = cities[i].toLowerCase();

  for (let i = 0; i < cities.length; i++) {
    if (cacheSizeArray.indexOf(cities[i]) === -1) {
      if (cacheSizeArray[cacheSize - 1] === undefined) {
        cacheSizeArray[i] = cities[i];
        sum += 5;
      } else {
        remove = findRemove(cities, cacheSizeArray, i);
        cacheSizeArray[remove] = cities[i];
        sum += 5;
      }
    } else {
      sum += 1;
    }
  }

  return sum;
}

function findRemove(cities, cacheSizeArray, index) {
  let array = new Array(cacheSizeArray.length);

  for (let i = 0; i < cacheSizeArray.length; i++) {
    array[i] = cities.lastIndexOf(cacheSizeArray[i], index);
  }

  const a = Math.min.apply(null, array);
  const b = cacheSizeArray.indexOf(cities[a]);
  return b;
}

// 테스트 1 〉	통과 (0.16ms, 30.3MB)
// 테스트 2 〉	통과 (0.10ms, 30.1MB)
// 테스트 3 〉	통과 (0.17ms, 30MB)
// 테스트 4 〉	통과 (0.17ms, 30.2MB)
// 테스트 5 〉	통과 (0.13ms, 30.2MB)
// 테스트 6 〉	통과 (0.09ms, 30.1MB)
// 테스트 7 〉	통과 (0.09ms, 30MB)
// 테스트 8 〉	통과 (0.12ms, 30MB)
// 테스트 9 〉	통과 (0.10ms, 29.9MB)
// 테스트 10 〉	통과 (0.34ms, 30MB)
// 테스트 11 〉	실패 (시간 초과)
// 테스트 12 〉	통과 (0.24ms, 29.9MB)
// 테스트 13 〉	통과 (0.37ms, 30.1MB)
// 테스트 14 〉	통과 (0.52ms, 30MB)
// 테스트 15 〉	통과 (0.68ms, 29.9MB)
// 테스트 16 〉	실패 (0.43ms, 30.1MB)
// 테스트 17 〉	통과 (0.09ms, 30.1MB)
// 테스트 18 〉	통과 (2.73ms, 32.9MB)
// 테스트 19 〉	실패 (16.32ms, 33MB)
// 테스트 20 〉	실패 (21.32ms, 32.9MB)
