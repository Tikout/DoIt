// Generics genetic programming allow algorithm to be written in a way that allow the types to be specified later.

// This allow the time to be processed identically without sacrificing type safety or requiring a separate instance of algorithm to handle each type.

// T pozwala na wykrycie typu zmiennej żeby to wykorzystać później

function identity <T>(arg: T): T {
    return arg;
}

let a = identity("myString");

let b = identity<boolean>(true);