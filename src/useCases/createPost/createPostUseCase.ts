import { Post } from "../../entities/Post";
import { IPostRepository } from "../../repositories/IPostsRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { CreatePostDTO } from "./createPostDTO";

export class CreatePostUseCase {
  constructor(
    private postsRepository: IPostRepository,
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: CreatePostDTO) {
    const userExists = this.usersRepository.findById(data.userId);

    if (!userExists) {
      throw new Error("User does not exist");
    }

    const post = new Post(data);

    this.postsRepository.create(post);
  }
}
