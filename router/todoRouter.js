import express from "express";
import controllerTodo from "./controller/controllerTodo.js";

const router = express.Router();

router.get("/", controllerTodo.get);
router.post("/", controllerTodo.postitem);
router.delete("/:id", controllerTodo.deleteitem);
router.patch("/:id", controllerTodo.updateitem);

export default router;
