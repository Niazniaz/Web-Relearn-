export interface Logger {
    debug(...args: any[]): void;
    error(...args: any[]): void;
    info(...args: any[]): void;
    warn(...args: any[]): void;
}
export declare enum LogLevel {
    debug = 0,
    info = 1,
    warn = 2,
    error = 3
}
export declare enum LogType {
    json = "json",
    simple = "simple"
}
export declare function setLogger(loggerInstance?: Logger): void;
export declare function setLogLevel(logLevel: LogLevel | string): void;
export declare function setLogType(logType?: LogType | string): void;
export declare function error(context: string, ...args: any[]): void;
export declare function debug(context: string, ...args: any[]): void;
export declare function info(context: string, ...args: any[]): void;
export declare function warn(context: string, ...args: any[]): void;
declare const _default: {
    warn: typeof warn;
    error: typeof error;
    info: typeof info;
    debug: typeof debug;
};
export default _default;
