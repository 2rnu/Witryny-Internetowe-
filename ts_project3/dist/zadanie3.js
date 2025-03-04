"use strict";
var isAdult;
var age = 15;
age >= 18 ? isAdult = true : isAdult = false;
//-------------------------------
var kobieta;
var mezczyzna;
var osoba = "kobieta";
if (osoba == "kobieta") {
    kobieta = true;
    mezczyzna = false;
}
else {
    kobieta = false;
    mezczyzna = true;
}
//-------------------------------
var losowaWartosc;
losowaWartosc = 15;
console.log(typeof (losowaWartosc));
losowaWartosc = "15";
console.log(typeof (losowaWartosc));
//-------------------------------
var zmienna;
zmienna = "tekst";
zmienna = 123;
//-------------------------------
function add(n1, n2) {
    return n1 + n2;
}
//-------------------------------
var id;
id = 1;
id = "1";
console.log(id);
//-------------------------------
var grade;
// grade = 7; blad
grade = 6;
//-------------------------------
var tekstLiczba;
tekstLiczba = 1;
if (typeof (tekstLiczba) === 'number') {
    console.log(tekstLiczba.toFixed());
}
tekstLiczba = 'tekst';
if (typeof (tekstLiczba) === 'string') {
    console.log(tekstLiczba.toUpperCase);
}
//-------------------------------
var imie = "Kasia";
var autor;
autor = imie;
// imie = autor; // autor jest innego typu niz imie
//-------------------------------
var age2 = 15;
