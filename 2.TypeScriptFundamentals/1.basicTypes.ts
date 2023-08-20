let namee: Array<string | number> = ['tak', 'nie', 4];

let person: string = 'steve';

let heightInCentimeters: number = 182.2131;

let names: string[] = ['tak', 'nie'];

let num: number[] = [4,3,2,1];

let bool: boolean[] = [true, false, false];

let tuple: [string, number, boolean] = ['xyz mzg', 4, true];

enum DoorStats {
    Open,
    Closed,
    Ajar
}

function log(val: any): void {
    console.log(val);
}

function tellJoke() : number{
    return 4;
}

log(tellJoke());

