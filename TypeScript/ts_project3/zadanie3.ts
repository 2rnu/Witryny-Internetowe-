let isAdult: boolean;
let age: number = 15;

age >= 18 ? isAdult = true : isAdult = false;

//-------------------------------
let kobieta: boolean;
let mezczyzna: boolean;
const osoba: string = "kobieta";

if (osoba == "kobieta") {
    kobieta = true;
    mezczyzna = false;
} else {
    kobieta = false;
    mezczyzna = true;
}
//-------------------------------
let losowaWartosc: any;
losowaWartosc = 15;
console.log(typeof(losowaWartosc));
losowaWartosc = "15";
console.log(typeof(losowaWartosc));
//-------------------------------
let zmienna: string | number;
zmienna = "tekst";
zmienna = 123;
//-------------------------------
function add(n1: number, n2: number): number {
    return n1 + n2;
}

//-------------------------------
let id: number | string;
id = 1;
id = "1";
console.log(id);
//-------------------------------
let grade: 1 | 2 | 3 | 4 | 5 | 6;
// grade = 7; blad
grade = 6;

//-------------------------------
let tekstLiczba: number | string;
tekstLiczba = 1;

if(typeof(tekstLiczba) === 'number') {
    console.log(tekstLiczba.toFixed())
}
tekstLiczba = 'tekst';
if(typeof(tekstLiczba) === 'string') {
    console.log(tekstLiczba.toUpperCase);
}
//-------------------------------
let imie: "Anna" | "Piotr" | "Kasia" = "Kasia";
let autor: string;
autor = imie;
// imie = autor; // autor jest innego typu niz imie
//-------------------------------
let age2 = 15;