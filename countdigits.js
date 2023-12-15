// count the digits in an input
// eg: IP: 1231 - OP: 4
// input is always greater than zero


function countDigits(x){
    let count= 0;

    while(x>0){
        x= Math.floor(x/10);
        count++
    }
    return count;
}

console.log(countDigits(34345));
console.log(countDigits(1));
console.log(countDigits(0));
console.log(countDigits(-431));