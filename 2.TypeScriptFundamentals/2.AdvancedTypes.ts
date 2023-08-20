// Union Types

var unionType: string | number;

unionType = 1;

unionType = "Hello";

// Bo to nie jest ani string ani number tylko boolean: unionType = true; 


// Type Guards

function addWithTypeGuard(arg1: string | number, arg2: string | number) : string | number
{
    if(typeof arg1 === "string"){
        console.log('First argument is a string');
        return arg1 + arg2;
    }

    if(typeof arg1 === "number" && typeof arg2 === "number"){
        console.log('both arguments are numbers');
        return arg1 + arg2;
    }

    return arg1.toString() + arg2.toString();
}


// Type Aliases

type StringOrNumber = string | number;
// robimy type i wpisujemy do funkcji
function addWithAlias (arg1: StringOrNumber, arg2: string | number){
    return arg1.toString() + arg2.toString();
}


// Null and Undefined

function testUndef(test: null | number) {
    console.log('test parameter: ' + test);
}

//testUndef();
//testUndef(test:null);

