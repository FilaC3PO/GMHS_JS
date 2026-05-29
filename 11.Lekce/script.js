function multiply(a,b) {
    let result  = a * b;
    return result
}

console.log(multiply(5,10))

function test() {
    return "Hotovo";
    console.log("Tady by byl nějaký text")
}

console.log(test());

function vek(age) {
    if(age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(vek(18))

console.log(9 % 2)

// Deklarace Fce
// Vrací true pokud je sudé, vrací false pokud je licé

function číslo(number) {
    if (number%2===0){
        return true;
    } else{
        return false;
    }
}

console.log(číslo(2))

