class ClassUsingProtected{
    protected id: number;

    public getId() {
        return this.id;
    }
}

class deliverFromProtected extends ClassUsingProtected {
    constructor() {
        super()
        this.id = 0;
    }
}

var derivedFromProtected = new deliverFromProtected();
derivedFromProtected.id = 1;
console.log(`getId returns:  ${derivedFromProtected.getId()}`);