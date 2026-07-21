import { IMediaFile } from "./IMediaFile";

export interface IPost {
  id: number;
  title: string;
  content: string;
  authorId: number;
  author: string;
  createdAt: Date;
  likesCount: number;
  isLiked: boolean;
  commentsCount: number;
  mediaFiles: IMediaFile[];
}
