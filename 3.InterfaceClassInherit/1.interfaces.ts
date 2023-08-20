function log(val: any): void {
    console.log(val);
}

interface IComplexType {
    id: number;
    name?: string;
}
// musi być zarówno id jak i name bo bez jednego lub drugiego jest błąd
// Zbudowane 1:1 jak interface inaczej błąd 
// Znak zapytania sprawia że zmienna jest opcjonalna
let complexType : IComplexType = {id: 1, name: "Jacek"};

// readonly zmienia zmienną na constant
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x:2, y:2};

p1.x = 4;
p1.y = 5;

log(p1);