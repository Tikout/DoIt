// Namespaces

namespace FirstNameSpace {
    class NotExported {

    }
    export class NameSpaceClass {
        id: number;
    }


}

namespace SecondNameSpace {
    export class NameSpaceClass {
        name: string;
    }
}


let firstNameSpace = new FirstNameSpace.NameSpaceClass();
let notExported = new FirstNameSpace.NotExported();

let secondNameSpace = new SecondNameSpace.NameSpaceClass();
