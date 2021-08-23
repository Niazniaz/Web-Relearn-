import * as DotEnv from "dotenv";

DotEnv.config();

export const HOST = process.env.HOST || "localhost";

export const PORT = Number.parseInt(process.env.PORT || "3000");

export const DATABASE_URL = process.env.DATABASE_URL || "";

export const NODE_ENV = process.env.NODE_ENV || "development";

export const IS_TEST = NODE_ENV === "test" || false;
