/* eslint-disable no-unused-vars */
export enum PostTypes {
  experience = 'EXPERIENCE',
  opinion = 'OPINION',
  project = 'PROJECT',
}

export interface postInterface {
  id: string
  type: PostTypes
  title: string
  mediaType: string
  media?: any
  image: any
  description: Array<String>
  author: string
  creationDate: string
  tags: Array<string>
}
