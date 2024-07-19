import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { CreateUserDTO } from "./createUserDTO";

export class CreateUserUseCase {
  private usersRepository: IUsersRepository;
  private mailProvider: IMailProvider;

  constructor(usersRepository: IUsersRepository, mailProvider: IMailProvider) {
    this.usersRepository = usersRepository;
    this.mailProvider = mailProvider;
  }

  async execute(data: CreateUserDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const user = new User(data);

    await this.usersRepository.save(user);

    this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: "Admin",
        email: "admin@example.com",
      },
      subject: "Seja Bem vindo na plataforma",
      body: "<p>Voçê já pode fazer login em nossa plataforma!</p>",
    });
  }
}
