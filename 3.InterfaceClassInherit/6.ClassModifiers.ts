class ClassWithPrivateProperty{
    
    private _id: number;
    private _name: string;
    static _hobby: string = "This is a static property";

    static printData(): void {
        console.log(this._hobby);
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
}

let classWithPrivate = new ClassWithPrivateProperty();
classWithPrivate.name = "Jacek";
console.log(classWithPrivate.name);

//ClassWithPrivateProperty._hobby = "Playing video games";
//console.log(ClassWithPrivateProperty._hobby);

ClassWithPrivateProperty.printData();