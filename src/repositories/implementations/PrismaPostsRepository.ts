import { Post } from "../../entities/Post";
import { prisma } from "../../lib/prisma";
import { IListPostDTO } from "../../useCases/listPosts/listPost";
import { IPostRepository } from "../IPostsRepository";

export class PrismaPostsRepository implements IPostRepository {
  findAll(): Promise<IListPostDTO[]> {
    return prisma.post.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
        content: true,
        user: {
          select: {
            name: true,
            email: true,
            },
        },
      },
    });
  }
  async findById(id: string): Promise<Post> {
    return prisma.post.findFirst({
      where: {
        id,
      },
    });
  }
  async create(post: Post): Promise<void> {
    await prisma.post.create({
      data: post,
    });
  }
}
