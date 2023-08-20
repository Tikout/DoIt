class ClassWithConstructor{
    id: number;
    name: string;

    constructor(_id: number, _name: string){
        this.id = _id;
        this.name = _name;
    }

    getName(): string{
        return this.name;
    }

    getId(): number{
        return this.id;
    }
}

let classWithConstructor = new ClassWithConstructor( 10,"sadasd");
console.log(classWithConstructor.getName());
console.log(classWithConstructor.getId());