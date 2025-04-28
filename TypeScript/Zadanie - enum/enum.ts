//Zadanie 1//

let osoba: [string, number, boolean] = ["Anna", 22, true];

console.log("Imię:", osoba[0]);
console.log("Wiek:", osoba[1]);
console.log("Czy student:", osoba[2]);


//Zadanie 2//

enum Kolory {
    Czerwony = 1,
    Zielony,
    Niebieski,
    Żółty,      
    Pomarańczowy 
}

console.log("Żółty:", Kolory.Żółty, "-", Kolory[Kolory.Żółty]);
console.log("Pomarańczowy:", Kolory.Pomarańczowy, "-", Kolory[Kolory.Pomarańczowy]);


//Zadanie 3//

function zwrocKolor(wartosc: number): string {
    if (Kolory[wartosc]) {
        return Kolory[wartosc];
    } else {
        return "Nieznany kolor";
    }
}

console.log(zwrocKolor(1)); // Czerwony
console.log(zwrocKolor(3)); // Niebieski
console.log(zwrocKolor(4)); // Żółty
console.log(zwrocKolor(99)); // Nieznany kolor

