import { Router } from "express";
import { createUserController } from "./useCases/createUser";
import { createPostController } from "./useCases/createPost";
import { listPostsController } from "./useCases/listPosts";

const router = Router();

router.post("/users", (req, res) => {
  return createUserController.handle(req, res);
});

router.post("/posts/:userId", (req, res) => {
  return createPostController.handle(req, res);
});

router.get("/posts", (req, res) => {
  return listPostsController.handle(req, res);
});

export { router };
