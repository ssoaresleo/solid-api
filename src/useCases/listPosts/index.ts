import { PrismaPostsRepository } from "../../repositories/implementations/PrismaPostsRepository";
import { ListPostsController } from "./listPostsController";
import { ListPostsUseCase } from "./listPostsUseCase";

const postsRepository = new PrismaPostsRepository();
const listPostUseCase = new ListPostsUseCase(postsRepository);

const listPostsController = new ListPostsController(listPostUseCase);

export { listPostsController, listPostUseCase };
