import { Class } from "../models/Class";
export declare class ClassService {
    static addClass(cls: Class): void;
    static getClass(id: string): Class;
    static registerUser(email: string, classId: string): boolean | number;
    static cancelUser(email: string, classId: string): boolean;
}
