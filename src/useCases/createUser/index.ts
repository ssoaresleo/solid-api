import { MailTrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PrismaUsersRepository } from "../../repositories/implementations/PrismaUsersRepository";
import { CreateUserController } from "./createUserController";
import { CreateUserUseCase } from "./createUserUseCase";

const mailTrapMailProvider = new MailTrapMailProvider();
const prismaUsersRepository = new PrismaUsersRepository();

const createUserUseCase = new CreateUserUseCase(
  prismaUsersRepository,
  mailTrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
