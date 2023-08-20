function log(val: any) : void{ console.log(val) }

// Default value (lastName: typ = wartość)
function buildName(firstName: string, lastName: boolean = true){
    return firstName + " " + lastName;
}

log(buildName('Kasia', false));
log(buildName('Maciej')); // Dodaje z automatu domyślną wartość domyślną

// Rest parameter (...)

function buildPerson(firstName: string, ...remainingName: string[]){
    return firstName + " " + remainingName.join(" ");
}

let personOne = buildPerson('John', 'steve', 'paul', 'daniel', 'james');

log(personOne);
