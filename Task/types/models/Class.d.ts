export declare enum ClassTypes {
    DANCE = "dance",
    YOGA = "yoga",
    GYM = "gym"
}
export declare class Class {
    name: string;
    type: string;
    startTime: Date;
    duration: number;
    endTime: Date;
    maxStrength: number;
    id: string;
    constructor(id: string, name: string, type: ClassTypes, maxStrength: number, startTime: Date, endTime: Date);
    static validateClassData(_name: string, _type: ClassTypes, maxStrength: number, startTime: Date, endTime: Date, id: string): void;
    static newClass(name: string, type: ClassTypes, maxStrength: number, startTime: Date, endTime: Date): Class;
    static fromJson(json: any): Class;
    static toJSON(cls: Class): {
        id: string;
        name: string;
        startTime: string;
        endTime: string;
    };
}
