import { User } from "../../entities/User";
import { prisma } from "../../lib/prisma";
import { IUsersRepository } from "../IUsersRepository";

export class PrismaUsersRepository implements IUsersRepository {
  async findById(id: string): Promise<User> {
    return await prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
  async save(user: User): Promise<void> {
    await prisma.user.create({
      data: user,
    });
  }
  async findByEmail(email: string): Promise<User> {
    return await prisma.user.findFirst({
      where: {
        email,
      },
    });
  }
}
