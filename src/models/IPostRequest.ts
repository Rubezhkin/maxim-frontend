import { IMediaFile } from "./IMediaFile";

export interface IPostRequest {
  id: number;
  title: string;
  content: string;
  authorId: number;
  createdAt: Date;
  mediaFiles: IMediaFile[];
}
