// Class modifiers

// public i private: w private nie mamy dostepu do zmiennej poza klasą
class ClassWithPublicProperty{
    public id: number;
    private name: string; //prywatna - Niedostępna poza klasą
    readonly surname: string; // readonly - Nie możemy nadać wartości 
}

let publicAccess = new ClassWithPublicProperty();
publicAccess.id = 20;

console.log(publicAccess);

class ClassWithAutomaticProperties{
    constructor(public id: number, private name: string){

    }
}
// Automatycznie kreuje private lub cokolwiek damy
let myAutoClass = new ClassWithAutomaticProperties(1,"class");
console.log(`myAutoClass id: ${myAutoClass.id}`);
// console.log(`myAutoClass name: ${myAutoClass.name}`);