import { PrismaPostsRepository } from "../../repositories/implementations/PrismaPostsRepository";
import { PrismaUsersRepository } from "../../repositories/implementations/PrismaUsersRepository";
import { CreatePostController } from "./createPostController";
import { CreatePostUseCase } from "./createPostUseCase";

const postsRepository = new PrismaPostsRepository();
const usersRepository = new PrismaUsersRepository();
const createPostUseCase = new CreatePostUseCase(
  postsRepository,
  usersRepository
);

const createPostController = new CreatePostController(createPostUseCase);

export { createPostUseCase, createPostController };
