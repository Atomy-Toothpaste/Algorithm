// function solution(stones, k) {
//     let i = 2;
//     console.log(Boolean(stones.map(value => value-i>=0?value-i:0).join("").split("0").map((value, index) => stones.map(value => value-i>=0?value-i:0).join("").split("0").slice(index, index+k-1).join("") == ""? index>=stones.map(value => value-i>=0?value-i:0).join("").split("0").length-i?0:1 : 0).reduce((sum, currValue) => sum + currValue)));
//     console.log(stones.map(value => value-i>=0?value-i:0).join("").split("0").map((value, index) => stones.map(value => value-i>=0?value-i:0).join("").split("0").slice(index, index+k-1).join("") == ""? index>=stones.map(value => value-i>=0?value-i:0).join("").split("0").length-i?0:1 : 0).reduce((sum, currValue) => sum + currValue))
//     return i;
// }

// function solution(stones, k) {
//     let i = 5;
//     console.log(stones.map(value => value-i>=0?value-i:0).join("").split("0").map((value, index) => stones.map(value => value-i>=0?value-i:0).join("").split("0").slice(index, index+k-2).join("") == ""? 1 : 0).reduce((sum, currValue) => sum + currValue));
//     // for(let i = 0; i <= Math.max.apply(null, stones); ++i) if(Boolean(stones.map(value => value-i>=0?value-i:0).join("").split("0").map((value, index) => stones.map(value => value-i>=0?value-i:0).join("").split("0").slice(index, index+k-1).join("") == ""? index>=stones.map(value => value-i>=0?value-i:0).join("").split("0").length-i?0:1 : 0).reduce((sum, currValue) => sum + currValue))) return i;
// }


// function solution(stones, k) {
//     for(let i = 0; i <= Math.max.apply(null, stones); ++i) {
//         console.log(stones.map(value => value-i>=0?value-i:0).reduce((sum, currValue) => sum + currValue));
//         console.log(stones.map(value => value-i>=0?value-i:0).join("").split("").map((value, index) => stones.map(value => value-i>=0?value-i:0).slice(index, index+k).join("") == "0".repeat(k)? 1 : 0))
//     }
// }
function solution(stones, k) {
    for(let i = 0; i <= Math.max.apply(null, stones); ++i) if(Boolean(stones.map(value => value-i>=0?value-i:0).join("").split("").map((value, index) => stones.map(value => value-i>=0?value-i:0).slice(index, index+k>=stones.length?stones.length:index+k).join("") == "0".repeat(k)?1 : 0).reduce((sum, currValue) => sum + currValue))) return i; 
}

console.log(solution([2, 4, 4, 3, 2, 1, 4, 2, 4, 5,6,6,5,5,4,5,56,6,4,45,55,6,44,6,4,45,45,45,3], 25));

// let a = [2, 4, 5, 3, 2, 1, 4, 2, 5, 1];
// console.log(a.join(""));
// let i = 1;
// while(1) if(a.join("").split("0").map(value => value-i++).map((value, index) => a.join("").split("0").slice(index, index+k-1).join("") == ""? 1 : 0).reduce((sum, currValue) => sum + currValue)) return i;

// console.log(a.join(""));
// function isLong(value, index) {
//     if (b.slice(index, index+k-1).join("") == "") return 1;
//     return 0;
// } 