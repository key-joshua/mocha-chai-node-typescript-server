import Router from "express";
import commentControllers from "../modules/comments/controller/CommentController";

const commentRouter = Router();
commentRouter.post("/post-comment", commentControllers.postComment)
commentRouter.get("/get-comments", commentControllers.getComments);

export default commentRouter;
