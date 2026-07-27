export interface IComment {
  id: number;
  comment: string;
  postId: number;
  authorId: number;
  author: string;
  createdAt: Date;
  likesCount: number;
  isLiked: boolean;
}
