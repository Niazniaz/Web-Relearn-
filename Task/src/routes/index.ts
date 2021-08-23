import express from "express";
import * as config from "../config";
import NotFoundHandler from "../controllers/notFoundHandler";
import GlobalErrorHandler from "../controllers/globalErrorHandler";
import classRoutes from "./classes";

const app = express();

app.disable("x-powered-by");
app.enable("case sensitive routing");
app.disable("strict routing");
app.enable("trust proxy");
app.set("env", config.NODE_ENV);

app.use(express.json());

// Application Specific Routes
app.use("/class", classRoutes);

// 404 error
app.use(NotFoundHandler);

// global error handler
app.use(GlobalErrorHandler);

export default app;
