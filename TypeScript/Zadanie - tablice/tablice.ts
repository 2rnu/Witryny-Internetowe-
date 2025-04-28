//Zadanie 1//

let owoce: string[] = ['jabłko', 'arbuz', 'banan', 'gruszka'];

console.log("Długość tablicy:", owoce.length);

console.log("Posortowana tablica:", [...owoce].sort());

owoce.push('ananas');
console.log("Po dodaniu 'ananas' na koniec:", owoce);

owoce.shift();
console.log("Po usunięciu pierwszego elementu:", owoce);

owoce.pop();
console.log("Po usunięciu ostatniego elementu:", owoce);

owoce.unshift('ananas');
console.log("Po dodaniu 'ananas' na początek:", owoce);

owoce.reverse();
console.log("Po odwróceniu kolejności:", owoce);

//Zadanie 2//

for (let i = 0; i < owoce.length; i++) {
    console.log(`Element ${i}: ${owoce[i]}`);
}

//Zadanie 3//

let warzywa: string[] = ['marchew', 'burak', 'pietruszka', 'kalafior'];

let owoceWarzywaConcat = owoce.concat(warzywa);
console.log("Połączone tablice (concat):", owoceWarzywaConcat);

let dodaneTablice = (owoce as unknown as string) + (warzywa as unknown as string);
console.log("Dodanie tablic znakiem '+':", dodaneTablice);

let owoceWarzywaSpread = [...owoce, ...warzywa];
console.log("Połączone tablice (spread):", owoceWarzywaSpread);
