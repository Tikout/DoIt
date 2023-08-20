// Introduction to Modules
// Musi być export przed klasą aby klasę można było importować gdzieś indziej

/* export */class abc{
    a:string;
    b:string;
    c: string;

    constructor(private _a: string, private _b: string, private _c: string) {
        this.a = _a;
        this.b = _b;
        this.c = _c;
    }
}

/* export */class oneTwoThree{
    a:string;
    b:string;
    c: string;

    constructor(private _a: string, private _b: string, private _c: string) {
        this.a = _a;
        this.b = _b;
        this.c = _c;
    }
}

// można też tak exportować
export {abc as class1};
export {oneTwoThree as class2};