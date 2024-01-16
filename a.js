var readline = require('readline');

function findWays(t, L, R, m) {  
    const ways = [];  
    for (let i = 0; i <= R - L; i++) {  
        if ((L + i - 1) + (L + i) >= m) {  
            ways.push(i);  
        }  
    }  
    for (let i = 1; i < ways.length; i++) {  
        if (ways[i] - ways[i - 1] > 1) {  
            ways.splice(i, 0, ways[i - 1] + 1);  
        }  
    }  
    return ways.length;  
}  
  
const t = parseInt(readline()); // 数据组数  
while (t--) {  
    const [L, R, m] = readline().split(' ').map(Number);  
    console.log(findWays(t, L, R, m));  
}