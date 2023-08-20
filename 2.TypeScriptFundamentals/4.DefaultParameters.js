function log(val) { console.log(val); }
// Default value (lastName: typ = wartość)
function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = true; }
    return firstName + " " + lastName;
}
log(buildName('Kasia', false));
log(buildName('Maciej')); // Dodaje z automatu domyślną wartość domyślną
// Rest parameter (...)
function buildPerson(firstName) {
    var remainingName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        remainingName[_i - 1] = arguments[_i];
    }
    return firstName + " " + remainingName.join(" ");
}
var personOne = buildPerson('John', 'steve', 'paul', 'daniel', 'james');
log(personOne);
