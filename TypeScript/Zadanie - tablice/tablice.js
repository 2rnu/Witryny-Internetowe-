//Zadanie 1//
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var owoce = ['jabłko', 'arbuz', 'banan', 'gruszka'];
console.log("Długość tablicy:", owoce.length);
console.log("Posortowana tablica:", __spreadArray([], owoce, true).sort());
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
for (var i = 0; i < owoce.length; i++) {
    console.log("Element ".concat(i, ": ").concat(owoce[i]));
}
//Zadanie 3//
var warzywa = ['marchew', 'burak', 'pietruszka', 'kalafior'];
var owoceWarzywaConcat = owoce.concat(warzywa);
console.log("Połączone tablice (concat):", owoceWarzywaConcat);
var dodaneTablice = owoce + warzywa;
console.log("Dodanie tablic znakiem '+':", dodaneTablice);
var owoceWarzywaSpread = __spreadArray(__spreadArray([], owoce, true), warzywa, true);
console.log("Połączone tablice (spread):", owoceWarzywaSpread);
