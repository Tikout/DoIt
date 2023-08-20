// Classes

class SimpleClass {
    id: number;
    print() : void {
        console.log(`SimpleClass has id: ${this.id}`);
    }
}

// THIS Keyword

let mySimpleClass = new SimpleClass();

mySimpleClass.id = 12312313;
mySimpleClass.print();