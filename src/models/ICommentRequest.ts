export interface ICommentRequest {
  id: number;
  comment: string;
  postId: number;
  authorId: number;
  createdAt: Date;
}
