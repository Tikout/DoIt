function log(val: any) : void{ console.log(val) }


// ToString from a number

function addNumbers(a: number, b: number) : string{
    return (a + b).toString();
}

// Anonymous functions

// b?: string = Znak zapytania pozwala na ignorowanie b kiedy nie ma wartości

var addString = function(a: string, b?: string, c?: string) {
    return a + b;
};

log(addString('Jacek ','Klepacz'))
log(addString('Jacek '));

