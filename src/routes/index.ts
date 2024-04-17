import Router from "express";
import commentRouter from "./commentRouter";

const router = Router();
router.use("/comments", commentRouter);

export default router;
