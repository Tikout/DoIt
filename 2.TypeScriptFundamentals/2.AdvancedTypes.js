// Union Types
var unionType;
unionType = 1;
unionType = "Hello";
// Bo to nie jest ani string ani number tylko boolean: unionType = true; 
// Type Guards
function addWithTypeGuard(arg1, arg2) {
    if (typeof arg1 === "string") {
        console.log('First argument is a string');
        return arg1 + arg2;
    }
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        console.log('both arguments are numbers');
        return arg1 + arg2;
    }
    return arg1.toString() + arg2.toString();
}
// robimy type i wpisujemy do funkcji
function addWithAlias(arg1, arg2) {
    return arg1.toString() + arg2.toString();
}
// Null and Undefined
function testUndef(test) {
    console.log('test parameter: ' + test);
}
//testUndef();
//testUndef(test:null);
