import { Post } from "../entities/Post";
import { IListPostDTO } from "../useCases/listPosts/listPost";

export interface IPostRepository {
  create(post: Post): Promise<void>;
  findAll(): Promise<IListPostDTO[]>;
  findById(id: string): Promise<Post>;
}
