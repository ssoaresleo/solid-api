import { Post } from "../../entities/Post";
import { IPostRepository } from "../../repositories/IPostsRepository";

export class ListPostsUseCase {
  constructor(private postsRepository: IPostRepository) {}

  async execute(): Promise<Post[]> {
    const posts = await this.postsRepository.findAll();
    return posts;
  }
}
