function log(val) { console.log(val); }
// ToString from a number
function addNumbers(a, b) {
    return (a + b).toString();
}
// Anonymous functions
// b?: string = Znak zapytania pozwala na ignorowanie b kiedy nie ma wartości
var addString = function (a, b, c) {
    return a + b;
};
log(addString('Jacek ', 'Klepacz'));
log(addString('Jacek '));
