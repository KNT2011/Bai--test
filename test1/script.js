window.onbeforeunload = function () {return false;}

function myFunction() {
    var a = document.getElementById("numbera").value;
    var b = document.getElementById("numberb").value;
    if (a > b){
        let temp = a;
        a = b;
        b = temp;
    }

    let sum = 0;
    for (let i = a; i <= b; i++){
        if(isPrime(i)){
            sum += i;
        }
    }
    document.getElementById("result").innerHTML = sum;
}

function isPrime(n){
    if (n == 2){
        return true;
    }
    if (n % 2 == 0 || n < 2){
        return false;
    }
    for (let i = 3; i <= Math.sqrt(n) + 1; i += 2){
        if (n % i == 0){
            return false;
        }
    }
    return true;
}