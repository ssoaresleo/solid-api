import { CreatePostUseCase } from "./createPostUseCase";
import { Request, Response } from "express";

export class CreatePostController {
  constructor(private createPostUseCase: CreatePostUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { title, slug, content } = request.body;
    const { userId } = request.params;

    try {
      await this.createPostUseCase.execute({
        userId,
        title,
        slug,
        content,
      });

      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
