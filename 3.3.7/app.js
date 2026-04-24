// FUNKCE //

function ahoj() {
    console.log("ahoj");
    console.log("ahoj");  //deklarace funkce//
}

ahoj();                //zvolání funkce//

let greeting = "nazdárek";

function showGreeting() {
    console.log(greeting);
}

showGreeting();

function funkceUvnitr() {
    let cislo = 123;
    console.log(cislo);
}

funkceUvnitr();

//PARAMETR A ARGUMENT//

function test(name) {
    console.log("ahoj " + name);
}

test("Tomáš");
test("Ema");
test(123)

function scitani(num1, num2) {
    console.log(num1 + num2)
    console.log(num1 - num2)
    console.log(num1 * num2)
    console.log(num1 / num2)
}

scitani(4,6)

function odcitani(num1, num2) {
    console.log(num1 - num2)
}

odcitani(6,4)

function nasobeni(num1, num2) {
    console.log(num1 * num2)
}

nasobeni(4,6)

function deleni(num1, num2) {
    console.log(num1 / num2)
}

deleni(24,6)


// Napiš funkci printRange, která vypíše do
// konzole všechna čísla od parametru start až po end
// Postup:
// 1) Deklarace funkce
// 2) definování parametrů
// 3) for smyčka
// 4) Vyvolání funkce a argumentů

function printRange(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
}
 
printRange(3, 7);
printRange(10, 15)