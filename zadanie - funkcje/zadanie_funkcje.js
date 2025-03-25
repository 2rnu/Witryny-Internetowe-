"use strict";
//////////////////1////////////////////
function poleProstokata(a, b) {
    return a * b;
}
console.log(`Pole wynosi ${poleProstokata(2, 7)}`);
//////////////////2////////////////////
function czyParzysta(a, b) {
    if (a % b)
        return true;
    else
        return false;
}
//////////////////3////////////////////
function maksimum(a, b) {
    if (a > b)
        return a;
    else
        return b;
}
console.log(`Największa liczba to: ${maksimum(2, 7)}`);
//////////////////4////////////////////
function odwrocTekst(tekst) {
    return tekst.split('').reverse().join('');
}
console.log(odwrocTekst("Odwrócenie"));
//////////////////5////////////////////
function czyPierwsza(a) {
    if (a / 1 & a / a)
        return true;
    return false;
}
console.log(czyPierwsza(83));
