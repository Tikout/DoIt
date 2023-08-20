// Interface

interface IBase { // tu jest Id
    id: number;
}

interface IDerivedFromBase extends IBase { // Z automatu bierze id z IBase
    name: string;
}

class InterfaceInheritance implements IDerivedFromBase{ // Ta klasa musi mieć id i name
    id: number;
    name: string;
}

//----------------------------------------------------------
class BaseClass implements IBase{ // Bierze z IBase więc musi mieć tylko id
    id: number;
}
// Razem z extends Baseclass (w którym już jest id) implements wymaga jedynie name
class DerivedFromBase extends BaseClass implements IDerivedFromBase{
    name:string;
}