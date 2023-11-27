export interface postInterface {
  type: PostTypes;
  title: string;
  mediaType: string;
  media?: any;
  image: any;
  description: Array<String>;
  author: string;
  creationDate: string;
}

export enum PostTypes {
  experience = "EXPERIENCE",
  opinion = "OPINION",
  project = "PROJECT",
}
