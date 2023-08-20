// Generic Interface and class

interface GenericInterface <T> {
    (arg: T): T;
}

class GenericClass <T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

