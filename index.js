import express from "express";
import cors from "cors";
import todoRouter from "./router/todoRouter.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/", todoRouter);

export default app;
