//////////////////1////////////////////

function poleProstokata(a: number, b: number): number {
    return a * b;
}
console.log(`Pole wynosi ${poleProstokata(2, 7)}`);

//////////////////2////////////////////

function czyParzysta(a: number, b: number): boolean {
    if(a % b)
        return true;
    else
        return false;
}

//////////////////3////////////////////

function maksimum(a: number, b: number): number {
    if(a > b)
        return a;
    else
        return b;
}
console.log(`Największa liczba to: ${maksimum(2, 7)}`);


//////////////////4////////////////////

function odwrocTekst(tekst: string): string {
    return tekst.split('').reverse().join('');
}
console.log(odwrocTekst("Odwrócenie"));

//////////////////5////////////////////

function czyPierwsza(a: number,): boolean {
    if(a / 1 & a / a)
       return true;
    return false;
}
console.log(czyPierwsza(83));