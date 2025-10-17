export interface Iproduct {
  id: number;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
  rating: number;
  brand: string;
  added: string;
}

export interface Role {
  SUPER_ADMIN: "SUPER_ADMIN";
  ADMIN: "ADMIN";
  USER: "USER";
}

export interface IAuthor {
  id: number;
  email: string;
  name: string;
  picture: string;
  role: Role;
}
export enum Tag {
  COFFEE = "coffee",
  BEANS = "beans",
  BARISTA = "barista",
  FLAVOR = "flavor",
}

export interface IFeaturePost {
  author: IAuthor;
  authorId: number;
  contant: string;
  createAt: string;
  id: number;
  isFetured: boolean;
  thumnail: string;
  title: string;
  updatedAt: string;
  viewCount: number;
  tags: Tag[];
}
