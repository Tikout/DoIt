function log(val) {
    console.log(val);
}
// musi być zarówno id jak i name bo bez jednego lub drugiego jest błąd
// Zbudowane 1:1 jak interface inaczej błąd 
// Znak zapytania sprawia że zmienna jest opcjonalna
var complexType = { id: 1, name: "Jacek" };
var p1 = { x: 2, y: 2 };
p1.x = 4;
log(p1);
