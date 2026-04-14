let counter = 0;

let message = counter;

while (counter < 10) {
    let message = counter;
    if (counter === 7) {
        message = "7 je tady;"
    }
    console.log(message)
    counter++;
}

for (let i = 0; i < 10; i++) {
    if (i === 5) continue;
    console.log(i)
}

// samostatná práce //
// napiš čísla od 0 do 100 aby to šlo jen po sudých číslech a vynech 50

for (let a = 2; a <=100; a += 2) {
    if (a !== 50) console.log(a)
}