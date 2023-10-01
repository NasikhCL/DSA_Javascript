//given an integer 'n', find the factorial of that integer

//soln
function factorial(n){
    let fact = 1;
    for(let i =n; i > 0; i--){
        fact = fact*i;
    }
    return fact;
}


console.log(factorial(0))
console.log(factorial(4))
console.log(factorial(5))


// Big-O = O(n)