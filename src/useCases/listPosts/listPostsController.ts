import { ListPostsUseCase } from "./listPostsUseCase";
import { Request, Response } from "express";

export class ListPostsController {
  constructor(private listPostsUseCase: ListPostsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const posts = await this.listPostsUseCase.execute();
      return response.json(posts);
    } catch (err) {
      return response.status(500).json({ error: "Internal server error" });
    }
  }
}
