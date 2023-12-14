//given a natural number 'n', determine if the number is prime or not


//soln

function isPrime(n){
    if(n<2){
        return false;
    }
    for(let i=2; i<n; i++){
        if(n%i === 0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(1))
console.log(isPrime(5))
console.log(isPrime(4))

// Big-O = O(n)



// more optimized soln
 
function isPrimeOptimized(n){
    if(n<2){
        return false;
    }
    for(let i=2; i<= Math.sqrt(n); i++){
        if(n%i === 0){
            return false;
        }
    }
    return true;
}

console.log(isPrimeOptimized(1))
console.log(isPrimeOptimized(5))
console.log(isPrimeOptimized(4))


// Big-O = O(sqrt(n))

