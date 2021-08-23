export declare class BaseError extends Error {
    status: number;
    constructor(status: number, message: string);
}
export declare class NotFoundError extends BaseError {
    constructor(message: string);
}
export declare class BadRequestError extends BaseError {
    constructor(message: string);
}
export declare class InternalServerError extends BaseError {
    constructor(message: string);
}
export declare class UnauthorizedError extends BaseError {
    constructor(message: string);
}
export declare class ForbiddenError extends BaseError {
    constructor(message: string);
}
export declare class NotAcceptableError extends BaseError {
    constructor(message: string);
}
export declare class NotImplementedError extends BaseError {
    constructor(message: string);
}
export declare class UnavailableError extends BaseError {
    constructor(message: string);
}
