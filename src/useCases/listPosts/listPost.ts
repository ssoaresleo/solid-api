interface User {
  name: string;
  email: string;
}

export interface IListPostDTO {
  id: string;
  title: string;
  slug: string;
  content: string;
  user: User;
}
