export declare class User {
    name: string;
    email: string;
    createdAt: Date;
    events: string[];
    constructor(name: string, email: string, createdAt: Date);
    static fromJson(json: any): User;
    static toJson(user: User): any;
    static validate(name: string, email: string, createdAt: Date): void;
}
