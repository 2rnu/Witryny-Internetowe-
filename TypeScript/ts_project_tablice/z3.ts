let fruits: string[] = ['jabłko', 'arbuz', 'banan', 'gruszka'];
let vegetables: string[] = ['marchew', 'burak', 'pietruszka', 'kalafior'];

// Zadanie 3 - a. //
let combinedConcat = fruits.concat(vegetables);
console.log('Połączone tablice (concat):', combinedConcat);

// b. //
let combinedAddition = fruits as any + vegetables as any;
console.log('Po dodaniu tablic znakiem +:', combinedAddition);

// c. //
let combinedSpread = [...fruits, ...vegetables];
console.log('Połączone tablice (spread):', combinedSpread);

// Zadanie 1 -  a. //
console.log('Długość tablicy:', fruits.length);

// b. //
console.log('Posortowana tablica:', [...fruits].sort());

// c. //
fruits.push('ananas');
console.log('Po dodaniu ananasa na koniec:', fruits);

// d. //
fruits.shift();
console.log('Po usunięciu pierwszego elementu:', fruits);

// e. //
fruits.pop();
console.log('Po usunięciu ostatniego elementu:', fruits);

// f. //
fruits.unshift('ananas');
console.log('Po dodaniu ananasa na początek:', fruits);

// g. //
fruits.reverse();
console.log('Po odwróceniu kolejności:', fruits);
